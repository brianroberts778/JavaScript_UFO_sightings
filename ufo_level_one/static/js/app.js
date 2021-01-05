// from data.js
var tableData = data;

// Defining function for uploading table from data.js
function dataUpload(tableData){
    //Loop through data and get each UFO object
    tableData.forEach(element => {
        // Using d3 to append one table row 
        var tableRow = d3.select("tbody").append("tr");
        // Update each UFO value for one column
        Object.entries(element).forEach(([key, value])=>{
            //console.log(key, value);
            // Using D3 to append each cell's text value
            tableRow.append("td").text(value);
        });
    });
};

// Calling the function to load data
dataUpload(tableData);

// Defining function to filter data based on user input date
function filterData(){
    // Clearing previous data to reset console
    d3.select("tbody").html("");
    // Retrieving input element from index.html
    var inputDate = d3.select("#datetime");
    // Retrieving value property of input element
    var userInput = inputDate.property("value");
    console.log(userInput);
    // Conditional statement to yield data based on user input
    var filterDate = tableData.filter(ufoTable => ufoTable.datetime === userInput);
    console.log(filterDate);
// Create data table to reflect filtered date.
dataUpload(filterDate);
};

// Create event listener to initiate filterData function when...
// ... a user clicks the filter button, derived from our html code.
d3.select("#filter-btn").on("click", filterData)

