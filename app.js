// Global constants
const GIFarea = document.querySelector(".gifArea");
const apiKey  = "q6YZg1rBbF9UBQ27N6wgl743CJBiTLVm";
const limit   = 9;
const rating  = "g";
const gifForm = document.querySelector("form");

gifForm.addEventListener("submit", getResults)

async function getResults(evt){
    evt.preventDefault()
    const gifName      = evt.target.gif;
    const gif          = gifName.value;
    // const apiURL  = `api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${gif}`;
    const apiURL       = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${gif}&limit=${limit}`;
    // // go to gif api 
    const response     = await fetch(apiURL);
    const responseData = await response.json();
    console.log(responseData.data[0]);
    // // get data on dom 
    responseData.data.map(displayResults)

}

function displayResults(gifData){
    // console.log(gifData.url)
    GIFarea.innerHTML+= `
    <h1>${gifData.title}</h1>
    <img src = "${gifData.images.preview_gif.url}">
    `
}