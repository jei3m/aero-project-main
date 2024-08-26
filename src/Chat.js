import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY; // Ensure this is set in Vercel environment variables
  const navigate = useNavigate();

  // Utility function to sanitize and format the text
  const sanitizeText = (text) => {
    // Replace ## with <h3> tags for larger text
    text = text.replace(/##\s*([^\n]+)/g, '<h3>$1</h3>');
  
    // Replace double asterisks with <strong> tags for bold
    text = text.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
  
    // Replace single asterisks followed by double asterisks with <br /> for new lines
    text = text.replace(/\*([^\*]+)\*\*/g, '<br />$1<br />');
  
    // Replace remaining single asterisks with <br /> for new lines
    text = text.replace(/\*([^\*]+)\*/g, '<br />$1<br />');
  
    return text;
  };

  useEffect(() => {
    const startChat = async () => {
      if (messages.length === 0) {
        try {
          const genAI = new GoogleGenerativeAI(API_KEY);
          const model = genAI.getGenerativeModel({model: "gemini-1.5-flash",});
          const prompt = "hello!";
          const result = await model.generateContent(prompt);
          const response = result.response;
          const text = await response.text();

          setMessages([
            {
              text: sanitizeText(text),
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
    if (!userInput.trim()) {
      toast.warning("Please type a message before sending.");
      return;
    }

    setLoading(true);
    const userMessage = { text: userInput, user: true };

    setMessages(prevMessages => [...prevMessages, userMessage]);

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({model: "gemini-1.5-flash",});
      const prompt = userMessage.text;
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = await response.text();

      setMessages(prevMessages => [
        ...prevMessages,
        { text: sanitizeText(text), user: false },
      ]);
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
      <div className="header">
        <h2>Ask Aerobot!</h2>
        <button className="back-button" onClick={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </button>
      </div>
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
            <div className={`message ${msg.user ? 'user' : 'ai'}`}
              dangerouslySetInnerHTML={{ __html: msg.text }}
            />
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
        <button
          className="search-button"
          onClick={sendMessage}
          disabled={loading}
        >
          {loading ? (
            <div className="loading-spinner"></div>
          ) : (
            <FontAwesomeIcon icon={faSearch} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Chat;