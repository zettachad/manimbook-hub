import { CosmosClient } from "@azure/cosmos";
import { env } from "$env/dynamic/private"

const endpoint = process.env.ENDPOINT;
const key = process.env.KEY;

if (!endpoint) {
    throw new Error("No endpoint found");
}
if (!key) {
    throw new Error("No key found");
}
const client = new CosmosClient({ endpoint, key });
const database = client.database("books");
const container = database.container("bookData");

function getBook(id: string) {
    return container.items.query(`SELECT * FROM c WHERE c.id = '${id}'`).fetchAll()
}

function getBooks() {
    return container.items.query(`SELECT * FROM c`).fetchAll()
}

export { getBook }
export { getBooks }

export default container