import { Home } from './components/Home';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { NewOrder } from './components/NewOrder';
import { Orders } from './components/Orders';
import { Link } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProtectedRoute } from './components/ProtextedRoute';


function App() {
  const isAuth = useSelector((store=>store.isAuth.isAuth))
  console.log(isAuth)
	return (
		<div className="App">
			<div>
				<Link className="nav-home" to="/">
					Home
				</Link>

				{isAuth ? (
					<Link className="nav-logout" to="/logout">
						Logout
					</Link>
				) : (
					<Link className="nav-login" to="/login">
						Login
					</Link>
				)}
			</div>

			<Routes>
		
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/logout" element={<Logout />} />
				<Route path="/neworder" element={<NewOrder />} />
				<Route path="/orders" element={<Orders />} />
			</Routes>
		</div>
	);
}

export default App;
