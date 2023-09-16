// Create POST handler 
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
        document.location.replace("/blogPost"); // reference blogPost 
      } else {
        alert(response.statusText);
      }
    });
  
    const newPostCard = document.querySelector("#recent-post");
  
    newPostCard.classList.add("d-none");
  }
  
  document
    .querySelector(".blogform") //select blogForm from DOM 
    .addEventListener("submit", newPostButton);