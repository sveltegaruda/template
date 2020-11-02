fs = require('fs')
var recursive = require("recursive-readdir");
const { PurgeCSS } = require('purgecss')

/*
abaikan: css yang nggak kena pengaruh purge
["global.css", "assets/halo.css"]

safelist: rule css yang nggak kena purge
["html", ".hai"]
*/
abaikan = []
// safelist = []

recursive("public/dist", (_, x) => {
	x = x.filter(x => x.match(/\.css/g)).filter(x => {
		for (y of abaikan){
			if (x == `public/dist/${y}`) {
				return false
			}
		}
		return true
	})
	new PurgeCSS().purge({
	  content: ['src/**/*.svelte', 'public/index.html'],
	  css: [...x],
	  whitelist: ["svg:not(:root).svg-inline--fa"], 
	  whitelistPatterns: [/^fa-/, /^svg-inline--fa/], 
	  whitelistPatternsChildren: [/^token/, /^pre/, /^code/], 
	  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [] 
	}).then(x => {
		for (y of x){
			fs.writeFile(y.file.replace('public/', 'hasil/'), y.css, 'utf8', () => {})
		}
	})
})
