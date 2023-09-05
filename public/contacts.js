// contacts.js
document.addEventListener("DOMContentLoaded", () => {
    const contactList = document.getElementById("contact-list");

    // Fetch contacts from the Pipedrive API and populate the list
    fetch("contacts")
        .then(response => response.json())
        .then(data => {
            // Check if data is an array of contacts
            if (Array.isArray(data)) {
                data.forEach(contact => {
                    // Create a list item for each contact
                    const listItem = document.createElement("li");

                    // Access contact properties such as name, email, phone, etc.
                    const name = contact.name || "N/A";
                    const email = contact.email || "N/A";
                    const phone = contact.phone || "N/A";

                    // Populate the list item with contact information
                    listItem.textContent = `Name: ${name}, Email: ${email}, Phone: ${phone}`;

                    // Append the list item to the contact list
                    contactList.appendChild(listItem);
                });
            } else {
                // Handle the case where data is not an array of contacts
                console.error("API response does not contain a list of contacts.");
            }
        })
        .catch(error => {
            console.error("Error fetching contacts:", error);
        });
});
