const categoryButtons = document.querySelectorAll(".category-button");

const vibeSelected = async (event) => {
  event.preventDefault();

  const vibetype = event.target.getAttribute("data-category");
  console.log("Show VibeType", vibetype);
  if (vibetype) {
    const response = await fetch(`/api/view/viewPost/${vibetype}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/api/view/viewPost/${vibetype}`);
    } else {
      console.log("Failed to get posts");
    }
  }
};

//Add an event listener to the "Vibe Selected" button

categoryButtons.forEach((button) => {
  button.addEventListener("click", vibeSelected);
});
