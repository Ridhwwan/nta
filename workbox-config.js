module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{yml,html,md,svg,rb,png,css,xml,json,js,scss,enc,sh,ico,lock,nuspec,ps1,txt,gif,zip}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};