console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);
console.log(likeButton);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const postContainer = document.createElement("article");
postContainer.classList.add("post");

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

const postUsername = document.createElement("span");
postUsername.classList.add("post__username");
postUsername.textContent = "@username";

const postLikeButton = document.createElement("button");
postLikeButton.classList.add("post__button");
postLikeButton.dataset.js = "like-button";
postLikeButton.textContent = "♥ Like";

document.body.append(postContainer);

postContainer.append(postContent, postFooter);

postFooter.append(postUsername, postLikeButton);

postLikeButton.addEventListener("click", handleLikeButtonClick);

/*
<article class="post">
<p class="post__content">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
</p>
<footer class="post__footer">
  <span class="post__username">@username</span>
  <button type="button" class="post__button" data-js="like-button">
    ♥ Like
  </button>
</footer>
</article> 
*/

/* 
This page shows an example of a social media post. Your task is to replicate the social media post with JavaScript. Use document.createElement() to generate all HTML elements separately.

Don't use .innerHTML to create the HTML in one instance, but use multiple calls of document.createElement() instead.

The index.html demonstrates the required HTML tags, structure and class names.

Append the second social media post to the body. Don't forget to add the event listener to the like button. You can use the function handleLikeButtonClick for the event listener. 
*/
