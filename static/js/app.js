// from data.js
var tableData = data;

// YOUR CODE HERE!
const tbody = d3.select("tbody");

tabaleData.forEach((ufoReport) => {
    let row = tbody.append("tr");
    Object.values(ufoReport).forEach(value => {
      let cell = row.append("td");
      cell.text(value);
    });
  });