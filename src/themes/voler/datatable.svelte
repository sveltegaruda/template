<script>
    /*
        // C:\sveltegaruda\template\node_modules\svelte\internal\index.mjs - line 191 or just do searching with keyword 'removeChild'
        // Uncaught (in promise) TypeError: Cannot read property 'removeChild' of null
        // https://github.com/sveltejs/svelte/issues/2086

        function detach(node) {
            node.parentNode.removeChild(node);
        }

        Change to:

        function detach(node) {
            if(node.parentNode) {
                node.parentNode.removeChild(node);
            }
        }
    */
    import { onMount } from "svelte";
    import { DataTable } from "@/tools/datatable/index";
    import { dt } from "@/tools/store";

    let data = $dt;
    let promise = data.json;

    function addNewData() {
        console.log("Add new data");
    }

    onMount(() => {
        // Simple Datatable
        //const dataTable = new DataTable("#table2");

        let dataTable = new DataTable("#table2", {
            columns: [
                // Hide the sixth column
                { select: 1, hidden: true },
            ],
        });

        /*
        const dataTable = new DataTable("#table2", {
            columns: [
                // Sort the second column in ascending order
                //                { select: 1, sort: "asc" },

                // Set the third column as datetime string matching the format "DD/MM/YYY"
                //              { select: 2, type: "date", format: "DD/MM/YYYY" },

                // Disable sorting on the fourth and fifth columns
                //            { select: [3, 4], sortable: false },

                // Hide the sixth column
                { select: 1, hidden: true },

                // Append a button to the seventh column
                
                {
                    select: 4,
                    render: function (data, cell, row) {
                        //console.log(row);
                        //data +
                        return (
                            '<span class="badge bg-warning mb-1" onclick="editData(' +
                            row.dataIndex +
                            ')">Edit</span>'
                            +
                            "&nbsp;" +
                            '<span class="badge bg-danger" onclick="deleteData(' +
                            row.dataIndex +
                            ')">Delete</span>'
                        );
                    },
                },
            ],
        });

              */

        dataTable.wrapper.addEventListener("click", (e) => {
            const t = e.target.closest("tr");
            const s = e.target.closest("span");
            if (t != null && s != null) {
                //get row index => Done
                //console.log(t.dataIndex);

                //get cell data at specified row => Done
                //console.log(dataTable.activeRows[t.dataIndex].cells[1].innerText);

                //get status edit/delete
                //const btn = e.target.closest("span").innerText;

                let id = dataTable.data[t.dataIndex].cells[1].innerText;
                const btn = s.innerText;
                let msg = "";
                if (btn == "Edit") {
                    msg = "Edit data with id " + id;
                } else {
                    msg = "Delete data with id " + id;
                }
                console.log(msg);
            }
        });
    });
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
