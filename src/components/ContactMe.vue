<template>
  <div class="container">
      <div class="inner-container">
          <div class="input-container">
              <h2>Contact Me</h2>
              <div class="input-label-container">
                  <label for="name">What is your name?</label>
                  <input v-model="emailData.name" id="name" type="text">
              </div>
              <div class="input-label-container">
                  <label for="email">What is your e-mail?</label>
                  <input v-model="emailData.email" id="email" type="text">
              </div>
              <div class="input-label-container">
                  <label for="message">What is your message?</label>
                  <input v-model="emailData.bodyText" id="message" type="text">
              </div>
              <button @click="PostEmail()" class="submit-button">Submit</button>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            emailData: {
                name: "",
                email: "",
                bodyText: ""
            }
        }
    },
    methods:{
        PostEmail(){
            axios.post('https://p79ylfa724.execute-api.us-east-2.amazonaws.com/production/sendemail', this.emailData).then(response => {
                console.log(response);
                alert("Email Sent")
            }).catch(err => {
                console.log(err);
                alert("Email Failed")
            })
        }
    }
}
</script>

<style scoped>
.container{
    width: 100%;
    display: flex;
    justify-content: center;
}

.inner-container{
    width: 50%;
    justify-content: center;
    background-color: #333C45;
    border-radius: 15px;
}

.input-container{
    padding: 20px;
    color: #3CE3B4;
    width: 100%;
    font-family: 'Monda', sans-serif;
    display: flex;
    flex-direction: column;
    text-align: left;
}

.input-container h2{
    margin: 0;
}

.input-label-container{
    margin-top: 10px;
    display: flex;
    width: 80%;
    justify-content: space-between;
}

.input-label-container input{
    width: 50%;
    border-radius: 15px;
    border: none;
}

.submit-button{
    background-color: #3CE3B4;
    border: none;
    border-radius: 15px;
    padding: 10px;
    width: 20%;
    margin-top: 20px;
    transition-duration: .5s;
    cursor: pointer;
}

.submit-button:hover{
    background-color: #34cba0;
    transition-duration: .5s;
}

@media only screen and (max-width: 950px) {
    .inner-container{
        width: 90%;
    }
}
</style>