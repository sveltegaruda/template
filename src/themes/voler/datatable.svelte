<script>
    import { onMount } from "svelte";
    import { DataTable } from "@/tools/datatable/index";
    import { dt } from "@/tools/store";

    let data = $dt;
    let promise = data.json;

    onMount(() => {
        // Simple Datatable
        const dataTable = new DataTable("#table2");
        dataTable.wrapper.addEventListener("click", (e) => {
            const t = e.target.closest("button");
            console.log(t);
        });
        let row = [].slice
            .call(dataTable.activeRows[3].cells)
            .map(function (cell) {
                return cell.textContent;
            });
    });

    function addNewData() {
        console.log("Add new data");
    }
    function editData(id) {
        console.log("Edit data with id " + id);
    }
    function deleteData(id) {
        console.log("Delete data with id " + id);
    }
</script>

<style>
    .card-header {
        border-bottom: solid 1px #eee;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }
    .btn-add-new-data {
        text-align: right;
    }
</style>

<div class="card">
    <div class="card-header">{data.title}</div>
    <div class="card-body mt-3">
        <div class="btn-add-new-data">
            <button
                on:click={addNewData}
                class="btn btn-sm btn-primary round mb-2">Add New Data</button>
        </div>
        <table class="table table-striped" id="table2">
            <thead>
                <tr>
                    {#each data.header as d}
                        <th>{d}</th>
                    {:else}
                        <th colspan="100%">Data tidak ada!</th>
                    {/each}
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {#await promise}
                    <p>...waiting</p>
                {:then data}
                    {#each data as d, i}
                        <tr>
                            <td>{i + 1}</td>
                            {#each d as v}
                                <td>{v}</td>
                            {/each}
                            <td>
                                <button
                                    row-index={i}
                                    class="btn btn-sm btn-warning round">Edit</button>
                                <button
                                    row-index={i}
                                    class="btn btn-sm btn-danger round">Delete</button>
                            </td>
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
