

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
<a id="transcript-link" href="pdf/Transcript.pdf">👨‍🎓 Transcript</a>
`;
addHTMLToElement("uni", universityContent);

var techSkillsContent = `
    <ul>
        <li>Java</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>Rust</li>
        <li>C/C++</li>
        <li>C# (.NET)</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React, Node.js</li>
        <li>API Development</li>
        <li>SQL, MongoDB</li>
        <li>Express JS</li>
        <li>Testing: Jest, Mocha, Chai</li>
        <li>Cloud: AWS, Azure, Azure AD</li>
        <li>Database Management</li>
        <li>DevOps: Git, Jenkins, Docker</li>
        <li>Agile/Scrum Methodologies</li>
        <li>Linux</li>
        <li>Windows</li>
        <li>Markdown</li>
    </ul>
`;
addHTMLToElement("techSkills", techSkillsContent);


var softskillsContent = `
    <ul>
        <li>Strong problem-solving and analytical skills</li>
        <li>Ability to work independently and in a team environment</li>
        <li>Communication</li>
        <li>Problem Solving</li>
        <li>Critical Thinking</li>
        <li>Creativity</li>
        <li>Self-management</li>
        <li>Conflict resolution</li>
    </ul>
`;
addHTMLToElement("softskills", softskillsContent);
