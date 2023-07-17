export async function getFees() {
  const response = await fetch('https://beaconcha.in/api/v1/execution/gasnow');
  return response.text();
}
