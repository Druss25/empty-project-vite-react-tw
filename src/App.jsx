import { BrowserRouter, Routes, Route } from "react-router-dom";

import { RootLayout } from "./layouts";
import { Home, NotFound } from "./pages";
import { TailwindIndicators } from "./components";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<RootLayout />}>
					<Route index element={<Home />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
			<TailwindIndicators />
		</BrowserRouter>
	);
}

export default App;
