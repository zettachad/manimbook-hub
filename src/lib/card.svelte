<script lang="ts">
  export let cover_url: string;
  export let title: string;
  export let author: string;
  export let id: string;
  // open book on click
  const openBook = () => {
    window.open(`/${id}`, "_blank");
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => openBook()} class="card">
  <img class="h-full w-full object-cover" src={cover_url} alt="Book Cover" />
  <div class="info">
    <h3 class="text-xl font-bold">{title}</h3>
    <p class="text-sm">{author}</p>
  </div>
</div>

<style lang="postcss">
  .card {
    @apply w-64 h-72 bg-gray-900 rounded-lg drop-shadow-2xl overflow-hidden my-0 mx-auto;
  }
  .info {
    @apply z-10 sticky text-gray-200 bottom-0 left-0 w-full  bg-gradient-to-tr  from-black p-4;
  }
  img {
    opacity: 0.5;
  }
</style>
