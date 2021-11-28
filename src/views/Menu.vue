<template>
  <div class="container">
    <div id="app">
      <transition-group appear class="grid-wrapper" name="slide-in" tag="div">
        <div v-for="pizza in pizzas.data" :key="pizza.id">
          <MenuCard :item="pizza" />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import MenuCard from "@/components/MenuCard";
//import Card from "../components/MenuCard";
import axios from "axios";

export default {
  mounted() {
    this.fetchData();
  },
  data: () => {
    return {
      pizzas: [],
    };
  },
  components: {
    MenuCard,
    //Card,
  },
  methods: {
    async fetchData() {
      const res = await axios.get("/user/menu");
      this.pizzas = res.data;
    },
  },
};
</script>

<style scoped>
.column {
  padding: 0;
}

@media screen and (max-width: 667px) {
  .font {
    font-size: 25px !important;
  }

  .hero-body {
    padding-left: 24px !important;
  }
}

@media screen and (min-width: 668px) and (max-width: 1023px) {
  .font {
    font-size: 35px !important;
  }

  .hero-body {
    padding-left: 36px !important;
  }
}

.container {
  width: 100%;
  height: 100%;
  margin: 2% auto;
  background-color: rgba(97, 93, 93, 0.116);
}

#app {
  position: relative;
  padding: 50px;
  width: 100%;
}

.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
}

.slide-in-enter {
  opacity: 0;
  transform: scale(0.5);
}

.slide-in-enter-active {
  transition: all 0.4s ease;
  transition-delay: calc(0.1s * var(--i));
}
</style>
