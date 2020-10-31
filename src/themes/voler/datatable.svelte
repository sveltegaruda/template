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
    //let promise = data.json;
    //    let spliced = { ...promise };

    let json = [];
    data.json.forEach((elem, i) => {
        if (elem.length == data.json[i].length) {
            //spliced[i].splice(0, 1);
            json[i] = [...elem.slice(0, 0), ...elem.slice(0 + 1, elem.length)];
        }
        console.log(json[i])
        console.log(data.json[i])
    });
    console.log(json);

    /*     let a = [
        { firstName: "Tony", lastName: "Stack" },
        { firstName: "Iron", lastName: "Man" },
    ];

    let removed = a.map(({ firstName, ...lastName }) => lastName);

    console.log("before:", a);
    console.log("after:", removed);
    console.log("before:", a);
    let a = [
        ["Tony", "Stack"],
        ["Iron", "Man"],
    ];
    
    //let removed = a.map(({ index, ...json }) => json);
    let removed = [...a[0].slice(0, 0), ...a[0].slice(0 + 1, a[0].length)];
    
    console.log("before:", a);
    console.log("after:", removed);
    console.log("before:", a);
 */

    //console.log(preserve[5].length);
    function addNewData() {
        console.log("Add new data");
    }

    onMount(() => {
        /* 
        promise.forEach((element, i) => {
            if (element.length == spliced[i].length) {
                //spliced[i].splice(0, 1);
                tmp[i] = [
                    ...element.slice(0, 0),
                    ...element.slice(0 + 1, element.length),
                ];
            }
            //console.log("elem: " + element.length);
            //console.log(i + ". " + element);
        });
        console.log("tmp: " + tmp);
         */
        //console.log("spliced: " + spliced[0].length);
        //console.log("promise: " + promise[0].length);

        // Simple Datatable
        const dataTable = new DataTable("#table2");

        /*
        let dataTable = new DataTable("#table2", {
            columns: [
                // Hide the sixth column
                { select: 1, hidden: true },
            ],
        });

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

                // let id = dataTable.data[t.dataIndex].cells[1].innerText;
                let id = data.json[t.dataIndex][0];
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
    let cnt = 0;
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
