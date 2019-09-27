const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1ddf7a5385dfb295118eeaa445fa2f00&units=metric`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
}