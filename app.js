const argv = require('./lugar/lugar').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getLugarLatLng(argv.direccion).then(console.log);

// clima.getClima(40.419998, -3.700000).then(console.log).catch(console.log);

const getInfo = async(direccion) => {

    try {
        const sitio = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(sitio.lat, sitio.lng);
        return `El clima de ${sitio.direccion} es de ${temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}.`;
    }
};

getInfo(argv.direccion).then(console.log).catch(console.log);