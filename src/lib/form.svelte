<script lang="ts">
  let ch = 1;
</script>

<form
  method="POST"
  action="https://api.manimbooks.kush.in/new_book"
  enctype="multipart/form-data"
  class="grid gap-2"
>
  <label for="book_title">
    <span>Book Name</span>
    <input type="text" name="book_title" minlength="2" required />
  </label>
  <label for="author">
    <span>Author</span>
    <input type="text" name="author" minlength="2" required />
  </label>
  <label for="cover">
    <span>Book Cover</span>
    <input type="file" name="cover" required />
  </label>
  {#each Array(ch) as _, i}
    <label for="chapter {i + 1}">
      <span>Chapter {i + 1}</span>
      <input type="file" name="ch{i + 1}" required />
    </label>
  {/each}
  <button class="btn btn-sm btn-ghost-surface" on:click={() => ch++}
    >Add Chapter</button
  >
  <button class="btn btn-ghost-surface" type="submit">Submit</button>
</form>
