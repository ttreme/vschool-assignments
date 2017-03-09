
document.getElementById("finalSubmission").addEventListener("click", function () {
    var form = document.getElementById("formBaby");
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var destination = form.country.value;
    var dietRestriction = function() {
        if (form.elements["kosher"].checked === true) {
            return "Kosher";
        }
        else if (form.elements["vegetarian"].checked === true) {
            return "Vegetarian";
        }
        else if (form.elements["lactoseFree"].checked === true) {
            return "Lactosr Free";
        }
    }
    
    var formOutPut = `Full Name: ${firstName} ${lastName} Age: ${age} Gender: ${gender}: Dietary Restriction: ${dietRestriction()}: Final Destination: ${destination}`;
    alert(formOutPut);
})