import "./styles.css";

function expandButtonCallBack(evt) {
  if (evt.target.innerText === ">") {
    evt.target.innerText = "V";
    console.log(evt.target.innerText);
    evt.target.parentElement.parentElement.nextElementSibling.style.display = "block";
  } else {
    evt.target.innerText = ">";
    console.log(evt.target.innerText);
    evt.target.parentElement.parentElement.nextElementSibling.style.display = "none";
  }
}

/*
Add event listeners to the .expand_button buttons
*/
function expandArticleBody() {
  const expandButtons = document.querySelectorAll(".expand_button");
  const buttonArray = Array.from(expandButtons);

  buttonArray.map((button) => {
    button.addEventListener("click", expandButtonCallBack);
  })
}

/*
Add event listeners to the .expand_button buttons
*/
function expandArticleBody() {
  const allButtons = document.querySelectorAll(".expand_button");

  allButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const selected = event.target.closest(".article").querySelector(".article_body");

      if (event.target.innerText == ">") {
        selected.style.display = "block";
        event.target.innerText = "V";
      } else if (event.target.innerText == "V") {
        selected.style.display = "none";
        event.target.innerText = ">";
      }
    });
  });
}

/*
Add event listeners to the .highlightBtn buttons
*/
function highlightArticle() {
  const allButtons = document.querySelectorAll(".highlightBtn");

  allButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const selected = event.target.closest(".article_body");

      if (event.target.innerText == "+") {
        selected.classList.add("highlight");
        event.target.innerText = "-";
      } else if (event.target.innerText == "-") {
        selected.classList.remove("highlight");
        event.target.innerText = "+";
      }
    });
  });
}


function main() {
  expandArticleBody();
  highlightArticle();
}

main();
