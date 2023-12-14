

function addHTMLToElement(elementId, htmlContent) {
    var targetElement = document.getElementById(elementId);

    if (!targetElement) {
        console.error("Element with ID " + elementId + " not found.");
        return;
    }

    targetElement.innerHTML = htmlContent;
}

var workHistory = [
    "<strong>Head Tutor</strong><br /><em>Victoria University of Wellington</em><br /><em>2023 - Present</em><br />- Led a team of 10 tutors, organized and coordinated tutor activities.<br />- Conducted labs and tutorials, provided HR support for tutor-related concerns.<br />- Marked assignments, ran and moderated class Discord servers.",
    "<strong>Software Engineer</strong><br /><em>New Zealand Defence Force</em><br /><em>11/2022 - 03/2023 (3 Month Contract)</em><br />- Managed digital identities within the Identity and Access Management framework.<br />- Implemented Agile Technologies, developed PowerShell scripts, and designed Azure Automation solutions.<br />- Maintained security in a coding environment following strict protocols.",
    "<strong>Contract Software Engineer</strong><br /><em>Small Business</em><br /><em>2021 - 2021 (3 Month Contract)</em><br />- Developed a software solution that streamlined tasks through automation.<br />- Conducted testing, debugging, and established hosting servers.<br />- Provided detailed instructions and leveraged REST API for development.",
    "<strong>Software Engineer</strong><br /><em>X-Coin Solutions</em><br /><em>2013 - 2021</em><br />- Improved code quality and reduced errors through best practices in code review and testing.<br />- Built and maintained scalable web applications and contributed to AI-based trading algorithms.<br />- Collaborated with product managers to define project requirements and timelines."
];
addHTMLToElement("workhist", workHistory.join("<hr/>"));

var aboutMeContent = `
    <p>👨‍💻 I’m the type of engineer who runs Linux natively on their laptop and desktop. A fun Saturday for me is building a home server or
      building my own Cloud system. I'm a tech enthusiast who enjoys learning new things and I have a passion for creating and
      problem-solving. I have a strong background in software engineering and I am always looking for new challenges to tackle. With
      me, you’ll be getting an engineer with years of experience and a top-tier AI expert. With nearly a decade of experience, I possess
      a diverse set of skills, and I'm always eager to learn and expand my skill set.
    </p>
`;
addHTMLToElement("aboutme", aboutMeContent);

var esportProjectContent = `
    <strong>E-Sports Betting Algorithm</strong><br />
    - Description: Developed a trading algorithm using statistics and machine learning for E-Sports betting. Built a web scraping backend for
    data collection and created a user-friendly front-end for algorithm interaction.<br />
    - Technologies Used: Python, JavaScript, HTML, CSS, MongoDB, Express JS, Node.js, beautifulsoup library, selenium. sklearn. <br />
    - Link: Contact me for demo.<br />
`;
addHTMLToElement("esportProject", esportProjectContent);

var videoGameProjectContent = `
<strong>Video Game (AI Town Mayor)</strong><br />
- Description: Developed a video game where the player is the mayor of a town. The player can interact with the town and its citizens. The
  citizens have their own personalities and will react to the player's actions. The game is built using Godot engine and
  incorporates an LLM AI powered by a neural network and trained using a genetic algorithm to
  control NPC behavior.<br />
- Technologies Used: Linux, Godot game engine (GDScript), Python, sklearn.<br />
- Link: Release date 01/3/2024<br />
`;
addHTMLToElement("videoGameProject", videoGameProjectContent);

var universityContent = `
<strong>Victoria University of Wellington</strong><br />
- Degree: Bachelor of Science<br />
- Major: Computer Science<br />
- Minor: Data Science<br />
- Specialization: Artificial Intelligence<br />
<a href="pdf/Transcript.pdf" target="_blank">👨‍🎓 Transcript</a>
`;
addHTMLToElement("uni", universityContent);








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

