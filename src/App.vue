<template>
  <div class="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
var userType = "customer";
var path = "";
switch (userType) {
  case "owner":
    path = "./components/navigation/OwnerNavbar";
    break;
  case "staff":
    path = "./components/navigation/StaffNavbar";
    break;
  case "chef":
    path = "./components/navigation/ChefNavbar";
    break;
  case "delivery":
    path = "./components/navigation/DeliveryNavbar.vue";
    break;
  default:
    path = "./components/navigation/CustNavbar";
}
console.log(path);

// import Navbar from path;
import Navbar from "./components/navigation/CustNavbar";

import Footer from "./components/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import "../scss/main.scss";

.app {
  background-color: #ececec;
  height: 100%;
}
</style>

