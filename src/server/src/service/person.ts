import usermap from '../utils/usermap-broker';
import fetch from 'node-fetch';

export async function getPersonFromUsermap(query: string): Promise<any> {
  const response = await fetch(usermap.url(query), {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${usermap.ACCESS_TOKEN}`
    }
  });
  const json = await response.json();
  return json;
}
