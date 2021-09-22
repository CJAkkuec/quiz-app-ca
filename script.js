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

/* Bookmark Toggle */

const bookmarks = document.querySelectorAll(".bookmark");

bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("checked");
  });
});

/* Answer Toggle */

const answerSections = document.querySelectorAll(".answer-section");

answerSections.forEach((answerSection) => {
  const button = answerSection.querySelector(".answer-toggle");
  const answer = answerSection.querySelector(".answer");
  button.addEventListener("click", () => {
    answer.classList.toggle("show");
  });
});

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
