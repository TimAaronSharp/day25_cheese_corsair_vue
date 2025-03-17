// JS
<script setup>
import { computed, ref } from 'vue'
import { AppState } from './AppState.js'


let cheese = ref(0)

</script>


// HTML
<template>
  <section class="container">
    <div class="row">
      <div class="col-md-1">
        <div>
          <p>Cheese: {{ cheese }}</p>
        </div>
      </div>
    </div>
  </section>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";
</style>