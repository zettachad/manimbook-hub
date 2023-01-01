<script lang="ts">
  export let data: any;
  import Card from "$lib/card.svelte";
  function ger_cover_url(name: string, author: string) {
    return `https://api.manimbooks.kush.in/raw/uploads/${author}/${name}/cover.png`;
  }
</script>

<h2 class="p-16 font-bold">Recent Uploads</h2>
<div class="container gap-1 h-full mx-auto grid justify-center items-center">
  {#each data.books as book}
    <Card
      cover_url={ger_cover_url(book.bookName, book.author)}
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
