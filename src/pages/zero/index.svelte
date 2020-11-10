<script type="text/javascript">
  // import { angka } from "@/tools/store";
  // setInterval(() => $angka++, 1000);

  import Datatable from './Datatable.svelte';
  const handleAction = (e) => {
    console.log(e.detail.store)
    console.log(e.detail.payload)
    // if (e.detail.store === 'sort') {
    //   configCustomer.datas = e.detail.payload
    // }
  }

  import { onMount } from "svelte";

  onMount(() => {
    dataCustomer()
    dataCity()
  })

  let configCustomer = {
    store: 'customer',
    title: 'Customer',
    coloumns: ['Name', 'Position', 'Company'],
    datas: [],
    limit: 5,
    rows: 0,
    orderby: 'name',
    sortby: 'asc',
    isRender: false
  }

  const dataCustomer = async () => {
    try {
      const responses = await fetch('/customers.json', {
        method: 'GET'
      })
      const response = await responses.json()
      if (responses.ok) {
        configCustomer.datas = response.data
        configCustomer.isRender = true
      }
    } catch (error) {
      console.log(error);
    }
  }

  let configCity = {
    store: 'city',
    title: 'City',
    coloumns: ["Province", "Type", "City_name", "Postal_code"],
    datas: [],
    limit: 25,
    rows: 0,
    orderby: 'city_name',
    sortby: 'asc',
    isRender: false
  }

  const dataCity = async () => {
    try {
      const responses = await fetch('/city.json', {
        method: 'GET'
      })
      const response = await responses.json()
      if (responses.ok) {
        configCity.datas = response.data
        configCity.isRender = true
      }
    } catch (error) {
      console.log(error);
    }
  }
</script>

<!-- <div class="starter-template text-center py-5 px-3">
  <h1>Svelte Garuda template</h1>
  <p class="lead">
    Use this template as a way to quickly start any new svelte project.
  </p>
  <p>Hello World!</p>
  <p>{$angka}</p>

</div> -->

{#if configCustomer.isRender}
  <Datatable
    config={configCustomer}
    on:handleAction={handleAction}
  />
{/if}
separasi
{#if configCity.isRender}
  <Datatable
    config={configCity}
    on:handleAction={handleAction}
  />
{/if}

<style>
  div {
    padding: 1em;
    margin: 0 0 1em 0;
    background-color: #eee;
  }

  .active {
    background-color: #ff3e00;
    color: white;
  }
</style>
