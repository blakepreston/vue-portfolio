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

<!-- https://play.google.com/store/apps/details?id=tech.blakepreston.golfrangefinder&hl=en_US&gl=US -->

<div style="display: none;" class="main-container">
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

<div class="main-container">
    <div id="project-card" class="project-card">
        <div class="header-container">
            <h2>Golf Range Finder</h2>
            <p>Mobile</p>
        </div>
        <div class="app-image-container">
            <div class="app-image-inner">
                <img class="app-image" id="app-image" src="../assets/RangeFinderTransparent.png" alt="">
            </div>
            <div class="image-container-inner">
                <div class="image1">
                    <img src="../assets/vuelogo.png" alt="">
                </div>
                <div class="image1">
                    <img src="../assets/ioniclogotransparent.png" alt="">
                </div>
                <div class="image1">
                    <img src="../assets/dynamodblogotransparent.png" alt="">
                </div>
                <div class="image1">
                    <img src="../assets/lambdalogotransparent.png" alt="">
                </div>
                <div class="image1">
                    <img src="../assets/apigatewaylogotransparent.png" alt="">
                </div>
                
                <!-- <img class="image2" src="../assets/instagram.png" alt="">
                <img class="image3" src="../assets/instagram.png" alt=""> -->
            </div>
        </div>
      
      <p>Created an android application for finding ranges on the golf course.</p>
      <div class="links">
          <a href="" target="_blank"><img src="../assets/githubFinal.png" alt=""></a>
          <a href="https://play.google.com/store/apps/details?id=tech.blakepreston.golfrangefinder&hl=en_US&gl=US" target="_blank"><img src="../assets/link.png" alt=""></a>
      </div>
    </div>

    <div class="project-card">
        <div class="header-container">
            <h2>Nitrates and Disease Map</h2>
            <p>Web App</p>
        </div>
        <div class="app-image-main">
            <div class="app-image-container-two">
                <div id="app-image-inner" class="app-image-inner">
                    <img class="app-image-web-app" id="app-image" src="../assets/nitratediseaseprojectFinal.png" alt="">
                </div>
                <div class="image-container-inner">
                    <div class="image1">
                        <img src="../assets/mysqllogo.png" alt="">
                    </div>
                    <div class="image1">
                        <img src="../assets/tableaulogo.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        
      
      <p>A informational web page that shows the nitrate levels and diseases in each county of Iowa.</p>
      <div class="links">
          <a href="https://github.com/blakepreston/DiseaseAndNitrates" target="_blank"><img src="../assets/githubFinal.png" alt=""></a>
          <a href="https://nitratesdisease.netlify.app/" target="_blank"><img src="../assets/link.png" alt=""></a>
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
        },
        RunAnimation(el){
            console.log(el.id)
            if(el.id === 'project-card'){
                console.log("Project Card Intersected")
                const appImage = document.querySelector('.app-image-container');
                appImage.classList.add('app-image-animation');
            }

            if(el.id === 'app-image-inner'){
                console.log("App Image Intersected")
                const appImageWebApp = document.querySelector('.app-image-container-two');
                appImageWebApp.classList.add('app-image-animation');
            }
        },
        RemoveAnimation(el){
            if(el.id === 'project-card'){
                const appImage = document.querySelector('.app-image-container');
                appImage.classList.remove('app-image-animation');
            }

            if(el.id === 'app-image-inner'){
                const appImageWebApp = document.querySelector('.app-image-container-two');
                appImageWebApp.classList.remove('app-image-animation');
            }
        }
    },
    mounted(){
        this.GetProjects();
        // const appImage = document.querySelector('.app-image-container');
        // appImage.classList.remove('app-image-animation');

        // const appImageWebApp = document.querySelector('app-image-inner');
        // appImageWebApp.classList.remove('image1-animation');

        const observer = new IntersectionObserver(entries => {
            console.log(entries)

        entries.forEach(entry => {
            //console.log(entry.target.className)
            //console.log(entry.target.id)
            if (entry.isIntersecting) {
                console.log(entry.target.id);
                this.RunAnimation(entry.target)
                //appImage.classList.add('app-image-animation');
                //return; // if we added the class, exit the function
            }else{
                this.RemoveAnimation(entry.target)
            }

                // We're not intersecting, so remove the class!
                // this.RemoveAnimation(entry.target)
                //appImage.classList.remove('app-image-animation');
            });
        });

         observer.observe(document.querySelector('#project-card'));
         observer.observe(document.querySelector('#app-image-inner'));
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Roboto:wght@700&family=Work+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Monda&family=Roboto:wght@700&family=Work+Sans&display=swap');

.app-image-animation{
    animation: animate-app-image 1s ease;
}

.app-image-main{
    height: 100%;
}

.app-image-container{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: center;
}

.app-image-container-two{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: center;
}

.image-container-inner{
    margin: 0;
    width: 50%;
}

.image1-animation{
    animation: animate-image1 1s ease;
    animation-delay: 3.5s;
}
.image1{
    width: 90%;
}

.image1 img{
    width: 65px;
    margin-top: 5%;
}

@keyframes animate-image1 {
    from{margin-left: -15%;}
    to{margin-left: 0;}
}

@keyframes animate-app-image {
    from{margin-left: -15%;}
    to{margin-left: 0;}
}

h1{
  font-family: 'Julius Sans One', sans-serif;
}

p, h3, h2{
    font-family: 'Monda', sans-serif;
}

    .main-container{
        margin-top: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .app-image{
        width: 50%;
        height: 100%;
        height: auto;
        margin: 0;
    }

    .app-image-web-app{
        width: 80%;
        height: 100%;
        margin: 0;
        border-radius: 5px;
    }

    .project-card{
        margin: 10px;
        margin-bottom: 5%;
        padding: 10px;
        width: 50%;
        background: linear-gradient(338.83deg,#7CFFF4 -3.41%,rgba(255,196,255,0) 52.31%),#ABF3DF;
        border-radius: 25px;
    }

    .header-container{
        display: flex;
        width: 90%;
        flex-direction: column;
        text-align: right;
    }

    .header-container h2{
        margin-bottom: 0;
    }

    .header-container p{
        margin-top: 0;
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