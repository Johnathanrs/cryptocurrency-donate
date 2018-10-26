var NodeGeocoder = require('node-geocoder');
var geoip = require('geoip-lite');
const Geo = require('geo-nearby');
const publicIp = require('public-ip');
var options = {
  provider: 'yandex',
  httpAdapter: 'https', // Default
  apiKey: '', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};
 
var geocoder = NodeGeocoder(options);

export function geocoder(addr) {
// Using callback
    return geocoder.geocode(addr);
}

function getCoordsFromIP(ip) {
    var geo = geoip.lookup(ip);
    return {
        lat: geo && geo.ll[0] || '',
        lng: geo && geo.ll[1] || '',
    };
}

export function searchNearByFromProject(projects) {
    return new Promise((resolve, reject) => {
        return publicIp.v4().then(ip => {
            let coords = {};
            try {
                coords = getCoordsFromIP(ip);
            } catch(err) {
                resolve('Something wrong with the server in parsing IP');
            }
            const data = projects.map(project => {
                return {
                    _id: project._id,
                    coord: {
                        lat: project.address.lat,
                        lon: project.address.lng,
                    },
                };
            });
               
            const dataSet = Geo.createCompactSet(data, { id: '_id', lat: ['coord', 'lat'], lon: ['coord', 'lon'] });
            const geo = new Geo(dataSet, { sorted: true, limit: 1 });
            
            const results = geo.nearBy(coords.lat, coords.lng, 60000000);
            if (!results) {
               return resolve('');
            }
            resolve(results.i);
        });
    });
}
