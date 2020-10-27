<script>
  import { Router } from "@sveltech/routify";
  import { routes } from "../.routify/routes";
  import {isLoading} from '@/store'
  import Loading from '@/Loading.svelte'
</script>
{#if $isLoading}
	<Loading/>
{/if}
<Router {routes} />