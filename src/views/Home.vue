<template>
  <div id="app">
     <Nav/>
    <div class="usersList" v-if=usersFrom>
      <UserCard v-for="(user, index) in usersFrom" @get-index='getIndex' :username=user.name.first :gender=user.gender :imagesrc=user.picture.medium :email=user.email :birthDate=user.dob.date :signDay=user.registered.date :nationality=user.location.country :key="index" :id="index"/>
    </div>
     <div class="usersList" v-else>
        <UserCard v-for="(user, index) in hasSelectedGender" @get-index='getIndex' :username=user.name.first :gender=user.gender :imagesrc=user.picture.medium :email=user.email :birthDate=user.dob.date :signDay=user.registered.date :nationality=user.location.country :key="index" :id="index"/>
    </div>

    <FilterComp
     @gender-filt='filterGender' 
     @nationality-filt='filterNationality' 
     @age-filt='filterAge'
     :nationalities='getNationalities'/>
     
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
      searchedGender: "",
      searchedAge: "",
      searchedNationality: "",
      nationalities: [],
      ages: []
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
      this.searchedNationality = false;
      this.searchedGender = data;
    },
    filterNationality(data){
     this.searchedNationality = data
    },
    filterAge(data){
      this.searchedAge = data;
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
    getNationalities ({users}) {
      const nationalities = users.reduce((acc, user) => {
        if (!acc.includes(user.location.country)) {
          acc.push(user.location.country)
        }
        return acc
      }, [])
      return nationalities
    },
    hasSelectedGender({searchedGender, users}){
      if(searchedGender) {
        const usersSelected = users.filter(user => user.gender  === searchedGender)
        this.$store.dispatch('loadSelectedGender', usersSelected);
        return usersSelected;
      }
      return users;
    },
    usersFrom({searchedNationality, users}){
      if(searchedNationality) {
        const usersSelected = users.filter(user => user.location.country  === searchedNationality)
        this.$store.dispatch('loadUsersFrom', usersSelected);
        return usersSelected;
       }
      return false
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
