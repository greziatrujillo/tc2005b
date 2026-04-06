//JS lab exercise 4

//4. Generate average of each row in a matrix

//actual function to run through matrix and its rows, calculating the average and returning an array of those results
function avg(matrix) {
    let avgArr = [];

    //each row is run through
    for (let i=0; i<matrix.length; i++) {
        let sumRow = 0;

        //each element is added
        for (let j=0; j<matrix[i].length; j++) {
            sumRow += matrix[i][j];
        }

        //calculate avg and display [averga 1, average 2, ...]
        let avgRow = sumRow / matrix[i].length;
        avgArr.push(avgRow);
    }

    return avgArr;
    
}

//test case
function testAvg () {
    const testMatrix = [
        [10,20,30],
        [5,10,15],
        [1,2,3]
    ];

    const res = avg(testMatrix);

    document.getElementById("resultAvg").innerHTML = 
    "<p> <b>Test case:</b> [[10,20,30], [5,10,15], [1,2,3]] </p>" +
    "<p> Average of each row: " + "[" + res.join(", ") + "]" + "</p>";
}