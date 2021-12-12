import { useContext } from 'react';
import AppContext from '../AppContext';

const Register = () => {
	const { siteStatus} = useContext(AppContext);
	return (
		<>
		<p>This is the register page.</p>
		<p>STATUS: <span className="highlight">{siteStatus.toUpperCase()}</span></p>
		</>
	)
}

export default Register;
