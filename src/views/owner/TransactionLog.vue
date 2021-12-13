<template>
    <div class="table">
        <br>
        Filter <input type="text" v-model="search" class="form-control" />
            <b-button
              type="is-danger"
              class="is-success button"
              v-on:click="fetchSpecific"
              >Filter</b-button
            >

        <b-table
            :data="data" 
            :columns="columns" 
            :hoverable="true"
            :striped="true"
        >
        </b-table>
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
            columns: [
                {
                    field: 'id',
                    label: 'ID',
                    width: '40',
                    numeric: true
                },
                {
                    field: 'cust_email',
                    label: 'Customer Email',
                },
                {
                    field: 'date',
                    label: 'Date',
                    centered: true
                },
                {
                    field: 'address',
                    label: 'Address',
                },
            ]
        }
    },
    methods: {
        async fetchData() {
            const res = await axios.get("/transaction/finished");
            this.orders = res.data;
        },
        async fetchSpecific() {
            var FormData = require('form-data');
            var data = new FormData();
            data.append('pizza_id', this.search);
            const res = await axios.get("/transaction/pizza", data);
            this.orders = res.data;
        },
    },
};
</script>
