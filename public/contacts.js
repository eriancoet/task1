document.addEventListener("DOMContentLoaded", () => {
    const contactGrid = document.getElementById("contact-grid").querySelector("tbody");

    // Fetch contacts from the Pipedrive API and populate the grid
    fetch("contacts")
        .then(response => response.json())
        .then(data => {
            // Check if data is an array of contacts
            if (Array.isArray(data)) {
                data.forEach(contact => {
                    // Create a table row for each contact
                    const row = document.createElement("tr");

                    // Access contact properties such as name, email, phone, etc.
                    const firstName = contact.first_name || "N/A";
                    const lastName = contact.last_name || "N/A";
                    const email = contact.primary_email || "N/A";
                    const phone = contact.phone.value || "N/A";
                    const companyID = contact.company_id || "N/A";
                    const company = contact.org_id.name || "N/A";
                    const address = contact.org_id.address || "N/A";
                    const followers = contact.followers_count || "N/A";
                    const deals = contact.closed_deals_count || "N/A";
                    const joined = contact.add_time || "N/A";

                    // Populate the table row with contact information
                    row.innerHTML = `
                        <td>${firstName}</td>
                        <td>${lastName}</td>
                        <td>${email}</td>
                        <td>${phone}</td>
                        <td>${companyID}</td>
                        <td>${company}</td>
                        <td>${address}</td>
                        <td>${followers}</td>
                        <td>${deals}</td>
                        <td>${joined}</td>
                    `;

                    // Append the table row to the contact grid
                    contactGrid.appendChild(row);
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
