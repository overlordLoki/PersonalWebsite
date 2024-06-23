

function addHTMLToElement(elementId, htmlContent) {
    var targetElement = document.getElementById(elementId);

    if (!targetElement) {
        console.error("Element with ID " + elementId + " not found.");
        return;
    }

    targetElement.innerHTML = htmlContent;
}

var aboutMeContent = `
    <p>👨‍💻 
    I'm the type of person who's fully immersed in the world of Linux, 
    running it seamlessly on both my laptop and desktop. For me, a fun 
    Saturday involves building a home server or creating my own cloud system.
     As a tech enthusiast, I thrive on learning and have a passion for 
     problem-solving and innovation. This drives my constant pursuit of new 
     challenges. What sets me apart is my blend of technical expertise and 
     strong interpersonal skills honed through client-facing roles, This has 
     enabled me to effectively collaborate and innovate in any technical environment.
`;
addHTMLToElement("aboutme", aboutMeContent);

var esportProjectContent = `

    🎲 <strong>RiftBet</strong> 🎲<br />
    <br />📝 Description: Developed a trading algorithm using statistics and machine learning for E-Sports betting. Built a web scraping backend for
    data collection and created a user-friendly front-end for algorithm interaction.<br />
    <br />💻 Technologies Used: Python, JavaScript, HTML, CSS, MongoDB, Express JS, Node.js, beautifulsoup library, selenium. sklearn. <br />
    <br />🌐 Link: Contact me for demo.<br />
`;
addHTMLToElement("esportProject", esportProjectContent);

var videoGameProjectContent = `

🕹️ <strong>AI Town Mayor</strong> 🕹️<br />
<br />📝 Description: Developed a video game where the player is the mayor of a town. The player can interact with the town and its citizens. The
  citizens have their own personalities and will react to the player's actions. The game is built using Godot engine and
  incorporates an LLM AI powered by a neural network and trained using a genetic algorithm to
  control NPC behavior.<br />
<br />💻 Technologies Used: Linux, Godot game engine (GDScript), Python, sklearn.<br />
<br />🌐 Link: Release date 01/3/2024<br />
`;
addHTMLToElement("videoGameProject", videoGameProjectContent);

var universityContent = `

<strong>Victoria University of Wellington</strong>
<br />Bachelor of Science<br />
<br />💻 Major: Computer Science<br />
📊 Minor: Data Science<br />
🤖 Specialisation: Artificial Intelligence<br />
<br />
<a id="transcript-link" href="pdf/Transcript.pdf" target="_blank">👨‍🎓 Transcript</a>
`;
addHTMLToElement("uni", universityContent);

var techSkillsContent = `
   <ul id="myList">
        <li>☕️ Java</li>
        <li>🐍 Python</li>
        <li>🌐 JavaScript</li>
        <li>🦀 Rust</li>
        <li>🖥️ C/C++</li>
        <li>#️⃣ C# (.NET)</li>
        <li>🌐 HTML</li>
        <li>🎨 CSS</li>
        <li>⚛️ React, Node.js</li>
        <li>🛠️ API Development</li>
        <li>🗃️ SQL, MongoDB</li>
        <li>🚂 Express JS</li>
        <li>🧪 Testing: Jest, Mocha, Chai</li>
        <li>☁️ Cloud: AWS, Azure, Azure AD</li>
        <li>📊 Database Management</li>
        <li>🛠️ DevOps: Git, Jenkins, Docker</li>
        <li>🔄 Agile/Scrum Methodologies</li>
        <li>🐧 Linux</li>
        <li>🖥️ Windows</li>
        <li>📝 Markdown</li>
    </ul>
`;
addHTMLToElement("techSkills", techSkillsContent);


var softskillsContent = `
   <ul id="myList">
        <li>🧩 Strong problem-solving and analytical skills</li>
        <li>🤝 Effective independently and in a team environment</li>
        <li>💬 Great communication skills</li>
        <li>🌟 Advanced problem-solving techniques</li>
        <li>🤔 Strong critical thinking</li>
        <li>🎨 Innovative and creative mindset</li>
        <li>🕒 Proficient in self-management</li>
        <li>⚖️ Skilled in conflict resolution</li>
        <li>👨‍💼 Strong leadership skills</li>
    </ul>
`;
addHTMLToElement("softskills", softskillsContent);