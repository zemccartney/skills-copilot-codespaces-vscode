function skillsMember() {
  var skills = document.getElementById("skills");

  if (skills.classList.contains("skills")) {
    skills.classList.remove("skills");
    skills.classList.add("skills-member");
  } else {
    skills.classList.remove("skills-member");
    skills.classList.add("skills");
  }
}