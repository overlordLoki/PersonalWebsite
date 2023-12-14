
/**
 * appends a list of items to an element with the specified ID
 * @param {*} elementId 
 * @param {*} itemList 
 * @returns 
 */
function createListAndAppendToElement(elementId, itemList) {
    // Get the element with the specified ID
    var targetElement = document.getElementById(elementId);

    // Check if the target element exists
    if (!targetElement) {
        console.error("Element with ID " + elementId + " not found.");
        return;
    }

    // Create a new unordered list element
    var ulElement = document.createElement("ul");

    // Loop through the items and create list items
    itemList.forEach(function (item) {
        var liElement = document.createElement("li");
        liElement.textContent = item;
        ulElement.appendChild(liElement);
    });

    // Append the unordered list to the target element
    targetElement.appendChild(ulElement);
}

// List of technologies
var technologies = [
    "Java",
    "Python",
    "JavaScript",
    "Rust",
    "C/C++",
    "C# (.NET)",
    "HTML",
    "CSS",
    "React, Node.js",
    "API Development",
    "SQL, MongoDB",
    "Express JS",
    "Testing: Jest, Mocha, Chai",
    "Cloud: AWS, Azure, Azure AD",
    "Database Management",
    "DevOps: Git, Jenkins, Docker",
    "Agile/Scrum Methodologies",
    "Linux",
    "Windows",
    "Markdown"
];

// Example usage: Create a list for "techSkills" element
createListAndAppendToElement("techSkills", technologies);

// List of soft skills
var softSkills = [
    "Strong problem-solving and analytical skills",
    "Ability to work independently and in a team environment",
    "Communication",
    "Problem Solving",
    "Critical Thinking",
    "Creativity",
    "Self-management",
    "Conflict resolution"
];
createListAndAppendToElement("softskills", softSkills);