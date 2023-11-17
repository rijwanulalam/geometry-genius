function getInputValue(firstId, secondId) {
  const firstInputField = parseFloat(document.getElementById(firstId).value);
  const secondInputField = parseFloat(document.getElementById(secondId).value);
  if (isNaN(firstInputField && secondInputField)) {
    alert("please input number");
    location.reload();
  }
  else{
    const multiplicationValue = parseFloat(
        (firstInputField * secondInputField).toFixed(2)
      );
      return multiplicationValue;
  }
}

function getArea(titleId, container, triangleArea) {
  const title = document.getElementById(titleId).innerText;
  const ul = document.getElementById(container);
  const li = document.createElement("li");
  li.classList.add("list-decimal", "my-2");
  li.innerHTML =
    "" +
    title +
    " = " +
    triangleArea +
    " " +
    "cm<sup>2</sup>" +
    `<button class="ms-2 bg-sky-500 px-3 py-1 text-white rounded-lg hover:bg-sky-700 convert-to-m">convert to m<sup>2</sup></button> `;
  ul.appendChild(li);
}

// triangle
document.getElementById("triangle-btn").addEventListener("click", function () {
  const value = getInputValue("triangle-base", "triangle-height");
  const triangleArea = parseFloat((value * 0.5).toFixed(2));

  getArea("triangle", "area-container", triangleArea);
  // const title = document.getElementById("triangle").innerText;
  // const ul = document.getElementById("area-container");
  // const li = document.createElement("li");
  // li.classList.add("list-decimal", "my-2");
  // li.innerHTML ="" + title + " = " + triangleArea + " " + "cm<sup>2</sup>" + `<button class="ms-2 bg-sky-500 px-3 py-1 text-white rounded-lg hover:bg-sky-700">convert to m</button> `;
  // ul.appendChild(li);
});

// Reactangle
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const value = getInputValue("rectangle-width", "rectangle-height");
  const rectangleArea = parseFloat(value.toFixed(2));
  getArea("rectangle", "area-container", rectangleArea);
});

// parallelogram
document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    const value = getInputValue("parallelogram-base", "parallelogram-height");
    const parallelogramArea = parseFloat(value.toFixed(2));
    getArea("parallelogram", "area-container", parallelogramArea);
  });

// rhombus
document.getElementById("rhombus-btn").addEventListener("click", function () {
  const value = getInputValue("diagonal-1", "diagonal-2");
  const rhombusArea = parseFloat((0.5 * value).toFixed(2));
  getArea("rhombus", "area-container", rhombusArea);
});

// pentagon
document.getElementById("pentagon-btn").addEventListener("click", function () {
  const value = getInputValue("one-side", "diagonal");
  const pentagonArea = parseFloat((0.5 * value).toFixed(2));
  getArea("pentagon", "area-container", pentagonArea);
});

// ellipse
document.getElementById("ellipse-btn").addEventListener("click", function () {
  const value = getInputValue("x-axis", "y-axis");
  const pi = 3.14;
  const ellipseArea = parseFloat((pi * value).toFixed(2));
  getArea("ellipse", "area-container", ellipseArea);
});

document.getElementById("blog-btn").addEventListener("click", function(){
    window.location.href = "blog.html";
})



// background color
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
//  console.log(bgColor);
  
    // document.body.style.background = bgColor;
    return bgColor;
    }
// console.log(random_bg_color());
const cards = document.getElementsByClassName("bg");
for(const card of cards){
    card.addEventListener("mouseover", function(){
        card.style.backgroundColor = random_bg_color();
    })
}

// const convertButtons = document.querySelectorAll('.convert-to-m');

// convertButtons.forEach(convertButton => {
//   convertButton.addEventListener('click', function(event) {
//     console.log('box clicked', event);
//   });
// });