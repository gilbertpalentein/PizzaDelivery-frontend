<template>
  <div class="bgLogin">
    <div class="container">
      <br />
      <div class="box1">
        <div class="is-column6" style="padding: 2rem">
          <h1 class="title" style="text-align: center">Login</h1>
          <b-field label="Email">
            <b-input
              v-model="person.email"
              placeholder="Insert Email"
            ></b-input>
          </b-field>
          <b-field label="Password">
            <b-input
              type="password"
              v-model="person.password"
              placeholder="Insert Password"
            ></b-input>
          </b-field>
          <center>
            <b-button
              type="is-danger"
              :disabled="isValid"
              class="is-success"
              v-on:click.native="postCustomer"
              >Login</b-button
            >
          </center>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["currentCustomerId"],
  name: "SignUp",
  data() {
    return {
      person: {
        name: "",
        email: "",
        password: "",
        address: "",
      },
    };
  },
  methods: {
    async postCustomer() {
      console.log(this.person);
      await axios.post("/customers", this.person);
      this.$router.push({ name: "home" });
    },
  },
  computed: {
    isValid() {
      let obj = this.person;
      if (
        obj.name.length == 0 ||
        obj.address.length == 0 ||
        obj.email.length == 0 ||
        obj.password.length == 0
      ) {
        return true;
      }

      return false;
    },
  },
};
</script>

<style>
.container {
  width: 450px;
  height: 400px;
  margin: 9% auto;
  background-color: rgba(250, 250, 250, 0.295);
}
.bgLogin {
  background-image: url("../assets/login/BgLogin.png");
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover;
}
.box1 {
  background-color: white;
  margin: 5%;
  margin-top: 10px;
}
</style>
