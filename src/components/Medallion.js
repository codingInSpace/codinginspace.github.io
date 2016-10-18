import React from 'react';
import React3 from 'react-three-renderer';
import THREE from 'three';
import Dimensions from 'react-dimensions';

class Medallion extends React.Component {
	state = {
			cubeRotation: new THREE.Euler()
	};

  constructor(props, context) {
    super(props, context);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 5);

    this._onAnimate = () => {
			this.setState({
				dimensions: this.state.dimensions,
				cubeRotation: new THREE.Euler(
					this.state.cubeRotation.x + 0.1,
					this.state.cubeRotation.y + 0.1,
					0
				),
      });
    };
  }

  render() {
		const size = this.props.containerWidth

		return (
			<React3
				mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
				width={size}
				height={size}
				alpha={true}
				onAnimate={this._onAnimate}
			>
				<scene>
					<perspectiveCamera
						name="camera"
						fov={75}
						aspect={size / size}
						near={0.1}
						far={1000}

						position={this.cameraPosition}
					/>
					<mesh
						rotation={this.state.cubeRotation}
					>
						<cylinderGeometry
							radiusTop={3}
							radiusBottom={3}
							radialSegments={32}
							height={0.1}
						/>
						<meshBasicMaterial>
							<texture url={"../../public/jonathan_compressed.jpg"}/>
						</meshBasicMaterial>
					</mesh>
				</scene>
			</React3>
		);
  }
}

export default Dimensions()(Medallion)
