<script lang="ts">
  import Card from "./CardRecipe.svelte";
  import { latestRecipe } from "../stores/recipes";
</script>

<div>
  {#if !$latestRecipe}
    <p>No recipe is stored.</p>
  {:else}
    <!-- cards go here -->
    <Card {...$latestRecipe} />
  {/if}
</div>
