import { countries, countryStatesMap } from './countries.js';

const countriesDropdown = document.getElementById('country');
for (const country of countries) {
  const element = document.createElement('option');
  element.innerText = country;
  element.setAttribute('value', country);
  countriesDropdown.appendChild(element);
}
setStates(countries[0]);

const stateDropdown = document.getElementById('state');
setDefaultOption(stateDropdown);

countriesDropdown.addEventListener('change', event => {
  setStates(event.target.value);
});

function clearContent(element) {
  
  while(element.children.length > 0) {
    element.firstChild.remove();
  }
}

function setDefaultOption(dropdownElement) {
  const element = document.createElement('option');
  element.setAttribute('value', '');
  element.innerText = 'Select one'
  dropdownElement.appendChild(element);
}

function setStates(country) {
  if (typeof(country) !== 'string') {
    throw new Error('Invalid country was passed');
  }
  const states = countryStatesMap.get(country);
  const statesDropdown = document.getElementById('state');
  clearContent(statesDropdown);
  if (states) {
    states.forEach(state => {
      const element = document.createElement('option');
      element.innerText = state;
      element.setAttribute('value', state);
      statesDropdown.appendChild(element);
    });
    statesDropdown.disabled = false;
    return;
  }
  alert('Check countries');
}
