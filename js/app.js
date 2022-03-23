const submit = document.querySelector("#twe");
const main = document.querySelector("#lii");
submit.addEventListener("submit", function (event) {
  let username = this.elements.username.value;
  let tweet = this.elements.tweet.value;
  console.log(username, tweet);
  showTweet(username, tweet);
  event.preventDefault();
});

function showTweet(username, tweet) {
  const li = document.createElement("li");
  const btag = document.createElement("b");
  btag.append(username);
  li.append(btag);
  li.append(`-${tweet}`);
  main.append(li);
}
