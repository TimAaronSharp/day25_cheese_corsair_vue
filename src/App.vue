// JS
<script setup>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState.js'
import { miningService } from './services/MiningService.js'


// let totalPower = 0
const cheese = computed(() => AppState.cheese.amount)
const upgrades = computed(() => AppState.upgrades)
// const clickPower = computed(() => {
//   let powerSum = AppState.upgrades.find(upgrade => upgrade.category == 'click')
//   for (let i = 0; i < powerSum.length; i++) {
//     totalPower += powerSum[i].power;
//   }
//   return totalPower
// })
// let power = AppState.upgrades.find(upgrade => upgrade.category == 'click')
// console.log(power.value);

// for (let i = 0; i < power.length; i++) {
//   totalPower += power[i].quantity * power[i].multiplier;
// }
// // power.forEach(upgrade => {
// //   totalPower += upgrade.quantity * upgrade.multiplier
// // })
// return totalPower
// const autoUpgrades = computed(() => AppState.autoUpgrades)
function mine() {
  miningService.mine()
  // console.log(clickPower);
}
function buyUpgrade(upgrade) {
  miningService.buyUpgrade(upgrade)
}

onMounted(() => {
  miningService.autoMine()

})
</script>


// HTML
<template>
  <section class="container">
    <div class="row">
      <div class="col-md-1 text-center">
        <div>
          <p>Cheese: {{ cheese }}</p>
          <!-- <p>Click Power: {{ clickPower }}</p> -->
        </div>
      </div>
      <div class="col-md-5 text-center">
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