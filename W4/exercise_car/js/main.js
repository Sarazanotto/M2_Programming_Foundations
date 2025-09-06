const cars = [
    {
        name: "Toyota",
        model: "Corolla",
        year: 2020,
        color: "White",
        options: ["Air Conditioning", "Bluetooth", "Cruise Control", "Backup Camera"],
        isAvailable: true,
        price: 18000,
        img: 'https://immagini.alvolante.it/sites/default/files/styles/anteprima_lunghezza_640_jpg/public/serie_auto_galleria/2022/09/toyota_corolla_post_0.png'
    },
    {
        name: "Honda",
        model: "Civic",
        year: 2021,
        color: "Black",
        options: ["Heated Seats", "Bluetooth", "Sunroof"],
        isAvailable: false,
        price: 20000,
        img: 'https://cdn.veloce.it/wp-content/uploads/2019/06/108923_2017_Honda_Civic_Type_R.jpg'
    },
    {
        name: "Ford",
        model: "Focus",
        year: 2019,
        color: "Blue",
        options: ["Navigation System", "Backup Camera", "Keyless Entry"],
        isAvailable: true,
        price: 16500,
        img: 'https://images.ctfassets.net/uaddx06iwzdz/35gCEkFPutJ9p2sH6oQBtJ/835e8af4d7cab2d0706cedb7f5771829/ford-focus-side.jpg'
    },
    {
        name: "BMW",
        model: "3 Series",
        year: 2022,
        color: "Gray",
        options: ["Leather Seats", "Sunroof", "Parking Sensors", "Bluetooth"],
        isAvailable: true,
        price: 35000,
        img: 'https://www.bmw.it/content/dam/bmw/common/all-models/3-series/series-overview/bmw-3er-overview-page-ms-06.jpg'
    },
    {
        name: "Audi",
        model: "A4",
        year: 2021,
        color: "Red",
        options: ["LED Headlights", "Heated Seats", "Apple CarPlay"],
        isAvailable: false,
        price: 33000,
        img: 'https://www.lombardamotori.it/media/1cndnlfw/audi_a4_avant_1.jpg?format=webp'
    },
    {
        name: "Mercedes",
        model: "C-Class",
        year: 2020,
        color: "Silver",
        options: ["Navigation System", "Leather Seats", "Cruise Control"],
        isAvailable: true,
        price: 37000,
        img: 'https://foto2.newsauto.it/wp-content/uploads/2021/02/Nuova-Mercedes-Benz-Classe-C-1-780x470.jpg'
    },
    {
        name: "Volkswagen",
        model: "Golf",
        year: 2018,
        color: "White",
        options: ["Backup Camera", "Bluetooth"],
        isAvailable: true,
        price: 15000,
        img: 'https://uploads.vw-mms.de/system/production/images/vwn/080/801/images/74efb38963e4bd0d12f0a76d427252477851e28e/DB2024AU00109_web_1600.jpg?1736327869'
    },
    {
        name: "Hyundai",
        model: "Elantra",
        year: 2019,
        color: "Blue",
        options: ["Sunroof", "Apple CarPlay", "Android Auto"],
        isAvailable: false,
        price: 17000,
        img: 'https://immagini.alvolante.it/sites/default/files/styles/image_gallery_big/public/news_galleria/2021/07/hyundai-elantra-n-2021_03.jpg'
    },
    {
        name: "Kia",
        model: "Forte",
        year: 2020,
        color: "Black",
        options: ["Heated Seats", "Cruise Control"],
        isAvailable: true,
        price: 16000,
        img: 'https://hips.hearstapps.com/hmg-prod/images/2022-kia-forte-gt-104-1633972551.jpg?crop=0.686xw:0.515xh;0.0943xw,0.217xh&resize=1200:*'
    },
    {
        name: "Mazda",
        model: "3",
        year: 2021,
        color: "Gray",
        options: ["Parking Sensors", "Bluetooth", "Backup Camera"],
        isAvailable: true,
        price: 19000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mazda3_SKYACTIV-G.jpg/960px-Mazda3_SKYACTIV-G.jpg'
    },
    {
        name: "Chevrolet",
        model: "Malibu",
        year: 2020,
        color: "Red",
        options: ["Air Conditioning", "Navigation System", "Heated Seats"],
        isAvailable: false,
        price: 21000,
        img: 'https://di-uploads-pod32.dealerinspire.com/mauerchevy/uploads/2024/09/2025-chevrolet-malibu-exterior-1024x576.jpg'
    },
    {
        name: "Nissan",
        model: "Sentra",
        year: 2019,
        color: "White",
        options: ["Keyless Entry", "Bluetooth"],
        isAvailable: true,
        price: 15500,
        img: 'https://www.notizieauto.it/wp-content/uploads/2023/09/2024-nissan-sentra-sr-front-3-4-2.jpg'
    },
    {
        name: "Subaru",
        model: "Impreza",
        year: 2022,
        color: "Blue",
        options: ["All-Wheel Drive", "Backup Camera", "Android Auto"],
        isAvailable: true,
        price: 22000,
        img: 'https://cdn.motor1.com/images/mgl/2Xq6p/s3/low-mileage-1998-subaru-impreza-22b-sti.jpg'
    },
    {
        name: "Tesla",
        model: "Model 3",
        year: 2023,
        color: "Black",
        options: ["Autopilot", "Touchscreen", "Heated Seats", "Bluetooth"],
        isAvailable: true,
        price: 45000,
        img: 'https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_240,q_auto:good,w_385/eghq9ct3evxunl27bkhl.jpg'
    },
    {
        name: "Jeep",
        model: "Compass",
        year: 2021,
        color: "Green",
        options: ["4x4", "Navigation System", "Cruise Control"],
        isAvailable: false,
        price: 28000,
        img: 'https://images.ctfassets.net/uaddx06iwzdz/42m4zMi7J2OXEC0Idcv79E/dff652ad57503c51300e41d0eaa5e262/Jeep_Compass_MY2026_1.jpg'
    },
    {
        name: "Peugeot",
        model: "208",
        year: 2020,
        color: "Yellow",
        options: ["LED Headlights", "Bluetooth"],
        isAvailable: true,
        price: 17000,
        img: 'https://cdn-datak.motork.net/configurator-imgs/cars/it/800/PEUGEOT/208/43022_HATCHBACK-5-DOORS/peugeot-208-back-view.jpg'
    },
    {
        name: "Renault",
        model: "Clio",
        year: 2019,
        color: "Orange",
        options: ["Backup Camera", "Keyless Entry"],
        isAvailable: true,
        price: 14000,
        img: 'https://www.autoscout24.it/cms-content-assets/2hgNdRvNi1BjEm2MpSnCvB-4a3ba3df352a7f184f932dd305f4550b-Clio-2023-1100.jpg'
    },
    {
        name: "Fiat",
        model: "Panda",
        year: 2025,
        color: "White",
        options: ["Air Conditioning"],
        isAvailable: false,
        price: 11000,
        img: 'https://cdn-datak.motork.net/configurator-imgs/cars/it/800/FIAT/GRANDE-PANDA-ELETTRICA/49194_BERLINA-5-PORTE/fiat-grande-panda-front-view.jpg'
    },
    {
        name: "Lancia",
        model: "Ypsilon",
        year: 2025,
        color: "Tiffany green",
        options: ["Bluetooth", "Heated Seats"],
        isAvailable: true,
        price: 24900,
        img: 'https://cdnwp.dealerk.com/d44500bb/uploads/sites/2/2024/05/lancia-ypsilon-2024-5-1024x576.jpeg'
    }
]

// crea una card per ogni elemento dell'array e mostra le auto nel div "<div class="cars-container"></div>"
// implementa una ricerca per cercare l'auto tramite nome


function createContainerCards() {
    const main = document.createElement("main")
    main.classList.add("container-cards")
    document.body.appendChild(main)
}
createContainerCards()

function createCards(car) {
    const cardContainer = document.createElement("div")
    cardContainer.classList.add("cardContainer")

    const imageCar = document.createElement("img")
    imageCar.src = car.img

    const nameCar = document.createElement("p")
    nameCar.innerText = car.name

    const modelCar = document.createElement("p")
    modelCar.innerText = `Model:  ${car.model}`

    const yaerCar = document.createElement("p")
    yaerCar.innerText = `Year:  ${car.year}`

    const colorCar = document.createElement("p")
    colorCar.innerText = `Color:  ${car.color}`

    const optionCar = document.createElement("p")
    optionCar.innerText = `Optional:  ${car.options}`

    const priceCar = document.createElement("p")
    priceCar.innerText = `€ ${car.price}`

    /*const availableCar = document.createElement("p")
    availableCar.innerText = `Disponibilità  ${car.isAvailable.toString()}`*/

    const cardDescription = document.createElement("div")
    cardDescription.classList.add("car-description")
isAvailableOrNot(cardContainer, car.isAvailable)
    cardDescription.append(imageCar, nameCar, modelCar, yaerCar, colorCar, optionCar, /*availableCar,*/ priceCar)

    cardContainer.append(imageCar, cardDescription)

    const main = document.querySelector("main")
    main.appendChild(cardContainer)
}

cars.forEach(car => {
    createCards(car)
})

function isAvailableOrNot(elemento, Disponibilità){
    elemento.classList.add("car-description")
   if(Disponibilità){
elemento.classList.add("available")
   }else{
    elemento.classList.add("not-available")
   }
}



const searchContainer = document.querySelector(".search-container")
const searchInput = document.getElementById("search-input")
const btn = document.querySelector("button")
let search = []


function searchForName() {
    const inputName = searchInput.value.toLowerCase()

    const main = document.querySelector("main")
    search = []
    main.innerHTML = ""

    for (let i = 0; i < cars.length; i++) {
        const carValue = cars[i].name.toLowerCase()

        if (carValue.startsWith(inputName)) {
            search.push(cars[i])
        }
    }

    if (search.length > 0) {
        for (let i = 0; i < search.length; i++) {
            createCards(search[i]);
        }
    } else {
        const noResult = document.createElement("h2");
        noResult.innerText = "Nessun risultato per la ricerca";
        main.appendChild(noResult);
    }
}
btn.addEventListener("click", searchForName)



/*const carsContainer = document.querySelector(".cars-container")
const searchContainer = document.querySelector(".search-container")
const btn = document.querySelector("button")
const search = []

console.log(searchContainer)
function createCard(cardValue) {

    const card = document.createElement("div")
    card.setAttribute("class", "card")

    const cardImage = document.createElement("img")
    cardImage.src = cardValue.img

    const cardContent = document.createElement("div")
    cardContent.setAttribute("class", "card-content")

    const carName = document.createElement("p")
    carName.setAttribute("class", "description")
    carName.innerText = cardValue.name

    const carModel = document.createElement("p")
    carModel.setAttribute("class", "description")
    carModel.innerText = cardValue.model

    const carYear = document.createElement("p")
    carYear.setAttribute("class", "description")
    carYear.innerText = cardValue.year

    const carColor = document.createElement("p")
    carColor.setAttribute("class", "description")
    carColor.innerText = cardValue.color

    const carIsAvailable = document.createElement("p")
    carIsAvailable.setAttribute("class", "description")
    carIsAvailable.innerText = cardValue.isAvailable

    const carPrice = document.createElement("p")
    carPrice.setAttribute("class", "description")
    carPrice.innerText = cardValue.price

    cardContent.append(carName, carModel, carYear, carColor, carIsAvailable, carPrice)
    card.append(cardImage, cardContent)
    carsContainer.appendChild(card)
}

cars.forEach(car => {
    createCard(car)
})

function searchForName() {
    const inputValue = searchContainer.value

    for (let i = 0; i < cars.length; i++) {
        const carName = cars[i].name.toLowerCase()

        if (carName.includes(inputValue)) {
            search.push(cars[i])
            console.log(cars[i])
        }
    }
    console.log(search)
}

btn.addEventListener("click", ()=>{
    searchForName()
})*/