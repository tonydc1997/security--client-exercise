const userInputHTML = (input) => {
  const p = document.getElementById("pleaseNo");
  // Bad
  // p.innerHTML = input;

  // Better
  let textnode = document.createTextNode(input);
  p.appendChild(textnode);
}