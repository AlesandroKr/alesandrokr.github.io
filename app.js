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

        allSectionsButton.forEach(button =>{
            button.classList.remove("active-button");
        });
        button.classList.add("active-button")

        allSections.forEach(section => {
            section.classList.remove("active-section");
        });

        document.getElementById(sectionId).classList.add("active-section");

    });
}