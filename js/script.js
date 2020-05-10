console.log("Loading JavaScript");

function createCards(data) {
  console.log('Creating cards')
  var cardDeck = document.querySelector("#cards");
  var checkinDate = Date.parse(document.querySelector("#checkin").value);
  var checkoutDate = Date.parse(document.querySelector("#checkout").value);
  var days = (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24);
  days = days ? days : 1;
  console.log(days);
  for (let i = 0; i < data.length; i++) {
    console.log('looping on creation');
    var newCard = document.createElement("div");
    newCard.className = "col-lg-4";
    newCard.innerHTML = `<div class="card mb-3" style="max-width: 20rem;">
        <div class = "overlay-container">
          <img class="card-img-top" src="${data[i].photo}" alt="">
          <div class="overlay">
              <div class="text">Total price is R$ ${days*data[i].price}</div>
          </div>
        </div>
        <div class="card-header">${data[i].property_type}</div>
        <div class="card-body text-dark">
          <h5 class="card-title">${data[i].name}</h5>
          <p class="card-text">Price: <span id="price">R$ ${data[i].price}</span> </p>
        </div>
      </div>
    </div>`
    cardDeck.appendChild(newCard);
  }
}

async function fetchApi() {
  document.querySelector("#cards").innerHTML = "";
  const URL = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
  const fetchResult = fetch(URL);
  const response = await fetchResult;
  const jsonData = await response.json()
    .then(data => createCards(data))
    .catch(err => console.log(err));
}



// fetchApi();
