import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/Home";
import Navbar from "./routes/navigation/Navbar";
import SignIn from "./routes/sign-in/SignIn";

export const Shop = () => {
	return <div>I'm a shopping page</div>;
};

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navbar />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
				<Route path="signin" element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;
