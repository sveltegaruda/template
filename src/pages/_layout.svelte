<script type="text/javascript">
	import { angka } from "@/store";
	import { url } from "@sveltech/routify";
	setInterval(() => $angka++, 1000);
</script>

<nav class="navbar navbar-expand-md navbar-dark bg-blue">
	<div class="container-fluid">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a class="navbar-brand" href="#">Navbar</a>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarsExampleDefault"
			aria-controls="navbarsExampleDefault"
			aria-expanded="false"
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon" />
		</button>

		<div class="collapse navbar-collapse" id="navbarsExampleDefault">
			<ul class="navbar-nav mr-auto mb-2 mb-md-0">
				<li class="nav-item active">
					<a
						class="nav-link"
						aria-current="page"
						href={$url('/')}>Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href={$url('/aku')}>About me</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href={$url('/hai/zen')}>Hello Zen</a>
				</li>
				<li class="nav-item dropdown">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						class="nav-link dropdown-toggle"
						href="#"
						id="dropdown01"
						data-toggle="dropdown"
						aria-expanded="false">Dropdown</a>
					<ul class="dropdown-menu" aria-labelledby="dropdown01">
						<li>
							<a
								class="dropdown-item"
								href={$url('/example')}>Datatable</a>
						</li>
					</ul>
				</li>
			</ul>
			<form class="d-flex">
				<input
					class="form-control mr-2"
					type="search"
					placeholder="Search"
					aria-label="Search" />
				<button
					class="btn btn-outline-success"
					type="submit">Search</button>
			</form>
		</div>
	</div>
</nav>

<main class="container">
	<slot />
</main>
<!-- /.container -->
