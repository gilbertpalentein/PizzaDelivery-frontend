<template>
    <div class="table">
    <br>
    Filter <input type="text" v-model="search" class="form-control" />
    <span style="margin-left: 0.5rem" v-on:click="fetchSpecific">
        <button class="btn">Filter</button>
    </span>
      <table>
        <tr>
          <th>ID</th>
          <th>Customer Email</th>
          <th>Date</th>
          <th>Address</th>
        </tr>
        <tr v-for="log in data" :key="log.id">
          <td>{{ log.id }}</td>
          <td>{{ log.customer_email }}</td>
          <td>{{ log.waktu }}</td>
          <td>{{ log.alamat }}</td>
        </tr>
      </table>
    </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    this.fetchData();
  },
    data() {
        return {
            search: '',
            data: [],
        }
    },
    methods: {
        async fetchData() {
            const res = await axios.get("/transaction/finished");
            this.data = res.data.data[0];
        },
        async fetchSpecific() {
            const res = await axios.get("/transaction/pizza/" + this.search);
            this.data = res.data.data[0];
        },
    },
};
</script>
