import { reactive } from 'vue'
import { Upgrade } from './models/Upgrade.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  cheese: {
    amount: 0
  },
  upgrades: [
    new Upgrade({
    id: 1,
    name: 'cheese knife',
    price: 50,
    quantity: 1,
    multiplier: 500,
    icon:'<span class="mdi mdi-knife"></span>',
    priceIncrease:50,
    category: 'click'
  }),
  new Upgrade({
    id: 2,
    name: 'cheese pick',
    price: 250,
    quantity: 0,
    multiplier: 5,
    icon: '<span class="mdi mdi-pickaxe"></span>',
    priceIncrease: 250,
    category: 'click'
  }),
    new Upgrade({
      id: 3,
      name: 'cheese bot',
      price: 250,
      quantity: 0,
      multiplier: 1,
      icon: '<span class="mdi mdi-robot"></span>',
      priceIncrease: 250,
      category: 'auto'
    }),
    new Upgrade({
      id: 4,
      name: 'cheese rig',
      price: 1000,
      quantity: 0,
      multiplier: 5,
      icon: '<span class="mdi mdi-factory"></span>',
      priceIncrease: 1000,
      category: 'auto'
    })
  ]
})

