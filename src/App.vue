// JS
<script setup>
import { computed, ref } from 'vue'
import { AppState } from './AppState.js'
import { miningService } from './services/MiningService.js'


const cheese = computed(() => AppState.cheese)
const upgrades = computed(() => AppState.upgrades)
// const autoUpgrades = computed(() => AppState.autoUpgrades)
function mine() {
  miningService.mine()
}
function buyUpgrade(upgrade) {
  miningService.buyUpgrade(upgrade)
}
</script>


// HTML
<template>
  <section class="container">
    <div class="row">
      <div class="col-md-1 text-center">
        <div>
          <p>Cheese: {{ cheese }}</p>
        </div>
      </div>
      <div class="col-md-11 text-center">
        <img src="./assets/img/cheese-moon.png" alt="Cheese moon" @click="mine()">
      </div>
    </div>
    <div class="row">
      <div class="col-md-7 d-flex gap-4 ps-3">
        <span class="fs-5 text-center">Click Upgrades</span>
        <span class="fs-5 text-center">Auto Upgrades</span>
      </div>
      <div class="col-md-6 d-flex">
        <div class="p-0" v-for="upgrade in upgrades" :key="upgrade.id">
          <button class="ms-1 px-1" @click="buyUpgrade(upgrade)" type="button">+{{ upgrade.multiplier }} - {{
            upgrade.price
          }}</button>
        </div>
        <!-- <div class="px-1" v-for="upgrade in autoUpgrades" :key="upgrade.id">
          <button @click="buyUpgrade(upgrade)" type="button">+{{ upgrade.multiplier }} - {{ upgrade.price }}</button>
        </div> -->
      </div>
    </div>
  </section>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";
</style>