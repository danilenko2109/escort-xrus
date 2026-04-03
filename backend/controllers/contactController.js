const db = require("../src/database/db");

const submitContact = (req, res) => {
  const { name, email, phone, message } = req.body || {};
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ detail: "name, email, phone, message are required" });
  }

  const now = new Date().toISOString();
  const result = db
    .prepare(
      "INSERT INTO contact_messages (name, email, phone, message, created_at) VALUES (?, ?, ?, ?, ?)"
    )
    .run(name, email, phone, message, now);

  return res.status(201).json({ message: "Message sent successfully", id: String(result.lastInsertRowid) });
};

module.exports = { submitContact };