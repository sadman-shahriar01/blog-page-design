<script>

export default{
    props: ['post']
}
</script>

<template>
    <div >

        <div class=" lg:w-[360px] lg:h-[396px] bg-white rounded-[10px] shadow-md cursor-pointer">
            <div class="lg:w-[360px] lg:rounded-[10px] shadow-md h-[191px] bg-gray-200 "></div>
            <div class="pl-[12px] ">
                <p class="w-[56px] h-[15px] font-normal text-sm text-teal-600 mt-[13px] mb-[2px]">In Label</p>
                <h1 class="lg:w-[246px] lg:h-[28px] font-bold text-[20px] lg:mt-[2px] lg:mb-[2px] overflow-hidden whitespace-nowrap overflow-ellipsis">{{post.title}}</h1>
                <p class=" mt-[2px] lg:mb-[16px] mb-[5px] font-medium lg:w-[140px] lg:h-[15px] text-[14px]"><span class="font-bold">By</span> User - {{ post.userId }}</p>
                <div class="lg:w-[336px] lg:h-[70px] mt-[13px] text-[14px] lg:font-normal lg:overflow-hidden">
                    <p class="lg:line-clamp-3">{{ post.body }}</p>
                </div>
                <p class="lg:w-[116px] lg:h-[17px] text-[14px] font-medium text-gray-400">22 August 2022
                </p>
            </div>
    </div>
    </div>
</template>