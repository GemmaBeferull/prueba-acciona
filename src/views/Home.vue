<template>
  <div id="app">
     <Nav/>
    <div class="usersList" v-if=hasSelectedGender>
        <UserCard v-for="(user, index) in hasSelectedGender" @get-index='getIndex' :username=user.name.first :gender=user.gender :imagesrc=user.picture.medium :email=user.email :birthDate=user.dob.date :signDay=user.registered.date :nationality=user.location.country :key="index" :id="index"/>
    </div>
    <div v-else>
      <p>No hay resultados</p>
    </div>
    <FilterComp title = "Gender" @gender-filt='filterGender'/>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import FilterComp from "../components/FilterComp.vue";
import UserCard from "../components/UserCard.vue";
import Nav from "../components/Nav.vue";

export default {
  name: "app",
  data () {
      return {
        searchedGender: ""
      }
  },

  mounted() {
    if(this.hasSelectedGender.length <= 0){
      this.$store.dispatch('loadUsers');
    }
  },

  components: {
    UserCard, 
    FilterComp,
    Nav
  },

  methods: {
    filterGender(data){
        this.searchedGender = data;
    },
    getIndex(id) {
      this.$store.dispatch('loadUserDetail', id);
    }
  },

  computed: {
    ...mapState([
      'users',
      'usersSelected'
    ]),
    hasSelectedGender({searchedGender, users}){
      if(searchedGender) {
        const usersSelected = users.filter(user => user.gender  === searchedGender)
        this.$store.dispatch('loadSelectedUsers', usersSelected);
        return usersSelected;
      }
      this.$store.dispatch('loadSelectedUsers', users);
        return users;
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
        margin: 0 2em 10%;
        padding-bottom: 50px;
    }
</style>
