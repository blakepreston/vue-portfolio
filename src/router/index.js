import { createRouter, createWebHistory } from 'vue-router'
import PostProject from '../components/PostProject.vue'
import AuthComponent from '../components/Auth.vue'
import {Auth} from 'aws-amplify';

const routes = [
  {
    path: '/post',
    name: 'Post',
    component: PostProject,
    meta: { auth: true}
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeResolve((to, from, next)=>{
  if(to.meta.auth){
    console.log("This route is protected")
    Auth.currentAuthenticatedUser().then(()=>{
      next()
    }).catch(()=>{
      console.log("User is not authenticated")
      next({
        path: '/auth'
      })
    })
  }else{
    next()
  }
})

export default router
