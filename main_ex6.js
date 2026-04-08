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

//connect the function to the button in the HTML
function executeCalculation() {
    const totalCost = document.getElementById("totalCuenta").value;
    const porcentaje = document.getElementById("propina").value;

    //verify there is an input for the cost
    if (totalCost === "") {
        alert("Por favor, ingresa el total de la cuenta.");
        return;
    }

    //create an instance of the tipCalculator class
    const calculator = new tipCalculator(totalCost, porcentaje);
    
    const tip = calculator.calculateTip();

    //display the result
    document.getElementById("resultTip").innerHTML = `La propina es de $${tip.toFixed(2)} MXN.`;
}


