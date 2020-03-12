<template>
  <div>
    <Nav/>
    <div class="detail">
      <div class= "imgContainer">
        <img class="img-profile" :src="image" alt="foto de perfil">
        <div @click="addToFav" class = "favContainer">
          <img v-if= isFavouriteUser class="img-icon" src="../assets/fav.png" alt="favourite icon">
          <img v-if= !isFavouriteUser class="img-icon" src="../assets/no-fav.png" alt="favourite icon">
          <p class="img-text">{{ isFavouriteUser ? 'Remove Fav' : 'Add Fav' }}</p>
        </div>
      </div>

      <div>
        <p class="name">{{ userName }}</p>
        <p><b>e-mail:</b> {{ email }}</p>
        <p><b>Phone:</b>{{ phone }}</p>
      </div>
      <div class="location">
        <div class="personal-info">
          <p><b>City:</b> {{ city }}</p>
          <p><b>Street:</b> {{ street }}</p>
        </div>
        <!-- <div class='map'><Map :latitude=latitude :longitude=longitude /> </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import Nav from "../components/Nav.vue";

export default { 
  data () {
      return {
        currentUser: {},
        image: '',
        city: '',
        street: '',
        userName: '',
        email: '',
        phone: '',
        latitude:'',
        longitude:'',
        isFavouriteUser: false
      }
  },
  components: {
    Nav
  },

  beforeMount() {
    this.currentUser = this.$store.state.users.find(user => user.email === this.$store.state.userIndex);
  },

  mounted() { 
    this.image = this.currentUser.picture.large,
    this.city = this.currentUser.location.city,
    this.street = this.currentUser.location.street.name,
    this.userName = this.currentUser.name.first,
    this.email = this.currentUser.email,
    this.phone = this.currentUser.phone,
    this.latitude = this.currentUser.location.coordinates.latitude,
    this.longitude = this.currentUser.location.coordinates.longitude
    this.isFavouriteUser = this.$store.state.usersFav.some(user => user.email===this.email)
  },

  computed: {
    ...mapState([
      'userIndex',
      'selectedUsers',
      'usersFav'
    ])
  },
  methods: {
    addToFav() {
      this.isFavouriteUser = !this.isFavouriteUser;
      this.currentUser.isFavouriteUser = this.isFavouriteUser
      this.$store.dispatch('loadFavUsers', this.currentUser);
    }
  } 
};
</script>

<style lang="scss">
  .favContainer {
    padding: 16px;
  }

  .imgContainer {
    display:flex;
    justify-content: center;
    padding-top: 16px;
  }

  .detail {
    width: 30%;
    margin: 25px auto 0;
    padding: 30px;
    border-radius: 0.9em;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
  }

  .location{
      display:flex;
      justify-content: space-between;
      border: 1px solid grey;
      border-radius: 12px;
      padding:16px;
  }

  button {
    border-radius: 4px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    height: 50px;
    position: absolute;
    top: 100px;
    right: 150px;
  }
  .img-icon {
    width: 20px;
    height: 20px;
    margin-top: 4px;
  }
  .img-text {
    margin: 4px 0 0;
  }

  .img-profile {
    width: 100px;
    height: 100px;
    top: 40px;
    border-radius: 10px;
  }

  .name {
    font-weight: 900;
  }

  @media only screen and (max-width: 768px) {
      .detail {
        width: 70%;
      }
  }
</style>
