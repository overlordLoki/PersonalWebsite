// Function to toggle display of an element
function toggleDisplay(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display == "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// Function to create a job button
function createJobButton(job) {
    var button = document.createElement("button");
    button.id = job.id;
    button.innerHTML = job.title;
    button.onclick = function () {
        toggleDisplay(job.id + 'Content');
    };
    return button;
}

// Function to create a job content div
function createJobContentDiv(job) {
    var jobDiv = document.createElement("div");
    jobDiv.id = job.id + 'Content';
    jobDiv.innerHTML = `
      <br />  🏢 <strong>${job.company}</strong> 🏢<br />
      📅 <em>${job.dates}</em> <br /> 
       <br /> 🌟 Overview: ${job.description}<br />
       <br /> 💻 Technologies Used: ${job.technologies}<br />
        <br />📋 Description: ${job.accomplishments}<br />
    `;
    jobDiv.style.display = "none";
    return jobDiv;
}

// Function to add a job to the work history section
function addJobToWorkHistory(job) {
    var workHist = document.getElementById("History");
    var button = createJobButton(job);
    var jobDiv = createJobContentDiv(job);
    workHist.appendChild(button);
    workHist.appendChild(jobDiv);
    workHist.appendChild(document.createElement("br"));
}

async function fetchJobFiles() {
    const data = [];
    try {
        // List of JSON file URLs
        const files = [
            './jobs/millsoftware.json',
            './jobs/tutor.json',
            './jobs/nzdf.json',
            './jobs/freelance.json',
            './jobs/security_guard.json',
            './jobs/sale.json',
            './jobs/hca.json',
            // Add more job files as needed
        ];

        for (const file of files) {
            const response = await fetch(file);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${file}: ${response.statusText}`);
            }
            const jsondata = await response.json();
            data.push(jsondata);
        }
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
    return data;
}

async function initializeJobs() {
    const data = await fetchJobFiles();
    data.forEach(job => addJobToWorkHistory(job));
}

// Initialize jobs when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeJobs);
