const quoteContainer = document.getElementById('quote-container');    //this will cover the container
const quoteText = document.getElementById('quote');     //this is for the quote be written
const authorText = document.getElementById('author');       //this is where the author name will be displayed
const twitterBtn = document.getElementById('twitter');      //this the twitter button 
const newQuoteBtn = document.getElementById('new-quote');       //this is the new quote button

let apiQuots = [];

function localQuote() {
    // to pick the randome number 
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text; 
    console.log(quote);
}

async function getQuots(){
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();   //we already assign the apiQuotes as a globle variable
        localQuote();  //it will bring the any single quote out of them all
    }catch(error){
        console.log(error);
    }
}
getQuots();


// // ----------another method is this following:
// const getQuots = async () =>{
//     const response =await fetch('https://type.fit/api/quotes');
//     const apiQuots = await response.json();
//     return console.log(apiQuots[12]);
// }
// getQuots();