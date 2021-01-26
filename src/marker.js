import mapboxgl from 'mapbox-gl';

export const createMarker = function (type, coordinates) {
  const marker = document.createElement('div');
  marker.style.width = '32px';
  marker.style.height = '39px';
  switch (type) {
    case 'activity':
      marker.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
      break;
    case 'hotel':
      marker.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
      break;
    case 'restaurant':
      marker.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
      break;
    default:
      console.log('Not a valid type, try again.');
      break;
  }
  return new mapboxgl.Marker(marker).setLngLat(coordinates);
};
