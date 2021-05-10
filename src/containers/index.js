import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TOGGLE_DARK_THEME } from '../redux/types';

const Dashboard = () => {
	const dispatch = useDispatch();

	const toggleDarkTheme = () => {
		dispatch({
			type: TOGGLE_DARK_THEME,
		});
	};

	return (
		<section className='dashboard'>
			<h2 className='title'>Dashboard</h2>
			<div className='dashboard-container'>
				<button onClick={toggleDarkTheme}>Toggle light/dark</button>
			</div>
		</section>
	);
};

export default connect(null)(Dashboard);
