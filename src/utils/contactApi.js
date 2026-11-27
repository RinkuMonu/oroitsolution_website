const CONTACT_API_URL = 'https://cms.sevenunique.com/apis/contact-query/set-contact-details.php';
const CONTACT_API_TOKEN = 'Bearer jibhfiugh84t3324fefei#*fef';

/** Submit a contact inquiry to the backend API and verify the response status. */
export async function submitContactQuery({ name, email, phone, message, service }) {
  const response = await fetch(CONTACT_API_URL, {
    method: 'POST',
    headers: {
      Authorization: CONTACT_API_TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || 'N/A',
      message: message.trim(),
      service: service?.trim() || 'N/A',
      website_id: 6,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  const data = await response.json();
  if (data.status !== 'success') {
    throw new Error('Failed to send message');
  }

  return data;
}
