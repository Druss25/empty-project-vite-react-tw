import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const RootLayout = () => {
	return (
		<div className='flex flex-col min-h-screen relative overflow-hidden'>
			<Navbar />
			<Outlet />
		</div>
	);
};

export default RootLayout;
