class GuessingGame {
    constructor() {
        this.avg = 0
    }
    setRange(min, max) {
        this.min = min
        this.max = max
    }
    guess() {
      this.avg =Math.ceil(this.min + (this.max - this.min)/2)
    //   console.log(`solution candidate is ${this.avg}`);
      return this.avg
    }
    lower() {
        this.max = this.avg
        // console.log(`min = ${this.min} max = ${this.max}`)
    }
    greater() {
        this.min = this.avg
        // console.log(`min = ${this.min} max = ${this.max}`)
    }
}

module.exports = GuessingGame;
