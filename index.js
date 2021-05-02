var btTranslate = document.querySelector('#click');
var txtinput = document.querySelector('#input');
var output = document.querySelector('#output');


var serverURL = "https://api.funtranslations.com/translate/minion.json";
function erroHandler(error){
    console.log("error occured", error);
    // alert("something wrong with server try again later");
}

function getURL(text){
    // console.log(serverURL+"?"+"text="+text)
return serverURL+"?"+"text="+text;

}



function buttonhandler(){

    var textinput = txtinput.value;
    // console.log(getURL(textinput));
    fetch(getURL(textinput))
    .then(response => response.json())
    .then(json => {
        
        var translatedText = json.contents.translated;
        output.innerHTML= translatedText;
    })
    .catch(erroHandler());
}
btTranslate.addEventListener("click",buttonhandler);