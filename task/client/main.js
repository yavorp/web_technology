import { countries, countryStatesMap } from './countries.js';

const countriesSelect = document.getElementById('country');

for (const country of countries) {
  const element = document.createElement('option');
  element.innerText = country;
  element.setAttribute('value', country);
  countriesSelect.appendChild(element);
}