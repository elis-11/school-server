import express from "express";
import { User } from "../models/User.js";

export const usersRouter = express.Router();

// Get / users / me
usersRouter.get("/me", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({
      error: "You are not logged in!",
    });
  }
  res.json(req.session.user);
});

// all users
usersRouter.get("/", async (req, res) => {
  const usersAll = await User.find();
  res.json(usersAll);
});

const userInGroup=(user, group) => {
  const accessGroup=user.group.split(",".map(u=>u.trim()))
  return accessGroup.includes(group)
}

// Post users / create / signup
usersRouter.post("/", async (req, res, next) => {
  const { email } = req.body;
  console.log("Signup request: ", req.body);

  const userExisting = await User.findOne({ email });

  if (userExisting) {
    return res
      .status(400)
      .json({ error: `User with email ${email} already exists` });
  }
  try {
    const userNew = await User.create(req.body);
    res.json(userNew);
  } catch (err) {
    // console.log(err);
    // res.status(400).json({ error: err.message });
    next(err);
  }
  // const userNew = await User.create(req.body);
  // res.json(userNew);
});

usersRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  const userFound = await User.findOne({ email, password });

  if (!userFound)
    return res
      .status(400)
      .json({ error: "User does not exist! Try with other email / password" });
  req.session.user = userFound;
  res.json(userFound);
});

usersRouter.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.clearCookie("connect.sid");
    res.json({ message: "Logged you out successfully!" });
  });
});

usersRouter.delete("/:id", async (req, res) => {
  const userDelete = await User.findByIdAndDelete(req.params.id);
  res.json(userDelete);
});

usersRouter.patch("/:id", async (req, res) => {
  const userUpdated = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(userUpdated);
});

// Get single user
usersRouter.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// approveuser
// usersRouter.post("/approveuser", async (req, res) => {
//   console.log(req.body);
//   const id=req.body.id
//   let user=req.session.user
//   console.log(user);
//   if(!user){
//     res.sendStatus(403)
//   } else {
//     if (!userInGroup(user, "admin")) {
//       res.sendStatus(403)
//     } else {
//       const updateResult= await User.findByIdAndUpdate(
//         {_id: new mongoose.Types.ObjectId(id)},
//         {$set: {group: "user. member"}},
//         {new: true}
//       )
//       res.json({result: updateResult})
//     }
//   }
// })