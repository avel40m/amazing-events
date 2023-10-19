const URL = new URLSearchParams(window.location.search);
const parametro = URL.get('id');
const card = document.getElementById('card');
const loader = document.getElementById('loader');

const ejecutarPrograma = async () => {
    let events = [];

    await axios.get("https://mindhub-xj03.onrender.com/api/amazing")
        .then(resp => {
            events = resp.data.events
            loader.style.display = "none"
        })
        .catch(err => console.log(err))
    let evento = events.filter(event => event._id == parametro);
    if (evento.length == 0) {
        card.classList.remove("card");
        card.innerHTML = `
        <div class="error">
            <h1>
            <span class="fade-in" id="digit1">4</span>
            <span class="fade-in" id="digit2">0</span>
            <span class="fade-in" id="digit3">4</span>
            </h1>
            <p>Evento no encontrado</p>
            <a href="/">Volver al inicio</a>
        </div>
        `
    } else{
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
    }
}
ejecutarPrograma();