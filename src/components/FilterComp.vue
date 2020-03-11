<template>
  <div class= "container">
    <h2>Filters:</h2>
    <div class='genderFilters'>
      <input type="radio" id="male" name="gender" value="male" v-model.lazy.trim= "InputValue"  @click= 'search'>
      <label for="male">Male</label>
      <input type="radio" id="female" name="gender" value="female" v-model.lazy.trim= "InputValue"  @click= 'search'>
      <label for="female">Female</label>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
          InputValue: ''
      }
    },
    props: {
      title: String

    },
    methods: {
      search(InputValue){
          this.$emit('gender-filt', InputValue.target.id)
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
  .container {
    background-color:rgba(156, 156, 156, 0.9);
    position: fixed;
    bottom:0;
    width: 100%;
    margin-top: 10px;
    display: flex;
    padding:0px 16px;
  }

  .genderFilters{
      padding: 10px;
      display: block;
      margin: auto 16px;
  }  

  button {
    margin-left: 2px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 5px;
    padding: 10px 20px; 
    line-height: 10px;
    text-decoration: none;
    color: #ffffff;
    background-color :red; 
  }
  p {
      margin: 0;
      padding:0;
  }
</style>
