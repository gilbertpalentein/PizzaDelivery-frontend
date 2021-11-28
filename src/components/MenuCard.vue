<template>
  <div class="card">
    <div id="menu">
      <button class="button" @click="showModal = true">{{ item.nama }}</button>
      <center>
        <img :key="item.gambar" :alt="item.name" :src="imagePath" /><br />
        <p class="price">Rp.{{ item.harga }}</p>
      </center>
      <transition appear name="fade">
        <div
          v-if="showModal"
          class="modal-overlay"
          @click="showModal = false"
        />
      </transition>
      <transition appear name="slide">
        <div v-if="showModal" id="cek">
          <h1>{{ item.nama }}</h1>
          <p>
            {{ item.deskripsi }}
          </p>
          <button class="button" @click="showModal = false">Close</button>
          <button class="button BuyButton" @click="addToCart">
            Buy (Rp.{{ item.harga }})
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import CartService from "../services/CartService";

export default {
  props: ["item", "index"],
  computed: {
    imagePath() {
      return `images/menu/${this.item.gambar}`;
    },
  },
  data() {
    return {
      showModal: false,
      cartService: new CartService(),
    };
  },

  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    addToCart() {
      this.cartService.addToCart({
        ...this.item,
        quantity: 1,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
}

.button {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  display: inline-block;
  padding: 10px auto;
  background-image: linear-gradient(to right, #cc2e5d, #ff5858);
  border-radius: 8px;

  color: #fff;
  font-size: 18px;
  font-weight: 700;

  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;

  &:hover {
    box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
  }
}

.price {
  display: inline-block;
  border-radius: 5px;

  background-color: white;
  font-size: 20px;
  font-weight: 750;
  color: black;

  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;

  &:hover {
    box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
  }
}

.BuyButton {
  margin-left: 15%;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}

#cek {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 16px;

  padding: 25px;
}

h1 {
  color: #222;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 15px;
}

p {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.1s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
img {
  width: 70%;
  margin-top: -8%;
  margin-bottom: -10%;
}
</style>

