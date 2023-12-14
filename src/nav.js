
function toggleDisplay(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display == "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

document.getElementById("techSkillsbutton").onclick = function () {
    toggleDisplay("techSkills");
};

document.getElementById("softskillsbutton").onclick = function () {
    toggleDisplay("softskills");
};