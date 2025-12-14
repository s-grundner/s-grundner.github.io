
window.MathJax = {
	tex: {
		processEnvironments: true,
		mathStyle: 'TeX',
		packages: { '[+]': ['ams', 'mathtool'] },
		inlineMath: [['$', '$']],
		displayMath: [['$$', '$$']],
		ams: {
			operatornamePattern: /^[-*a-zA-Z]+/,
			multlineWidth: '100%',
			multlineIndent: '1em'
		}
	},
	chtml: {
		matchFonetHeight: true,
		adaptiveCSS: true
	}
};

(function () {
	var script = document.createElement('script');
	script.src = 'https://cdn.jsdelivr.net/npm/mathjax@4/tex-chtml.js';
	script.defer = true;
	document.head.appendChild(script);
})();