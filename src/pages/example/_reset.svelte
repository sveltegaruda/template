<script>
  import { onMount } from 'svelte';
  import { url } from '@roxi/routify';
  import { goPerfect } from '../../tools/perfect-scrollbar';

  onMount(() => {
    goPerfect();
  });
</script>

<div id="app">
  <div id="sidebar" class="active">
    <div class="sidebar-wrapper active">
      <div class="sidebar-header">Voler</div>
      <div class="sidebar-menu">
        <ul class="menu">
          <li class="sidebar-title">Main Menu</li>

          <li class="sidebar-item  ">
            <a href={$url('/')} class="sidebar-link">
              <i data-feather="home" width="20" />
              <span>Home</span>
            </a>
          </li>
          <li class="sidebar-item  ">
            <a href={$url('/example/dashboard')} class="sidebar-link">
              <i data-feather="layout" width="20" />
              <span>Dashboard</span>
            </a>
          </li>
          <li class="sidebar-item  ">
            <a href={$url('/example')} class="sidebar-link">
              <i data-feather="layout" width="20" />
              <span>Datatable</span>
            </a>
          </li>
        </ul>
      </div>
      <button class="sidebar-toggler btn x"><i data-feather="x" /></button>
    </div>
  </div>
  <div id="main">
    <nav class="navbar navbar-header navbar-expand navbar-light">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a class="sidebar-toggler" href="#"><span
          class="navbar-toggler-icon" /></a>
      <button
        class="btn navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav d-flex align-items-center navbar-light ml-auto">
          <li class="dropdown">
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a
              href="#"
              data-toggle="dropdown"
              class="nav-link dropdown-toggle nav-link-lg nav-link-user">
              <div class="avatar bg-primary mr-3">
                <span class="avatar-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-user"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                </span>
              </div>
              <div class="d-none d-md-block d-lg-inline-block">Hi, Gaez</div>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <!-- svelte-ignore a11y-invalid-attribute -->
              <a class="dropdown-item" href="#"><i data-feather="user" />
                Account</a>
              <!-- svelte-ignore a11y-invalid-attribute -->
              <a class="dropdown-item active" href="#"><i data-feather="mail" />
                Messages</a>
              <!-- svelte-ignore a11y-invalid-attribute -->
              <a class="dropdown-item" href="#"><i data-feather="settings" />
                Settings</a>
              <div class="dropdown-divider" />
              <!-- svelte-ignore a11y-invalid-attribute -->
              <a class="dropdown-item" href="#"><i data-feather="log-out" />
                Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <div class="main-content container-fluid">
      <slot />
    </div>

    <footer>
      <div class="footer clearfix mb-0 text-muted">
        <div class="float-left">
          <p style="display:none;">2020 &copy; Voler</p>
        </div>
        <div class="float-right">
          <p>
            Crafted with
            <span class="text-danger"><i data-feather="heart" /></span>
            by
            <a href="http://ahmadsaugi.com">Ahmad Saugi</a>, modified by
            <a href="https://fahiltek.co.id">Danang Ponorogo</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</div>
