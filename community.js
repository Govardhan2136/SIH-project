function joinCommunity() {
  alert("Thank you for joining our community!");
}

document.addEventListener("DOMContentLoaded", function () {
  var joinButton = document.querySelector(".btn");
  if (joinButton) {
      joinButton.addEventListener("click", joinCommunity);
  }
});
