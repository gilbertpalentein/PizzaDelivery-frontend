<template>
  <div class="table">
    <center>
      <table>
        <tr>
          <th>ID</th>
          <th>Pizza</th>
          <th>Quantity</th>
          <th>Date</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>
        <tr v-for="pizza in data" :key="pizza.id">
          <td>{{ pizza.id }}</td>
          <td>{{ pizza.pizza_order }}</td>
          <td>{{ pizza.quantity }}</td>
          <td>{{ pizza.date }}</td>
          <td>{{ pizza.address }}</td>
          <td>{{ pizza.phone_number }}</td>
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
export default {
  props: ["order"],
  data() {
    return {
      data: [
        {
          id: 1,
          cust_name: "Gilbert",
          pizza_order: "Beef Delight",
          quantity: 1,
          date: " 	2021-11-25 14:35:42",
          address: "Pluto",
          phone_number: "08982321312",
        },
        {
          id: 1,
          cust_name: "Gilbert",
          pizza_order: "Beef Delight",
          quantity: 1,
          date: " 	2021-11-25 14:35:42",
          address: "Pluto",
          phone_number: "08982321312",
        },
        {
          id: 1,
          cust_name: "Gilbert",
          pizza_order: "Beef Delight",
          quantity: 1,
          date: " 	2021-11-25 14:35:42",
          address: "Pluto",
          phone_number: "08982321312",
        },
        {
          id: 1,
          cust_name: "Gilbert",
          pizza_order: "Beef Delight",
          quantity: 1,
          date: " 	2021-11-25 14:35:42",
          address: "Pluto",
          phone_number: "08982321312",
        },
        {
          id: 1,
          cust_name: "Gilbert",
          pizza_order: "Beef Delight",
          quantity: 1,
          date: " 	2021-11-25 14:35:42",
          address: "Pluto",
          phone_number: "08982321312",
        },
      ],
    };
  },
};
</script>
<style scoped>
table {
  width: 100%;
}
button {
  margin-left: 7%;
}
</style>
