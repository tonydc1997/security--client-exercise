const userInputHTML = (input) => {
  const p = document.getElementById("pleaseNo");
  // Bad
  // p.innerHTML = input;

  // Better
  let textnode = document.createTextNode(input);
  p.appendChild(textnode);
}

const sentToServer = () => {
  const input = document.querySelector('#userInput').value;
  userInputHTML(input);
  fetch('http://localhost:3000/secret', {
    method: 'POST',
    body: JSON.stringify({userInput: input}),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
}