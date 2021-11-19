<template>
  <div class="container">
    <div id="app">
      <transition-group appear name="slide-in" class="grid-wrapper" tag="div">
        <Card
          v-for="(card, index) in cards"
          :key="'card' + index"
          :item="card"
          :index="index"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import Card from "../components/MenuCard";
export default {
  data: () => {
    return {
      cards: [
        { img: "/menu/beef-delight-550x550px.png", grid: "card-1-1-1" },
        { img: "/menu/beef-pepperoni-feast-550x550px.png", grid: "card-1-1-1" },
        { img: "/menu/beef-rasher-550x550px.png", grid: "card-1-1-1" },
        { img: "/menu/cheesy-sausage-550x550px.png", grid: "card-1-1-1" },
        { img: "/menu/chicken-delight-550x550px.png", grid: "card-1-1-1" },
        {
          img: "/menu/chicken-pepperoni-feast-550x550px.png",
          grid: "card-1-1-1",
        },
        { img: "/menu/chicken-sausage-550x550px.png", grid: "card-1-1-1" },
        { img: "/menu/chili-chicken-550x550px.png", grid: "card-1-1-1" },
        { img: "/menu/margherita-550x550px.png", grid: "card-1-1-1" },
        { img: "/menu/pituna-delight-550x550pxzza5.png", grid: "card-1-1-1" },
      ],
    };
  },
  components: {
    Card,
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
