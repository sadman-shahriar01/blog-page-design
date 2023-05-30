<script>
import RightCard from './_rightCard.vue';

export default {
    components:{
        RightCard,
    },
    props: ["posts"],
    methods:{
        showData(){
            console.log(this.posts)
            // console.log("helo");
        }
    }

}
</script>

<template>
    <div>
        <div class="ml-[24px] w-[361px] h-[536px] hidden lg:block">
            <div
                class=" lg:w-[360px]  lg:bg-teal-600 lg:shadow-md lg:rounded-[10px] lg:flex lg:justify-center lg:items-center lg:text-white lg:mb-[12px] ">
                <p class="lg:w-[155px] lg:font-bold lg:text-[20px] lg:py-3">Paling Populer</p>
            </div>
            <RightCard v-for="post in posts.slice(6,9)" :key="post.id" :post="post" />
            <div class="lg:mt-[24px]  lg:w-[360px]">
                <div class="lg:bg-teal-600 lg:shadow-md lg:rounded-[10px] lg:flex justify-center lg:items-center lg:text-white lg:mb-[12px] ">
                    <p class="lg:w-[155px] lg:font-bold lg:text-[20px] lg:py-3 lg:px-10">Kategori</p>
                    

                </div>
                <div class="lg:flex lg:justify-between">
                    <p>> Label 1 </p>
                    <p>(1)</p>
                </div>
                <div class="lg:flex lg:justify-between">
                    <p>> Label 2 </p>
                    <p>(2)</p>
                </div>

            </div>
        </div>
    </div>
</template>
