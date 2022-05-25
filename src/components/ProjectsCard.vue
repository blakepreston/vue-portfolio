<template>
<!-- <div class="main-container">
    <div class="project-card" v-for="(items, index) in projectData.ProjectsArray" v-bind:key="items">
      <h2>{{projectData.ProjectsArray[index].Title}}</h2>
      <img :src="projectData.ProjectsArray[index].Image" alt="">
      <p>{{projectData.ProjectsArray[index].About}}</p>
      <div class="links">
          <a :href="projectData.ProjectsArray[index].Link1" target="_blank"><img src="../assets/github.png" alt=""></a>
          <a :href="projectData.ProjectsArray[index].Link2" target="_blank"><img src="../assets/link.png" alt=""></a>
      </div>
    </div>
</div> -->

<div class="main-container">
    <div class="project-card" v-for="(items, index) in lambdaReturnData.Items" v-bind:key="items">
      <h2>{{lambdaReturnData.Items[index].title}}</h2>
      <img :src="lambdaReturnData.Items[index].image" alt="">
      <p>{{lambdaReturnData.Items[index].about}}</p>
      <div class="links">
          <a :href="lambdaReturnData.Items[index].link1" target="_blank"><img src="../assets/github.png" alt=""></a>
          <a :href="lambdaReturnData.Items[index].link2" target="_blank"><img src="../assets/link.png" alt=""></a>
      </div>
    </div>
</div>

</template>

<script>
import axios from 'axios'
import jsonData from "/projects.json"
export default {
    data(){
        return{
            projectData: jsonData,
            lambdaReturnData: {}
        }
    },
    methods:{
        GetProjects(){
            axios.get('https://p79ylfa724.execute-api.us-east-2.amazonaws.com/production/getprojects', {}).then(response => {
                console.log(response);
                this.lambdaReturnData = response.data;
            }).catch(err =>{
                console.log(err);
            })
        }
    },
    mounted(){
        this.GetProjects();
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Roboto:wght@700&family=Work+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Monda&family=Roboto:wght@700&family=Work+Sans&display=swap');

h1{
  font-family: 'Julius Sans One', sans-serif;
}

p, h3, h2{
    font-family: 'Monda', sans-serif;
}

    .main-container{
        margin-top: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .project-card{
        margin: 10px;
        padding: 10px;
        width: 60%;
        background: linear-gradient(338.83deg,#e9f1ef -3.41%,rgba(255,196,255,0) 52.31%),#f6efe7;
        border-radius: 25px;
    }

    .project-card img{
        height: 10rem;
    }

    .links{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }

    .links img{
        height: 1.5rem;
        margin: 5px;
    }
</style>