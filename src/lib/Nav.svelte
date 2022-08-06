<script lang="ts">
  import HomeIcon from "../assets/icons/home.svg";
  import AboutIcon from "../assets/icons/about.svg";
  import ContactIcon from "../assets/icons/contact.svg";

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
</script>

<nav>
  <div>
    <h1 class="font-bold uppercase p-4 border-b border-gray-100">
      <a class="hover:text-gray-700" href="/">Food Ninja</a>
    </h1>
  </div>
  <ul>
    {#each links as { text, link, icon }}
      <li class:active={active === text}>
        <a href={link}>
          <span>{text}</span>
          <svelte:component this={icon} class="w-5" /> <!-- use svelte:component to add class on svg -->
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .active {
    @apply text-gray-700 font-bold;
  }
</style>
