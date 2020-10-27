<script>
    import { onMount } from "svelte";
    import { DataTable } from "../../datatable/index";

    export let promise;

    onMount(() => {
        // Simple Datatable
        const dataTable = new DataTable("#table2");
    });
</script>

voler-datatabler
<br />
<table class="table table-striped" id="table2">
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
