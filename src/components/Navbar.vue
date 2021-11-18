<template>
  <b-navbar style="background-color: white; padding: 16px" shadow>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/pizza_pizza.png" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="/">
        <b-icon pack="fas" icon="home" size="is-small" type="is-primary">
        </b-icon>
        <span style="margin-left: 0.5rem">Home</span>
      </b-navbar-item>
      <b-navbar-item href="/menu">
        <b-icon
          pack="fas"
          icon="pizza-slice"
          size="is-small"
          type="is-primary"
        >
        </b-icon>
        <span style="margin-left: 0.5rem">Menu</span>
      </b-navbar-item>
      <b-navbar-item href="/order">
        <b-icon
          pack="fas"
          icon="shopping-cart"
          size="is-small"
          type="is-primary"
        >
        </b-icon>
        <span style="margin-left: 0.5rem">Order Now</span>
      </b-navbar-item>
      <b-navbar-item href="/about">
        <b-icon pack="fas" icon="store" size="is-small" type="is-primary">
        </b-icon>
        <span style="margin-left: 0.5rem">About Us</span>
      </b-navbar-item>
      <b-navbar-item href="/login">
        <b-icon pack="fas" icon="user" size="is-small" type="is-primary">
        </b-icon>
        <span style="margin-left: 0.5rem">Login</span>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item>
        <b-field>
          <select
            placeholder="Select a customer"
            icon="user"
            value="user"
            @change="$emit('change-user', selectedCustomerId)"
            style="
              padding: 8px 48px;
              margin-left: 8px;
              border: 1px solid grey;
              outline: 0px;
            "
            v-model="selectedCustomerId"
          >
            <option
              v-for="(customer, index) in customers"
              :key="customer.id"
              :index="index"
              v-bind:value="customer.id"
            >
              User: {{ customer.name }}
            </option>
          </select>
        </b-field>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  props: ["customers", "currentCustomerId"],
  data() {
    return {
      selectedCustomerId: this.currentCustomerId,
    };
  },
};
</script>
