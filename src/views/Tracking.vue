<template>
  <div class="bgTrack" id="App">
    <div class="container">
      <br />
      <div class="box1">
        <div class="is-column6" style="padding: 2rem">
          <h1 class="title" style="text-align: center">Your Pizza Status</h1>
          <b-field label="Email">
            <b-input v-model="email" placeholder="Insert Email"></b-input>
          </b-field>
          <center>
            <b-button
              @click="
                showModal = true;
                fetchData();
              "
              type="is-danger"
              class="is-success button"
              >Track</b-button
            >
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
              <h1>Status: <span id="statusOrder"></span></h1>
              <b-button
                class="button"
                @click="showModal = false"
                type="is-danger"
              >
                Close
              </b-button>
              <b-button class="pay" type="is-danger"> Pay </b-button>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    this.fetchData();
  },
  name: "App",
  props: ["order"],
  data() {
    return {
      email: "",
      orders: [],
      showModal: false,
    };
  },
  methods: {
    // tracking method
    async fetchData() {
      let status;
      const res = await axios.get("/order/status?customer_email=" + this.email);
      this.orders = res.data;
      console.log(this.orders);
      if (this.orders.status[this.orders.status.length - 1] == 0) {
        status = "dimasak";
      } else if (this.orders.status[this.orders.status.length - 1] == 1) {
        status = "dikirim";
      } else if (this.orders.status[this.orders.status.length - 1] == 2) {
        status = "selesai";
      }
      document.getElementById("statusOrder").innerHTML = status;
    },
    isValid() {
      return true;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    // status() {
    //   let status;
    //   for (let i = 0; i < this.orders.status; i++) {
    //     if (this.orders[i].status == 0) {
    //       status = "dimasak";
    //     } else if (this.orders[i].status == 1) {
    //       status = "dikirim";
    //     } else if (this.orders[i].status == 2) {
    //       status = "selesai";
    //     }
    //     document.getElementById("statusOrder").innerHTML = status;
    //   }
    // },
  },
};
</script>

<style>
.container {
  width: 450px;
  height: 320px;
  margin: 10% auto;
  background-color: rgba(250, 250, 250, 0.295);
}
.bgTrack {
  background-image: url("../assets/about/about_bg.png");
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover;
}
.box1 {
  background-color: white;
  margin: 5%;
  margin-top: 10px;
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
.button {
  margin-top: 5%;
}

h1 {
  color: rgb(87, 42, 42);
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 1%;
}

.pay {
  margin-left: 30%;
}
</style>
