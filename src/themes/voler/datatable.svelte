<script>
    import { onMount } from "svelte";
    import { DataTable } from "@/tools/datatable/index";
    import { dt } from "@/tools/store";

    let data = $dt;

    let json = [];
    data.json.forEach((elem, i) => {
        if (elem.length == data.json[i].length) {
            // hiding column id
            json[i] = [...elem.slice(0, 0), ...elem.slice(0 + 1, elem.length)];
        }
    });

    onMount(() => {
        // Simple Datatable
        const dataTable = new DataTable("#table2");

        dataTable.wrapper.addEventListener("click", (e) => {
            const t = e.target.closest("tr");
            const s = e.target.closest("span");
            if (t != null && s != null) {
                //get row index
                //console.log(t.dataIndex);

                //get cell data at specified index and column / get id
                //console.log(data.json[t.dataIndex][0]);

                //get status edit/delete
                //const btn = e.target.closest("span").innerText;

                let id = data.json[t.dataIndex][0];
                const btn = s.innerText;
                let msg = "";
                if (btn == "Edit") {
                    editData(id);
                } else {
                    deleteData(id);
                }
            }
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
    .badge {
        padding: 8px 12px;
        cursor: pointer;
    }
</style>

<div class="card">
    <div class="card-header">{data.title}</div>
    <div class="card-body mt-3">
        <div class="btn-add-new-data">
            <span on:click={addNewData} class="badge bg-primary mb-2">Add New
                Data</span>
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
                {#await json}
                    <p>...waiting</p>
                {:then data}
                    {#each data as d, i}
                        <tr>
                            <td>{i + 1}</td>
                            {#each d as v}
                                <td>{v}</td>
                            {/each}
                            <td>
                                <span
                                    row-index={i}
                                    class="badge bg-warning mb-1">Edit</span>
                                <span
                                    row-index={i}
                                    class="badge bg-danger">Delete</span>
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
