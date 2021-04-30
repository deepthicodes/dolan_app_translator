var btnTranslate = document.querySelector("#btn-translate");

var textInput = document.querySelector("#txtinput");

var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/dolan.json"

function getTranslationalURL(input) {
   return serverURL + "?" + "text=" + input
           
}

function errorHandler(error)
{
    console.log("error occured", error);
    alert("something went wrong with the server.Try again later");
}

function clickHandler() {
    var inputText = textInput.value; //taking input
    //calling server for processing
    fetch(getTranslationalURL(inputText)) 
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText =translatedText; //output
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler)