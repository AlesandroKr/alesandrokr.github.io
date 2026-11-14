const sections = {
    "home-button": "home-section",
    "about-button": "about-section",
    "contact-button": "contact-section",
    "extras-button": "extras-section",
    "blog-button": "blog-section"
};

const allSections = document.querySelectorAll("#main-content section");
const allSectionsButton = document.querySelectorAll("#navegation button");

for (const [buttonId, sectionId] of Object.entries(sections)) {

    const button = document.getElementById(buttonId);

    button.addEventListener("click", () => {

        allSectionsButton.forEach(button => {
            button.classList.remove("active-button");
        });
        button.classList.add("active-button")

        allSections.forEach(section => {
            section.classList.remove("active-section");
        });

        document.getElementById(sectionId).classList.add("active-section");

    });
}

const FULLSCREENBUTTON = document.getElementById("maximize-button");
const body = document.body;


const svgMenu = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z"></path></svg>
`;

const svgClose = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 7H22V9H16V3H18V7ZM8 9H2V7H6V3H8V9ZM18 17V21H16V15H22V17H18ZM8 15V21H6V17H2V15H8Z"></path></svg>
`;


FULLSCREENBUTTON.addEventListener("click", () => {
    body.classList.toggle('nav-hidden');
    if (body.classList.contains('nav-hidden')) {
        FULLSCREENBUTTON.innerHTML = svgClose;
    } else {
        FULLSCREENBUTTON.innerHTML = svgMenu;
    }
});