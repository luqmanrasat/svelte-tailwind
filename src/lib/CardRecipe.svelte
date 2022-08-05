<script lang="ts">
  export let title: string;
  export let writer: string;
  export let image: { file: string; alt: string };
  export let time: number;
</script>

<div class="card">
  <img
    class="w-full h-32 sm:h-48 object-cover"
    src={`images/${image.file}`}
    alt={image.alt}
  />
  <div class="m-4">
    <span class="font-bold">
      {title}
    </span>
    <span class="block text-gray-500 text-sm">
      {writer}
    </span>
  </div>
  <div class="badge">
    <span>{time} {time === 1 ? 'min' : 'mins'}</span>
  </div>
</div>

<style>
  .card {
    @apply bg-white rounded overflow-hidden shadow-md relative;
  }

  .badge {
    @apply bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2;
  }
</style>
