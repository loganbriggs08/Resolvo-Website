export function handleScrollToContact() {
    const contactUsDiv = document.getElementById("contact-us");
    if (contactUsDiv) {
      contactUsDiv.scrollIntoView({ behavior: "smooth" });
    }
}

export function handleScrollToResolveProblems() {
    const contactUsDiv = document.getElementById("resolve-problems");
    if (contactUsDiv) {
      contactUsDiv.scrollIntoView({ behavior: "smooth" });
    }
}