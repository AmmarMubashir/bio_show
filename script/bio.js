const comments = [
  {
    name: "Victor Pinto",
    timestamp: "11/02/2023",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Christina Cabrera",
    timestamp: "10/28/2023",
    text: "I feel blessed to have seen them in person...",
  },
  {
    name: "Isaac Tadesse",
    timestamp: "10/20/2023",
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

function createCommentElement(comment) {
  const commentElement = document.createElement("div");
  commentElement.classList.add("comment");

  const avatarContainer = document.createElement("div");
  avatarContainer.classList.add("avatar-container");
  const avatar = document.createElement("div");
  avatar.classList.add("avatar");
  avatarContainer.appendChild(avatar);

  const commentContent = document.createElement("div");
  commentContent.classList.add("comment-content");

  const nameDateContainer = document.createElement("div");
  nameDateContainer.classList.add("name-date-container");

  const nameElement = document.createElement("h3");
  nameElement.textContent = comment.name;
  nameDateContainer.appendChild(nameElement);

  const dateElement = document.createElement("span");
  dateElement.textContent = comment.timestamp;
  nameDateContainer.appendChild(dateElement);

  const textElement = document.createElement("p");
  textElement.classList.add("comment-content");
  textElement.textContent = comment.text;

  commentContent.appendChild(nameDateContainer);
  commentContent.appendChild(textElement);

  commentElement.appendChild(avatarContainer);
  commentElement.appendChild(commentContent);
  //   commentElement.appendChild(nameDateContainer);
  //   commentElement.appendChild(textElement);

  return commentElement;
}

function addCommentToPage(comment) {
  const commentsContainer = document.getElementById("comments-container");
  const commentElement = createCommentElement(comment);

  commentsContainer.insertBefore(commentElement, commentsContainer.firstChild);
}

comments.forEach((comment) => addCommentToPage(comment));

document
  .querySelector(".comments-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const text = document.getElementById("comment").value.trim();

    const newComment = {
      name: name,
      timestamp: new Date().toLocaleDateString(),
      text: text,
    };

    comments.unshift(newComment);
    addCommentToPage(newComment);

    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
  });

function renderComments() {
  const commentsContainer = document.getElementById("comments-container");
  while (commentsContainer.firstChild) {
    commentsContainer.removeChild(commentsContainer.firstChild);
  }

  comments.forEach(addCommentToPage);
}

renderComments();
