<template>
  <div class="background">
    <div class="container">
      <div class="box">
        <div class="is-column6" style="padding: 2rem">
          <h1 class="title" style="text-align: center">Income</h1>
          <b-field label="Start Date">
            <b-datepicker
                v-model="date.start"
                :show-week-number="showWeekNumber"
                :locale="locale"
                placeholder="Click to select..."
                icon="calendar-today"
                :icon-right="selected ? 'close-circle' : ''"
                icon-right-clickable
                @icon-right-click="clearDate"
                trap-focus>
            </b-datepicker>
          </b-field>
          <b-field label="End Date">
            <b-datepicker
                v-model="date.end"
                :show-week-number="showWeekNumber"
                :locale="locale"
                placeholder="Click to select..."
                icon="calendar-today"
                :icon-right="selected ? 'close-circle' : ''"
                icon-right-clickable
                @icon-right-click="clearDate"
                trap-focus>
            </b-datepicker>
          </b-field>
          
          <center>
            <b-button
              type="is-danger"
              class="is-success button"
              >View Income</b-button
            >
          </center>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "SignUp",
  data() {
    return {
      date: {
        start: "",
        end: ""
      },
    };
  },
  methods: {

  },
};
</script>

<style>
.container {
  width: 450px;
  height: 320px;
  margin: 10% auto;
  background-color: rgba(250, 250, 250, 0.295);
}
.background {
  background-image: url("../../assets/about/about_bg.png");
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: cover;
}
.box {
  margin: 5%;
  margin-top: 10px;
}
</style>
