<script lang="ts">
  import Nav from './lib/Nav.svelte';
  import LatestRecipe from './lib/LatestRecipe.svelte';
  import PopularRecipe from './lib/PopularRecipe.svelte';
  import { recipes } from './stores/recipes';
  import Feature from './lib/Feature.svelte';

  recipes.addManyRecipes([
    {
      title: '5 Bean Chili Stew',
      writer: 'Recipe by Mario',
      image: {
        file: 'stew.jpg',
        alt: 'stew',
      },
      time: 25,
    },
    {
      title: 'Veg Noodles',
      writer: 'Recipe by Mario',
      image: {
        file: 'noodles.jpg',
        alt: 'noodles',
      },
      time: 25,
    },
    {
      title: 'Tofu Curry',
      writer: 'Recipe by Mario',
      image: {
        file: 'curry.jpg',
        alt: 'curry',
      },
      time: 25,
    },
  ]);
</script>

<div class="grid md:grid-cols-3">
  <div class="md:col-span-1">
    <Nav />
  </div>
  <main class="md:col-span-2 bg-gray-100 px-16 py-6">
    <div class="flex justify-center md:justify-end">
      <a class="text-primary" href="#">Log in</a>
      <a class="text-primary ml-2" href="#">Sign up</a>
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
    <div class="flex justify-center">
      <div class="bg-secondary-100 text-secondary-200">Load more</div>
    </div>
  </main>
</div>

<style>
</style>
