<script lang="ts">
  export let title: string;
  export let writer: string;
  export let image: { file: string; alt: string };
</script>

<div>
  <img src={`images/${image.file}`} alt={image.alt} />
  <div>
    <span>
      {title}
    </span>
    <span>
      {writer}
    </span>
  </div>
</div>
