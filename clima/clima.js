const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c6556ffce23ded944bcf78d6892f1dbf&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}