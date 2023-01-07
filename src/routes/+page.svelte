<script lang="ts">
  export let data: any;
  import Card from "$lib/card.svelte";
</script>

<h2 class="p-8 font-bold">Recent Uploads</h2>
<div class="container gap-8 h-auto m-auto p-2 grid justify-center">
  {#each data.books as book}
    <Card
      id={book.id}
      cover_url={book.cover}
      title={book.bookName}
      author={book.author}
    />
  {/each}
</div>

<style lang="postcss">
  .container {
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  }
</style>
