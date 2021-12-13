<template>
  <div class="background">
    <div class="container">
      <div class="box">
        <div class="is-column6" style="padding: 2rem">
          <h1 class="title" style="text-align: center">View Order</h1>
          <b-field label="Order Id">
            <b-input v-model="order_id">{{ order_id }}</b-input>
          </b-field>
          
          <center>
            <b-button
              type="is-danger"
              class="is-success button"
              v-on:click="fetchData"
              >View Order</b-button
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
      order_id: 1,
      data: [],
    };
  },
  methods: {
    async fetchData() {
      const res = await axios.get("/order/detail", {
        params: {
          order_id: this.order_id
        }
      });
      this.data = res.data;
      console.log(this.data);
      this.$buefy.dialog.alert(this.data.message 
        + '<br> ID  : ' + this.data.id
        + '<br> Pizza ID  : ' + this.data.pizza_id
        + '<br> Order ID  : ' + this.data.order_id
        + '<br> Quantity  : ' + this.data.quantity
        + '<br> Total Harga  : ' + this.data.total_harga
      )
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
