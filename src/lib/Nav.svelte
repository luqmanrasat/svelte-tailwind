<script lang="ts">
  import BurgerIcon from '../assets/icons/burger.svg';
  import HomeIcon from '../assets/icons/home.svg';
  import AboutIcon from '../assets/icons/about.svg';
  import ContactIcon from '../assets/icons/contact.svg';

  const links = [
    {
      text: 'Home',
      link: '#',
      icon: HomeIcon,
    },
    {
      text: 'About',
      link: '#',
      icon: AboutIcon,
    },
    {
      text: 'Contact',
      link: '#',
      icon: ContactIcon,
    },
  ];

  $: active = 'Home';
  $: showNav = false;
</script>

<nav class="text-right">
  <div class="flex justify-between items-center">
    <h1 class="font-bold uppercase p-4 border-b border-gray-100">
      <a class="hover:text-gray-700" href="/">Food Ninja</a>
    </h1>
    <div
      class="px-4 cursor-pointer md:hidden"
      on:click={() => (showNav = !showNav)}
    >
      <svelte:component this={BurgerIcon} class="w-6" />
    </div>
  </div>
  <ul class="text-sm mt-6 md:block" class:hidden={!showNav}>
    {#each links as { text, link, icon }}
      <li class="py-1" class:active={active === text}>
        <a
          class="px-4 flex justify-end border-r-4 border-white"
          href={link}
          on:click={() => (active = text)}
        >
          <span>{text}</span>
          <svelte:component this={icon} class="w-5 ml-2" />
          <!-- use svelte:component to add class on svg -->
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .active {
    @apply text-gray-700 font-bold;
  }

  .active > a {
    @apply border-primary;
  }
</style>
