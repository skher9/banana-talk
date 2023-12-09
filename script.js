const Input = document.querySelector(".input");
const Btn = document.querySelector(".btn");
const Output = document.querySelector(".output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function Translation(input) {
  return serverURL + "?" + "text=" + Input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time");
}

function clickhandler() {
  var inputxt = Input.value;

  fetch(Translation(inputxt))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      Output.innerText = translatedText;
    })
    .catch(errorHandler);
}

Btn.addEventListener("click", clickhandler);
