import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				{/* <Navbar /> */}
				<Switch>
					<Route exact path="/">
						<Reg />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/musicians">
						<Main />
					</Route>
					{/* <Route path="/about">
						<About />
					</Route>
					<Route path="/user/:id">
						<Show />
					</Route>
					<Route path="/edit/:id">
						<Edit user={user} />
					</Route> */}
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
