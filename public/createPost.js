async function newPostHandler(event) {
  event.preventDefault();

    const vibetype = document.querySelector("#vibetype").value;
    const contentbody = document.querySelector("#contentbody").value;
    const user_id = document.querySelector("#user_id").value;

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ vibetype, contentbody, user_id}),
      });

      if (response.ok) {
        document.location.replace('/');
        // Handle success, e.g., redirect to a new page or display a success message
      } else {
        alert(response.statusText);// Handle errors, e.g., display an error message
      }
    } catch (error) {
      // Handle network or other errors
      console.error(error);
    }
  };

document.querySelector('#newPostForm').addEventListener('submit', newPostHandler);

