<script>
    import { onMount } from "svelte";
    import { DataTable } from "@/tools/datatable/index";

    export let data;
    let promise = data.json;

    onMount(() => {
        // Simple Datatable
        const dataTable = new DataTable("#table2");
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

<div class="card">
    <div class="card-header">{data.title}</div>
    <div class="card-body mt-3">
        <table class="table table-striped" id="table2">
            <thead>
                <tr>
                    {#each data.header as d}
                        <th>{d}</th>
                    {:else}
                        <th colspan="100%">Data tidak ada!</th>
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#await promise}
                    <p>...waiting</p>
                {:then data}
                    {#each data as d, i}
                        <tr>
                            <td>{i + 1}</td>
                            <td>{d[0]}</td>
                            <td>{d[1]}</td>
                            <td>{d[2]}</td>
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
