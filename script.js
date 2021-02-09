const downTickButton = document.querySelector(".comment-downtick");
const upTickButton = document.querySelector(".comment-uptick");
const commentListContainer = document.querySelector(".comment-list-container");

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
