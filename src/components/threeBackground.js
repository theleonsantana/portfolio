import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

export default function ThreeBackground(props) {
	// This reference gives us direct access to the THREE.Mesh object
	const mesh = useRef(null);

	// Hold state for hovered and clicked events
	const [hovered, hover] = useState(false);
	const [clicked, click] = useState(false);
	const [active, setActive] = useState(false);

	const { viewport } = useThree();
	// Subscribe this component to the render-loop, rotate the mesh every frame
	useFrame((state, delta) => (mesh.current.rotation.x += delta));
	// Return the view, these are regular Threejs elements expressed in JSX
	// vertex
	const vertex = viewport.width / 5 > 575 ? 80 : 40;

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? 1.5 : 1}
			// onClick={(event) => setActive(!active)}
			onPointerOver={(event) => hover(true)}
			// onPointerOut={(event) => setHover(false)}
		>
			<sphereGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	);
}
