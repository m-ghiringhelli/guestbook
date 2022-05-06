import { client } from './client';

export async function getEntries() {
  const request = await client.from('entries').select('*');
  return request;
}

export async function addEntry(entry) {
  const request = await client.from('entries').insert({ content: entry });
  return request;
}