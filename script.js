let apiQuots = [];
const getQuots = async () => {
    const apiUrl = 'https://type.fit/api/quotes'
    try{
        const response = await fetch(apiUrl);
        apiQuots = await response.json();
        console.log(apiQuots[12]);
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