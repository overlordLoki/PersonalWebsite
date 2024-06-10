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

// techSkills
document.getElementById("techSkillsbutton").onclick = function () {
    toggleDisplay("techSkills");
};
// softskills
document.getElementById("softskillsbutton").onclick = function () {
    toggleDisplay("softskills");
};
// workhist
document.getElementById("historybutton").onclick = function () {
    toggleDisplay("History");
};
// aboutme
document.getElementById("aboutmebutton").onclick = function () {
    toggleDisplay("aboutme");
};
// esportProject
document.getElementById("esportProjectbutton").onclick = function () {
    toggleDisplay("esportProject");
};
// videoGameProject
document.getElementById("videoGameProjectbutton").onclick = function () {
    toggleDisplay("videoGameProject");
};
// unibutton
document.getElementById("unibutton").onclick = function () {
    toggleDisplay("uni");
}