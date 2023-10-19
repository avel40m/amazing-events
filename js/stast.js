let asistenciaMayor = document.getElementById("evento-asistencia-mayor");
let asistenciaMenor = document.getElementById("evento-asistencia-menor");
let capacidadMayor = document.getElementById("evento-capacidad-mayor");
let tablaProximoEventos = document.getElementById("tabla-proximo");
let tablaPasadoEventos = document.getElementById("tabla-pasada");
const navs = document.querySelectorAll("nav li a");
const locacion = window.location.pathname;

navs.forEach(link => {
    if (link.href.split('/')[3] == locacion.split('/')[1]) {
        link.classList.add('active')
    }
})

const ejecutarPrograma = async () => {
    let events = [];

    await axios.get("https://mindhub-xj03.onrender.com/api/amazing")
        .then(resp => {
            events = resp.data.events
        })
        .catch(err => console.log(err))
    const eventoMayorAsistencia = events.reduce((acumulador, evento) => evento.assistance < acumulador.assistance ? evento : acumulador);
    const eventoMenorAsistencia = events.reduce((acumulador, evento) => evento.assistance > acumulador.assistance ? evento : acumulador);
    const eventoMayorCapacidad = events.reduce((acumulador, evento) => evento.capacity > acumulador.capacity ? evento : acumulador);

    asistenciaMayor.innerHTML = `<b>${eventoMayorAsistencia.name}</b> - ${Math.round(((eventoMayorAsistencia.assistance * 100) / eventoMayorAsistencia.capacity))} %`
    asistenciaMenor.innerHTML = `<b>${eventoMenorAsistencia.name}</b> - ${Math.round(((eventoMenorAsistencia.assistance * 100) / eventoMenorAsistencia.capacity))} %`
    capacidadMayor.innerHTML = `<b>${eventoMayorCapacidad.name}</b> -${eventoMayorCapacidad.capacity}`

    let gananciaPorCategoriaFuturas = {};
    let porcentajeEstimadosCategoria = {};

    let gananciaPorCategoriaPasadas = {};
    let porcentajeAsistenciaCategoria = {};

    let eventoFuturos = events.filter(evento => evento.estimate != undefined);
    let eventoPasados = events.filter(evento => evento.assistance != undefined);

    eventoPasados.forEach(categoria => {
        if (categoria.assistance != undefined) {
            const precioTotal = categoria.price * categoria.assistance;
            if (gananciaPorCategoriaPasadas[categoria.category]) {
                gananciaPorCategoriaPasadas[categoria.category] += precioTotal
            } else {
                gananciaPorCategoriaPasadas[categoria.category] = precioTotal;
            }
        }
        if (categoria.assistance != undefined) {
            if (porcentajeAsistenciaCategoria[categoria.category]) {
                porcentajeAsistenciaCategoria[categoria.category] += Math.round((Number(categoria.assistance) / Number(categoria.capacity))) * 10
            } else {
                porcentajeAsistenciaCategoria[categoria.category] = Math.round((Number(categoria.assistance) / Number(categoria.capacity))) * 10
            }
        }
    });
    eventoFuturos.forEach(categoria => {
        if (categoria.estimate != undefined) {
            const precioTotal = categoria.price * categoria.estimate;
            if (gananciaPorCategoriaFuturas[categoria.category]) {
                gananciaPorCategoriaFuturas[categoria.category] += precioTotal
            } else {
                gananciaPorCategoriaFuturas[categoria.category] = precioTotal;
            }
        }
        if (categoria.estimate != undefined) {
            if (porcentajeEstimadosCategoria[categoria.category]) {
                porcentajeEstimadosCategoria[categoria.category] += Math.round((Number(categoria.estimate) / Number(categoria.capacity))) * 10
            } else {
                porcentajeEstimadosCategoria[categoria.category] = Math.round((Number(categoria.estimate) / Number(categoria.capacity))) * 10
            }
        }
    });

    for (let i = 0; i < Object.keys(gananciaPorCategoriaPasadas).length; i++) {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${Object.keys(gananciaPorCategoriaPasadas)[i]}</td>
    <td>$ ${Object.values(gananciaPorCategoriaPasadas)[i]}</td>
    <td>${Object.values(porcentajeAsistenciaCategoria)[i]} %</td>`;
        tablaPasadoEventos.appendChild(tr)
    }

    for (let i = 0; i < Object.keys(gananciaPorCategoriaFuturas).length; i++) {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${Object.keys(gananciaPorCategoriaFuturas)[i]}</td>
    <td>$ ${Object.values(gananciaPorCategoriaFuturas)[i]}</td>
    <td>${Object.values(porcentajeEstimadosCategoria)[i]} %</td>`;
        tablaProximoEventos.appendChild(tr)
    }
}
ejecutarPrograma();