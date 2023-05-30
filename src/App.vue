<script>
import NavBarVue from "./components/reusable/NavBar.vue";
import Footer from "./components/reusable/Footer.vue";
export default {
  components: {
    NavBarVue,
    Footer,
  }
}
</script>

<template>
  <div>
    <NavBarVue></NavBarVue>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>


