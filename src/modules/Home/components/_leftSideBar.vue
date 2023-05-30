<script>
import BannerVue from './_banner.vue'
import PostCard from './_postCard.vue'
export default {
    components: {
        BannerVue,
        PostCard,
    },
    props: ["posts"],
methods:{
    seeDetails(postId){
        this.$router.push(`/post/${postId}`); 
    }
}
}
</script>

<template>
    <div class="">
        <BannerVue v-for="post in posts.slice(0, 1)" :key="post.id" :post="post" class="mx-auto" />
        <div
            class="my-6 md:w-[744px] lg:h-[48px] bg-teal-600 text-white rounded-[10px] shadow-md flex items-center justify-between mx-auto p-2 ">
            <p class=" lg:w-[203px] lg:text-[20px] lg:font-bold lg:pl-[22px] md:w-[138px] text-[14px] pl-[5px]">Recent Posts</p>
            <button>
                <p class="lg:pr-[26px] lg:text-[14px] lg:font-medium lg:underline w-[46px] text-[14px]">More</p>
            </button>
                
        </div>
        <div class="md:w-[744px] grid gap-6 grid-cols-1 md:grid-cols-2 my-[15px] md:mx-auto">
            <PostCard v-for="post in posts.slice(1, 5)" :key="post.id" :post="post" @click="seeDetails(post.id)"/>
        </div>
    </div>
</template>
