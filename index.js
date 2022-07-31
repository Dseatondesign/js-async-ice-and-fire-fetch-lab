function fetchBooks() {
  //write fetch request to the Game of Thrones API
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

// promises

let gotAJob = true;

const willGetNewPhone = new Promise((resolve, rejected) => {

  if(gotAJob) {
    const phone = {
      brand: 'Samsung',
      color: 'Blue'
    }
    return resolve(phone)
  }
  else{
    return rejected('No Phone')
  }
});

const askYourself = () => {
willGetNewPhone.then((fulfilled) => {
  console.log(fulfilled)
}).catch ((error) => {
  console.log(error)
})
}

askYourself()
// promises - keyword fetch
fetch("https://api.open-notify.org/astros.json")
.then( resp => console.log("yay"))
.catch( error => console.error(`Oh no! ${error}`));
// promises - keyword await