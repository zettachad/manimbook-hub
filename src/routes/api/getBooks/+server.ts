import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { getBooks } from '$lib/cosmosClient';

export const GET = (async () => { 
    const books = (await getBooks()).resources
    return json(books)
}) satisfies RequestHandler


