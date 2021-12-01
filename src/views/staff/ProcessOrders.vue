<template>
    <div class="table">
        <b-table
            :data="data" 
            :columns="columns" 
            :hoverable="true"
            :striped="true"
        >
            <!-- ini kenapa ga muncul astaga -->
            <b-table-column field="action">
                <button class="button is-small is-light" @click.prevent="onProcess(props.row)">
                    <b-icon
                        pack="fas"
                        icon="play"
                        size="is-small"
                        type="is-primary"
                    >
                    </b-icon>
                </button>
                <button class="button is-small is-danger" @click.prevent="onDelete(props.row)">
                    <b-icon
                        pack="fas"
                        icon="trash"
                        size="is-small"
                        type="is-primary"
                    >
                    </b-icon>
                </button>
            </b-table-column>
        </b-table>
        
        <!-- hapus ini kalau sudah muncul di action -->
        <button class="button is-small is-light" @click.prevent="onProcess(props.row)">
            <b-icon
                pack="fas"
                icon="play"
                size="is-small"
                type="is-primary"
            >
            </b-icon>
        </button>
        <button class="button is-small is-danger" @click.prevent="onDelete(props.row)">
            <b-icon
                pack="fas"
                icon="trash"
                size="is-small"
                type="is-primary"
            >
            </b-icon>
        </button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
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
                    {
                        field: 'action',
                        label: 'Action',
                    }
                ]
            }
        }
    }
</script>
