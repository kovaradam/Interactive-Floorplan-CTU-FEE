export default async function myFetch(url: string) {
  const response = await fetch("/api/" + url, {
    headers: { 'Content-Type': 'application/json' }
  });
  return response.json();
}
