<script lang="ts">
  import Card from './CardRecipe.svelte';
  import { latestRecipe } from '../stores/recipes';
</script>

{#if $latestRecipe.length === 0}
  <p>No latest recipe.</p>
{:else}
  <!-- cards go here -->
  {#each $latestRecipe as recipe}
    <Card {...recipe} />
  {/each}
{/if}
