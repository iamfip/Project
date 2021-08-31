 const loadquotes = () => {
     fetch('https://api.kanye.rest/')
     .then(response => response.json())
     .then(data => displayquote(data));
 }

 const displayquote= quote =>{
     const getElement=document.getElementById('quote');
     getElement.innerText=quote.quote + " !";
     
     
 }