<template>
  <div id="map">
    {{map}}
    <p>{{latitude}}</p>
    <p>{{longitude}}</p>

  </div>
</template>

<script>
  // import Map from 'ol/Map';
  // import View from 'ol/View';
  // import TileLayer from 'ol/layer/Tile';
  // import OSM from 'ol/source/OSM';

  export default {
    name: "map-openlayers",
    data () {
      return {
        map: ""
      }
    },
    props: {
        latitude: String,
        longitude: String
    },
    // mounted() {
    //   let map = new Map({
    //     target: 'map',
    //     layers: [
    //       new TileLayer({
    //         source: new OSM()
    //       })
    //     ],
    //     view: new View({
    //       center: [this.latitude, this.longitude],
    //       zoom: 2
    //     })
    //   });
    //   this.map = map;
    // }
  }
</script>

<style scoped lang="scss">
  #map {
      width: 100%;
      height:100%;
  }
</style> 