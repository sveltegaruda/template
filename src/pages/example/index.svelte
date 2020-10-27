<script>
    import { onMount } from "svelte";
    import { DataTable } from "../../datatable/index";
    import data from "./data.json";
    //    import Datatable from "@/themes/voler/datatable.svelte";

    let promise = data;

    onMount(() => {
        // Simple Datatable
        const dataTable = new DataTable("#table1");
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

<!-- <Datatable {promise} /> -->

<div class="page-title">
    <div class="row">
        <div class="col-12 col-md-6 order-md-1 order-last">
            <h3>Datatable</h3>
            <p class="text-subtitle text-muted">
                We use 'simple-datatables' made by @fiduswriter. You can check
                the full documentation
                <a
                    href="https://github.com/fiduswriter/Simple-DataTables/wiki">here</a>.
            </p>
        </div>
        <div class="col-12 col-md-6 order-md-2 order-first">
            <nav aria-label="breadcrumb" class="breadcrumb-header">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <!-- svelte-ignore a11y-invalid-attribute -->
                        <a href="#">Beranda</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
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
                                <td colspan="100%">Data tidak ada!</td>
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
