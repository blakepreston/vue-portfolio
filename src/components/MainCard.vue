<template>
<div v-if="displaycontact" class="contact-me-container">
    <div class="contact-me-inner">
        <div @click="displaycontact = !displaycontact" class="contact-me-button"><div class="x-button"></div></div>
        <ContactMe/>
    </div>
</div>
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
                <div class="router-link"><img src="../assets/linkedinFinal.png" alt=""><p><a href="https://www.linkedin.com/in/blake-preston/" target="_blank">LinkedIn</a></p></div>
                <div class="router-link" to="/post"><img src="../assets/githubFinal.png" alt=""><p><a href="https://github.com/blakepreston" target="_blank">GitHub</a></p></div>
                <div @click="displaycontact = !displaycontact" class="router-link"><img src="../assets/mailFinal.png" alt=""><p>Contact Me</p></div>
            </div>
        </div>
    <div class="header-container">
            <div class="text-container">
                <h1>
                    Hello, my name is Blake.
                </h1>
                <p>I am a software developer</p>
                <br>
                <div class="check-projects">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                    <div class="line4"></div>
                    <div class="line5"></div>
                    <div class="line6"></div>
                    <div class="line7"></div>
                    <div class="line8"></div>
                    <div class="line9"></div>
                    <div class="line10"></div>
                </div>
            </div>
        
        <div class="text-container-two">
            <h1>
                About Me
            </h1>
            <p>I am a software developer at LREX. I am currently working with .NET and Vue.js.
                <br>
                <br>
                Recently, I have been diving into web development. I am currently studying Vue and Node.js. 
                I am interested in creating full stack applications. 
                <br>
                In my spare time I create software development related content on YouTube.
                <br>
                Check out my projects below!
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
import ContactMe from '../components/ContactMe.vue'
export default {
    data(){
        return{
            displaycontact: false
        }
    },
    components:{
        ContactMe
    },
    mounted(){
        const textContainer = document.querySelector('.text-container');
        textContainer.classList.remove('text-animation');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                textContainer.classList.add('text-animation');
                return; // if we added the class, exit the function
                }
                    // We're not intersecting, so remove the class!
                    textContainer.classList.remove('text-animation');
                });
            });

        observer.observe(document.querySelector('.text-container'));
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Roboto:wght@700&family=Work+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Monda&family=Roboto:wght@700&family=Work+Sans&display=swap');

.contact-me-container{
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    margin-top: 10%;
    animation: animate-contact 1s ease;
}

.x-button::after{
    content: ' \002B';
    font-weight: bold;
}

.contact-me-button{
    width: 15px;
    height: 15px;
    background-color: #3CE3B4;
    margin-left: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
    border-radius: 50px;
    cursor: pointer;
}

@keyframes animate-contact {
    from{margin-top: -20%;}
    to{margin-top: 10%;}
}

.text-animation{
    animation: text-animate 1s ease;
}

@keyframes text-animate {
    from{margin-top: -10%;}
    to{margin-top: 10%;}
}

h1, h2{
  font-family: 'Julius Sans One', sans-serif;
}

p, h3{
    font-family: 'Monda', sans-serif;
}

.router-link{
    text-decoration: none;
    color: #3CE3B4;
    font-family: 'Monda', sans-serif;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
}

.router-link img{
    background-color: #3CE3B4;
    padding: 1px;
    border-radius: 50px;
}

.router-link a{
    text-decoration: none;
    color: #3CE3B4;
}

.router-link p{
    margin-left: 5px;
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
  background-image: url( "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 150'%3E%3Cpath d='M0.00,49.98 C175.22,121.88 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z' fill='%23243c54'/%3E%3C/svg%3E" );
  position: absolute;
  bottom: 0;
  width: 6400px;
  height: 500px;
  animation: wave 180s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  /* 243C54 */
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

    .check-projects{
        display: flex;
        flex-direction: row;
        width: 50%;
        height: 100%;
        justify-content: space-between;
    }

    .line1{
        width: 2.5px;
        height: 45%;
        background-color: #3CE3B4;
        animation: animateline1 2s infinite;
    }

    @keyframes animateline1 {
        0%{height: 45%;}
        50%{height: 2.5%;}
        100%{height: 45%;}
    }

    .line2{
        width: 2.5px;
        height: 40%;
        background-color: #3CE3B4;
        animation: animateline2 2s infinite;
        animation-delay: .1s;
    }

    @keyframes animateline2 {
        0%{height: 40%;}
        50%{height: 2.5%;}
        100%{height: 40%;}
    }

    .line3{
        width: 2.5px;
        height: 35%;
        background-color: #3CE3B4;
        animation: animateline3 2s infinite;
        animation-delay: .2s;
    }

    @keyframes animateline3 {
        0%{height: 35%;}
        50%{height: 2.5%;}
        100%{height: 35%;}
    }

    .line4{
        width: 2.5px;
        height: 30%;
        background-color: #3CE3B4;
        animation: animateline4 2s infinite;
        animation-delay: .3s;
    }

    @keyframes animateline4 {
        0%{height: 30%;}
        50%{height: 2.5%;}
        100%{height: 30%;}
    }

    .line5{
        width: 2.5px;
        height: 25%;
        background-color: #3CE3B4;
        animation: animateline5 2s infinite;
        animation-delay: .4s;
    }

    @keyframes animateline5 {
        0%{height: 25%;}
        50%{height: 2.5%;}
        100%{height: 25%;}
    }

    .line6{
        width: 2.5px;
        height: 20%;
        background-color: #3CE3B4;
        animation: animateline6 2s infinite;
        animation-delay: .5s;
    }

    @keyframes animateline6 {
        0%{height: 20%;}
        50%{height: 2.5%;}
        100%{height: 20%;}
    }

    .line7{
        width: 2.5px;
        height: 15%;
        background-color: #3CE3B4;
        animation: animateline7 2s infinite;
        animation-delay: .6s;
    }

    @keyframes animateline7 {
        0%{height: 15%;}
        50%{height: 2.5%;}
        100%{height: 15%;}
    }

    .line8{
        width: 2.5px;
        height: 10%;
        background-color: #3CE3B4;
        animation: animateline8 2s infinite;
        animation-delay: .7s;
    }

    @keyframes animateline8 {
        0%{height: 10%;}
        50%{height: 2.5%;}
        100%{height: 10%;}
    }

    .line9{
        width: 2.5px;
        height: 5%;
        background-color: #3CE3B4;
        animation: animateline9 2s infinite;
        animation-delay: .8s;
    }

    @keyframes animateline9 {
        0%{height: 5%;}
        50%{height: 2.5%;}
        100%{height: 5%;}
    }

    .line10{
        width: 2.5px;
        height: 2.5%;
        background-color: #3CE3B4;
        animation: animateline10 2s infinite;
        animation-delay: .9s;
    }

    @keyframes animateline10 {
        0%{height: 2.5%;}
        50%{height: 1%;}
        100%{height: 2.5%;}
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
        height: 10%;
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
        color: #3CE3B4;
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
        height: 600px;
        position: relative;
        z-index: 99;
        text-align: left;
    }

    .text-container{
        color: #3CE3B4;
        width: 40%;
        margin-top: 10%;
    }

    .text-container h1{
        font-size: 2.5em;
    }

    .text-container-two{
        color: #3CE3B4;
        width: 30%;
        height: 60%;
        margin-top: 12.5%;
        background: linear-gradient(338.83deg,#333C45 -3.41%,rgba(255,196,255,0) 52.31%),#485461;
        padding: 20px;
        border-radius: 15px;
        opacity: .92;
        animation: shadowAnimate 2.5s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
    }

    @keyframes shadowAnimate {
        0% {box-shadow: -5px -5px #3CE3B4;}
        50% {box-shadow: -10px -10px #3CE3B4;}
        100%{box-shadow: -5px -5px #3CE3B4;}
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
        
        .header-container{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 800px;
            margin-top: 20%;
        }

        .text-container{
            width: 80%;
        }

        .text-container-two{
            width: 80%;
            margin-top: 30%;
        }

        .nav-inner-two{
            margin-left: 5%;
            flex-direction: column;
            width: 50%;
        }

        .router-link{
            width: 100%;
            justify-content: flex-end;
        }
    }
</style>