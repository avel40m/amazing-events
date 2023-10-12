let events = [
    {
        _id: 1,
        name: "Collectivities Party",
        category: "Food",
        date: "2021-12-12",
        description: "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        image: "https://i.postimg.cc/kXWrBjXC/collectivities-party.jpg",
        place: "Multi Space",
        price: 10,
        capacity: 50000,
        assistance: 42756
    },
    {
        _id: 2,
        name: "Jurassic Park",
        category: "Museum",
        date: "2022-07-05",
        description: "Let's go meet the biggest dinosaurs in the paleontology museum.",
        image: "https://i.postimg.cc/nrQkSwwh/jurassic-park.jpg",
        place: "Field",
        price: 3,
        capacity: 10000,
        assistance: 6589
    },
    {
        _id: 3,
        name: "Metallica in concert",
        category: "Concert",
        date: "2022-01-22",
        description: "The only concert of the most emblematic band in the world.",
        image: "https://i.postimg.cc/XvQQr5C4/metallica-concert.jpg",
        place: "Stadium",
        price: 20,
        capacity: 500000,
        assistance: 497981
    },
    {
        _id: 4,
        name: "10K 4 life",
        category: "Race",
        date: "2022-03-01",
        description: "Come and exercise, improve your health and lifestyle.",
        image: "https://i.postimg.cc/2V3FvcvY/10k-4life.jpg",
        place: "Football field",
        price: 2,
        capacity: 200000,
        assistance: 198900
    },
    {
        _id: 5,
        name: "School's book fair",
        category: "Books",
        date: "2022-06-01",
        description: "Bring your unused school book and take the one you need.",
        image: "https://i.postimg.cc/34BWbTsq/school-bookfair.jpg",
        place: "Multi Space",
        price: 2,
        capacity: 50000,
        assistance: 38429
    },
    {
        _id: 6,
        name: "Aladdin",
        category: "Cinema",
        date: "2019-05-24",
        description: "We invite you watch Disney's classic character in new adventures.",
        image: "https://i.postimg.cc/L4fQTJdB/aladdin.jpg",
        place: "Showcase",
        price: 4,
        capacity: 2500,
        assistance: 1875
    },
    {
        _id: 7,
        name: "Arabic holidays",
        category: "Food",
        date: "2023-10-12",
        description: "An invitation to enjoy Middle East's flavours.",
        image: "https://i.postimg.cc/CxJQqX33/arabic.jpg",
        place: "Multi Space",
        price: 10,
        capacity: 50000,
        estimate: 50000
    },
    {
        _id: 8,
        name: "Korean style",
        category: "Food",
        date: "2022-01-10",
        description: "Enjoy the best Korean dishes, with international chefs and awesome events.",
        image: "https://i.postimg.cc/bvzmYgdm/korean.jpg",
        place: "Multi Space",
        price: 10,
        capacity: 50000,
        assistance: 48516
    },
    {
        _id: 9,
        name: "Japanese style",
        category: "Food",
        date: "2022-02-25",
        description: "Enjoy the best Japanese dishes, with international chefs and awesome events.",
        image: "https://i.postimg.cc/50rg3Mgr/japanese.jpg",
        place: "Multi Space",
        price: 10,
        capacity: 50000,
        assistance: 49618
    },
    {
        _id: 10,
        name: "Straight from Middle East",
        category: "Food",
        date: "2022-04-08",
        description: "We gather Middle East's collectivities in a unique event to enjoy in family.",
        image: "https://i.postimg.cc/sf8HP502/middle-east.jpg",
        place: "Multi Space",
        price: 10,
        capacity: 50000,
        assistance: 42756
    },
    {
        _id: 11,
        name: "Take away",
        category: "Food",
        date: "2022-06-27",
        description: "Are you a fast food lover? We have the event for you, were we gather the best fast food chains.",
        image: "https://i.postimg.cc/yDMJDnhL/take-away.jpg",
        place: "Multi Space",
        price: 10,
        capacity: 50000,
        assistance: 42756
    },
    {
        _id: 12,
        name: "Italian style",
        category: "Food",
        date: "2022-08-12",
        description: "Enjoy the best dishes in this awesome culinary event.",
        image: "https://i.postimg.cc/DfJ3Kv98/italian.jpg",
        place: "Multi Space",
        price: 10,
        capacity: 50000,
        assistance: 42756
    },
    {
        _id: 13,
        name: "Fantasy books",
        category: "Books",
        date: "2022-07-23",
        description: "The best literary works of a captivating genre full of mythical characters.",
        image: "https://i.postimg.cc/mZvfZx4V/fantasy.jpg",
        place: "Multi Space",
        price: 4,
        capacity: 50000,
        assistance: 44029
    },
    {
        _id: 14,
        name: "Just for your kitchen",
        category: "Books",
        date: "2023-09-14",
        description: "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        image: "https://i.postimg.cc/PxJKYqWZ/just4-kitchen.jpg",
        place: "Multi Space",
        price: 2,
        capacity: 50000,
        estimate: 5000
    },
    {
        _id: 15,
        name: "BestSeller",
        category: "Books",
        date: "2023-07-06",
        description: "Get to know the best works of literature and take the one that catches you the most.",
        image: "https://i.postimg.cc/Jh2YTJ4K/bestseller.jpg",
        place: "Multi Space",
        price: 5,
        capacity: 50000,
        estimate: 48000
    },
    {
        _id: 16,
        name: "Just Harry",
        category: "Books",
        date: "2023-08-26",
        description: "If you're a Potterhead you'll love this unique convention held in the city.",
        image: "https://i.postimg.cc/52mZm6Ck/harry.jpg",
        place: "Multi Space",
        price: 5,
        capacity: 50000,
        estimate: 50000
    },
    {
        _id: 17,
        name: "Comicon",
        category: "Party",
        date: "2022-08-12",
        description: "For comic lovers, all your favourite characters gathered in one place.",
        image: "https://i.postimg.cc/Gph6gdP3/comicon.jpg",
        place: "Monumental Theater",
        price: 10,
        capacity: 50000,
        assistance: 45781
    },
    {
        _id: 18,
        name: "Spring Day",
        category: "Party",
        date: "2023-10-21",
        description: "Come celebrate spring dressed as your favourite character.",
        image: "https://i.postimg.cc/v154f93b/spring.jpg",
        place: "Monumental Theater",
        price: 10,
        capacity: 50000,
        estimate: 30000
    },
    {
        _id: 19,
        name: "Cultures",
        category: "Party",
        date: "2024-12-21",
        description: "A unique cultural event awaits you.",
        image: "https://i.postimg.cc/x8HZNCQ5/cultures.jpg",
        place: "Monumental Theater",
        price: 2,
        capacity: 50000,
        estimate: 45000
    },
    {
        _id: 20,
        name: "For the little ones",
        category: "Party",
        date: "2024-02-23",
        description: "Bring your kid with his favourite costume.",
        image: "https://i.postimg.cc/Nj8NwSGy/little-ones.jpg",
        place: "Monumental Theater",
        price: 1,
        capacity: 50000,
        estimate: 50000
    },
    {
        _id: 21,
        name: "Epic party",
        category: "Party",
        date: "2023-05-23",
        description: "Come dressed as a pirate, firefighter, or a nurse, and we'll see who wins the big prize.",
        image: "https://i.postimg.cc/FHvMcj7L/epic.jpg",
        place: "Monumental Theater",
        price: 2,
        capacity: 50000,
        estimate: 50000
    },
    {
        _id: 22,
        name: "15K NY",
        category: "Race",
        date: "2022-08-21",
        description: "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        image: "https://i.postimg.cc/LYR31mkQ/15kny.jpg",
        place: "New York",
        price: 5,
        capacity: 950000,
        assistance: 926981
    },
    {
        _id: 23,
        name: "15K Buenos Aires",
        category: "Race",
        date: "2023-05-30",
        description: "Join us for a healthier life and a cleaner city.",
        image: "https://i.postimg.cc/hXdLZXp3/15kbsas.jpg",
        place: "Buenos Aires",
        price: 3,
        capacity: 500000,
        estimate: 300000
    },
    {
        _id: 24,
        name: "Buenos Aires 2023",
        category: "Race",
        date: "2023-09-07",
        description: "Come join us in this marathon's 3ed edition.",
        image: "https://i.postimg.cc/pVn460jj/bsas22.jpg",
        place: "Buenos Aires",
        price: 3,
        capacity: 500000,
        estimate: 50000
    },
    {
        _id: 25,
        name: "New York 2023",
        category: "Race",
        date: "2023-11-12",
        description: "We'll be expecting you in the 6th edition across the Big Apple.",
        image: "https://i.postimg.cc/d1VN66Yh/ny22.webp",
        place: "New York",
        price: 5,
        capacity: 1000000,
        estimate: 1000000
    },
    {
        _id: 26,
        name: "For Life 2nd Edition",
        category: "Race",
        date: "2023-04-05",
        description: "If you enjoyed las year's edition you'll love this one.",
        image: "https://i.postimg.cc/fRWHD5VB/4life.jpg",
        place: "Cordoba",
        price: 2,
        capacity: 300000,
        estimate: 270500
    },
    {
        _id: 27,
        name: "Cancer Marathon",
        category: "Race",
        date: "2024-03-18",
        description: "We'll be raising funds for the cancer patients.",
        image: "https://i.postimg.cc/c4y2yQ7b/cancer.jpg",
        place: "Rosario",
        price: 2,
        capacity: 300000,
        estimate: 300000
    },
    {
        _id: 28,
        name: "Electronic Fest",
        category: "Concert",
        date: "2021-01-22",
        description: "The best national and international DJs gathered in one place.",
        image: "https://i.postimg.cc/FRY8mpn2/electronic.jpg",
        place: "Stadium",
        price: 20,
        capacity: 500000,
        assistance: 488005
    },
    {
        _id: 29,
        name: "Popular Music",
        category: "Concert",
        date: "2021-05-22",
        description: "The best popular hits gathered in a unique event for the hole family to enjoy.",
        image: "https://i.postimg.cc/jjXky9GV/popular.jpg",
        place: "Stadium",
        price: 20,
        capacity: 500000,
        assistance: 464780
    },
    {
        _id: 30,
        name: "Classics",
        category: "Concert",
        date: "2021-05-22",
        description: "Come enjoy the best classics.",
        image: "https://i.postimg.cc/wBfZSZFX/classics.jpg",
        place: "Stadium",
        price: 20,
        capacity: 500000,
        assistance: 421988
    },
    {
        _id: 31,
        name: "Opera",
        category: "Concert",
        date: "2023-05-02",
        description: "We gathered the best opera singers just for you.",
        image: "https://i.postimg.cc/6pxHgtKJ/opera.jpg",
        place: "Stadium",
        price: 20,
        capacity: 500000,
        estimate: 500000
    },
    {
        _id: 32,
        name: "Reggaeton 2022",
        category: "Concert",
        date: "2024-01-23",
        description: "Get ready to dance to the rhythm of the best bands.",
        image: "https://i.postimg.cc/VvSGQN51/reggaeton.jpg",
        place: "Stadium",
        price: 20,
        capacity: 500000,
        estimate: 500000
    },
    {
        _id: 33,
        name: "Parisian Museum",
        category: "Museum",
        date: "2022-08-21",
        description: "A unique tour in the city of lights, get to know one of the most iconic places.",
        image: "https://i.postimg.cc/nr6dHtQm/paris.jpg",
        place: "Paris",
        price: 10,
        capacity: 5200,
        assistance: 3506
    },
    {
        _id: 34,
        name: "Abstract Art",
        category: "Museum",
        date: "2023-10-10",
        description: "An exhibition of selected artists explores the diverse approaches to abstraction developed since 1950.",
        image: "https://i.postimg.cc/ZnrfKMPD/abstract.jpg",
        place: "Buenos Aires",
        price: 2,
        capacity: 1000,
        estimate: 1000
    },
    {
        _id: 35,
        name: "Buenos Aires Museum",
        category: "Museum",
        date: "2023-12-02",
        description: "Unique works by international and national artists are waiting for you in this year's exhibition.",
        image: "https://i.postimg.cc/8C5nBwDj/bsas.jpg",
        place: "Buenos Aires",
        price: 2,
        capacity: 1000,
        estimate: 1000
    },
    {
        _id: 36,
        name: "Acropolis",
        category: "Museum",
        date: "2023-12-19",
        description: "One of the most important museums in the world, houses the findings of only one archaeological site, the Athenian Acropolis.",
        image: "https://i.postimg.cc/X7bHDn4M/acropolis.jpg",
        place: "Athens",
        price: 10,
        capacity: 1600,
        estimate: 1350
    },
    {
        _id: 37,
        name: "British Museum",
        category: "Museum",
        date: "2023-05-02",
        description: "Culture and history combined in this unique space.",
        image: "https://i.postimg.cc/hPLwSfpP/british.jpg",
        place: "England",
        price: 8,
        capacity: 1200,
        estimate: 980
    }
]

const URL = new URLSearchParams(window.location.search);
const parametro = URL.get('id');
const card = document.getElementById('card');

let evento = events.filter(event => event._id == parametro);

card.innerHTML = `
<img src=${evento[0].image} class="card-imagen" alt="Avatar"> 
    <div class="card-body">
    <h3>Nombre del evento: <b>${evento[0].name}</b></h3>
    <h5>Lugar del evento: ${evento[0].place} </h5>
    <p class="card-descripcion">${evento[0].description} </p>
    <div class="card-footer">
        <p>Precio: <b>$${evento[0].price}</b> </p>
        <p>Capacidad: <b>${evento[0].capacity}</b></p>
        <p>Categoria: <b>${evento[0].category}</b></p>
    </div>
</div>`