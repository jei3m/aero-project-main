import React, { useState, useEffect } from "react"; // Importing React and hooks for state management and side effects.
import { GoogleGenerativeAI } from "@google/generative-ai"; // Importing the Google Generative AI package.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesomeIcon for icon usage.
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons"; // Importing specific icons from FontAwesome.
import { ToastContainer, toast } from "react-toastify"; // Importing ToastContainer and toast for notifications.
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation between routes.
import "react-toastify/dist/ReactToastify.css"; // Importing CSS for toast notifications.
import "./Chat.css"; // Importing custom CSS for the Chat component.

const Chat = () => {
  const [messages, setMessages] = useState([]); // State for storing chat messages.
  const [userInput, setUserInput] = useState(""); // State for storing user input.
  const [loading, setLoading] = useState(false); // State for loading indicator.

  const API_KEY = process.env.REACT_APP_API_KEY; // API key stored in environment variables for security.
  const navigate = useNavigate(); // Hook for navigating between pages.

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
  
    return text; // Return the sanitized and formatted text.
  };

  useEffect(() => {
    const startChat = async () => {
      if (messages.length === 0) { // Check if there are no messages yet.
        try {
          const genAI = new GoogleGenerativeAI(API_KEY); // Initialize Google Generative AI with the API key.
          const model = genAI.getGenerativeModel({model: "gemini-1.5-flash",}); // Retrieve the specific AI model.
          const prompt = "hello!"; // Define an initial prompt for the AI.
          const result = await model.generateContent(prompt); // Generate content based on the prompt.
          const response = result.response; // Get the response from the AI model.
          const text = await response.text(); // Convert the response to text.

          setMessages([
            {
              text: sanitizeText(text), // Sanitize and format the AI response text.
              user: false, // Indicate that this message is from the AI.
            },
          ]);
        } catch (error) {
          toast.error("Error starting chat."); // Display error notification if something goes wrong.
        }
      }
    };

    startChat(); // Call the startChat function on component mount.
  }, [API_KEY, messages.length]); // Run the effect when API_KEY or messages.length changes.

  const sendMessage = async () => {
    if (!userInput.trim()) { // Check if the user input is empty or only contains whitespace.
      toast.warning("Please type a message before sending."); // Show a warning notification.
      return;
    }

    setLoading(true); // Set loading state to true while processing.
    const userMessage = { text: userInput, user: true }; // Create an object for the user's message.

    setMessages(prevMessages => [...prevMessages, userMessage]); // Add the user's message to the message list.

    try {
      const genAI = new GoogleGenerativeAI(API_KEY); // Initialize Google Generative AI again for sending a new message.
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: "You are not Gemini, you are Aerobot. Talk as if you are a formal talking Pilot. Dont use *", // Custom instruction for the AI's behavior.
      });
      const prompt = userMessage.text; // Use the user's message as the prompt for the AI.
      const result = await model.generateContent(prompt); // Generate content based on the prompt.
      const response = result.response; // Get the AI's response.
      const text = await response.text(); // Convert the response to text.

      setMessages(prevMessages => [
        ...prevMessages,
        { text: sanitizeText(text), user: false }, // Add the AI's response to the message list.
      ]);
    } catch (error) {
      toast.error("Error sending message."); // Show error notification if something goes wrong.
    } finally {
      setLoading(false); // Set loading state to false after processing is done.
      setUserInput(""); // Clear the input field after sending the message.
    }
  };

  const clearMessages = () => {
    setMessages([]); // Clear all messages in the chat.
  };

  const goBack = () => {
    navigate(-1); // Navigate to the previous page.
  };

  return (
    <div className="chat-container">
      <ToastContainer /> {/* Container for displaying toast notifications. */}
      <div className="header">
        <h2>Ask Aerobot!</h2> {/* Header title for the chat. */}
        <button className="back-button" onClick={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} /> {/* Back arrow icon. */}
          Back
        </button>
      </div>
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message-container ${msg.user ? 'user' : 'ai'}`}> {/* Container for each message, with a conditional class for user or AI. */}
            {!msg.user && (
              <img
                src="/img/aerobot.png"
                alt="profile"
                className="profile-pic" // Profile picture for AI messages.
              />
            )}
            <div className={`message ${msg.user ? 'user' : 'ai'}`}
              dangerouslySetInnerHTML={{ __html: msg.text }} // Render the sanitized message as HTML.
            />
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          className="message-input"
          placeholder="Type a message"
          onChange={(e) => setUserInput(e.target.value)} // Update user input state on change.
          value={userInput} // Bind the input field to the userInput state.
          onKeyDown={(e) => e.key === "Enter" && sendMessage()} // Send message on Enter key press.
        />
        <button
          className="search-button"
          onClick={sendMessage}
          disabled={loading} // Disable the button while loading.
        >
          {loading ? (
            <div className="loading-spinner"></div> // Show loading spinner if loading is true.
          ) : (
            <FontAwesomeIcon icon={faSearch} /> // Show search icon if not loading.
          )}
        </button>
      </div>
    </div>
  );
};

export default Chat; // Export the Chat component as the default export.
