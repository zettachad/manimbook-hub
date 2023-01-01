<script lang="ts">
  import "@skeletonlabs/skeleton/themes/theme-rocket.css";
  import "@skeletonlabs/skeleton/styles/all.css";
  import "../app.postcss";
  import { AppShell, AppBar } from "@skeletonlabs/skeleton";
  import { Modal, modalStore } from "@skeletonlabs/skeleton";
  import type { ModalSettings, ModalComponent } from "@skeletonlabs/skeleton";
  import Form from "$lib/form.svelte";

  function triggerForm(): void {
    const modalComponent: ModalComponent = {
      ref: Form,
      slot: "<p>Upload</p>",
    };
    const d: ModalSettings = {
      type: "component",
      component: modalComponent,
    };
    modalStore.trigger(d);
  }
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
  <svelte:fragment slot="header">
    <!-- App Bar -->
    <AppBar>
      <svelte:fragment slot="lead">
        <strong class="text-xl uppercase">ManimBooks</strong>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <button
          class="btn btn-sm btn-ghost-surface"
          on:keypress={() => triggerForm()}
          on:click={() => triggerForm()}>Upload</button
        >
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <!-- Page Route Content -->
  <slot />
</AppShell>
<Modal />
