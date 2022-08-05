<script lang="ts">
  export let title: string;
</script>

<h4 class="font-bold mt-12 pb-2 border-b border-gray-200">{title}</h4>
<div class="mt-8 ">
  <slot></slot>
</div>