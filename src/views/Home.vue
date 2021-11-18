<template>
  <div id="app">
    <!-- 
      Animation for a list or group of items.
      appear attribute for the initial transition
      name is the prefix for the css classes.
      You can also specify which element this component 
      should be, with the tag attribute
    -->
    <transition-group appear name="slide-in" class="grid-wrapper" tag="div">
      <Card
        v-for="(card, index) in cards"
        :key="'card' + index"
        :item="card"
        :index="index"
      />
    </transition-group>
    <b-button tag="router-link" to="/market" type="is-primary"
      >SHOP NOW</b-button
    >
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  data: () => {
    return {
      cards: [
        /*
          Images are in the assets folder,
          grid is the CSS class
        */
        { img: "/pizza1.png", grid: "card-3-1" },
        { img: "/pizza2.jpg", grid: "card-1-1" },
        { img: "/pizza3.jpg", grid: "card-1-1" },
        { img: "/pizza4.jpg", grid: "card-1-1" },
        { img: "/pizza5.png", grid: "card-3-1" },
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

#app {
  position: relative;
  padding: 10px;
  width: 100%;
  min-height: 100vh;
}

/*
    grid layout, dynamically with repeat, 
    as the first argument you can set the number of columns, 
    I gonna use 2 in this case.
    And as the second argument, 
    you can set the width from each column, 
    and if you want it responsive you can set here 1 fraction, 
    this means that each column has the same width, 
    based on the absolute width, in this case, 50 percent.
  */
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}

/*
    This class would be automatically added to the element 
    before the element is inserted and removed one frame 
    after the element is inserted. 
    Basically it’s the initial state from the element.
  */
.slide-in-enter {
  opacity: 0;
  transform: scale(0.5);
}

/*
    This class can be used to define the duration, 
    delay and easing curve for the entering transition.
    --i is the CSS variable from the Card Component (current index)
    With this you have a staggered delay.
  */
.slide-in-enter-active {
  transition: all 0.4s ease;
  transition-delay: calc(0.1s * var(--i));
}
</style>
