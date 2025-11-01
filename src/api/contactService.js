// Placeholder for future Java backend integration.
// Currently unused; when backend ready POST to /api/contact
export async function sendContactForm({ name, email, message }) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}
