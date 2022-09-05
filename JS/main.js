// select mode game
let container = document.querySelector(".container");
let bonus = document.querySelector(".mode .bonus");
let original = document.querySelector(".mode .original");

let score = 0;

bonus.addEventListener("click", () => {
  container.innerHTML = "";
  container.classList.remove("start");

  startBonus();
});

original.addEventListener("click", () => {
  container.innerHTML = "";
  container.classList.remove("start");

  startOriginal();
});

// Start Bonus
function startBonus() {
  setHeaderAndBottom(
    "./Images/logo-bonus.svg",
    "./Images/image-rules-bonus.svg"
  );

  setGameBonus();
}

// Start Original
function startOriginal() {
  setHeaderAndBottom("./Images/logo.svg", "./Images/image-rules.svg");
  setGameOriginal();
}

// #### Header ####
function setHeaderAndBottom(title, srcImg) {
  // createElements
  let header = document.createElement("div");
  let h1 = document.createElement("img");
  h1.src = title;
  let score = document.createElement("div");
  let p = document.createElement("p");
  p.innerText = "score";
  let span = document.createElement("span");

  let rules = document.createElement("div");
  rules.innerText = "RULES";

  // addClasses
  header.className = "header";
  score.className = "score";
  rules.className = "rule";

  // childNode
  score.appendChild(p);
  score.appendChild(span);
  header.appendChild(h1);
  header.appendChild(score);
  container.appendChild(header);
  container.appendChild(rules);

  let yourScore = document.querySelector(".header .score span");

  if (localStorage.getItem("score")) {
    yourScore.innerText = localStorage.getItem("score");
    console.log(localStorage.getItem("score"));
  } else {
    span.innerText = "0";
    console.log(yourScore);
  }

  rules.addEventListener("click", () => {
    let body = document.querySelector("body");
    let blur = document.createElement("div");
    blur.className = "blur";
    let contain = document.createElement("div");
    contain.className = "imgContain";
    let head = document.createElement("div");
    head.className = "ruleHead";
    let ruleTitle = document.createElement("h1");
    ruleTitle.innerText = "RULES";
    let xRule = document.createElement("img");
    xRule.src = "./Images/icon-close.svg";
    let img = document.createElement("img");
    img.src = srcImg;

    body.appendChild(blur);
    blur.appendChild(contain);
    contain.appendChild(head);
    head.appendChild(ruleTitle);
    head.appendChild(xRule);
    contain.appendChild(img);

    xRule.onclick = () => {
      blur.remove();
    };
  });
}

function setGameOriginal() {
  let chooses = document.createElement("div");
  chooses.className = "choosesOriginal";
  let paper = document.createElement("div");
  paper.className = "paper";
  paper.dataset.name = "paper";
  let scissors = document.createElement("div");
  scissors.className = "scissors";
  scissors.dataset.name = "scissors";
  let rock = document.createElement("div");
  rock.className = "rock";
  rock.dataset.name = "rock";

  chooses.appendChild(paper);
  chooses.appendChild(scissors);
  chooses.appendChild(rock);

  let children = Array.from(chooses.children);

  children.forEach((e) => {
    let image = document.createElement("div");
    image.className = "img";
    let img = document.createElement("img");

    image.appendChild(img);

    e.appendChild(image);

    e.addEventListener("click", () => {
      result(chooses, e, children);
    });
  });

  container.appendChild(chooses);

  let src = [
    "./Images/icon-paper.svg",
    "./Images/icon-scissors.svg",
    "./Images/icon-rock.svg",
  ];

  let arrayImages = document.querySelectorAll(".img img");

  for (i = 0; i < arrayImages.length; i++) {
    arrayImages[i].src = src[i];
  }
}

function setGameBonus(score) {
  let chooses = document.createElement("div");
  chooses.className = "choosesBonus";
  let paper = document.createElement("div");
  paper.className = "paper";
  paper.dataset.name = "paper";
  let scissors = document.createElement("div");
  scissors.className = "scissors";
  scissors.dataset.name = "scissors";
  let rock = document.createElement("div");
  rock.className = "rock";
  rock.dataset.name = "rock";
  let lizard = document.createElement("div");
  lizard.className = "lizard";
  lizard.dataset.name = "lizard";
  let spock = document.createElement("div");
  spock.className = "spock";
  spock.dataset.name = "spock";

  chooses.appendChild(paper);
  chooses.appendChild(scissors);
  chooses.appendChild(rock);
  chooses.appendChild(lizard);
  chooses.appendChild(spock);

  let children = Array.from(chooses.children);

  children.forEach((e) => {
    let image = document.createElement("div");
    image.className = "img";
    let img = document.createElement("img");

    image.appendChild(img);

    e.appendChild(image);

    e.addEventListener("click", () => {
      result(chooses, e, children);
    });
  });

  container.appendChild(chooses);

  let src = [
    "./Images/icon-paper.svg",
    "./Images/icon-scissors.svg",
    "./Images/icon-rock.svg",
    "./Images/icon-lizard.svg",
    "./Images/icon-spock.svg",
  ];

  let arrayImages = document.querySelectorAll(".img img");

  for (i = 0; i < arrayImages.length; i++) {
    arrayImages[i].src = src[i];
  }
}

function result(remove, currantChild, randomArray) {
  remove.remove();

  let result = document.createElement("div");
  result.className = "result";
  let you = document.createElement("div");
  you.className = "you";
  let ai = document.createElement("div");
  ai.className = "ai";

  result.appendChild(you);
  result.appendChild(ai);

  let textH2 = ["YOU PICKED", "THE HOUSE PICKED"];

  Array.from(result.children).forEach((i) => {
    let h2 = document.createElement("h2");
    let choose = document.createElement("div");
    choose.className = "choose";

    i.appendChild(h2);
    i.appendChild(choose);
  });

  container.appendChild(result);

  let choose = document.querySelectorAll(".result .choose");

  choose[0].appendChild(currantChild);

  let h2Ele = document.querySelectorAll(".result > div h2");

  for (let i = 0; i < h2Ele.length; i++) {
    h2Ele[i].innerText = textH2[i];
  }
  setTimeout(() => {
    randomArray.splice(randomArray.indexOf(currantChild), 1);

    let random = randomArray[Math.floor(Math.random() * randomArray.length)];

    choose[1].appendChild(random);
  }, 700);

  setTimeout(() => {
    let aiChoose = document.querySelector(".result .ai .choose > div");
    let youChoose = document.querySelector(".result .you .choose > div");
    let play = document.createElement("div");
    play.className = "play";
    let h1 = document.createElement("h1");
    let again = document.createElement("div");
    again.className = "again";
    again.innerText = "PLAY AGAIN";

    play.appendChild(h1);
    play.appendChild(again);

    again.onclick = () => {
      location.reload();
    };

    switch (currantChild.className) {
      case "paper":
        if (aiChoose.className === "rock" || aiChoose.className === "spock") {
          h1.innerText = "YOU WIN";
          you.after(play);
        } else if (
          aiChoose.className === "scissors" ||
          aiChoose.className === "lizard"
        ) {
          h1.innerText = "YOU LOSE";
          you.after(play);
        }
        break;

      case "rock":
        if (
          aiChoose.className === "scissors" ||
          aiChoose.className === "lizard"
        ) {
          h1.innerText = "YOU WIN";
          you.after(play);
        } else if (
          aiChoose.className === "paper" ||
          aiChoose.className === "spock"
        ) {
          h1.innerText = "YOU LOSE";
          you.after(play);
        }
        break;

      case "scissors":
        if (aiChoose.className === "paper" || aiChoose.className === "lizard") {
          h1.innerText = "YOU WIN";
          you.after(play);
        } else if (
          aiChoose.className === "rock" ||
          aiChoose.className === "spock"
        ) {
          h1.innerText = "YOU LOSE";
          you.after(play);
        }
        break;

      case "spock":
        if (
          aiChoose.className === "scissors" ||
          aiChoose.className === "rock"
        ) {
          h1.innerText = "YOU WIN";
          you.after(play);
        } else if (
          aiChoose.className === "paper" ||
          aiChoose.className === "lizard"
        ) {
          h1.innerText = "YOU LOSE";
          you.after(play);
        }
        break;

      case "lizard":
        if (aiChoose.className === "spock" || aiChoose.className === "paper") {
          h1.innerText = "YOU WIN";
          you.after(play);
        } else if (
          aiChoose.className === "scissors" ||
          aiChoose.className === "rock"
        ) {
          h1.innerText = "YOU LOSE";
          you.after(play);
        }
    }

    if (h1.innerText === "YOU WIN") {
      let yourScore = document.querySelector(".header .score span");

      let numToStr = parseInt(yourScore.innerText) + 1;

      yourScore.innerText = numToStr;

      localStorage.setItem("score", numToStr);

      youChoose.classList.add("win");
    } else {
      let yourScore = document.querySelector(".header .score span");

      let numToStr = parseInt(yourScore.innerText) - 1;

      yourScore.innerText = numToStr;

      localStorage.setItem("score", numToStr);

      aiChoose.classList.add("win");
    }
  }, 1000);
}
