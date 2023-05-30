<script>
import axios from 'axios';
import RightSideBar from '../../components/reusable/_rightSideBar.vue'


export default {
    components: { RightSideBar },

    data() {
        return {
            posts: [],
            postId: null
        }
    },
    methods: {
        async getData() {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                this.posts = response.data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.getData();
    },
    created() {
        this.postId = this.$route.params.id;
        // const selectedTeam = this.posts.find(team => team.id === teamId)
       // const members = selectedTeam.members;
    
        
    }

}
</script>
<template>
    <div>
        <section class="lg:w-[60%] w-[100%] mx-auto mt-[50px] mb-[60px] lg:flex lg:justify-center lg:items-center">
            <div class="lg:flex lg:justify-between">
                <div v-for="post in posts" :key="post.id">
                    <div v-if="post.id == postId">
                        <div
                            class="w-full h-[48px] bg-teal-600 rounded-[10px] shadow-md mb-[20px] px-[13px] flex items-center text-white">
                            <p>Home > html > Apa Itu HTML?</p>
                        </div>
                        <h1 class=" font-bold text-[32px] overflow-hidden whitespace-nowrap overflow-ellipsis">{{ post.title }}</h1>
                        <div class="grid grid-cols-2 mt-[10px] w-[50%]">
                            <p class="font-medium "><span class="font-bold">By</span> {{post.userId}}</p>
                            <p class="text-gray-600">22 Agustus 2022</p>
                        </div>
                        <div class="mt-[40px] w-[744px] mb-[20px]">
                            <h1 class="font-bold text-[24px] mb-3">Apa itu HTML ?</h1>
                            <p>
                               {{ post.body }}
                            </p>
                            <h1 class="font-bold text-[24px] mb-3">Pengertian</h1>

                            <p class="mb-3">
                              {{ post.body }} </p>
                            <h1 class="font-bold text-[24px] mb-3">Sejarah Singkat</h1>

                            <p>{{post.body}}
                            </p>

                        </div>
                        <img class="mb-2" src="./img/image 1.svg" alt="">

                        <div class=" w-[744px] ">
                            <h1 class="font-bold text-[24px] mb-3">Penutup</h1>
                            <p>
                                {{post.body}}
                            </p>
                        </div>
                </div>
            </div>
            <div>
                <RightSideBar :posts="posts" />
            </div>
        </div>
    </section>

</div></template>

