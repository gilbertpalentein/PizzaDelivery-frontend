<template>
  <div class="bgTrack">
    <div class="container">
      <br />
      <div class="box1">
        <div class="is-column6" style="padding: 2rem">
          <h1 class="title" style="text-align: center">Track Your Pizza</h1>
          <b-field label="Email">
            <b-input
              v-model="person.email"
              placeholder="Insert Email"
            ></b-input>
          </b-field>

          <!-- <b-button
              @click="showModal = true"
              type="is-danger"
              :disabled="isValid"
              class="is-success"
              v-on:click.native="postCustomer"
              >Track</b-button
            > -->
          <center>
            <b-button
              @click="showModal = true"
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
              <h1 class="deliv">DELIVERY TO</h1>
              <p>
                Gg. Sukawarna II No. 18 c, Pajajaran, Cicendo, Bandung City,
                West Java 40173
              </p>
              <p>0897654432</p>
              <p>NoTelp</p>
              <h1 class="pizza_status">Your Pizza Status: OTW</h1>
              <b-button
                class="button"
                @click="showModal = false"
                type="is-danger"
              >
                Close
              </b-button>
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
  name: "SignUp",
  data() {
    return {
      person: {
        email: "",
      },
      showModal: false,
    };
  },
  methods: {
    // login method
    login() {
      const res = axios.post("/tracking");
      console.log(res);
    },
    isValid() {
      return true;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
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
p,
h1 {
  text-align: center;
}

.button {
  margin-top: 5%;
}

h1.deliv {
  color: rgb(87, 42, 42);
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 1%;
  text-align: left;
}

h1.pizza_status {
  margin-top: 2%;
  color: rgb(87, 42, 42);
  font-size: 20px;
  font-weight: 900;
}
</style>
