# Svelte Garuda

 Svelte starter template with HMR, code splitting, datatable & modular ui-kit

<span>

[![All Contributors](https://img.shields.io/badge/all_contributors-1-green.svg?style=flat-square)](#contributors-)
![GitHub last commit](https://img.shields.io/github/last-commit/zuramai/voler.svg)
![GitHub repo size in bytes](https://img.shields.io/github/repo-size/badges/shields.svg)
[![License](https://img.shields.io/github/license/zuramai/voler.svg)](LICENSE)
![npm version](https://badge.fury.io/js/yarn.svg)
</span>

# Instalation

```bash
npx degit sveltegaruda/template my-project
cd my-project
npm i
```

# Folder structure

| Description | Folder |
|---|---|
| File Svelte | src/pages |
| Static files | public |
| Output | hasil |

# Feature

## Code splitting

Execute command below 

```bash
npm run build
```

## File based routed

Using Routify.

## Hot module reload

The state is not reset when we develop the application. Just run:

```bash
npm run dev
```

## Bootstrap

Bootstrap ready.

## SEO

Content of `public/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset='utf-8'>
	<meta name='viewport' content='width=device-width,initial-scale=1'>

	<title></title>
	<meta name="description" content="">
	<meta property="og:image" content="favicon.png">

	<!--/ Vooler template Start /-->
	<link rel="stylesheet" href="/assets/css/bootstrap.css">
	<link rel="stylesheet" href="/assets/vendors/perfect-scrollbar/perfect-scrollbar.css">
	<link rel="stylesheet" href="/datatable.css">
	<link rel="stylesheet" href="/assets/css/app.css">

	<script src="/assets/js/feather-icons/feather.min.js"></script>
	<script src="/assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js"></script>
	<script src="/assets/js/app.js"></script>
	<script src="/assets/vendors/simple-datatables/simple-datatables.js"></script>
	<!--/ Vooler template End /-->

	<link rel='icon' type='image/png' href='/favicon.png'>
	<!-- <link rel='stylesheet' href='bootstrap.min.css'> -->
	<link rel='stylesheet' href='/global.css'>
	<link rel='stylesheet' href='/build/bundle.css'>

	<script defer src='/main.js' type="module" ></script>
</head>

<body>
</body>
</html>
```

We just need to adjust the title tag, meta description and image.

## Loader

How to use:

```javascript
import {isLoading} from '@/store'
$isLoading = true // untuk mengaktifkan loader
$isLoading = false // untuk mematikan loader
```

It must be placed on folder `halaman`.

## Absolute path

Example:

```javascript
import {nama} from '@/data/nama'
```

However, it can also be a relative path like:

```javascript
import {nama} from '../../../nama'
```

## Datetime

Get the latest date with format such as 2020-08-17 00:19:45

Example:

```html
<script>
	import {tanggal} from '@/tanggal'
</script>
<p>{tanggal()}</p>
```

## Datatable
```html
// file: src/pages/danang/index.svelte
<script>
    import json from "./data.json";
    import Datatable from "@/themes/voler/datatable.svelte";
    import { dt } from "@/tools/store";

    let data = {
        title: "Customer",
        header: ["#", "Name", "Position", "Company"],
        json: json,
    };

    $dt = data;
</script>

.
.
.
<section class="section mt-5">
    <Datatable />
</section>
```

```html
// file: src/pages/danang/data.json.js
const data = [[
    "Hedwig F. Nguyen",
    "Manager",
    "Arcu Vel Foundation"
],
[
    "Genevieve U. Watts",
    "Manager",
    "Eget Incorporated"
]];
export default data;
```

## Demo
You can open the demo <a href="https://sveltegaruda.vercel.app" target="blank">here</a>

## Contributing

- Fork it ( https://github.com/sveltegaruda/template/fork )
- Create your feature branch (`git checkout -b my-new-feature`)
- Commit your changes (`git commit -am 'Add some feature'`)
- Push to the branch (`git push origin my-new-feature`)
- Create a new Pull Request


# Translation ?

We are open for contribution. For example, just want to translate into Japanese, then create a file `README-jp.md` which contains the translation of this README in Japanese.