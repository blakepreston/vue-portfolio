<template>
  <div><h1>Test</h1></div>
  <div class="container">
      <div class="input-container">
          <label for="id">ProjectId</label>
          <input type="text" name="id" v-model="postData.projectId">
          </div>
        <div class="input-container">
          <label for="title">Title</label>
          <input name="title" type="text" v-model="postData.title">
      </div>
      <div class="input-container">
          <label for="about">About</label>
          <input name="about" type="text" v-model="postData.about">
      </div>
      <div class="input-container">
          <label for="image">Image</label>
          <input name="image" type="text" v-model="postData.image">
      </div>
      <div class="input-container">
          <label for="link1">Link1</label>
          <input name="link1" type="text" v-model="postData.link1">
      </div>
      <div class="input-container">
          <label for="link2">Link2</label>
          <input name="link2" type="text" v-model="postData.link2">
      </div>

      <button type="submit" @click="PostProject()">Post</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            postData: {
                projectId: '',
                title: '',
                about: '',
                image: '',
                link1: '',
                link2: ''
            }
        }
    },
    methods:{
        PostProject(){
            axios.post('https://p79ylfa724.execute-api.us-east-2.amazonaws.com/production/postprojects', this.postData).then(response => {
                console.log(response);
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>

</style>