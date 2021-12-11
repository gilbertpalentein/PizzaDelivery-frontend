<template>
  <div class="background">
    <div class="container">
      <div class="box">
        <div class="is-column6" style="padding: 2rem">
          <h1 class="title" style="text-align: center">Income</h1>
          <b-field label="Period">
            <b-input v-model="period">{{ period }}</b-input>
          </b-field>
          
          <center>
            <b-button
              type="is-danger"
              class="is-success button"
              v-on:click="fetchData"
              >View Income</b-button
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
  data() {
    return {
      period: 1,
      data: [],
    };
  },
  methods: {
    async fetchData() {
      const res = await axios.get("/admin/payments-period", {
        params: {
          period: this.period
        }
      });
      this.data = res.data;
      this.$buefy.dialog.alert(this.data.message + '<br> Total income : ' + this.data.total)
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
.background {
  background-image: url("../../assets/about/about_bg.png");
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover;
}
.box {
  margin: 5%;
  margin-top: 10px;
}
</style>
