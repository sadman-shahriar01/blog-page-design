<script>

export default{
    props: ['post']
}
</script>
<template>
    <div class="lg:w-[360px] lg:h-[96px] lg:shadow-lg lg:rounded-[10px] lg:flex lg:px-[12px] lg:py-[13px] cursor-pointer">
                <div class="lg:w-[132px] lg:h-[70px] lg:rounded-[10px] lg:bg-gray-200">
                </div>
                <div class="lg:px-[12px] lg:py-[13px]">
                    <p class="lg:w-[172px] lg:h-[20px] lg:font-bold lg:text-[14px] lg:pb-[8px] lg:overflow-hidden lg:whitespace-nowrap lg:overflow-ellipsis">{{post.title}}</p>
                    <p class="lg:text-gray-400  lg:h-[15px] lg:font-medium lg:text-[14px]">22 Agustus 2022</p>
                </div>

            </div>
</template>