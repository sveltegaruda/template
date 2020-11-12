<script type="text/javascript">
  import { url } from '@roxi/routify';
</script>

<!-- /.container -->
<style>
  .navbar {
    min-height: 70px;
    height: auto;
    padding: 1rem;
  }
  .navbar-blue {
    background-color: #28abb9;
  }
  .navbar-blue .nav-link {
    color: rgba(255, 255, 255, 0.75);
  }
  .navbar-blue .nav-link:hover {
    color: rgba(255, 255, 255, 1);
  }
  .navbar-blue .navbar-toggler {
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.7);
  }
  .navbar-blue .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.7%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
  @media screen and (max-width: 768px) {
    .navbar-blue .nav-link {
      background-color: #28abb9;
      padding: 1rem 0.7rem;
    }
  }
</style>

<nav class="navbar navbar-expand-md navbar-light bg-white">
  <div class="container">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <h6 class="mb-0">
      <a class="navbar-brand" href="#">SVELTE<span
          class="text-danger">GARUDA</span></a>
    </h6>
    <div class="ml-auto" />
    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav ml-auto mb-2 mb-md-0">
        <li class="mr-5">
          <form class="d-flex">
            <input
              class="form-control mr-2"
              type="search"
              placeholder="Search"
              aria-label="Search" />
          </form>
        </li>
        <li class="nav-item active">
          <a class="nav-link" aria-current="page" href={$url('/')}>Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<nav class="navbar navbar-expand-md navbar-blue">
  <div class="container">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <div />
    <button
      class="navbar-toggler float-right"
      type="button"
      data-toggle="collapse"
      data-target="#navbarMenu"
      aria-controls="navbarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>

    <div class="collapse navbar-collapse" id="navbarMenu">
      <ul class="navbar-nav mr-auto mb-2 mb-md-0">
        <li class="nav-item active">
          <a class="nav-link" aria-current="page" href={$url('/')}>Home</a>
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
              <a class="dropdown-item" href={$url('/zero')}>Zero Datatable</a>
            </li>
            <li>
              <a class="dropdown-item" href={$url('/example')}>Voler Datatable</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

<main class="container pt-5">
  <slot />
</main>
