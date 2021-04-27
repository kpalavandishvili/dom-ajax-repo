// Write code here to communicate with Github
// Changing _codeyourfuture_ to my Github username

const myUserName = "kpalavandishvili";
const endPoint = `https://api.github.com/users/${myUserName}/repos`;
console.log(endPoint);

function getRepos() {
  fetch(endPoint) // calling endPoint with information
    .then(res => res.json()) // converting JSON.stringify {" ": " "} returning JSON.parse
    .then(response => {
      const reposCount = document.querySelector("#repos-count");
      reposCount.innerText = response.length; // array with my repos
      const repoList = document.querySelector("#repos-list");

      return response.map(rep => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.innerText = rep.name;
        a.setAttribute("href", `${rep.html_url}`); // to make it clickable
        li.appendChild(a);
        return repoList.appendChild(li);
      });
    });
}

getRepos("kpalavandishvili");
