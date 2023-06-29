/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);

particlesJS("particles-js", {
	particles: {
	  number: { value: 160, density: { enable: true, value_area: 800 } },
	  color: { value: "#ffffff" },
	  shape: {
		type: "circle",
		stroke: { width: 0, color: "#000000" },
		polygon: { nb_sides: 5 },
		image: { src: "img/github.svg", width: 100, height: 100 }
	  },
	  opacity: {
		value: 1,
		random: true,
		anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
	  },
	  size: {
		value: 3,
		random: true,
		anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
	  },
	  line_linked: {
		enable: false,
		distance: 150,
		color: "#ffffff",
		opacity: 0.4,
		width: 1
	  },
	  move: {
		enable: true,
		speed: 1,
		direction: "none",
		random: true,
		straight: false,
		out_mode: "out",
		bounce: false,
		attract: { enable: false, rotateX: 600, rotateY: 600 }
	  }
	},
	interactivity: {
	  detect_on: "canvas",
	  events: {
		onhover: { enable: true, mode: "bubble" },
		onclick: { enable: false, mode: "remove" },
		resize: true
	  },
	  modes: {
		grab: { distance: 400, line_linked: { opacity: 1 } },
		bubble: { distance: 100, size: 0, duration: 2, opacity: 0, speed: 3 },
		repulse: { distance: 100, duration: 0.4 },
		push: { particles_nb: 4 },
		remove: { particles_nb: 2 }
	  }
	},
	retina_detect: true
  });
  requestAnimationFrame(update);
  