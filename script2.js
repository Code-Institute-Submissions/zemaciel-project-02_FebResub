// define the object for the question entity
let movieQuote = {
    title: 'Show me the money',
    alternatives: ['MovieA', 'MovieB', 'MovieC', 'MovieD'],
    correctAnswer: 1
  };
  

  let titleDiv = document.getElementById('title');
  titleDiv.textContent = movieQuote.title;



  function showQuote(q) {
    
    let titleDiv = document.getElementById('title');
    titleDiv.textContent = movieQuote.title;
  
  }
 
  showQuote(movieQuote);