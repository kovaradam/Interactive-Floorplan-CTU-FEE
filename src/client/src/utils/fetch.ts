export default function myFetch(url: string) {
  return fetch("/api/" + url, {
    headers: { 'Content-Type': 'application/json' }
  }).then((response: any) => {
    return response.json();
  });
}
