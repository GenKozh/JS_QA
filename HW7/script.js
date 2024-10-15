//Task 1
let newWindow;

newWindow = window.open('', '', 'width=300,height=300');

setTimeout(() => {
  newWindow.resizeTo(500, 500);
}, 2000);

setTimeout(() => {
  newWindow.moveTo(200, 200);
}, 4000);

setTimeout(() => {
  newWindow.close();
}, 6000);

//Task 2
function changeCSS() {
  const paragraph = document.getElementById('text');
  paragraph.style.color = 'orange';
  paragraph.style.fontSize = '20px';
  paragraph.style.fontFamily = 'Comic Sans MS';
}

document.querySelector('button').addEventListener('click', changeCSS);

//Task 3
document.getElementById('btn1').addEventListener('click', function () {
  document.body.style.backgroundColor = 'blue';
});

document.getElementById('btn2').addEventListener('dblclick', function () {
  document.body.style.backgroundColor = 'pink';
});

const btn3 = document.getElementById('btn3');
btn3.addEventListener('mousedown', function () {
  document.body.style.backgroundColor = 'brown';
});
btn3.addEventListener('mouseup', function () {
  document.body.style.backgroundColor = 'white';
});

const hoverLink = document.getElementById('hoverLink');
hoverLink.addEventListener('mouseover', function () {
  document.body.style.backgroundColor = 'yellow';
});
hoverLink.addEventListener('mouseout', function () {
  document.body.style.backgroundColor = 'white';
});

//Task 4

function deleteSelectedItem() {
  const dropdown = document.getElementById('dropdown');
  dropdown.remove(dropdown.selectedIndex);
}

//Task 5
const button = document.getElementById('button');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = "I was pressed!";
});

button.addEventListener('mouseover', () => {
  message.textContent = "Mouse on me!";
});

button.addEventListener('mouseout', () => {
  message.textContent = "Mouse is not on me!";
});

//Task 6

function updateWindowSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  document.getElementById("windowSize").textContent = `Width: ${width}px, Height: ${height}px`;
}

updateWindowSize();

window.addEventListener("resize", updateWindowSize);


//Task 7 

const countryElement = document.getElementById('country');
const citiesElement = document.getElementById('cities');
const selectionElement = document.getElementById('selection');

const countryToCities = {
  ger: ["Berlin", "Munich", "Hamburg"],
  usa: ["New York", "Los Angeles", "Chicago"],
  ukr: ["Kyiv", "Lviv", "Odessa"]
};

countryElement.addEventListener('change', function () {
  const selectedCountry = countryElement.value;
  const cities = countryToCities[selectedCountry];

  citiesElement.innerHTML = '';

  cities.forEach(city => {
    const option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    citiesElement.appendChild(option);
  });

  updateSelection();
});

citiesElement.addEventListener('change', updateSelection);

function updateSelection() {
  const selectedCountryText = countryElement.options[countryElement.selectedIndex].text;
  const selectedCityText = citiesElement.value;
  selectionElement.textContent = `Selected Country: ${selectedCountryText}, Selected City: ${selectedCityText}`;
}

countryElement.dispatchEvent(new Event('change'))