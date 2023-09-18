const newPostHandler = async (event) => {
  event.preventDefault();

    const vibetype = document.querySelector("#vibetype").value.trim();
    const contentbody = document.querySelector("#contentbody").value.trim();
    const user_id = document.querySelector("#user_id").value.trim();

    if (vibetype && contentbody) {
      const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({ vibetype, contentbody, user_id}),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        console.log("Failed to post new post")
      }
    }
  };

document
  .querySelector(".create-post")
  .addEventListener("submit", newPostHandler);

