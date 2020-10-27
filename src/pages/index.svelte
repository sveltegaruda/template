<script type="text/javascript">
	import { angka } from "@/store";
	import { url } from "@sveltech/routify";
	setInterval(() => $angka++, 1000);
</script>

<p>Hello World!</p>
<p>{$angka}</p>
<p><a href={$url('/aku')}>about me</a></p>
<p><a href={$url('/hai/zen')}>hello zen</a></p>
<p><a href={$url('/danang')}>datatable</a></p>