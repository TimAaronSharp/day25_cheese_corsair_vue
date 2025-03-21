// import App from "@/App.vue"
import { AppState } from "@/AppState.js"
import { ref } from 'vue'

class MiningService{
  mine(){
    let cheese = ref(AppState.cheese)
    const upgrades = ref(AppState.upgrades)
    const clickGearArray = upgrades.value.filter(upgrade => upgrade.category == 'click')
    let clickSum = 0 
    clickGearArray.forEach(upgrade => {
      clickSum += (upgrade.quantity * upgrade.multiplier)
    })
    cheese.value.amount += clickSum
    // console.log(cheese);
  }
  autoMine(){
    let cheese = ref(AppState.cheese)
    const upgrades = ref(AppState.upgrades)
    const autoGearArray = upgrades.value.filter(upgrade => upgrade.category == 'auto')
    let autoSum = 0
    autoGearArray.forEach(upgrade => {
      autoSum += (upgrade.quantity * upgrade.multiplier)
    })
    cheese.value.amount += autoSum
    setInterval(this.autoMine, 3000)
  }

  buyUpgrade(upgradeObj){
    // console.log(upgrade.name);
    let cheese = ref(AppState.cheese)
    const upgradeToBuy = AppState.upgrades.find(upgrade => upgrade.id == upgradeObj.id)
    if (cheese.value.amount < upgradeToBuy.price) {
      return alert(`Come back when you get some money, buddy!`);
    }
    cheese.value.amount -= upgradeToBuy.price
    upgradeToBuy.quantity++
    upgradeToBuy.price = (upgradeToBuy.quantity * upgradeToBuy.priceIncrease) 
    
    // console.log(upgradeToBuy);
    
  }
  
}

export const miningService = new MiningService()