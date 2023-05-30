<script>
export default {
    props: ['post'],
      
}
</script>
<template>
    <div class="  md:w-[744px] md:h-[396px] bg-gray-200 flex flex-col justify-end md:pl-[22px] lg:pb-[24px] rounded-[10px] my-[10px] h-[206px] cursor-pointer">
        <div class="px-[16px] py-[23px]">

            <p class=" w-16 h-5 font-normal text-base whitespace-nowrap">In Label</p>
            <h1 class=" font-bold lg:text-[32px] text-[24px] overflow-hidden whitespace-nowrap overflow-ellipsis ">{{post.title}}</h1>
            <p class="font-medium "><span class="font-bold">By</span> User - {{post.userId}}</p>
        </div>
    </div>
</template>

