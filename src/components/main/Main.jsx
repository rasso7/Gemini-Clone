import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCardClick = (promptText) => {
    setInput(promptText);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") { // Check if 'Enter' is pressed
      onSent(); // Call onSent function when 'Enter' is pressed
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user} alt="" />
      </div>
      <div className="main-container">
        {!showResults ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Developer!</span>
              </p>
              <p>How can I assist you Today?</p>
            </div>
            <div className="cards">
			<div
                className="card"
                onClick={() => {
                  handleCardClick(
                    "What’s new in AI and ML in 2024?"
                  );
                }}
              >
                <p>What’s new in AI and ML in 2024?</p>
                <img src={assets.code_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick("What are some quick life hacks?")
                }
              >
                <p>What are some quick life hacks?</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    "What's a simple way to improve focus?"
                  )
                }
              >
                <p>What's a simple way to improve focus?</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick("how to center a div?")
                }
              >
                <p>how to center a div?</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
             
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
              placeholder="Enter the Prompt Here"
              onKeyDown={handleKeyDown} // Add event listener for 'Enter' key
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img
                src={assets.send_icon}
                alt=""
                onClick={() => {
                  onSent();
                }}
              />
            </div>
          </div>
          <div className="bottom-info">
            <p>
              Gemini may display inaccurate info, including about people, so
              double-check its responses. Your privacy & Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
