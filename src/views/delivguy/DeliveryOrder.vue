<template>
  <div class="table">
    <center>
      <table>
        <tr>
          <th>ID</th>
          <th>Customer Email</th>
          <th>Date</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
        <tr v-for="pizza in orderData" :key="pizza.id">
          <td v-if="pizza.status == 0">{{ pizza.id }}</td>
          <td v-if="pizza.status == 0">{{ pizza.customer_email }}</td>
          <td v-if="pizza.status == 0">{{ pizza.waktu }}</td>
          <td v-if="pizza.status == 0">{{ pizza.alamat }}</td>
          <td v-if="pizza.status == 0">
            <button
              class="button is-small is-light"
              v-on:click="onProcess(pizza.id)"
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
      orderData: [],
    };
  },
  methods: {
    async fetchData() {
      const res = await axios.get("/order/allorder");
      this.orderData = res.data.dataOrder;
    },
    onProcess(id) {
      console.log(id);
      for (let i = 0; i < this.orderData.length; i++) {
        if (this.orderData[i].id == id) {
          this.orderData[i].status = 2;
          axios.put("/order/" + id, this.orderData[i]);
          const res = axios.get("/order/allorder");
          this.orderData = res.data.dataOrder;
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
  text-align: center;
}
</style>
