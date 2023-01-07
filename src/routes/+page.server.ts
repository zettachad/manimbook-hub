import type { PageServerLoad } from "./$types";
export const load: PageServerLoad = async ({ fetch }) => {
  const books = fetch("/api/getBooks").then((r) => r.json());
  return { books: books };
}
