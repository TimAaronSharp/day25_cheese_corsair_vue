

export class Upgrade{
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.price = data.price
    this.quantity = data.quantity
    this.multiplier = data.multiplier
    this.icon = data.icon
    this.priceIncrease = data.priceIncrease
    this.category = data.category
    this.power = data.quantity * data.multiplier
  }
}