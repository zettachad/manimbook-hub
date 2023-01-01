import { error } from "@sveltejs/kit"; 
export async function load() {
    const response = await fetch('https://api.manimbooks.kush.in/get_books');
    const data = await response.json();
    if (!data) {
        return error(404, 'Not found');
    }
    console.log(data);
    return {books: data};
}