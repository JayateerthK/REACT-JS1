const root = document.querySelector("#root");
const heading = document.querySelector("h1");
root.innerHTML= "Hello World!";
heading.innerHTML = "The test line is working";
document.appendChild(root, heading);