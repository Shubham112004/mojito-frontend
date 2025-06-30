import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import { useMediaQuery } from 'react-responsive';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Cocktails from './components/Cocktails.jsx';
import About from './components/About.jsx';
import Art from './components/Art.jsx';
import Menu from './components/Menu.jsx';
import Contact from './components/Contact.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
	const isMobile = useMediaQuery({ maxWidth: 767 }); // or 640 depending on your design

	return (
		<main className="relative">
			{isMobile ? (
				<div className="fixed inset-0 z-[9999] bg-black text-white flex flex-col items-center justify-center px-6 text-center">
					<h1 className="text-2xl sm:text-3xl font-bold mb-4">Heads up! 📱</h1>
					<p className="text-lg sm:text-xl max-w-md">
						This site is best experienced on a desktop for full visuals and interactivity.
					</p>
					<p className="mt-2 text-sm text-gray-400">Thanks for understanding 🙏</p>
				</div>
			) : (
				<>
					<Navbar />
					<Hero />
					<Cocktails />
					<About />
					{/* <Art /> */}
					{/* <Menu />
          <Contact /> */}
				</>
			)}
		</main>
	);
};

export default App;
