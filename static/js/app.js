// from data.js
var tableData = data;

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
    let inputElement = d3.select(".form-control"), 
        inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(Date);
  
    let filteredData = date.filter(date => date.sighting === inputValue);
  
    console.log(filteredData);
  }