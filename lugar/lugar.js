const axios = require('axios');



const getLugarLatLng = async(dir) => {

    const resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dir}.json?limit=2&access_token=pk.eyJ1Ijoid2FtOTgiLCJhIjoiY2ttcXR6YzFtMDB2NjJvbXdiZGRsNHZzayJ9.UH6N-knhFx8XmN0cCmJsMQs`);

    return resp.data.geometry.coordinates;

}

module.exports = {
    getLugarLatLng
}