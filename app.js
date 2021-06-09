// Global constants
const GIFarea = document.querySelector(".gifArea");
const apiKey  = "q6YZg1rBbF9UBQ27N6wgl743CJBiTLVm";
const limit   = 9;
const rating = "g";
const gifForm = document.querySelector("form");

gifForm.addEventListener("submit", (e) => {e.preventDefault()});
gifForm.addEventListener("submit", (e) => getResults(e));


async function getResults(evt){
    evt.preventDefault()
    console.log(evt.target.gif);
    // const gifName = event.target.gif;
    // const gif     = gifName.value;
    // const apiURL  = `api.giphy.com/v1/gifs/search?api=${apiKey}&q=${gif}`;
    // // go to gif api 
    // const response = await fetch(apiURL);
    // const responseData = await response.json();
    // console.log(responseData);
    // // get data on dom 
    // displayResults(responseData);

}

function generateHTML(gifData){
    GIFarea.innerHTML= `
    <h1>works</h1>
    <img scr = "${rating}>
    
    `
}