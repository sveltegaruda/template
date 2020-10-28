fs = require('fs')
var recursive = require("recursive-readdir");
const { PurgeCSS } = require('purgecss')
recursive("public/dist", (_, x) => {
	x = x.filter(x => x.match(/\.css/g)).filter(x => x != "global.css")
	new PurgeCSS().purge({
	  content: ['src/**/*.svelte'],
	  css: [...x],
	  safelist: ['body', '.dropdown-menu-show']
	}).then(x => {
		for (y of x){
			fs.writeFile(y.file.replace('public/', 'hasil/'), y.css, 'utf8', () => {})
		}
	})
})