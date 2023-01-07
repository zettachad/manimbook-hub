<script lang="ts">
  let ch = 1;
  let name: string;
  let author: string;
  let form: HTMLFormElement;

  function handleSubmit() {
    fetch(
      `https://upload-book.azurewebsites.net/api/UploadManimBooks?book_title=${name}&author=${author}`,
      {
        method: "POST",
        body: new FormData(form),
      }
    ).then((res) => {
      if (res.status !== 200) {
        window.alert("Something went wrong");
        return;
      }
      window.open(
        `/${Buffer.from(author + name, "utf8").toString("hex")}`,
        "_self"
      );
    });
  }
</script>

<form
  bind:this={form}
  on:submit={handleSubmit}
  enctype="multipart/form-data"
  class="grid gap-2"
>
  <label for="book_title">
    <span>Book Name</span>
    <input
      bind:value={name}
      type="text"
      name="book_title"
      minlength="2"
      required
    />
  </label>
  <label for="author">
    <span>Author</span>
    <input
      bind:value={author}
      type="text"
      name="author"
      minlength="2"
      required
    />
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
  <button class="btn btn-ghost-primary" type="submit">Upload</button>
</form>
