// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import './App.scss';
// import NameRound from './components/nameRound';

function App() {
	const app = useRef();
	const intro = useRef();
	const name = useRef();
	const col_1 = useRef();
	const col_2 = useRef();

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			// intro
			gsap.from(intro.current, { x: -20, opacity: 0 });
			gsap.to(intro.current, {
				x: 0,
				opacity: 1,
				// ease: 'power2.out',
			});
			gsap.to(intro.current, {
				delay: 2,
				x: 20,
				opacity: 0,
			});
			// name
			gsap.from(name.current, { x: -20, opacity: 0, delay: 2.5 });
			// col_1
			gsap.from(col_1.current, { x: -20, opacity: 0, delay: 2.7 });
			// col_2
			gsap.from(col_2.current, { x: -20, opacity: 0, delay: 2.9 });
		}, app);

		return () => ctx.revert();
	}, []);

	const data = [
		{
			project: 'Avenues Admisions',
			client: 'Avenues The World School',
			technology: 'Angular, TypeScript, WordPress, PHP',
			link: 'https://admissionsapp.avenues.org/',
		},
		{
			project: 'Avenues Grid',
			client: 'Avenues The World School',
			technology: 'Angular, TypeScript, WordPress, PHP',
			link: 'https://apps.avenues.org/interactive/nyc/grid',
		},
		{
			project: 'Website',
			client: 'Edstutia',
			technology: 'WordPress, PHP, ThreeJS, JavaScript',
			link: 'https://edstutia.com/',
		},
		{
			project: 'Campus 3D Tour',
			client: 'Edstutia',
			technology: 'ThreeJS',
			link: 'https://edstutia.com/explore-our-campus/',
		},
		{
			project: 'Website',
			client: 'ContinummXR',
			technology: 'WordPress, PHP, JavaScript, Bootstrap',
			link: 'https://continuumxr.com/',
		},
		{
			project: 'Website',
			client: 'Orman Construction',
			technology: 'WordPress, PHP, JavaScript',
			link: 'http://ormanconstruction.com/',
		},
	];
	return (
		<div ref={app} className="App">
			{/* <Canvas className="webgl">
				<ambientLight intensity={0.5} /]>
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
				<pointLight position={[-10, -10, -10]} />
				<NameRound position={[-1.2, 0, 0]} />
				<NameRound position={[1.2, 0, 0]} />
				<OrbitControls />
			</Canvas> */}
			<main>
				<section>
					<h1 ref={intro}>Welcome...</h1>
					<h1 ref={name}>Leonardo Santana</h1>
					<div ref={col_1} className="about-me">
						<h2>About Me</h2>
						<p>
							I am a full stack software developer with a creative mindset. I
							approach every problem with an open mind and figuring out a
							step-by-step solution.
						</p>
						<p>
							I am a New Yorker by heart currently living in Columbus OH. I
							graduated from the New York City University with a Bachellors in
							Technology.
						</p>
						<p>
							Ever since, I have progressed to software development. I've worked
							for clients within the VR and AR industries. In additions I've
							have managed client expectations on the digital interfaces I
							built.
						</p>
						<p>
							If you would like to get in touch please contact me at{' '}
							<a
								className="email-link"
								href="mailto:hi@leonsantana.com"
								alt="email communication"
							>
								hi@leonsatana.com
							</a>
						</p>
					</div>
				</section>
				<section ref={col_2}>
					<h2>Selected Work</h2>
					{data.map((item, index) => (
						<div className="item" key={index.toString()}>
							<a href={item.link} target="_blank" rel="noreferrer">
								<h3>{item.project}</h3>
								<p className="client">{item.client}</p>
								<p className="tech">{item.technology}</p>
							</a>
						</div>
					))}
				</section>
			</main>
		</div>
	);
}

export default App;
