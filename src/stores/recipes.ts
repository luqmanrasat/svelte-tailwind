import { writable, derived } from 'svelte/store';

type Recipe = {
  title: string;
  writer: string;
  image: {
    file: string;
    alt: string;
  };
  time: number;
};

function createRecipes() {
  const { subscribe, set, update } = writable<Recipe[]>([]);

  return {
    subscribe,
    addRecipe: (newRecipe: Recipe) =>
      update((recipes) => [...recipes, newRecipe]),
    addManyRecipes: (newRecipes: Recipe[]) =>
      update((recipes) => [...recipes, ...newRecipes]),
    reset: () => set([]),
  };
}

export const recipes = createRecipes();

export const latestRecipe = derived(recipes, ($recipes) => {
  const latestBy = 3;
  return $recipes.slice($recipes.length - latestBy);
});
