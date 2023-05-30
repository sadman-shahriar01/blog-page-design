<script>

export default {
    data() {
        return {
            showMenu: false,
        };
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
            if (this.showMenu) {
                // Hide other content
                document.documentElement.classList.add('overflow-hidden');
            } else {
                // Show other content
                document.documentElement.classList.remove('overflow-hidden');
            }
        },
    },
};

</script>
<template>
    <!-- <div class="bg-teal-600 flex justify-center items-center">
        <nav class="container h-[70px] bg-teal-600 flex justify-between items-center">
            <h1 class="text-4xl text-white font-bold w-[210px] h-[45px]">Kang Tutor</h1>
            <ul class="flex">
                <li class="px-5 font-semibold text-white "><a href="#">Home</a></li>
                <li class="px-5 font-semibold text-white"><a href="#">Tutorial</a></li>
                <li class="px-5 font-semibold text-white"><a href="#">Programming</a></li>
                <li class="px-5 font-semibold text-white"><a href="#">Technology</a></li>
                <li class="px-5 font-semibold text-white">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5 ">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </a>
                </li>
            </ul>
        </nav>
    </div> -->
    <div class="bg-teal-600">
        <nav
            class="w-full lg:w-[60%] lg:mx-auto lg:h-[70px] lg:bg-teal-600 lg:flex lg:justify-between lg:items-center flex-shrink-0">

            <div>
                <div v-if="!showMenu" class="flex justify-between">
                    <h1
                        class="lg:text-4xl lg:text-white lg:font-bold whitespace-nowrap text-4xl text-white font-bold  px-4 cursor-pointer">
                        Kang Tutor</h1>
                    <button @click="toggleMenu" class="px-4">
                        <!-- Hamburger Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-[50px] h-[55px] text-white lg:hidden">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>

                </div>
            </div>
            <ul class="lg:flex hidden ">
                <li class="lg:px-5 lg:font-semibold lg:text-white "><router-link to="/">Home</router-link> </li>
                <li class="lg:px-5 lg:font-semibold lg:text-white"><a href="#">Tutorial</a></li>
                <li class="lg:px-5 lg:font-semibold lg:text-white"><a href="#">Programming</a></li>
                <li class="lg:px-5 lg:font-semibold lg:text-white"><a href="#">Technology</a></li>
                <li class="lg:px-5 lg:font-semibold lg:text-white">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5 ">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </a>
                </li>
            </ul>
        </nav>
        <div v-if="showMenu" class="bg-teal-600 h-full lg:hidden fixed inset-0 overflow-auto">
             <!-- Cross Icon -->
            <button @click="toggleMenu"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor "
                    class=" w-[35px] h-10 absolute right-10 top-6 text-white  stroke-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg></button>

            <div class="w-[60%] mx-auto flex  justify-between items-center pt-[100px] flex-shrink-0">
                <div class="relative">
                    <input type="text"
                        class="md:w-[495px] w-[300px] h-[48px] bg-gray-300 shadow-md rounded-[10px] pl-[10px] placeholder-gray-600 mx-[-35px] sm:mx-[5px] "
                        placeholder="Cari Artikel atau Kategori">
                        <!-- search Icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-6 absolute sm:right-6 top-3 right-[-20px]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                </div>
            </div>
            <div class=" w-[80%] md:w-[60%] mx-auto justify-between items-center">
                <ul class=" space-y-4 py-10 font-bold sm:text-4xl text-2xl text-white">
                    <li ><a href="">HOME</a></li>
                    <li ><a href="">TUTORIAL</a></li>
                    <li ><a href="">PROGRAMMING</a></li>
                    <li ><a href="">TECHNOLOGY</a></li>
                </ul>
            </div>
            <div class="w-full md:w-[60%] mx-8 md:mx-auto justify-between items-center ">
                <h2 class="font-bold text-4xl text-white pb-[20px] ">Pailing Populer</h2>
                <div class=" bg-white sm:w-[360px] md:w-[495px] w-[80%] h-[96px]  shadow-lg  rounded-[10px]  flex  px-[12px]  py-[13px] mb-[10px]">
                    <div class=" w-[132px]  h-[70px]  rounded-[10px]  bg-gray-200">
                    </div>
                    <div class=" px-[12px]  py-[13px]">
                        <p
                            class=" w-[172px]  h-[20px]  font-bold  text-[14px]  pb-[8px]  ">
                            Ini Adalah Judul Artikel</p>
                        <p class=" text-gray-400   h-[15px]  font-medium  text-[14px]">22 Agustus 2022</p>
                    </div>

                </div>
                <div class=" md:w-[495px] bg-white sm:w-[360px] w-[80%] h-[96px]  shadow-lg  rounded-[10px]  flex  px-[12px]  py-[13px] mb-[10px]">
                    <div class=" w-[132px]  h-[70px]  rounded-[10px]  bg-gray-200">
                    </div>
                    <div class=" px-[12px]  py-[13px]">
                        <p
                            class=" w-[172px]  h-[20px]  font-bold  text-[14px]  pb-[8px]  ">
                            Ini Adalah Judul Artikel</p>
                        <p class=" text-gray-400   h-[15px]  font-medium  text-[14px]">22 Agustus 2022</p>
                    </div>

                </div>
                <div class=" md:w-[495px] bg-white sm:w-[360px] w-[80%] h-[96px]  shadow-lg  rounded-[10px]  flex  px-[12px]  py-[13px] mb-[10px]">
                    <div class=" w-[132px]  h-[70px]  rounded-[10px]  bg-gray-200">
                    </div>
                    <div class=" px-[12px]  py-[13px]">
                        <p
                            class=" w-[172px]  h-[20px]  font-bold  text-[14px]  pb-[8px]  ">
                            Ini Adalah Judul Artikel</p>
                        <p class=" text-gray-400   h-[15px]  font-medium  text-[14px]">22 Agustus 2022</p>
                    </div>
                </div>
              
               
            </div>
        </div>
    </div>
</template>

<style scoped>
.overflow-hidden {
    display: none;
}</style>