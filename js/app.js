function getInputValue(firstId, secondId){
    const firstInputField = parseFloat(document.getElementById(firstId).value);
    const secondInputField = parseFloat(document.getElementById(secondId).value);
    const multiplicationValue = parseFloat((firstInputField * secondInputField).toFixed(2));
    return multiplicationValue;
}

document.getElementById("triangle-btn").addEventListener("click", function(){
    const value = getInputValue("triangle-base", "triangle-height")
    const triangleArea = parseFloat((value * 0.5).toFixed(2));

    const title = document.getElementById("triangle").innerText;
    const ul = document.getElementById("area-container");
    const li = document.createElement("li");
    li.classList.add("list-decimal", "my-2");
    li.innerHTML ="" + title + " = " + triangleArea + " " + "cm<sup>2</sup>" + `<button class="ms-2 bg-sky-500 px-3 py-1 text-white rounded-lg hover:bg-sky-700">convert to m</button> `;
    ul.appendChild(li);
})