let apiQuots = [];

function newQuote() {
    // to pick the randome number 
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

async function getQuots(){
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();   //we already assign the apiQuotes as a globle variable
        newQuote();  //it will bring the any single quote out of them all
    }catch(error){
        console.log(error)
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