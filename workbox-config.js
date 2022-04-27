module.exports = {
	globDirectory: 'out/',
	globPatterns: [
		'**/*.{json,js,css,svg,ttf,eot,woff,html,jpg,png,xml,ico,txt,webmanifest}'
	],
	swDest: 'out/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
