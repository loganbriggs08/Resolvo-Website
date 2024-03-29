export function handleScrollToContact() {
    const contactUsDiv = document.getElementById("contact-us");
    if (contactUsDiv) {
      contactUsDiv.scrollIntoView({ behavior: "smooth" });
    }
}