const projects = [
	{
		"id": "aKei5Phu",
		"title": "Winterwise",
		"images": [
			"public/projects/winterwise/Vscmv51.jpg",
			"public/projects/winterwise/QB1rvSz.jpg"
		],
		"coverIndex": "0",
		"descShort": "Hackaton project for tracking snow plowing vehicles in real time",
		"descLong": "This is a system made as a Hackaton project for tracking road condintions during winter time in Sweden. A prototype for a gps tracker and a tablet application was made to track vehicles that plow, salt or gravel the roads, and the state of treatment as well as coordinates and timestamps are sent to a Node server. The server processes and distributes the data to a react+redux+sass webapp, and routes for vehicles are displayed in a Google Maps implementation. The display of treated roads are faded with time so as to show the best approximated current state of roads. This way users of the web app can see what roads are being and have been treated, what state they're in.",
		"teamDesc": "Team of four",
		"link": "",
		"linkLabel": "",
		"source": "",
		"tags": [ "Web", "App", "Android" ]
	},
	{
		"id": "Iewius0i",
		"title": "TowerVR",
		"images": [
			"public/projects/towervr/towervr2.jpg",
			"public/projects/towervr/towervr3.jpg",
			"public/projects/towervr/towervr4.jpg",
			"public/projects/towervr/towervr1.jpg"
		],
		"coverIndex": "3",
		"descShort": "Multiplayer VR Game for the Google Cardboard",
		"descLong": "Pioneering game technology",
		"teamDesc": "Team of seven",
		"link": "https://www.youtube.com/watch?v=2eBE4bzM2sw",
		"linkLabel": "Video",
		"source": "https://github.com/AndroidHMD/TowerVR",
		"tags": [ "Unity", "VR" ]
	},
	{
		"id": "geK0chee",
		"title": "Galaxy Goose",
		"images": [
			"public/projects/galaxy/galaxy2.jpg",
			"public/projects/galaxy/galaxy3.jpg",
			"public/projects/galaxy/galaxy4.jpg",
			"public/projects/galaxy/galaxygoose.jpg"
		],
		"coverIndex": "3",
		"descShort": "Interactive WebGL application",
		"descLong": "An experimental WebGL application where you can create and customize planets interactively.",
		"teamDesc": "Team of five.",
		"link": "https://codinginspace.github.io/myGalaxy",
		"linkLabel": "Try it",
		"source": "https://github.com/codingInSpace/myGalaxy",
		"tags": [ "WebGL" ]
	},
	{
		"id": "vbTa8zg2",
		"title": "SPH fluid sim",
		"images": ["public/projects/watersim.jpg"],
		"coverIndex": "0",
		"descShort": "3D water simulation",
		"descLong": "Water simulation using a Smoothed Particle Hydrodynamics method, governered by Navier-Stokes equations. The implementation is in C++ with rendering through OpenGL and particle calculations with OpenCL. The simulation is in real-time with properties adjustable by a small GUI.",
		"teamDesc": "Team of five",
		"link": "",
		"linkLabel": "",
		"source": "https://github.com/Hedlundaren/vattenoverhuvudet",
		"tags": [ "C++", "OpenGL" ]
	},
	{
		"id": "aiTh8zah",
		"title": "React portfolio",
		"images": [
			"public/projects/portfolio/portfolio.jpg", 
			"public/projects/portfolio/portfolio2.jpg"
		],
		"coverIndex": "0",
		"descShort": "React-redux SPA portfolio",
		"descLong": "",
		"teamDesc": "Personal project",
		"link": "#",
		"linkLabel": "View it",
		"source": "https://github.com/codingInSpace/codinginspace.github.io",
		"tags": [ "Web" ]
	},
	{
		"id": "Kav0Eith",
		"title": "Reverbify",
		"images": ["public/projects/reverbify1.jpg"],
		"coverIndex": "0",
		"descShort": "Reverb simulation app",
		"descLong": "An app built as part of a sound physics course. The user can upload or record a sound and combine it with a chosen environment's echo effect.",
		"teamDesc": "Team of three",
		"link": "",
		"linkLabel": "",
		"source": "https://github.com/codingInSpace/reverbify",
		"tags": [ "Web", "App" ]
	},
	{
		"id": "uu8Ailee",
		"title": "Trappans Personalportal",
		"images": ["public/projects/portalen.jpg"],
		"coverIndex": "0",
		"descShort": "Club staff portal",
		"descLong": "Staff portal for a local pub/club. I've worked on dynamic JavaScript- and some php-backend.",
		"teamDesc": "Team of four",
		"link": "",
		"linkLabel": "",
		"source": "",
		"tags": [ "Web" ]
	},
	{
		"id": "ota9aeDo",
		"title": "Mapus",
		"images": ["public/projects/mapus1.jpg"],
		"coverIndex": "0",
		"descShort": "Study tool app",
		"descLong": "An Android app for students to use for quickly communicating where to meet to study, with the help of interactive maps.",
		"teamDesc": "Team of five",
		"link": "",
		"linkLabel": "",
		"source": "https://github.com/sovanny/Mapus",
		"tags": [ "Android", "App" ]
	}
]

export default projects;
