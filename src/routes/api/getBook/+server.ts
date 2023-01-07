import type { PageServerLoad } from './$types';
import { json } from '@sveltejs/kit';
import { getBook } from '$lib/cosmosClient';

export const GET = (async ({ url }) => { 
    const bookId = url.searchParams.get('id')
    if (!bookId) {
        return new Response("No book id provided")
    }
    const book = await (await getBook(bookId)).resources[0]
    return json(book)
}) satisfies PageServerLoad


