const urlActual = window.location.pathname;

const card = document.getElementById('card');
const formulario = document.getElementById("formulario");
const searchName = document.getElementById('searchName');
const loader = document.getElementById('loader');

const ejecutarPrograma = async () => {
    let events = [];

    await axios.get("https://mindhub-xj03.onrender.com/api/amazing")
        .then(resp => {
            events = resp.data.events
            loader.style.display = "none"
        })
        .catch(err => console.log(err))
    let arregloFiltrado = [];
    if (urlActual == '/upcoming.html') {
        arregloFiltrado = events.filter(evento => evento.estimate != undefined);
    } else if (urlActual == '/past.html') {
        arregloFiltrado = events.filter(evento => evento.assistance != undefined);
    } else {
        arregloFiltrado = events;
    }
    arregloFiltrado.forEach(evento => {
        const lineas = generarCards(evento);
        card.appendChild(lineas)
    });

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        filtrarCards(arregloFiltrado);
    })
}
ejecutarPrograma();




const generarCards = (evento) => {
    let div = document.createElement("div");
    div.classList.add('card');
    const contenido = `<img src=${evento.image} class="card-imagen" alt="Avatar">
    <div class="card-body">
        <h1>${evento.name}</h1>
        <h5>${evento.place}</h5>
        <p class="card-descripcion">${evento.description}</p>
    </div>
    <div class="card-footer">
        <p>Precio: $${evento.price}</p>
        <a href="details.html?id=${evento._id}">Detalles</a>
    </div>`
    div.innerHTML = contenido;
    return div;
}

const filtrarCards = (arregloFiltrado) => {
    let checkBox = document.querySelectorAll('input[type="checkbox"]');
    let checkValor = []
    checkBox.forEach(check => {
        if (check.checked) {
            checkValor.push(check.id)
        }
    })

    let valor = searchName.value;

    let filtrarValores = filtrarCategoriaYNombre(arregloFiltrado,checkValor, valor);
    card.innerHTML = ""
    if (filtrarValores.length == 0) {
        alert('No se encontro el evento')
        arregloFiltrado.forEach(evento => {
            const lineas = generarCards(evento);
            card.appendChild(lineas)
        });
    } else {
        filtrarValores.forEach(evento => {
            const lineas = generarCards(evento);
            card.appendChild(lineas)
        });
    }

}

const filtrarCategoriaYNombre = (arregloFiltrado,categoria, valor) => {
    let arraysFilters = [];

    if (categoria.length == 0) {
        arraysFilters = arregloFiltrado.filter(evento => evento.name.toLowerCase().includes(valor.toLowerCase()));
    } else {
        let arrayFilter = [];
        for (let i = 0; i < categoria.length; i++) {
            let array = arregloFiltrado.filter(({ category }) => category == categoria[i]);
            arrayFilter.push(array)
        }
        let unificar = arrayFilter.reduce((acumulador, categoria) => acumulador.concat(categoria), []);
        arraysFilters = unificar.filter(evento => evento.name.toLowerCase().includes(valor.toLowerCase()));
    }
    return arraysFilters;
}