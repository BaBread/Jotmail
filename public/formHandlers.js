// handle login function form
function UserLogin(event) {
  event.preventDefault(); // Prevent the form from submitting

  // You can add your login logic here
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username && password) {
    const loginForm = document.querySelector(".loginForm");
    loginForm.classList.add("d-none");

    const blogForm = document.querySelector(".card");
    blogForm.classList.remove("d-none");
  }
}

// old code newPOST

// function to handle the "Create a New Post" button click
//   function newPostButton(event) {
//     event.preventDefault();

//     const blogForm = document.querySelector(".card");
//     const newPostCard = document.querySelector(".new-post-card");

//     blogForm.classList.add("d-none");
//     newPostCard.classList.remove("d-none");
//   }
// Add an event listener to the "Create a New Post" button
// const newPostBtn = document.querySelector(".create-new-post-btn");
// newPostBtn.addEventListener("click", newPostButton);

//New code newPOST
function newPostButton(event) {
  event.preventDefault();

  const userContent = document.querySelector("#userContent").value;

  const response = fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      userContent,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  response.then((response) => {
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  });

  const newPostCard = document.querySelector("#recent-post");

  newPostCard.classList.add("d-none");
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newPostButton);


// function to handle the "Recent Post" button click
function viewRecentPostButton(event) {
  event.preventDefault();

  const blogForm = document.querySelector(".card");
  const recentPost = document.querySelector(".recent-post-card");

  blogForm.classList.add("d-none");
  recentPost.classList.remove("d-none");
}

//function to handle "Vibe Selected" form
const vibeSelected = (event) => {
  event.preventDefault();
  const blogForm = document.querySelector(".card");
  const selectedVibe = document.querySelector(".vibe-selected-card");

  blogForm.classList.add("d-none");
  selectedVibe.classList.remove("d-none");
};

// handle goHomeBtn on click
// Function to handle "Go home" button click
const goHome = () => {
  // Hide all card sections (vibe-selected, new-post, recent-post)
  const cardSections = document.querySelectorAll(
    ".vibe-selected-card, .new-post-card, .recent-post-card"
  );
  cardSections.forEach((section) => {
    section.classList.add("d-none");
  });

  // Show the "blogForm" element
  const blogForm = document.querySelector(".card");
  blogForm.classList.remove("d-none");
};

//Add an event listener to the "Vibe Selected" button
const categoryButtons = document.querySelectorAll(".category-button");
categoryButtons.forEach((button) => {
  button.addEventListener("click", vibeSelected);
});

// Add an event listener to the "UserLogin" form
const loginForm = document.getElementById("login");
loginForm.addEventListener("submit", UserLogin);

//Add an event listener to the "Recent Post" form
const recentPostBtn = document.querySelector(".view-recent-post-btn");
recentPostBtn.addEventListener("click", viewRecentPostButton);

// Add an event listener to the "Go home" buttons
const goHomeButtons = document.querySelectorAll(".btn-primary");
goHomeButtons.forEach((button) => {
  button.addEventListener("click", goHome);
});
