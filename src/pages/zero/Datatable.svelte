<script>
  import { onMount } from "svelte";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let config;

  let datas = []
  let datas2 = []
  let datakeys = []
  let limits = [5, 10, 15, 20, 25, 50]
  let paggings = 1
  let pagging = 0

  let colmn
  let rows = config.rows

  let limit = 5
  let orderby = 'name'
  let sortby = true
  let search = ''
  
  let resultsearch
  $: resultsearch = handleSearch(search)

  let nextnumber = 1

  onMount(() => {
    limit = config.limit
    handleDatas(limit)
  })

  const handleDatas = (limitdata) => {
    let nobj = []
    let nobj1 = []
    let nobj2 = []
    let nobj3 = []

    rows = config.datas
    paggings = Math.ceil(rows.length / (limit-1))

    datakeys = []
    if (search !== '') {
      Object.keys(config.coloumns).map((ic) => {
        colmn = config.coloumns[ic].toLowerCase()
        for (const [key, value] of Object.entries(config.datas)) {
          if (value[colmn].toLowerCase().indexOf(search.toLowerCase()) !== -1) {
            nobj.push(config.datas[key])
            datakeys.push(key)
          }
          nobj1[ic+'_'+key] = value[colmn]
        }
      })

      rows = nobj
      paggings = Math.ceil(rows.length / (limit-1))

      if (pagging < 1){
        datas = nobj.filter((f, idxf) => idxf < limitdata)
        if (datas.length > (limit-1)) {
          paggings = Math.ceil(datas.length / (limit-1))
        } else {
          paggings = 1
        }

        datakeys = datakeys.filter((f, idxf) => idxf < limitdata)
      } else {
        datas = nobj.filter((f, idxf) => idxf < (limitdata*(pagging+1)) && idxf >= (limitdata*pagging))
        
        datakeys = datakeys.filter((f, idxf) => idxf < (limitdata*(pagging+1)) && idxf >= (limitdata*pagging))
      }
    } else {
      let loop = 0
      Object.keys(config.coloumns).map((ic) => {
        loop++
        colmn = config.coloumns[ic].toLowerCase()
        for (const [key, value] of Object.entries(config.datas)) {
          if (loop === 1) {
            nobj.push(config.datas[key])
            datakeys.push(key)
          }
          nobj1[ic+'_'+key] = value[colmn]
        }
      })

      rows = config.datas
      paggings = Math.ceil(rows.length / (limit-1))

      if (pagging < 1) {
        datas = nobj.filter((f, idxf) => idxf < limitdata)
        datakeys = datakeys.filter((f, idxf) => idxf < limitdata)
      } else {
        datas = nobj.filter((f, idxf) => idxf < (limitdata*(pagging+1)) && idxf >= (limitdata*pagging))

        datakeys = datakeys.filter((f, idxf) => idxf < (limitdata*(pagging+1)) && idxf >= (limitdata*pagging))
      }
    }

    Object.keys(config.coloumns).map((ic) => {
      for (let ifor = 0; ifor <= datakeys.length-1; ifor++) {
        nobj2.push(nobj1[ic+'_'+datakeys[ifor]])
      }
      nobj3[ic] = nobj2
      nobj2 = []
    })
    datas2 = nobj3
  }

  function handleSortBy(coloumn, sort = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(coloumn) || !b.hasOwnProperty(coloumn)) {
        return 0;
      }

      const aa = (typeof a[coloumn] === 'string')
        ? a[coloumn].toUpperCase() : a[coloumn];
      const bb = (typeof b[coloumn] === 'string')
        ? b[coloumn].toUpperCase() : b[coloumn];

      let comparison = 0;
      if (aa > bb) {
        comparison = 1;
      } else if (aa < bb) {
        comparison = -1;
      }

      let order = (sort === true) ? 'asc' : 'desc'
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  const handleSort = (coloumn, sort = true) => {
    if (coloumn !== false) {
      orderby = coloumn
      config.datas.sort(handleSortBy(coloumn.toLowerCase(), sort))
      handleDatas(limit)
    }
    
    // handleAction(config.store, {
    //   name: 'sort',
    //   payload: results
    // })
  }

  const handleLimit = (payload) => {
    pagging = 0
    paggings = config.datas.length
    handleDatas(payload)
  }

  const handleSearch = (e) => {
    handleDatas(limit)
  }

  const handleAction = (store, payload) => {
    dispatch("handleAction", {store, payload});
  }

  const handlePagging = (payload) => {
    if (search === '') {
      paggings = Math.ceil(config.datas.length / (limit-1))
    }
    if (payload >= 0 && payload <= (paggings-1)) {
      pagging = payload
      handleDatas(limit)
    }
  }
</script>

<div class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
  <div class="dataTable-top">
    
    <div class="dataTable-dropdown">
      <label>
        <select
          class="dataTable-selector"
          bind:value={limit}
          on:blur={() => handleLimit(limit)}
        >
        {#each limits as _, i}
          <option
            value={limits[i]}
            selected={limits[i] === limit}
            on:click={() => handleLimit(limit)}
          >{limits[i]}</option>
        {/each}
        </select> entries per page
      </label>
    </div>

    <div class="dataTable-search">
      <input
        class="dataTable-input"
        placeholder="Search..."
        type="text"
        bind:value={search}
        on:keydown={(e) => e.key === 'Enter' && handleDatas(limit)}
        on:keydown={(e) => e.key === 'Escape' && (search = '') && handleDatas(limit)}
      />
    </div>
  </div>

  <div class="dataTable-container">
    <table class="table table-striped dataTable-table" id="table2">
      <thead>
        <tr>
          <th data-sortable="" style="width: 55px;">
            <a href="/dtable" class="dataTable-sorter">#</a>
          </th>

          {#each config.coloumns as coloumn}
            <th>
              <a
                href="/dtable"
                class="dataTable-sorter"
                on:click|preventDefault={() => handleSort(coloumn.toLowerCase(), (sortby = !sortby))}
              >{coloumn.replace('_', ' ')}</a></th>
          {:else}
            <th colspan="100%">Data tidak ada!</th>
          {/each}

          <th data-sortable="" style="width: 20.1694%;">
            <a
              href="/dtable"
              class="dataTable-sorter"
              on:click|preventDefault={() => handleSort(false)}
            >Action</a>
          </th>

        </tr>
      </thead>
      <tbody>

      {#each datakeys as _, ia}
        <tr>
          <td>
            {(pagging+1) > 1 ? (nextnumber = (pagging)*limit, nextnumber = nextnumber+(ia+1), nextnumber) : (ia+1)}
          </td>
        {#each config.coloumns as _, ib}
          <td>
          {#each datas2[[ib]] as _, ic}
            {(ia === ic) ? datas2[ib][ia] : ''}
          {/each}
          </td>
        {/each}
          <td>
            <span
              class="badge bg-warning mb-1"
              on:click={() => handleAction(config.store, {
                name: 'edit',
                payload: datakeys[ia]
              })}
            >Edit</span>
            <span
              class="badge bg-danger"
              on:click={() => handleAction(config.store, {
                name: 'delete',
                payload: datakeys[ia]
              })}
            >Delete</span>
          </td>
        </tr>
      {/each}

      </tbody>
    </table>
  </div>

  <div class="dataTable-bottom">
    <div class="dataTable-info">Showing {(pagging+1) > 1 ? ((pagging)*limit+1) : 1} to {(pagging+1) > 1 ? ((pagging+1)*limit > rows.length ? rows.length : (pagging+1)*limit) : limit} of {rows.length} entries</div>

    <div class="dataTable-pagination">
      <li class="pager">
        <a
          href="/dtable"
          data-page={pagging-1}
          on:click|preventDefault={() => handlePagging(pagging-1)}
        >‹</a>
      </li>

    {#each Array(paggings) as _, i}
      <li
        class=""
        class:active={i===pagging}
      >
        <a
          href="/dtable"
          data-page={pagging}
          on:click|preventDefault={() => handlePagging(i)}
        >{i+1}</a>
      </li>
    {/each}

      <li class="pager">
        <a
          href="/dtable"
          data-page={pagging+1}
          on:click|preventDefault={() => handlePagging(pagging+1)}
        >›</a>
      </li>
    </div>
  </div>
</div>

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