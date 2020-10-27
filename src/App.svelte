<script>
  import { Router } from "@sveltech/routify";
  import { routes } from "../.routify/routes";
  import { isLoading } from "@/tools/store";
  import Loading from "@/tools/Loading.svelte";
</script>

{#if $isLoading}
  <Loading />
{/if}
<Router {routes} />
