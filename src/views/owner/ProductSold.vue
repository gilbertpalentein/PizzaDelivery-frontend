<template>
    <div class="table">
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
    export default {
        data() {
            return {
                data: [
                    { 'id': 1, 'name': 'Beef Delight', 'amount': '52'},
                    { 'id': 2, 'name': 'Beef Pepperoni Feast', 'amount': '72'},
                    { 'id': 3, 'name': 'Beef Rasher', 'amount': '16'},
                    { 'id': 4, 'name': 'Cheesy Sausage', 'amount': '72'},
                    { 'id': 5, 'name': 'Chicken Delight', 'amount': '16'},
                ],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'name',
                        label: 'Name',
                    },
                    {
                        field: 'amount',
                        label: 'Amount',
                        centered: true
                    },
                ]
            }
        }
    }
</script>
