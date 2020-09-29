// from data.js
var tableData = data;
button = d3.select("#filter-btn"),
form = d3.select("#filters");

// add data to table
const tbody = d3.select("tbody");

tableData.forEach((ufoReport) => {
    let row = tbody.append("tr");
    Object.values(ufoReport).forEach(value => {
      let cell = row.append("td");
      cell.text(value);
    });
  });

//   add event handler function
  const runEnter = () => {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    // Get the value property of the input element
    let inputElement = d3.select("#datetime"),
    inputValue = inputElement.property("value");

console.log(inputValue);
console.log(tableData);

let filteredData = tableData.filter(date => date.datetime === inputValue);

console.log(filteredData);

}

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);
