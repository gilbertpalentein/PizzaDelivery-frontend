<template>
  <div class="table">
    <center>
      <table>
        <tr>
          <th>ID</th>
          <th>Pizza</th>
          <th>Quantity</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
        <tr v-for="order in orders.detailOrder" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.pizza_id }}</td>
          <td>{{ order.quantity }}</td>
          <td>{{ order.date }}</td>
          <td>
            <button
              class="button is-small is-light"
              @click.prevent="done(props.row)"
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
    <!-- <b-table :data="data" :columns="columns" :hoverable="true" :striped="true">
      <b-table-column field="action" label="Action" v-slot="props">
        <button
          class="button is-small is-light"
          @click.prevent="done(props.row)"
          style="background-image: linear-gradient(to right, #cc2e5d, #ff5858)"
        >
          <b-icon pack="fas" icon="check" size="is-small" type="is-light">
          </b-icon>
        </button>
      </b-table-column>
    </b-table> -->
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
    };
  },
  methods: {
    async fetchData() {
      const res = await axios.get("/order/active-orders");
      this.orders = res.data;
      console.log(this.orders);
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
