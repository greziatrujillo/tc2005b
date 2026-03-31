//JS lab file exercise 1

//1. creating a table

function generateTable() {
    //Prompt user for number
    let num = prompt("Ingresa un número:");

    //start creating table using document.write
    document.write("<table border='1' style='text-align:center;'>");
    document.write("<thead>");
        document.write("<tr>");
        document.write("<th>Número</th>");
        document.write("<th>Cuadrado</th>");
        document.write("<th>Cubo</th>");
        document.write("</tr>");
        document.write("</thead>");
    
        document.write("<tbody>");

    //loop will create rows and columns with repective information
    for (let i=1; i<=num; i++) {
        let sq = i*i;
        let cube = i*i*i;

        document.write("<tr>");
        document.write("<td>" + i + "</td>");
        document.write("<td>" + sq + "</td>");
        document.write("<td>" + cube + "</td>");
        document.write("</tr>");
    }

    document.write("</tbody>");
    document.write("</table>");
}