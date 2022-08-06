<script lang="ts">
  const links = [
    {
      text: 'Home',
      link: '#',
    },
    {
      text: 'About',
      link: '#',
    },
    {
      text: 'Contact',
      link: '#',
    },
  ];

  $: active = 'Home';
</script>

<nav>
  <div>
    <h1 class="font-bold uppercase p-4 border-b border-gray-100">
      <a href="/">Food Ninja</a>
    </h1>
  </div>
  <ul>
    {#each links as { text, link }}
      <li class:active={active === text}>
        <a href={link}><span>{text}</span></a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .active {
    @apply text-gray-700 font-bold;
  }
</style>
