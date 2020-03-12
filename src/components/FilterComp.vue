<template>
  <div class= "container">
    <h2>Filters:</h2>
    <div class="filters">
      <label for="male">Male</label>
      <input type="radio" id="male" name="gender" value="male" @click= 'handleSelectedGender'>
      <label for="female">Female</label>
      <input type="radio" id="female" name="gender" value="female"  @click= 'handleSelectedGender'>
      <br>
      <label for="nationality">Nationality</label>
        <select name="nationality" class="nationality" @change="handleSelectedNationality">
        <option value="">Select nationality</option>
        <option
          v-for="nationality in nationalities"
          :key="nationality"
          :value="nationality"
        >{{ nationality }}</option>
      </select>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      nationalities: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      handleSelectedGender(){
          this.$emit('gender-filt', event.target.id)
      },
      handleSelectedNationality () {
        this.$emit('nationality-filt', event.target.value)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
  .container {
    background-color:rgba(156, 156, 156, 0.9);
    position: fixed;
    bottom: 0;
    width: 100%;
    margin-top: 10px;
    display: flex;
    padding: 20px 16px;
    justify-content: center;
  }

  .filters {
    padding: 6px 10px;
  }

  label {
    padding-left:6px;
  }

  h2 {
    margin: 0;
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
    background-color:red; 
  }
  p {
      margin: 0;
      padding: 0;
  }
  select {
    padding: 2px;
    width: 150px;
    border: 1px solid #aaa;
    border-radius: .3em;
    background-color: #fff;
  }
</style>
