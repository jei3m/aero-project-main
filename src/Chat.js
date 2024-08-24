import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "AIzaSyAJMB-Jlx9cukKN1ENx-YN51WRhEqjveyI";
  const navigate = useNavigate();

  useEffect(() => {
    const startChat = async () => {
      if (messages.length === 0) {
        try {
          const genAI = new GoogleGenerativeAI(API_KEY);
          const model = genAI.getGenerativeModel({ model: "gemini-pro" });
          const prompt = "hello!";
          const result = await model.generateContent(prompt);
          const response = result.response;
          const text = await response.text();

          setMessages([
            {
              text,
              user: false,
            },
          ]);
        } catch (error) {
          toast.error("Error starting chat.");
        }
      }
    };
    startChat();
  }, [API_KEY, messages.length]);

  const sendMessage = async () => {
    setLoading(true);
    const userMessage = { text: userInput, user: true };

    setMessages(prevMessages => [...prevMessages, userMessage]);

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = userMessage.text;
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = await response.text();

      setMessages(prevMessages => [...prevMessages, { text, user: false }]);
    } catch (error) {
      toast.error("Error sending message.");
    } finally {
      setLoading(false);
      setUserInput("");
    }
  };

  const clearMessages = () => {
    setMessages([]);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="chat-container">
      <ToastContainer />
      <div className="chat-title">
        <h2>Ask Aerobot!</h2>
      </div>
      <button className="back-button" onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </button>
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message-container ${msg.user ? 'user' : 'ai'}`}>
            {!msg.user && (
              <img
                src="/img/aerobot.png"
                alt="profile"
                className="profile-pic"
              />
            )}
            <div className={`message ${msg.user ? 'user' : 'ai'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          className="message-input"
          placeholder="Type a message"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        {loading && <div className="loading-spinner">Loading...</div>}
      </div>
    </div>
  );
};

export default Chat;
