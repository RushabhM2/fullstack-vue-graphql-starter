import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import AddPost from '../components/Posts/AddPost.vue';
import Posts from '../components/Posts/Posts.vue';
import Profile from '../components/Auth/Profile.vue';
import Signup from '../components/Auth/Signup.vue';
import Signin from '../components/Auth/Signin.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
  },
  {
    path: '/posts/add',
    name: 'AddPost',
    component: AddPost,
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
