// from data.js
var tableData = data;
button = d3.select("#filter-btn"),
form = d3.select("#filters");

// add data to table
const tbody = d3.select("tbody");

function tableBuilder(data){
  tbody.html("");
  data.forEach((ufoReport) => {
    const row = tbody.append("tr");
    Object.values(ufoReport).forEach(value => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
}
console.log(tableData);

//   add event handler function
// const runEnter = () => {

// }
   

function runEnter() {
   // Prevent the page from refreshing
   d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    // Get the value property of the input element
    let inputElement = d3.select("#datetime").property("value");
    let filteredData = tableData


    console.log(inputElement);
    console.log(filteredData);
   

  // let filteredData = tableData.filter(date => date.datetime === inputElement);
    if (inputElement) {
      filteredData=filteredData.filter(row => row.datetime ===inputElement);

    }  

    tableBuilder(filteredData);

}


// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

tableBuilder(tableData);