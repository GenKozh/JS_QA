//Task 1
document.getElementById('test').innerHTML = 'Last';
document.querySelector1('#test').innerHTML = 'Last';

//Task 2
document.querySelector2('.image').src = 'cat.jpg';


function showModal() {
  const imgElement = document.querySelector2('.image');
  alert(imgElement.outerHTML);
}

window.onload = showModal;

//Task 3
document.addEventListener("DOMContentLoaded", () => {
  const paragraphs = document.querySelectorAll("#text p");

  paragraphs.forEach((paragraph, index) => {
    console.log(`Selector text ${index}: ${paragraph.textContent}`);
  });
});

//Task 4

// <ul id="list">
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
//   <li>4</li>
//   <li>5</li>
// </ul>

// Approach 1: Using direct index access
function displayContentMethod1() {
  const list = document.querySelectorAll('#list li');
  const order = [0, 4, 1, 3, 2];
  const result = order.map(index => list[index].textContent).join(', ');
  console.log('Output result:', result);
}

displayContentMethod1();


//Task 5
/* <h1>I'm a big header!!!</h1>
<div id="myDiv">
  <p>First paragraph</p>
  <p>Second paragraph</p>
  <p>Third paragraph</p>
  <p>Fourth paragraph</p>
</div>
<ul id="myList">
  <li>Make</li>
  <li>me</li>
  <li>horizontal !</li>
</ul>
<span>Make me invisible, please!</span> */


const header = document.querySelector("h1");
header.textContent = "I'm big header";
header.style.fontWeight = "bold";
header.style.backgroundColor = "green";

const paragraphs = document.querySelectorAll("#myDiv p");
paragraphs[0].style.fontWeight = "bold"; // First paragraph - bold
paragraphs[1].style.color = "red"; // Second paragraph - red text
paragraphs[2].style.textDecoration = "underline"; // Third paragraph - underlined
paragraphs[3].style.fontStyle = "italic"; // Fourth paragraph - italic

const span = document.querySelector("span");
span.style.display = "none";

//Task 6

function executeTasks() {
  const message1 = prompt("Enter the first message:");
  const message2 = prompt("Enter the second message:");

  const input1 = document.getElementById('input1');
  const input2 = document.getElementById('input2');
  input1.value = message1;
  input2.value = message2;

  const tempValue = input1.value;
  input1.value = input2.value;
  input2.value = tempValue;
}

//Task 7 

const mainElement = document.createElement('main');
mainElement.className = 'mainClass check item';

const divElement = document.createElement('div');
divElement.id = 'myDiv';

const paragraphElement = document.createElement('p');
paragraphElement.textContent = 'First paragraph';

divElement.appendChild(paragraphElement);

mainElement.appendChild(divElement);

document.body.appendChild(mainElement);