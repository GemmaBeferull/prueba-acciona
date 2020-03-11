<template>
  <div class="user" :id= "id">
    <p class= "userName">{{username}}</p>
    <p>{{birthDate.substring(0, 10)}}</p>
    <p>{{nationality}}</p>
    <p class="email">{{email}}</p>
    <p>{{gender}}</p>
    <p class="signDay">{{signDay.substring(0, 10)}}</p>
    <router-link
      class="link"
      :to="{ name: 'userDetail'}">
      <span v-on:click="getIndex">detail</span>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
  export default {
    props: {
      gender: String,
      username: String,
      imagesrc: String,
      email: String,
      birthDate: String,
      signDay: String,
      nationality: String,
      id: Number
    },
    methods: {
      getIndex(){
          this.$emit('get-index', this.email);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  template {
      margin: 0;
      padding:0;
  }
  .user { 
    width: 20%;
    margin: 25px 0 0;
    padding: 30px;
    border-radius: 0.9em;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
  }
  p {
      margin: 0;
      padding:0;
  } 
  .userName {
    font-weight: bold;
    font-size: 20px;
  }

  .link {
    margin-left: 2px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 30px;
    padding: 10px 20px;
    width: 10%;
    line-height: 10px;
    text-decoration: none;
    color: #ffffff;
    background-color :red; 
  }

  .email {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .signDay {
    margin-bottom: 1em;
  }

  @media only screen and (max-width: 768px) {
      .user {
        width: 40%;
      }
    }
</style>
