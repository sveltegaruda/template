<script>
  import json from './data.json.js';
  import Datatable from '../../themes/voler/datatable.svelte';

  let dataJson = {
    title: 'Customer',
    header: ['#', 'Name', 'Position', 'Company'],
    json,
  };

  function handleAction(event) {
    switch (event.detail.action) {
      case 'edit':
        editData(event.detail.id);
        break;
      case 'delete':
        deleteData(event.detail.id);
        break;
      default:
        addNewData();
    }
  }

  function addNewData() {
    console.log('Add new data');
  }

  function editData(id) {
    console.log('Edit data with id ' + id);
  }

  function deleteData(id) {
    console.log('Delete data with id ' + id);
  }
</script>

<div class="page-title">
  <div class="row">
    <div class="col-12 col-md-6 order-md-1 order-last">
      <h3>Datatable</h3>
      <p class="text-subtitle text-muted">
        We use 'simple-datatables' made by @fiduswriter. You can check the full
        documentation
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
          <li class="breadcrumb-item active" aria-current="page">Customer</li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<section class="section mt-5">
  {#await dataJson}
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  {:then data}
    <Datatable on:action={handleAction} {data} />
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</section>
