import React, { useState } from "react";
import { Button } from "../Button/Button";
import arrow from "../../images/arrow.svg";
import { BlockTitle } from "../BlockTitle/BlockTitle";

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
    console.log("send");
  };

  return (
    <>
      <BlockTitle>Оставьте заявку на консультацию</BlockTitle>
      <form id="myForm" onSubmit={handleSubmit}>
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
        <button form="myForm" type="submit">
          send
        </button>
        <Button>
          Получить консультацию
          <img src={arrow} alt="arrow" />
        </Button>
      </form>
    </>
  );
};
