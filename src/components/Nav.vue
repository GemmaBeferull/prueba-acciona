<template>
  <div>
    <router-link
      class="link"
      :to="{ name: 'home'}">
        Users List
    </router-link>
    <span>|</span>
    <router-link
      class="link"
      :to="{ name: 'Favs'}">
        Favourite Users
    </router-link>
    <router-view/>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  div {
    margin-top:16px;
     font-size: 24px;
  }
  a {
      text-decoration:none;
      color: black;
      font-weight: bold;
  }
  a:hover {
      color: red;
  }
</style>
