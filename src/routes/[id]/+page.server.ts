import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, fetch }) => {
    const { id } = params;
    const response = await fetch(`/api/getBook?id=${id}`);
    const data = await response.json();
    if (!data) {
        return error(404, "Not found");
    }
    return { parameters: params, books: data };
}