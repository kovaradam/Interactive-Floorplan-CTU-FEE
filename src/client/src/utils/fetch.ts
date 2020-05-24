export default async function (uri: string) {
  const response = await fetch("/api/" + encodeURI(uri), {
    headers: { 'Content-Type': 'application/json' }
  });
  return response.json();
}
