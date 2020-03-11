<template>
  <div id="app">
    <Nav/>
    <div class="usersList" v-if='hasFavourites'>
      <UserCard v-for="(user, index) in usersFav" :username=user.name.first :gender=user.gender :imagesrc=user.picture.medium :email=user.email :birthDate=user.dob.date :signDay=user.registered.date :nationality=user.location.country :key="index" @get-index='getIndex' :id="index"/>
    </div> 
    <div v-else>
      <p>No hay resultados</p>
    </div>
    <download-csv :data = "usersFavCsv"> Download Data </download-csv>
  </div>

</template>

<script>
import {mapState} from 'vuex';
import UserCard from "../components/UserCard.vue";
import Nav from "../components/Nav.vue";
import Vue from 'vue'
import JsonCSV from 'vue-json-csv'
 
Vue.component('downloadCsv', JsonCSV)

export default {
  components: {
    UserCard, 
    Nav
  },
 
  computed: {
    ...mapState([
      'usersFav'
    ]),
    hasFavourites({usersFav}){
      if(usersFav.length > 0) {
       return true;
      }
      return false;
    },
    usersFavCsv({usersFav}) {
      return usersFav.map(user => {
        const {gender, name, email, location, dob, registered} = user
        return{
          gender,
          name: name.first,
          email,
          street: location.street.name,
          birthDate: dob.date,
          registeredDay: registered.date, 
          nationality: location.country
        }
      });
    }
  },
  methods: {
    getIndex(id) {
      this.$store.dispatch('loadUserDetail', id);
    }
  }
};
</script>

<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
  }

  .usersList {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2em;
    padding-bottom: 50px;
  }
</style>
