import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import View from 'ol/View';

const layers = [
  new TileLayer({
    source: new OSM(),
  }),
  new TileLayer({
    source: new TileWMS({
      url: 'https://geo.safemap.go.kr/geoserver/safemap/wms',
      params: {'LAYERS': 'A2SM_GENERAL_HOSPITAL', 
      format: 'image/png',
      styles:'A2SM_GENERAL_HOSPITAL',
      exceptions:'text/xml',
      transparent: true,
        'TILED': true},
      serverType: 'geoserver',
      transition: 0,
    }),
  }),
  
];
const map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    center: [14129954.40, 4514343.12],
    zoom: 12,
  }),
});
