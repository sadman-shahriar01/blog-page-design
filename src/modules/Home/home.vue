<script>
import axios from 'axios';
import RightSideBar from '../../components/reusable/_rightSideBar.vue';
import LeftSideBar from './components/_leftSideBar.vue';
export default {
    components:{
        RightSideBar,
        LeftSideBar
    },
    data(){
        return {
            posts : [],
        }
    },
    methods:{
        async getData(){
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                this.posts = response.data;
                // console.log(this.posts);
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted(){
        this.getData();
    }

}
</script>

<template>
     <section class="lg:w-[60%] w-[100%] lg:mx-auto lg:mt-[50px] lg:mb-[60px] lg:flex lg:justify-center lg:items-center px-3">
        <div class="lg:flex lg:justify-between">
            <!-- <button @click="getData">show</button> -->
            <LeftSideBar :posts="posts"/>
           <RightSideBar :posts="posts" />
        </div>
     </section>
</template>
