<script lang="ts">
  import { onMount } from "svelte";
  export let data: any;
  const { id } = data.parameters;
  let done = data.books.status;
  let interval: any;

  const url = `https://manimbookupload.blob.core.windows.net/$web/read/${id}/index.html`;
  let refresh = () => {
    fetch(`/api/getBook?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        done = data.books.status;
      });
  };
  function copyUrl() {
    navigator.clipboard.writeText(url);
    window.alert("Copied to clipboard");
  }
  function openBook() {
    window.open(url, "_blank");
  }
  onMount(() => {
    interval = setInterval(refresh, 1000);
  });
</script>

<h2 class="p-8 font-bold">{data.books.bookName}</h2>
<div class="container m-auto p-48 flex justify-center gap-3">
  {#if done !== "Done"}
    <h3>Your book is still being created.</h3>
    <p>
      Status: {done}
    </p>
    <button class="btn btn-ringed-secondary"> Refresh </button>
  {:else}
    <button on:click={openBook} class="btn btn-filled-primary">Open Book</button
    >
    <button on:click={copyUrl} class="btn btn-filled-secondary">Copy URL</button
    >
  {/if}
</div>
