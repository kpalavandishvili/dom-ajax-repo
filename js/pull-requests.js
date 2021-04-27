const endPoint = `https://api.github.com/repos/codeyourfuture/js-exercises/pulls`;
let allPullRequests = [];

function getPullRequest() {
  fetch(endPoint)
    .then(response => response.json())
    .then(res => {
      // res is 30 objects
      console.log(res.map(u => u.user));
      allPullRequests = res;

      return res.map(pull => {
        // .filter((pull) => )
        // pull.user.name ===
        const ul = document.querySelector("#pull-requests-list");
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.innerText = pull.title;
        a.setAttribute("href", `${pull.html_url}`);
        li.appendChild(a);
        ul.appendChild(li);
      });
    });
}

// create input element in the HTML
// getFilteredPullRequest()

getPullRequest();

// My Pull Requests

const myUserName = "kpalavandishvili";

const myEndPoint = `https://api.github.com/repos/${myUserName}/HTML-CSS-Coursework-Week2/pulls`;
console.log(myEndPoint);
// function getMyPullRequest() {
//   fetch(myEndPoint)
//     .then(res => res.json())
//     .then(response => {
//       console.log(response);

//const filtered = response.id === pulls_urls
//       return filtered.filter((myPull) => {

//         console.log(filtered);
//         const ul = document.querySelector("#pull-requests-list");
//         const li = document.createElement("li");
//         const a = document.createElement("a");
//         a.innerText = myPull.name;
//         a.setAttribute("href", `${myPull.pulls_url}`);
//         li.appendChild(a);
//         ul.appendChild(li);

//       });

//     });

// }
//getMyPullRequest();

//  ATTACH KEY UP LISTENER TO SEARCH BOX
//$(`#search`).on(`keyup`, function(){
//const value = $(this).val()
//console.log("Value:", value);
//})

const input = document.querySelector("#search");
console.log("ino", input);

input.addEventListener("keyup", event => {
  const value = event.target.value;
  console.log("THIS IS MY VALUE", value);
  //const ul = document.querySelector("#pull-requests-list");
  //const lis = document.querySelectorAll("li");
  const filteredRepos = allPullRequests.filter(
    pull => pull.title.toLowerCase().indexOf(value) !== -1
  );
  console.log("MY UL", filteredRepos);
  const ul = document.querySelector("#pull-requests-list");
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  const error = document.getElementById("error"); // if nothing shows, show me error with text
  error.style.color = "red";

  if (filteredRepos.length) {
    filteredRepos.forEach(repo => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.innerText = repo.title;
      a.setAttribute("href", `${repo.html_url}`);
      li.appendChild(a);
      ul.appendChild(li);
    });

    error.textContent = "";
  } else {
    error.textContent = "Please input alphanumeric characters only"; // this text
  }

  // "value" will be the last value of the input field, and will be updated everytime the user types a new letter
});

// <!-- Search Box & Button-->
// <div id="search-box">
//  <input type="text" id="search" placeholder="Search.." >
//  <button type="submit"><i class="fa fa-search"></i></button>
// </div>
// <!-- End Search Box & Button-->
