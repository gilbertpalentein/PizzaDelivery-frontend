<template>
  <div class="table">
    <center>
      <table>
        <tr>
          <th>ID</th>
          <th>Pizza</th>
          <th>Quantity</th>
          <th>Total Harga</th>
          <th>Action</th>
        </tr>
        <tr v-for="order in orders.detailOrder" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.pizza_id }}</td>
          <td>{{ order.quantity }}</td>
          <td>{{ order.total_harga }}</td>
          <td>
            <button
              class="button is-small is-light"
              v-on:click="onProcess(order.id)"
              style="
                background-image: linear-gradient(to right, #cc2e5d, #ff5858);
              "
            >
              <b-icon pack="fas" icon="check" size="is-small" type="is-light">
              </b-icon>
            </button>
          </td>
        </tr>
      </table>
    </center>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    this.fetchData();
  },
  props: ["order"],
  data() {
    return {
      orderInfo: [],
      orders: [],
      orderData: [],
    };
  },
  methods: {
    async fetchData() {
      const res = await axios.get("/order/active");
      this.orders = res.data.data[0];
      const res2 = await axios.get("/order/allorder");
      this.orderData = res2.data.dataOrder;
      console.log(this.orders);
    },
    onProcess(id) {
      console.log(id);
      for (let i = 0; i < this.orderData.length; i++) {
        if (this.orderData[i].id == id) {
          this.orderData[i].status = 1;
          axios.put("/order/" + id, this.orderData[i]);
          window.location.reload();
          break;
        }
      }
    },
  },
};
</script>
<style scoped>
table {
  width: 100%;
}
button {
  margin-left: 5%;
}
</style>
