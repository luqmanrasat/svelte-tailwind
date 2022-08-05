<script lang="ts">
  import Card from "./CardRecipe.svelte";
  import { latestRecipe } from "../stores/recipes";
</script>

<h4 class="font-bold">Latest Recipes</h4>
<div>
  {#if !$latestRecipe}
    <p>No recipe is stored.</p>
  {:else}
    <!-- cards go here -->
    <Card {...$latestRecipe} />
  {/if}
</div>
