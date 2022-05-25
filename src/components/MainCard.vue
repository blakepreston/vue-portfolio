<template>
<div class="body-container">
<div class="wave-container">
    <div class="wave"></div>
</div>
<div class="wrapper">
    <div class="main-page-container">
        <div class="nav-container">
            <div class="nav-inner">
                <img src="../assets/profilepic.jpg" alt="">
                <p>Blake Preston</p>
            </div>
            <div class="nav-inner-two">
                <router-link class="router-link" to="/post"><img src="../assets/linkedinFinal.png" alt=""><p>LinkedIn</p></router-link>
                <router-link class="router-link" to="/post"><img src="../assets/githubFinal.png" alt=""><p>GitHub</p></router-link>
                <router-link class="router-link" to="/post"><img src="../assets/mailFinal.png" alt=""><p>Contact Me</p></router-link>
            </div>
        </div>
    <div class="header-container">
        <div class="text-container">
            <h1>
                Hello, my name is Blake.
            </h1>
            <p>I am a software developer</p>
        </div>
        <div class="text-container-two">
            <h1>
                About Me
            </h1>
            <p>I am a software developer at LREX. I am currently working with .NET and Vue.js.
                <br>
                Recently, I have been diving into web development. I am currently studying Vue and Node.js. 
                I am interested in being able to create full stack applications.
            </p>
        </div>
    </div>
    </div>
    
<div style="display: none" class="main-container">
      <div class="container-one">
          <div class="profile">
              <img src="../assets/profilepic.jpg" alt="">
              <h3>Blake Preston</h3>
              <p>Software Developer</p>
          </div>
          <div class="social-links">
                  <div class="link">
                    <a href="">
                        <img src="../assets/github.png" alt="">
                        <h3>GitHub</h3>
                    </a>
                  </div>
                  <div class="link">
                    <a href="">
                        <img src="../assets/linkedin.png" alt="">
                        <h3>LinkedIn</h3>
                    </a>
                  </div>
                  <div class="link">
                    <a href="">
                        <img src="../assets/twitter.png" alt="">
                        <h3>Twitter</h3>
                    </a>
                  </div>
                  <div class="link">
                    <a href="">
                        <img src="../assets/instagram.png" alt="">
                        <h3>Instagram</h3>
                    </a>
                  </div>
          </div>
      </div>
      <div class="container-two">
          <div class="about-me">
            <h1>About Me</h1>
            <p>
            I am a graduate of Computer Science at the University of Iowa and current software developer at New Jersey Lawyers Service. 
            My current projects include building a .NET Core Web API and using Vue to build the new site for LREX/NJLS. 
            I enjoy challenging myself and learning a wide variety of new skills and techniques.
            Recently, I have been diving into many of the services offered by AWS. I have multiple projects utilizing Amplify Authentication, Lambda Functions, and API Gateway.
            </p>
          </div>
          <div class="technology-section">
              <h1>Technologies Studied</h1>
              <div class="logos">
                  <img src="../assets/javascript2.png" alt="">
                  <img src="../assets/vuelogo.png" alt="">
                  <img src="../assets/css2.png" alt="">
              </div>
          </div>
          <div class="button-container">
              <div class="projects-button">
                  <a href="">My Projects</a>
              </div>
              <div class="projects-button">
                  <a href="">My Resume</a>
              </div>
          </div>
      </div>
  </div>
</div>    
</div>

  
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Roboto:wght@700&family=Work+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Monda&family=Roboto:wght@700&family=Work+Sans&display=swap');

h1{
  font-family: 'Julius Sans One', sans-serif;
}

p, h3{
    font-family: 'Monda', sans-serif;
}

.router-link{
    text-decoration: none;
    color: #243C54;
    font-family: 'Monda', sans-serif;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.body-container{
    overflow: hidden;
}
.wave-container { 
  width:100%;
  position:relative;
  bottom:0;
  left:0;
  top: 0;
  transform: rotateX(180deg);
  z-index: 1;
}

.wave {
  /* background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%23003F7C'/%3E%3C/svg%3E"); */
  /* background: url("data:image/svg, viewBox='0 0 500 150' path d='M0.00,49.98 C175.22,121.88 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z' fill='#AEF78E'"); */
  background-image: url( "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 150'%3E%3Cpath d='M0.00,49.98 C175.22,121.88 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z' fill='%233CE3B4'/%3E%3C/svg%3E" );
  position: absolute;
  bottom: 0;
  width: 6400px;
  height: 500px;
  animation: wave 180s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
}

@keyframes wave {
    0% {transform: translateX(0);}
    50% {transform: translateX(-25%);}
    100% {transform: translateX(0%);}
}

    .wrapper{
        display: flex;
        justify-content: center;
        padding-top: 20px;
    }

    img{
        height: 20px;
    }

    .main-page-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }

    .nav-container{
        position: relative;
        z-index: 99;
        display: flex;
        height: 5%;
        width: 100%;
        justify-content: center;
    }

    .nav-inner{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .nav-inner p{
        color: #243C54;
    }

    .nav-inner img{
        height: 40px;
        border-radius: 50px;
        margin-right: 15px;
    }

    .nav-inner-two{
        display: flex;
        margin-left: 30%;
        width: 50%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .header-container{
        display: flex;
        justify-content: center;
        width: 100%;
        height: 500px;
        position: relative;
        z-index: 99;
        text-align: left;
    }

    .text-container{
        color: #243C54;
        width: 40%;
        margin-top: 10%;
    }

    .text-container h1{
        font-size: 2.5em;
    }

    .text-container-two{
        color: #243C54;
        width: 30%;
        margin-top: 12.5%;
        background: linear-gradient(338.83deg,#96b1ad -3.41%,rgba(255,196,255,0) 52.31%),#b6d6d2;
        padding: 20px;
        border-radius: 15px;
        opacity: .92;
        animation: shadowAnimate 2.5s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite
    }

    @keyframes shadowAnimate {
        0% {box-shadow: 5px 5px #243C54;}
        50% {box-shadow: 10px 10px #243C54;}
        100%{box-shadow: 5px 5px #243C54;}
    }

    .main-container{
        display: flex;
        flex-direction: row;
        background-color: #cecece;
        border-radius: 25px;
        width: 60%;
        background-color: #A0D4FF;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        position: relative;
        z-index: 99;
    }

    .container-one{
        background-color: #1292EE;
        padding: 2.5%;
        width: 30%;
        border-radius: 25px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        
    }

    .profile img{
        height: 5rem;
        border-radius: 50%;
    }

    .link a{
        text-decoration: none;
        color: #2c3e50;
        font-size: 10px;
    }

    .link img{
        height: 2rem;
    }

    .link h3{
        margin-top: 0;
        color: #A0D4FF;
    }

    .container-two{
        margin: 2.5%;
        width: 70%;
    }

    .about-me{
        text-align: left;
    }

    .logos img{
        height: 2.5rem;
    }

    .button-container{
        margin-top: 5%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .projects-button{
        background-color: #005CA4;
        border-radius: 15px;
        padding: 5px;
        margin: 5px;
    }

    .projects-button a{
        text-decoration: none;
        color: #fff;
    }

    @media only screen and (max-width: 950px) {
        .main-container{
            width: 95%;
        }
    }
</style>