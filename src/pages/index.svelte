<script type="text/javascript">
	import { angka } from "../tools/store";
	setInterval(() => $angka++, 1000);
</script>

<div class="starter-template text-center py-5 px-3">
	<h1>Svelte Garuda template</h1>
	<p class="lead">
		Use this template as a way to quickly start any new svelte project.
	</p>
	<p>Hello World!</p>
	<p>{$angka}</p>
</div>
