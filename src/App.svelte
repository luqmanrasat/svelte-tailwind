<script lang="ts">
  import Nav from './lib/Nav.svelte';
  import LatestRecipe from './lib/LatestRecipe.svelte';
  import PopularRecipe from './lib/PopularRecipe.svelte';
  import { recipes } from './stores/recipes';
  import Feature from './lib/Feature.svelte';

  recipes.addRecipe({
    title: '5 Bean Chili Stew',
    writer: 'Recipe by Mario',
    image: {
      file: 'stew.jpg',
      alt: 'stew',
    },
  });
</script>

<div>
  <div>
    <Nav />
  </div>
  <main class="px-16 py-6">
    <div>
      <a href="#">Log in</a>
      <a href="#">Sign up</a>
    </div>
    <header>
      <h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
      <h3 class="text-2xl font-semibold">For Ninjas</h3>
    </header>
    <div>
      <Feature title="Latest Recipes">
        <LatestRecipe />
      </Feature>
      <Feature title="Most Popular">
        <PopularRecipe />
      </Feature>
    </div>
    <div>
      <div>Load more</div>
    </div>
  </main>
</div>

<style>
</style>
