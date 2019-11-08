// Assigns select element with an ID of country-drop to dropDown variable
const dropDown = document.getElementById("country-drop");

// Adds a "change" event listener to select element, runs an anonymous function
dropDown.addEventListener("change", () => {
    // Checks the value of the selected drop down item, stores it into the "value" variable
    const value = dropDown.options[dropDown.selectedIndex].value;

    // Store all elements with a class of "country-hide" into the "hideList" variable.
    const hideList = document.querySelectorAll('.country-hide');

    // Uses the value we stored earlier to find all elements with a class equal to that value
    // stores this information into the "showItem" variable.
    const showItem = document.querySelectorAll(`.${value}`);

    // Runs for all elements with the "country-hide" class. Sets the display to none 
    // to remove them completely from the flow of the page.
    for (var i = 0; i< hideList.length; i++) {
        hideList[i].style.display = "none";
    }

    // Runs for all elements that have a class equal to the value of the drop down select element. 
    // Set's the display to initial to reinstate the element into the flow of the page.
    for (var i = 0; i< showItem.length; i++) {
        showItem[i].style.display = "initial";
    }
});