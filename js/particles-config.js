particlesJS("particles-js", {
	particles: {
		number: { value: 90, density: { enable: true, value_area: 800 } },
		color: { value: "#ffffff" },
		shape: { type: "circle" },
		opacity: { value: 0.5 },
		size: { value: 3, random: true },
		line_linked: {
		enable: true,
		distance: 150,
		color: "#ffffff",
		opacity: 0.4,
		width: 1
		},
		move: {
		enable: true,
		speed: 2,
		direction: "none",
		random: false,
		straight: false,
		out_mode: "out"
		}
	},

	interactivity: {
		detect_on: "window",
		events: {
		onhover: {
			enable: true,
			mode: "repulse"
		},
		onclick: {
			enable: true,
			mode: "push"
		},
		resize: true
		},
		modes: {
		repulse: {
			distance: 130,
			duration: 0.2
		},
		push: {
			particles_nb: 2
		}
		}
	},

	retina_detect: true
});