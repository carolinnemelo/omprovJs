// 7.1  Spread med arrayer (2p)
  // Skapa en funktion 'combineArrays' som tar emot två arrayer som argument
  // och använder spread operatorn för att kombinera dem till en enda array.
  // Returnera den nya arrayen
  
  function combineArrays(arr1, arr2) {
    // Din kod här.
    return arr1 = [...arr1,...arr2]
  }

  // console.log(combineArrays([1,2], [3,4,5]))
  



// 7.2 Spread med objekt (2p)
// Skapa en funktion 'updateBook' som tar emot ett objekt som argument
// och använder spread operatorn för att uppdatera objektet med en ny rating
const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937,
  rating: 4.5
};


// function updateBook(obj) {
  
// }

function updateBook(book, newRating) {
  // Din kod här.
  return book = {...book, rating: newRating}

}


  //Test
  // console.log(combineArrays([1, 2, 3], [4, 5, 6])); // Ska logga [1, 2, 3, 4, 5, 6]
  console.log(updateBook(book, 5)); // Ska logga { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, rating: 5 }