const pageHome = document.querySelector("#home");
const pageBookmarked = document.querySelector("#bookmarked");
const pageCreate = document.querySelector("#create");
const pageProfile = document.querySelector("#profile");

const homeIcon = document.querySelector(".home-i");
const bookmarkedIcon = document.querySelector(".bookmark-i");
const createIcon = document.querySelector(".create-i");
const profileIcon = document.querySelector(".profile-i");

const pages = document.querySelectorAll(".page");
const icons = document.querySelectorAll(".footericon");

const links = document.querySelectorAll(".page-link");

/* SPA */

links.forEach((link) => {
  link.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.remove("current");
    });

    const hrefAttribute = link.getAttribute("href");

    const thisPage = document.querySelector(hrefAttribute);
    thisPage.classList.add("current");
  });
});

/* Bookmark Toggle

const bookmarks = document.querySelectorAll(".bookmark");

bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("checked");
  });
}); */

/* Answer Toggle 

const answerSections = document.querySelectorAll(".answer-section");

answerSections.forEach((answerSection) => {
  const button = answerSection.querySelector(".answer-toggle");
  const answer = answerSection.querySelector(".answer");
  button.addEventListener("click", () => {
    answer.classList.toggle("show");
  });
}); */

/* Form Script */

const form = document.querySelector("form");

const questionCards = [
  { newQuestion: "Question 1", newAnswer: "Answer 1", newTags: "1,2,3,4" },

  {
    newQuestion: "Question 2",
    newAnswer: "Answer 2",
    newTags: "1,2,3,4",
  },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newInput = {
    newQuestion: form.elements.newquestion.value,
    newAnswer: form.elements.newanswer.value,
    newTags: form.elements.newtags.value,
  };

  questionCards.push(newInput);

  renderQuestions();

  document.querySelector("form").reset();
});

/* Question Template */

const createQuestionsHtml = (questionCards) => {
  let html = "";

  questionCards.forEach((questionCard) => {
    /*Tag Array + Split */
    const tags = questionCard.newTags.split(",");
    let tagsList = "";
    tags.forEach((tag) => {
      tagsList = tagsList + `<li><a href="">${tag}</a></li>`;
    });
    console.log(tags);

    html =
      html +
      `
    <article class="questions">
          <img class="bookmark" />
          <h3>Question</h3>
          <div>
            <p>
            ${questionCard.newQuestion}
            </p>
            <div class="answer-section">
              <button class="answer-toggle">Show Answer</button>
              <p class="answer">
              ${questionCard.newAnswer}
              </p>
            </div>
            <div class="tags">
              <ul>
                ${tagsList}
              </ul>
            </div>
          </div>
        </article>
    `;
  });

  return html;
};

const renderQuestions = () => {
  const questionsHtml = createQuestionsHtml(questionCards);
  const questionsContainer = document.querySelector("#questions-home");
  questionsContainer.innerHTML = questionsHtml;

  const answerSections = document.querySelectorAll(".answer-section");

  /* Answer Toggle*/
  answerSections.forEach((answerSection) => {
    const button = answerSection.querySelector(".answer-toggle");
    const answer = answerSection.querySelector(".answer");
    button.addEventListener("click", () => {
      answer.classList.toggle("show");
    });
  });

  /*Bookmark Toggle */
  const bookmarks = document.querySelectorAll(".bookmark");

  bookmarks.forEach((bookmark) => {
    bookmark.addEventListener("click", () => {
      bookmark.classList.toggle("checked");
    });
  });
};

renderQuestions();

/* Active State (Fade-In) (Alternative 2 + Fade-In ausprobieren)*/

/* homeIcon.addEventListener("click", () => {
  icons.forEach((icon) => {
    icon.classList.remove("active-page");
  });
  homeIcon.classList.add("active-page");
});

bookmarkedIcon.addEventListener("click", () => {
  icons.forEach((icon) => {
    icon.classList.remove("active-page");
  });
  bookmarkedIcon.classList.add("active-page");
});

createIcon.addEventListener("click", () => {
  icons.forEach((icon) => {
    icon.classList.remove("active-page");
  });
  createIcon.classList.add("active-page");
});

profileIcon.addEventListener("click", () => {
  icons.forEach((icon) => {
    icon.classList.remove("active-page");
  });
  profileIcon.classList.add("active-page");
});
*/
