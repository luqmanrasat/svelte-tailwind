<script lang="ts">
  export let title: string;
  export let writer: string;
  export let image: { file: string; alt: string };
</script>

<div class="bg-white rounded overflow-hidden shadow-md">
  <img class="w-full h-32 sm:h-48 object-cover" src={`images/${image.file}`} alt={image.alt} />
  <div class="m-4">
    <span class="font-bold">
      {title}
    </span>
    <span class="block text-gray-500 text-sm">
      {writer}
    </span>
  </div>
</div>
