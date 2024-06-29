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

document.getElementById("aichatProjectbutton").onclick = function () {
    toggleDisplay("aichatProject");
};

document.getElementById("chessProjectbutton").onclick = function () {
    toggleDisplay("chessProject");
};

document.getElementById("aivoiceProjectbutton").onclick = function () {
    toggleDisplay("aivoiceProject");
};

document.getElementById("trademeProjectbutton").onclick = function () {
    toggleDisplay("trademeProject");
};

document.getElementById("streamingProjectbutton").onclick = function () {
    toggleDisplay("streamingProject");
};

document.getElementById("saleschatProjectbutton").onclick = function () {
    toggleDisplay("saleschatProject");
};

// unibutton
document.getElementById("unibutton").onclick = function () {
    toggleDisplay("uni");
}