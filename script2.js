
let movieQuote = {
    title: 'Show me the money',
    filmTitles: ['MovieA', 'MovieB', 'MovieC', 'MovieD'],
    correctAnswer: 1
  };


//  movieQuote from array to object: 

// let movieQuote =[
//     {
//         title: "I'm going to make him an offer he can't refuse.",
//         a: "The Negotiator",
//         b: "The Firm",
//         c: "The Godfather",
//         d: "The Departed",
//         correct: "c",
//     },
// ];

  

  let titleDiv = document.getElementById('title');
  titleDiv.textContent = movieQuote.title;



  function showQuote(q) {
    
    let titleDiv = document.getElementById('title');
    titleDiv.textContent = movieQuote.title;
    
    let films = document.querySelectorAll('.film');
    // console.log(films);

    //interating -element is the list items - index is the position
    films.forEach(function(element, index){
        element.textContent = q.filmTitles[index];
        element.addEventListener('click', function(){
            // element.textContent = "oba"
            if(q.correctAnswer == index) {
                console.log('Right!');
            }
            else {
                console.log('Wrong, dude!'); 
            }
        })
     });
  }

  showQuote(movieQuote);

  let btn = document.getElementById('btn'); 

  btn.addEventListener('click', function(){
    console.log('Clicou!');

  })
