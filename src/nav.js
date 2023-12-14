/**
 * toggleDisplay - Toggles the display of an element between "none" and "block"
 * */
function toggleDisplay(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display == "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
/*
    * Add event listeners to the buttons
    *
*/
document.getElementById("techSkillsbutton").onclick = function () {
    toggleDisplay("techSkills");
};

document.getElementById("softskillsbutton").onclick = function () {
    toggleDisplay("softskills");
};
