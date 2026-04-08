//JS lab exercise 6

//6. Calculadora de propinas.

//using object oriented programming, there will be use of a class.

class tipCalculator {
    constructor(total, percentage){
        this.total = total;
        this.percentage = percentage;
    }

    //calculate the tip amount
    calculateTip() {
        const tipAmount = this.total * this.percentage;
        return tipAmount;
    }
}




