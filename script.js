// Sample job data
const jobData = [
  {
    title: "Software Engineer",
    location: "Tokyo",
    experience: "1-2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Web Developer",
    location: "Osaka",
    experience: "0-2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Backend Developer",
    location: "Tokyo",
    experience: "0-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Web Developer",
    location: "Tokyo",
    experience: "0-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Marketing Specialist",
    location: "Osaka",
    experience: "1-3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "English Teacher",
    location: "Kyoto",
    experience: "0-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

// Function to list job listings
function populateJobListings(jobs) {
  const jobResults = document.getElementById("job-results");
  jobResults.innerHTML = ""; // Clear previous listings

  jobs.forEach((job) => {
    const jobCard = document.createElement("div");
    jobCard.classList.add("job-card");
    jobCard.innerHTML = `
          <h3>${job.title}</h3>
          <p>Location: ${job.location}</p>
          <p>Experience: ${job.experience}
          <p>Description: ${job.description}</p>
          <button>Apply Now</button>
      `;
    jobResults.appendChild(jobCard);
  });
}

// Event listener for job search
document.getElementById("search-button").addEventListener("click", function () {
  const input = document.getElementById("search-input").value.toLowerCase();
  const filteredJobs = jobData.filter(
    (job) =>
      job.title.toLowerCase().includes(input) ||
      job.location.toLowerCase().includes(input)
  );
  populateJobListings(filteredJobs);
});

// Initial population of job listings
populateJobListings(jobData);
