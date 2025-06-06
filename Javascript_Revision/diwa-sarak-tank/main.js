
let mainSection = document.getElementById("data-list-wrapper");

// // pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");

// // Update pitch
let updatePitchIdInput = document.getElementById("update-pitch-id");
let updatePitchTitleInput = document.getElementById("update-pitch-title");
let updatePitchImageInput = document.getElementById("update-pitch-image");
let updatePitchfounderInput = document.getElementById("update-pitch-founder");
let updatePitchCategoryInput = document.getElementById("update-pitch-category");
let updatePitchPriceInput = document.getElementById("update-pitch-price");
let updatePitchBtn = document.getElementById("update-pitch");

// //Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

// //sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");

// //Search by title/founder

// let searchBySelect = document.getElementById("search-by-select");
// let searchByInput = document.getElementById("search-by-input");
// let searchByButton = document.getElementById("search-by-button");

// // Problem 1. List of pitches on page load [3}

let pitchArray = []

function fetchDataFromServer() {

  fetch("http://localhost:3000/pitches")
    .then((res) => res.json())
    .then((data) => {
      pitchArray = data
      CardList(data);
    })
    .catch((err) => {
      console.log(err)
    });
}

fetchDataFromServer()

function CardList(pitchArray) {

  let pitches = pitchArray.map((el, i) => Card(el.title, el.price, el.founder, el.category, el.image, el.id))
  mainSection.innerHTML = pitches.join("")
}

function Card(title, price, founder, category, image, id) {
  let singleDiv = `
    <div class="card">
      <div class="card-img">
        <img src=${image} alt="">
      </div>
      <div class="card-body">
        <h4 class="card-title">${title}</h4>
        <p class="card-founder">${founder}</p>
        <p class="card-category">${category}</p>
        <p class="card-price">$${price}</p>
        <button class="card-edit" id=${id}>Edit</button>
        <button class="card-button" id=${id}>Delete</button>
      </div>
    </div>
    `

  return singleDiv

}

//---------------------------------------=-------Task2 AddPitch-------------------------------------------------

pitchCreateBtn.addEventListener("click", () => {

  let pitchData = {
    title: pitchTitleInput.value,
    price: pitchPriceInput.value,
    founder: pitchfounderInput.value,
    category: pitchCategoryInput.value,
    image: pitchImageInput.value
  }
  fetch("http://localhost:3000/pitches", {
    method: "POST",
    body: JSON.stringify(pitchData),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })

})

//-----------------------------------------------Task3 Update Price Only----------------------------------------------------------


updatePricePitchPriceButton.addEventListener("click", () => {
  const id = updatePricePitchId.value
  let updatePitchData = {
    price: updatePricePitchPrice.value,
  };
  fetch(`http://localhost:3000/pitches/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updatePitchData),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
})

//-------------------------------------------------Task4 Sort----------------------------------------------------------
sortAtoZBtn.addEventListener("click", () => {
  fetch(`http://localhost:3000/pitches?_sort=price&_order=asc`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      CardList(data)
    }).catch((err) => {
      console.log(err);
    })
})

sortZtoABtn.addEventListener("click", () => {
  fetch(`http://localhost:3000/pitches?_sort=price&_order=desc`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      CardList(data)
    }).catch((err) => {
      console.log(err);
    })
})

//---------------------------------------------------Task5 Filter-----------------------------------------------------

filterFood.addEventListener("click", () => {
  const filterdata = pitchArray.filter((el, i) => el.category == "Food")
  CardList(filterdata)
})

filterElectronics.addEventListener("click", () => {
  const filterdata = pitchArray.filter((el, i) => el.category == "Electronics")
  CardList(filterdata);
})

filterPersonalCare.addEventListener("click", () => {
  const filterdata = pitchArray.filter((el, i) => el.category == "Personal Care")
  CardList(filterdata);
})

//----------------------------------------------------Task6 Update All Products---------------------------------------

updatePitchBtn.addEventListener("click", () => {
  const id = updatePitchIdInput.value
  let updatePitchArray = {
    title: updatePitchTitleInput.value,
    image: updatePitchImageInput.value,
    category: updatePitchCategoryInput.value,
    founder: updatePitchfounderInput.value,
    price: updatePitchPriceInput.value,
  };
  fetch(`http://localhost:3000/pitches/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updatePitchArray),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
})

//----------------------------------------------------Task7 Edit Button----------------------------------------------


document.addEventListener("click",(e)=>{
  if(e.target.classList.contains("card-edit")){
    const id = e.target.id;
    
    fetch(`http://localhost:3000/pitches/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data.title);
      updatePitchImageInput.value = data.image;
      updatePitchTitleInput.value = data.title;
      updatePitchCategoryInput.value = data.category;
      updatePitchfounderInput.value = data.founder;
      updatePitchPriceInput.value = data.price;
      updatePitchIdInput.value = data.id;
    })
    .catch((err)=>{
      console.log(err);
    })
  }
})

//------------------------------------------------------Task8 Delete Button-------------------------------------------

document.addEventListener("click",(e)=>{
  if(e.target.classList.contains("card-button")){
    const id = e.target.id;

    fetch(`http://localhost:3000/pitches/${id}`,{
      method:"DELETE",
    })
    .then((res)=>{
      alert("data deleted");
    })
    .catch((err)=>{
      console.log(err);
    })
  }
})