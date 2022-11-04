import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {bbox as bboxStrategy} from 'ol/loadingstrategy';

const vectorSource = new VectorSource({
  format: new GeoJSON(),
  url: function (extent) {
    // const url = new URL('http://175.198.238.72:18443/geoserver/ITS/ows');
    const url = new URL('http://192.168.6.104:81/geoserver/ITS/ows');
    url.searchParams.set('service','WFS');
    url.searchParams.set('version','1.0.0');
    url.searchParams.set('request','GetFeature');
    url.searchParams.set('typename','ITS:EDGEGROUP');
    // url.searchParams.set('maxFeatures','50');
    url.searchParams.set('outputFormat','application/json');
    url.searchParams.set('srsname','EPSG:4326');
    // url.searchParams.set('bbox',`${extent.join(',')},EPSG:4326`);
    url.searchParams.set('bbox',`${extent.join(',')}`);
    console.log(url.toString());
    return (      
      url.toString()
    );
  },
  strategy: bboxStrategy,
  crossOrigin:""
});

const vector = new VectorLayer({
  source: vectorSource,
  style: {
    'stroke-width': 1.75,
    'stroke-color': 'white',
    'fill-color': 'rgba(100,100,100,0.25)',
  },
});


const map = new Map({
  layers: [new TileLayer({
      source: new OSM(),
    })
    , vector
  ],
  target: document.getElementById('map'),
  view: new View({
    // center: [-8908887.277395891, 5381918.072437216],
    center: [126.60256646,37.45549693],
    projection:'EPSG:4326',
    maxZoom: 19,
    zoom: 10,
  }),
});
