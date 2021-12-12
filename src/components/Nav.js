import { NavLink } from 'react-router-dom';
 
const Nav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Welcome</NavLink></li>
                <li><NavLink to="register">Register</NavLink></li>
                <li><NavLink to="login">Login</NavLink></li>
            </ul>
        </nav>
    )
}
 
export default Nav;
