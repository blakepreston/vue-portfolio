<template>
  <h1>Amplify</h1>
  <amplify-authenticator></amplify-authenticator>
  <amplify-sign-out v-if="authenticated"></amplify-sign-out>
</template>

<script>
import {Auth, Hub} from 'aws-amplify';
export default {
    data(){
        return{
            authenticated: false
        }
    },
    mounted(){
        Auth.currentAuthenticatedUser().then(()=>{
            this.authenticated = true;
        });

        Hub.listen('auth', (data)=>{
            switch(data.payload.event){
                case 'signIn':
                    console.log("The user signed in!")
                    this.$router.push('post')
                    break;
            }
        })
    }
}
</script>

<style>

</style>