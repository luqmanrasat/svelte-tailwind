<script lang="ts">
  import ClockIcon from '../assets/icons/clock.svg';

  export let title: string;
  export let writer: string;
  export let image: { file: string; alt: string };
  export let time: number;
</script>

<div class="card hover:shadow-lg">
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
    <svelte:component this={ClockIcon} class="inline-block w-5" />
    <span>{time} {time === 1 ? 'min' : 'mins'}</span>
  </div>
</div>
