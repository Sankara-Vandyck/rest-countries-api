const API_BASE_URL = "https://restcountries.com/v2"; 

export async function fetchCountryData(
  countryCode?: string,
  countryName?: string,
  borderAlphaCodes?: string
) {
  let endpoint = "/all"; 

  if (countryCode) {
    endpoint = `/alpha/${countryCode}`;
  } else if (countryName) {
    endpoint = `/name/${countryName}`;
  } else if (borderAlphaCodes) {
    endpoint = `/alpha?codes=${borderAlphaCodes}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  const data = await response.json();
  // console.log(data);
  return data;
}
