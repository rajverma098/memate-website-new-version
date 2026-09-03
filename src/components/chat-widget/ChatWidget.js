"use client";

import ChatBoat from "./ChatBoat";
import WhatsApp from "../../svg/WhatsApp";
import { useEffect, useState } from "react";

const JOTFORM_EMBED_SRC =
  "https://cdn.jotfor.ms/agent/embedjs/01975471ce517020b33b83343ee6c3d6fcc7/embed.js?skipWelcome=1&maximizable=1";

const ChatWidget = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [closeMessage, setCloseMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window._jfAgentContainerSelector = ".jf-chat-container";

    const scriptId = "jf-chat-embed";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = JOTFORM_EMBED_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div className="chat-promo">
        {showButtons && (
          <>
            {!closeMessage && (
            <div className="chat-message-wrapper chatHideMobile">
              <button
                type="button"
                className="chat-close-btn"
                onClick={() => setCloseMessage(true)}
                aria-label="Close"
              >
                ×
              </button>

              <div className="chat-message">
              <div className="chat-row">
                <span className="logo">
                  <img
                    src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg"
                    alt="logo"
                  />
                </span>

                <div>
                  <div className="chat-title">
                    Hey, we've noticed you're interested 🤗
                  </div>

                  <div className="chat-sub">Hi! How can I assist you?</div>

                  {/* <div className="chat-meta">meMate Team</div> */}
                </div>
              </div>
            </div>
            <div className="chat-actions">
          <a href="https://app.memate.com.au/requestdemo?_gl=1*1ruiwxw*_gcl_au*NzM1NDY2ODk3LjE3NzMxMjU1OTA.">
                📅 Book a demo
              </a>
              <ChatBoat />
              <a href="https://app.memate.com.au/onboarding?_gl=1*1unyhk8*_gcl_au*NzM1NDY2ODk3LjE3NzMxMjU1OTA.">
                🏃 Sign up & start a free trial
              </a>
          </div>

            
            </div>
          )}

            <div className="chat-actions-boats">
              
              
              <a className="whatsappIconSvg" href="https://wa.me/+61473580021" target="_blank" rel="noopener noreferrer">
                  <WhatsApp />
              </a>
            </div>
          </>
        )}
        <div className="jf-chat-container"></div>
      </div>
    </div>
  );
};

export default ChatWidget;
