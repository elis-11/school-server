
  
import { useContext } from 'react';
import AppContext from '../AppContext';

const Welcome = () => {
	const { siteStatus, toggleStatus} = useContext(AppContext);
	return (
		<>
		<p>Welcome to this site.</p>
		<p>The current status is: <span className="highlight">{siteStatus}</span></p>
		<p><button onClick={toggleStatus}>Toggle Status</button></p>
		</>
	)
}

export default Welcome;