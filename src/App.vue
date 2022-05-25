<template>
<div class="container">
  <router-view/>
  <MainCard/>
  <ProjectsCard/>
</div>
</template>

<script>
import MainCard from './components/MainCard.vue'
import ProjectsCard from './components/ProjectsCard.vue'
export default{
  components:{
    MainCard,
    ProjectsCard
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Roboto:wght@700&family=Work+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Monda&family=Roboto:wght@700&family=Work+Sans&display=swap');

h1{
  font-family: 'Julius Sans One', sans-serif;
/* font-family: 'Roboto', sans-serif;
font-family: 'Work Sans', sans-serif; */
}

p, h3{
    font-family: 'Monda', sans-serif;
}

body{
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
