<template>
    <div class="table">
        <br>
        Filter <input type="text" v-model="search" class="form-control" />
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
    data() {
        return {
            search: '',
            data: [
                { 'id': 1, 'cust_email': 'cust1@gmail.com', 'date': ' 	2021-11-25 14:35:42', 'address': 'Pluto'},
                { 'id': 2, 'cust_email': 'cust2@gmail.com', 'date': ' 	2021-11-25 14:35:42', 'address': 'Pluto'},
                { 'id': 3, 'cust_email': 'cust3@gmail.com', 'date': ' 	2021-11-25 14:35:42', 'address': 'Pluto'},
                { 'id': 4, 'cust_email': 'cust4@gmail.com', 'date': ' 	2021-11-25 14:35:42', 'address': 'Pluto'},
                { 'id': 5, 'cust_email': 'cust5@gmail.com', 'date': ' 	2021-11-25 14:35:42', 'address': 'Pluto'},
            ],
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
            const res = await axios.get("/log");
            this.orders = res.data;
            console.log(this.orders);
        },
        async fetchSpecific() {
            const res = await axios.get("/log", {
                params: {
                    search: this.search
                }
            });
            this.orders = res.data;
            console.log(this.orders);
        },
    },
};
</script>
