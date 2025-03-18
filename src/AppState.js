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
    icon:'"mdi mdi-knife"',
    priceIncrease:50,
    category: 'click',
    power: 500
  }),
  new Upgrade({
    id: 2,
    name: 'cheese pick',
    price: 250,
    quantity: 0,
    multiplier: 5,
    icon: '"mdi mdi-pickaxe"',
    priceIncrease: 250,
    category: 'click',
    power: 0
  }),
    new Upgrade({
      id: 3,
      name: 'cheese bot',
      price: 250,
      quantity: 0,
      multiplier: 1,
      icon: '"mdi mdi-robot"',
      priceIncrease: 250,
      category: 'auto',
      power: 0
    }),
    new Upgrade({
      id: 4,
      name: 'cheese rig',
      price: 1000,
      quantity: 0,
      multiplier: 5,
      icon: '"mdi mdi-factory"',
      priceIncrease: 1000,
      category: 'auto',
      power: 0
    })
  ]
})

