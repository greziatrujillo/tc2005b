//JS lab file exercise 2

//2. Generate random sum

function generateSum() {
    //Generate 2 random nums for sum
    //numbers will be whole numbers between 0 and 100
    const num1 = Math.floor(Math.random() * 101);
    const num2 = Math.floor(Math.random() * 101);

    const correct = num1 + num2;

    //start time taken to answer
    const timeInit = Date.now();

    //Prompt user for answer
    const answer = prompt ('Responde la suma: ' + num1 + ' + ' + num2);

    //Final time taken to answer
    const finalTime = Date.now() - timeInit;

    //answer is correct with time taken to answer or incorrect 
    if (answer == correct) {
        alert('Correcto! Tiempo tomado en responder: ' + finalTime + ' segundos');
    } else {
        alert('Incorrecto! La respuesta correcta es: ' + correct);
    }


}