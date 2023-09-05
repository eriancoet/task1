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
                    const firstName = contact.first_name || "N/A";
                    const lastName = contact.last_name || "N/A";
                    const email = contact.primary_email || "N/A";
                    const phone = contact.phone.value || "N/A";
                    const companyID = contact.company_id || "N/A"
                    const company = contact.org_id.name || "N/A"
                    const address = contact.org_id.address || "N/A"
                    const followers_count = contact.followers_count || "N/A"

                    console.log(data)

                    // Populate the list item with contact information
                    listItem.textContent = 
                    `Name: ${firstName}, 
                    Surname: ${lastName}, 
                    Email: ${email}, 
                    Phone: ${phone},
                    companyID: ${companyID},
                    Company: ${company}, 
                    Address: ${address}
                    followers_count: ${followers_count}`
;

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
