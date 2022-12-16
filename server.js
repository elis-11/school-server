import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
// import bcrypt from "bcrypt";
import { studentsRouter } from "./routes/students.router.js";
import { teachersRouter } from "./routes/teachers.router.js";
import { employeesRouter } from "./routes/employees.router.js";
import { coursesRouter } from "./routes/courses.router.js";
import { usersRouter } from "./routes/users.router.js";
import { projectsRouter } from "./routes/projects.router.js";
import { challengesRouter } from "./routes/challenges.router.js";
dotenv.config();

// mongoose.connect(process.env.MONGO_URI);

const app = express();

// const saltRounds = Number(process.env.SALT_ROUNDS);

const mongoConnectString = process.env.MONGO_URI;
mongoose
  .connect(mongoConnectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`MongoDB Connected!!!`))
  .catch((err) => console.log(`Error: ${err.message}`));

app.set("trust proxy", 1);

// app.use(cors({ origin: process.env.ORIGIN_URL, credentials: true }));
app.use(
  cors({
    origin:
      process.env.NODE_ENV !== "production"
        ? process.env.ORIGIN_URL
        : process.env.ORIGIN_URL_HTTPS,
    credentials: true, // accept incoming cookies
  })
);

app.use(cookieParser());

app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    proxy: true,
    saveUninitialized: false,
    resave: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 10,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production",
    },
  })
);

app.get("/", (req, res) => {
  res.send(`
<h2>Welcome!</h2>
<div>Our routes:</div>
<div>Home: <a href="/">/</a></div>
<div>Courses: <a href="/courses">/courses</a></div>
<div>Employees: <a href="/employees">/employees</a></div>
<div>Users: <a href="/users">/users</a></div>
<div>Teachers: <a href="/teachers">/teachers</a></div>
<div>Students: <a href="/students">/students</a></div>
<div>Students: <a href="/projects">/projects</a></div>
<div>Students: <a href="/challenges">/challenges</a></div>
<div> Frontend URL: <a href="${process.env.ORIGIN_URL}"> ${process.env.ORIGIN_URL}</a></div>
    `);
});

app.use("/teachers", teachersRouter);
app.use("/students", studentsRouter);
app.use("/employees", employeesRouter);
app.use("/courses", coursesRouter);
app.use("/users", usersRouter);
app.use("/projects", projectsRouter);
app.use("/challenges", challengesRouter);

app.use((req, res, next) => {
  res.status(404).json({ error: `This route does not exist` });
});

app.use((err, req, res, next) => {
  console.log(err); // this is for us internally => to get line where error happend
  // send error with just message to frontend
  res.status(400).json({
    error: err.message,
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App listenin at http://localhost:` + PORT);
});
