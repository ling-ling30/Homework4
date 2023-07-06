const minAgeRequirement = 25
const minNameLengthRequirement = 10
const minIncomeRequirement = 100000
const maxIncomeRequirement = 1000000

document.getElementById("registration").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    let name = document.getElementById("fname").value;
    let age = document.getElementById("age").value;
    let income = document.getElementById("income").value;
    console.log ({name, age, income})
    filter ({name, age, income})

  });


  const filter = (data) => {
    if(data.name.length >= minNameLengthRequirement
        && data.age >= minAgeRequirement
        && data.income >= minIncomeRequirement &&
        data.income <= maxIncomeRequirement) { Database.set("myData", data);
        location.reload()}
    }