// from data.js
var tableData = data;

// call the body of the table from the HTML file
var tbody = d3.select("tbody");

// call the "filter" button element from the HTML file
var filter = d3.select("#filter-btn");

// create a function that will create the table with the data from the data file
function ufoActivity(sighting) {
    sighting.forEach(data => {
        var row = tbody.append("tr");
        Object.values(data).forEach(value =>{
        var cell = row.append("td");
        cell.text(value);
    });
    });	
} 

// call the table-building function with the data from the data file passed as a parameter
ufoActivity(tableData);


// create a function that will filter the data based on a specific date and build the resulting table
function filterData() {

    d3.event.preventDefault();

    var input = d3.select("#datetime");
    var inputValue = input.property("value");

    // filters the table only if the input is not blank
	if (inputValue != ""){
        newData = tableData.filter(filterdata => filterdata.datetime == inputValue);
    }
   
    // clears the previous table
    tbody.html("");

    // calls the build-table function with the new data from the user input
    ufoActivity(newData);

    // checks the progress in the console
    console.log(inputValue);
    console.log(newData);
};

// initializes the button with the filter function
filter.on("click", filterData);