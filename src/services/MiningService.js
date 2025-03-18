import App from "@/App.vue"
import { AppState } from "@/AppState.js"
import { computed, ref } from 'vue'

class MiningService{
  mine(){
    const cheese = computed(() => AppState.cheese)
    const upgrades = ref(AppState.upgrades)
    const clickGearArray = upgrades.value.filter(upgrade => upgrade.category == 'click')
    let clickSum = 0 
    clickGearArray.forEach(upgrade => {
      clickSum += (upgrade.quantity * upgrade.multiplier)
    })
    console.log(clickSum);
    
    // console.log('⛏️ GREAT success!');
    // const clickMineGear = AppState.upgrades.filter(gear => gear.category == 'click')
    // const clickMineGearSum = clickMineGear.forEach()
    // cheese 
  }

  buyUpgrade(upgradeObj){
    // console.log(upgrade.name);
    
    const upgradeToBuy = AppState.upgrades.find(upgrade => upgrade.id == upgradeObj.id)
    if (AppState.cheese < upgradeToBuy.price) {
      return console.log(`Come back when you get some money, buddy!`);
    }
    AppState.cheese -= upgradeToBuy.price
    upgradeToBuy.quantity++
    
    console.log(upgradeToBuy);
    
  }
  
}

export const miningService = new MiningService()