import mapboxgl from 'mapbox-gl';
import { createMarker } from './marker.js';

mapboxgl.accessToken =
  'pk.eyJ1IjoiY2RlbGxvcnQiLCJhIjoiY2trZTg3N2hzMDV6aDJwbzkyMWJ1ZHFleiJ9.uxfoQiC6m3ahr1QpDAF0jg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const marker = createMarker('activity', [-74.009151, 40.705086]);
marker.addTo(map);
