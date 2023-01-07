import azure from "svelte-adapter-azure-swa";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: azure(),
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  vitePlugin: {
    experimental: {
      inspector: {
        holdMode: true,
      },
    },
  },
};

export default config;
