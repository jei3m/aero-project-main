import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faMicrophoneSlash, faStop, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "react-toastify/dist/ReactToastify.css";
import "./Chat.css"; // Import your CSS file

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showStopIcon, setShowStopIcon] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const startChat = async () => {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = "hello! ";
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = await response.text();
      toast.info("Welcome to Aerobot Chat 🤖\n" + text);
      setMessages([
        {
          text,
          user: false,
        },
      ]);
    };
    startChat();
  }, [API_KEY]);

  const sendMessage = async () => {
    setLoading(true);
    const userMessage = { text: userInput, user: true };
    setMessages([...messages, userMessage]);

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = userMessage.text;
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = await response.text();
    setMessages([...messages, { text, user: false }]);
    setLoading(false);
    setUserInput("");

    // Text-to-Speech functionality (optional)
    if (text && !isSpeaking) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
      setIsSpeaking(true);
      setShowStopIcon(true);
      utterance.onend = () => setIsSpeaking(false);
    }
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    } else if (messages.length > 0) {
      const text = messages[messages.length - 1].text;
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
      setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
    }
  };

  const clearMessages = () => {
    setMessages([]);
    setIsSpeaking(false);
  };

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
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
          <div key={index} className={`message ${msg.user ? 'user' : 'ai'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <button className="icon-button" onClick={toggleSpeech}>
          <FontAwesomeIcon icon={isSpeaking ? faMicrophoneSlash : faMicrophone} size="lg" />
        </button>
        <input
          className="message-input"
          placeholder="Type a message"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        {showStopIcon && (
          <button className="icon-button" onClick={clearMessages}>
            <FontAwesomeIcon icon={faStop} size="lg" />
          </button>
        )}
        {loading && <div className="loading-spinner">Loading...</div>}
      </div>
    </div>
  );
};

export default Chat;
