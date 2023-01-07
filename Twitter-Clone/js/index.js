// DOM elements

const mainPage = document.querySelector(".main_page");
const loginPage = document.querySelector(".login_page");
const middleContent = document.querySelector(".middle_content");
const btnTop = document.querySelector(".top_btn");
const newsFeedPage = document.querySelector(".feeds_page");
const loginModal = document.querySelector(".login_modal");
const modalX = document.querySelector(".login_modal i");
const loginFormBtn = document.querySelector(".login_form_btn");
const post_btn = document.querySelector(".post_btn");
const modal_wrapper = document.querySelector(".modal_wrapper");
const modal = document.querySelector(".modal");
const postModalX = document.querySelector(".modal_header i");
const postModalBtn = document.querySelector(".modal_header button");
const postFooterPlus = document.querySelector(".modal_footer span");
const modal_input = document.querySelector(".modal_input");
const sidebar = document.querySelector(".sidebar");
const sidebar_wrapper = document.querySelector(".sidebar_wrapper");
const xBtn = document.querySelector(".sidebar_header i");
const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");
// const more = document.querySelector("#more");
const profile = document.querySelector("#profile");
const settigs_wrapper = document.querySelector(".settigs_wrapper");
const settigs_x = document.querySelector(".sidebar_list2 i");
const textarea = document.querySelector(".textarea");
const textareaBtn = document.querySelector(".bottom button");
const tweetContainer = document.querySelector(".maincontainer");

const goToLoginPage = () => {
  mainPage.style.display = "none";
  loginPage.style.display = "grid";
};

middleContent.addEventListener("click", (e) => {
  if (e.target.classList[1] === "main_btn") {
    goToLoginPage();
  }
});

btnTop.addEventListener("click", () => {
  const inputUserInfo = document.querySelector(".user_info");
  const inputPassword = document.querySelector(".password");

  if (inputUserInfo.value !== "" && inputPassword.value !== "") {
    mainPage.style.display = "none";
    newsFeedPage.style.display = "block";
  } else {
    goToLoginPage();
    loginModal.style.display = "block";
  }
});

// login page
modalX.addEventListener("click", () => {
  loginModal.style.display = "none";
});

loginFormBtn.addEventListener("click", () => {
  const login_user_info = document.querySelector(".login_user_info");
  const login_password = document.querySelector(".login_password");

  if (login_user_info.value !== "" && login_password.value !== "") {
    loginPage.style.display = "none";
    newsFeedPage.style.display = "block";
  } else {
    goToLoginPage();
    loginModal.style.display = "block";
  }
});

// news feed page
// post modal

post_btn.addEventListener("click", () => {
  modal.style.display = "block";
  modal_wrapper.classList.add("modal_wrapper_display");

  if (modal_input.value !== "") {
    modal_input.value = "";
    changeOpacity(0.4);
  }
});

const changeOpacity = (x) => {
  postModalBtn.style.opacity = x;
  postFooterPlus.style.opacity = x;
};

postModalX.addEventListener("click", () => {
  modal.style.display = "none";
  modal_wrapper.classList.remove("modal_wrapper_display");
});

modal_input.addEventListener("keypress", (e) => {
  if (e.target.value !== "") {
    changeOpacity(1);
  }
});

modal_input.addEventListener("keydown", (e) => {
  if (e.target.value === "") {
    changeOpacity(0.4);
  }
});

// feed_content textarea
const changeOpacity2 = (x) => {
  textareaBtn.style.opacity = x;
};

textarea.addEventListener("keypress", (e) => {
  if (e.target.value !== "") {
    changeOpacity2(1);
  }
});

textarea.addEventListener("keydown", (e) => {
  if (e.target.value === "") {
    changeOpacity2(0.4);
  }
});
// ============================================

// sidebar

more.addEventListener("click", () => {
  settigs_wrapper.style.display = "block";
});

settigs_x.addEventListener("click", () => {
  settigs_wrapper.style.display = "none";
});

// profile
profile.addEventListener("click", () => {
  sidebar_wrapper.classList.add("sidebar_wrapper_display");
});

xBtn.addEventListener("click", () => {
  sidebar_wrapper.classList.remove("sidebar_wrapper_display");
});

// dark mode

const darkElements1 = document.querySelectorAll(".dark_mode1");
const darkElements2 = document.querySelectorAll(".dark_mode2");
const lightTexts = document.querySelectorAll(".light_text");
const borders = document.querySelectorAll(".border");

toggle.addEventListener("click", () => {
  circle.classList.toggle("move");
  Array.from(darkElements1).map((ele1) => {
    ele1.classList.toggle("dark1");
  });
  Array.from(darkElements2).map((ele2) => {
    ele2.classList.toggle("dark2");
  });
  Array.from(lightTexts).map((light_ele) => {
    light_ele.classList.toggle("light");
  });
  Array.from(borders).map((border) => {
    border.classList.toggle("border-color");
  });
});

const renderDetails = async () => {
  let date = new Date();
  const res = await fetch(
    `https://twitter-backend-6yot.onrender.com/tweet/create`
  ); // Fetching Specific Movie Details using id
  console.log(res);
  const tweetData = await res.json();
  console.log(tweetData);
  const template = `<div class="post border">
  <div class="user_avatar">
    <img
      src="../img/rajesh.JPG"
      alt="user"
    />
  </div>

  <div class="post_content">
    <div class="post_user_info light_text">
      <h4>Rajesh</h4>
      <i class="fa fa-check-circle"></i>
      <span>kushwaharajesh@gmail.com</span>
      <p>${date.toDateString()}</p>
    </div>
    <p class="post_text light_text">${textarea.value}</p>
    <div class="post_img">
      <img
      src="https://images.unsplash.com/photo-1547147607-6eab7b49f3ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjg3fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      alt="post_img"
      />
    </div>
    <div class="post_icons">
      <i class="fa fa-comment"></i>
      <i class="fa fa-retweet"></i>
      <i class="fa fa-heart"></i>
      <i class="fa fa-share-alt"></i>
    </div>
  </div>
</div> `;
  tweetContainer.innerHTML += template;
  textarea.value = "";
};
textareaBtn.addEventListener("click", renderDetails);


