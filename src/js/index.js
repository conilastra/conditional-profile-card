import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // Display name
  let name = `${variables.name}`;
  let lastname = `${variables.lastname}`;
  if (variables.name == null) name = "Lucy";
  if (variables.lastname == null) lastname = "Boilett";

  // SM Position
  let position = `${variables.socialMediaPosition}`;
  if (variables.socialMediaPosition == null) position = "right";

  // Social media links
  let twitterUser = `${variables.twitter}`;
  if (variables.twitter == null) twitterUser = "";

  let githubUser = `${variables.github}`;
  if (variables.github == null) githubUser = "";

  let linkedinUser = `${variables.linkedin}`;
  if (variables.linkedin == null) linkedinUser = "";

  let instagramUser = `${variables.instagram}`;
  if (variables.instagram == null) instagramUser = "";

  // Role
  let role = `${variables.role}`;
  if (variables.role == null) role = "Web Developer";

  // Location
  let city = `${variables.city}`;
  let country = `${variables.country}`;
  if (variables.country == null) country = "USA";
  if (variables.city == null) city = "Miami";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${name} ${lastname}</h1>
          <h2>${role}</h2>
          <h3>${city}, ${country}</h3>
          <ul class="${position}">
            <li><a href="https://twitter.com/${twitterUser}"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${githubUser}"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/in/${linkedinUser}"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${instagramUser}"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == ""
          ? null
          : this.value == "true"
            ? true
            : this.value == "false"
              ? false
              : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
