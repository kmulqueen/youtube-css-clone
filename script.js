const downTickButton = document.querySelector(".comment-downtick");
const upTickButton = document.querySelector(".comment-uptick");
const commentListContainer = document.querySelector(".comment-list-container");
const seeReponseButtons = document.querySelectorAll(
  ".see-response-container button"
);
const hideResponseButtons = document.querySelectorAll(
  ".hide-response-container button"
);

// Show comments section
downTickButton.addEventListener("click", () => {
  downTickButton.style.display = "none";
  upTickButton.style.display = "block";
  commentListContainer.style.display = "block";
});

// Hide comments section
upTickButton.addEventListener("click", () => {
  downTickButton.style.display = "block";
  upTickButton.style.display = "none";
  commentListContainer.style.display = "none";
});

// Show comment responses
seeReponseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const container = button.parentElement;
    const responseList = container.nextElementSibling;
    const hideResponseButton = container.nextElementSibling.nextElementSibling;

    container.style.display = "none";
    hideResponseButton.style.display = "grid";
    responseList.style.display = "grid";
  });
});

// Hide comment responses
hideResponseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const container = button.parentElement;
    const responseList = container.previousElementSibling;
    const showResponsesButton =
      container.previousElementSibling.previousElementSibling;

    container.style.display = "none";
    responseList.style.display = "none";
    showResponsesButton.style.display = "grid";
  });
});
