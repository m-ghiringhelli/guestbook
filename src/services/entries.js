import { client } from './client';

export async function getEntries() {
  const request = await client.from('entries').select('*');
  return request;
}