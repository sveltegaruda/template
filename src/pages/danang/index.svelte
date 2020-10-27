<script>
    import { onMount } from "svelte";
    import { url } from "@sveltech/routify";
    import { goPerfect } from "./perfect-scrollbar";
    import { DataTable } from "../../datatable/index";
    import data from "./data.json";

    let promise = data;

    onMount(() => {
        // Simple Datatable
        const dataTable = new DataTable("#table1");
        goPerfect();
    });
</script>

<style>
    .card-header {
        border-bottom: solid 1px #eee;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }
</style>

<div id="app">
    <div id="sidebar" class="active">
        <div class="sidebar-wrapper active">
            <div class="sidebar-header">e-Office</div>
            <div class="sidebar-menu">
                <ul class="menu">
                    <li class="sidebar-title">Main Menu</li>

                    <li class="sidebar-item  ">
                        <a href={$url('/')} class="sidebar-link">
                            <i data-feather="home" width="20" />
                            <span>Customer</span>
                        </a>
                    </li>
                </ul>
            </div>
            <button class="sidebar-toggler btn x"><i
                    data-feather="x" /></button>
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
                <ul
                    class="navbar-nav d-flex align-items-center navbar-light ml-auto">
                    <li class="dropdown">
                        <!-- svelte-ignore a11y-invalid-attribute -->
                        <a
                            href="#"
                            data-toggle="dropdown"
                            class="nav-link dropdown-toggle nav-link-lg nav-link-user">
                            <div class="avatar mr-1">
                                <img
                                    src="/assets/images/avatar/avatar-s-1.png"
                                    alt=""
                                    srcset="" />
                            </div>
                            <div class="d-none d-md-block d-lg-inline-block">
                                Hi, Girl
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <!-- svelte-ignore a11y-invalid-attribute -->
                            <a class="dropdown-item" href="#"><i
                                    data-feather="user" />
                                Account</a>
                            <!-- svelte-ignore a11y-invalid-attribute -->
                            <a class="dropdown-item active" href="#"><i
                                    data-feather="mail" />
                                Messages</a>
                            <!-- svelte-ignore a11y-invalid-attribute -->
                            <a class="dropdown-item" href="#"><i
                                    data-feather="settings" />
                                Settings</a>
                            <div class="dropdown-divider" />
                            <!-- svelte-ignore a11y-invalid-attribute -->
                            <a class="dropdown-item" href="#"><i
                                    data-feather="log-out" />
                                Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="main-content container-fluid">
            <div class="page-title">
                <div class="row">
                    <div class="col-12 col-md-6 order-md-1 order-last">
                        <!--h3>Customer</h3>
						<p class="text-subtitle text-muted">
							We use 'simple-datatables' made by @fiduswriter. You
							can check the full documentation
							<a
								href="https://github.com/fiduswriter/Simple-DataTables/wiki">here</a>.
						</p-->
                    </div>
                    <div class="col-12 col-md-6 order-md-2 order-first">
                        <nav aria-label="breadcrumb" class="breadcrumb-header">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <!-- svelte-ignore a11y-invalid-attribute -->
                                    <a href="#">Beranda</a>
                                </li>
                                <li
                                    class="breadcrumb-item active"
                                    aria-current="page">
                                    Customer
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <section class="section mt-5">
                <div class="card">
                    <div class="card-header">Customer</div>
                    <div class="card-body mt-3">
                        <table class="table table-striped" id="table1">
                            <thead>
                                <tr>
                                    <th>Nomor</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {#await promise}
                                    <p>...waiting</p>
                                {:then data}
                                    {#each data as d, i}
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>{d.name}</td>
                                            <td>{d.position}</td>
                                            <td>{d.company}</td>
                                        </tr>
                                    {:else}
                                        <tr>
                                            <td colspan="100%">
                                                Data tidak ada!
                                            </td>
                                        </tr>
                                    {/each}
                                {:catch error}
                                    <p style="color: red">{error.message}</p>
                                {/await}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>

        <footer>
            <div class="footer clearfix mb-0 text-muted">
                <div class="float-left">
                    <p style="display:none;">2020 &copy; Voler</p>
                </div>
                <div class="float-right">
                    <p>
                        Crafted with
                        <span class="text-danger"><i
                                data-feather="heart" /></span>
                        by
                        <a href="http://ahmadsaugi.com">Ahmad Saugi</a>,
                        modified by
                        <a href="https://fahiltek.co.id">Danang Ponorogo</a>
                    </p>
                </div>
            </div>
        </footer>
    </div>
</div>
