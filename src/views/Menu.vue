<template>
  <div class="container">
    <div id="app">
      <transition-group appear name="slide-in" class="grid-wrapper" tag="div">
        <!-- <Card
          v-for="pizza in pizzas" :key="pizza"
        /> -->
        <!-- <Card
          v-for="(card, index) in cards"
          :key="'card' + index"
          :item="card"
          :index="index"
        /> -->
        <div v-for="pizza in pizzas.data" :key="pizza">
          <h1>{{ pizza.nama }}</h1>
          <h1>{{ pizza.deskripsi }}</h1>
          <h1>{{ pizza.harga }}</h1>
          <h1>{{ pizza.gambar }}</h1>
        </div>
        <!-- <img v-for="pizza in pizzas.data" :key="getImage(pizza.gambar)"  :src="pizza.gambar" :aria-flowto="pizza.gambar"> -->
      </transition-group>
    </div>
  </div>
</template>

<script>
//import Card from "../components/MenuCard";
import axios from "axios";

export default {
  mounted() {
    this.fetchData()
  },
  data: () => {
    return {
      pizzas: [],
    };
  },
  components: {
    //Card,
  },
  methods: {
    async fetchData() {
      const res = await axios.get("/user/menu");
      this.pizzas = res.data;
      this.pizzas.array.forEach(element => {
        console.log(element);
      });
      //console.log(this.pizzas);
    },
    async getImage(imgName) {
      return "../assets" + imgName
    }
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
  min-height: 100vh;
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
