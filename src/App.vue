<template>
  <div class="app">
    <Navbar
      v-bind:customers="customers"
      :currentCustomerId="currentCustomerId"
      v-on:change-user="onSelect"
    />
    <router-view v-bind:currentCustomerId="currentCustomerId" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
  mounted() {
    this.fetchCustomer();
  },
  created() {
    if (localStorage.currentCustomerId) {
      this.currentCustomerId = localStorage.currentCustomerId;
    }
  },
  watch: {
    currentCustomerId(currentCustomerId) {
      localStorage.setItem("currentCustomerId", currentCustomerId);
    },
  },
  data() {
    return {
    };
  },
  methods: {
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

