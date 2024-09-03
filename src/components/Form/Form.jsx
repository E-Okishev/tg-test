import React, { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendMessageToTelegram = async (formData) => {
    const botToken = process.env.REACT_APP_BOT_TOKEN;
    const chatId = process.env.REACT_APP_CHAT_ID;
    const text = `New feedback:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь нужно будет отправить данные в Telegram
    sendMessageToTelegram(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};
