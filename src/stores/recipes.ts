import { writable, derived } from "svelte/store";

type Recipe = {
  title: string;
  writer: string;
  image: {
    file: string;
    alt: string;
  };
};

function createRecipes() {
  const { subscribe, set, update } = writable<Recipe[]>([]);

  return {
    subscribe,
    addRecipe: (recipe: Recipe) => update((recipes) => [...recipes, recipe]),
    reset: () => set([]),
  };
}

export const recipes = createRecipes();

export const latestRecipe = derived(
  recipes,
  ($recipes) => $recipes[$recipes.length - 1]
);
