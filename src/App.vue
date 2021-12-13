<template>
  <div class="app">
    <div v-if="userType == 'customer'">
      <Navbar />
    </div>
    <div v-else-if="userType == 'owner'">
      <OwnerNavbar />
    </div>
    <div v-else-if="userType == 'staff'">
      <StaffNavbar />
    </div>
    <div v-else-if="userType == 'chef'">
      <ChefNavbar />
    </div>
    <div v-else-if="userType == 'delivery'">
      <DeliveryNavbar />
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/navigation/CustNavbar";
import OwnerNavbar from "./components/navigation/OwnerNavbar";
import StaffNavbar from "./components/navigation/StaffNavbar";
import ChefNavbar from "./components/navigation/ChefNavbar";
import DeliveryNavbar from "./components/navigation/DeliveryNavbar";
import LoginService from "./services/LoginService";

import Footer from "./components/Footer";
export default {
  mounted() {
    this.fetchData();
  },
  data: () => {
    const data = [];
    return {
      userType: "",
      loginService: new LoginService(),

      data,
    };
  },
  components: {
    Navbar,
    OwnerNavbar,
    StaffNavbar,
    ChefNavbar,
    DeliveryNavbar,
    Footer,
  },
  methods: {
    async fetchData() {
      this.userType = this.loginService.getCurrentUserType();
    },
    async getUserType() {
      return this.userType;
    },
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

