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
      <b-navbar-item href="/staff/process">
        <b-icon
          pack="fas"
          icon="shopping-cart"
          size="is-small"
          type="is-primary"
        >
        </b-icon>
        <span style="margin-left: 0.5rem">Process Orders</span>
      </b-navbar-item>
      <b-navbar-item href="/staff/view">
        <b-icon
          pack="fas"
          icon="shopping-cart"
          size="is-small"
          type="is-primary"
        >
        </b-icon>
        <span style="margin-left: 0.5rem">View Order</span>
      </b-navbar-item>
      <b-navbar-item href="#">
        <b-icon pack="fas" icon="user" size="is-small" type="is-primary">
        </b-icon>
        <span style="margin-left: 0.5rem">Logout</span>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>