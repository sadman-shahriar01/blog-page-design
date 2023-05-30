import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router';

// component
import Home from './modules/Home/home.vue'
import Post from './modules/Post/Post.vue'
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'Home',
            component: Home,
    
        },
        {
            path: '/post/:id',
            name: 'Post',
            component: Post,
        },
        
    ]
})

createApp(App).use(router).mount('#app');
