import { useContext } from "react";
import { MainContext } from "../mainContext";


const Home =()=>{
  const { theme } = useContext(MainContext);
  return(
      <div className='page pageHome'>
        <p>Welcome to this site.</p>
        <hr />
        <p>The theme is currently: {theme}</p>
      </div>
  )
}
export default Home