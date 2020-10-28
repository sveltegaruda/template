fs = require('fs')
var recursive = require("recursive-readdir");
const { PurgeCSS } = require('purgecss')

/*
abaikan: css yang nggak kena pengaruh purge
safelist: rule css yang nggak kena purge
*/
abaikan = ['global.css'] // bisa juga: asset/halo.css (nama foldernya ikutkan)
safelist = []

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
	  safelist: [...safelist]
	}).then(x => {
		for (y of x){
			fs.writeFile(y.file.replace('public/', 'hasil/'), y.css, 'utf8', () => {})
		}
	})
})
