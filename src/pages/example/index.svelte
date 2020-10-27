<script>
    import json from "./data.json";
    import Datatable from "@/themes/voler/datatable.svelte";

    let data = {
        header: "Customer",
        title: ["#", "Name", "Position", "Company"],
        json: json,
    };
</script>

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
    <Datatable {data} />
</section>
