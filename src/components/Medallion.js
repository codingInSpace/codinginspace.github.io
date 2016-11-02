import React from 'react';
import React3 from 'react-three-renderer';
import THREE from 'three';
import Dimensions from 'react-dimensions';

class Medallion extends React.Component {
	state = {
		cubeRotation: new THREE.Euler(0, Math.PI/2, 0)
	};

  constructor(props, context) {
    super(props, context);

    this.cameraPosition = new THREE.Vector3(0, 5, 0);
    this.medallionPosition = new THREE.Vector3(0, 0, 0);

    this._onAnimate = () => {
			this.setState({
				cubeRotation: new THREE.Euler(
					this.state.cubeRotation.x, 
					this.state.cubeRotation.y + 0.0005,
					this.state.cubeRotation.z + 0.0005
				)
			});
    };

    this._onRendered = (renderer) => {
			console.log("Renderer " + renderer + " updated")
		};
  }

	//componentDidMount() {
		//const camera = this.refs.camera;
		//const medallion = this.refs.medallion;
		//medallion.rotation.y = Math.PI / 2;
	//}

  render() {
		const size = this.props.containerWidth

		return (
			<div ref="container">
				<React3
					mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
					width={size}
					height={size}
					alpha={true}
					onAnimate={this._onAnimate}
					onRendererUpdated={this._onRendered}
				>
					<scene>
						<perspectiveCamera
							name="camera"
							fov={75}
							aspect={size / size}
							near={0.1}
							far={1000}
							position={this.cameraPosition}
							lookAt={this.medallionPosition}
							ref="camera"
						/>
						<mesh
							ref="medallion"
							rotation={this.state.cubeRotation}
							position={this.medallionPosition}
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
			</div>
		);
  }
}

export default Dimensions()(Medallion)
