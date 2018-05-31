const ui = new UI;

async function getData() {
  const response = await fetch(`https://api.spacexdata.com/v2/launchpads`);
  const data = await response.json();

  return data;
}

getData()
  .then(data => createMarkers(data))
  .catch(err => console.log(err));

// Map creation
mapboxgl.accessToken = <<<API_KEY>>>;

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/pawelmalak/cjhmiqsp21cgm2smdxry6mbkg',
  zoom: 4,
  center: [-98.585522, 37.8333333]
});

function createMarkers(launchpads) {
  console.log(launchpads);

  launchpads.forEach(launch => {
    let arr = [launch.location.longitude, launch.location.latitude];

    let el = document.createElement('div');
    el.classList = 'marker';

    el.addEventListener('click', () => {
      ui.logData(launch);
    });

    new mapboxgl.Marker(el)
      .setLngLat(arr)
      .addTo(map);
  });
}
