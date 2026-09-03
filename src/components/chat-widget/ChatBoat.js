"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";


  export default function ChatBoat() {
  const pathname = usePathname();

  const scriptLoadedRef = useRef(false);
  const observerRef = useRef(null);
  const pendingOpenRef = useRef(false);

  // 🔍 Helpers
  const getEls = () => ({
    container: document.querySelector(".embedded-agent-container"),
    animation: document.querySelector(".ai-agent-chat-animation-container"),
  });

  const isOpen = () =>
    getEls().container?.classList.contains("opened");

  const openChat = () => {
    const { container, animation } = getEls();
    if (!container || !animation) return;

    container.classList.add("opened");
    animation.classList.add("isOpened");
  };

  const closeChat = () => {
    const { container, animation } = getEls();
    if (!container || !animation) return;

    container.classList.remove("opened");
    animation.classList.remove("isOpened");
  };

  // 👀 Observe DOM BEFORE script executes
  const startObserver = () => {
    if (observerRef.current) return;

    observerRef.current = new MutationObserver(() => {
      const { container, animation } = getEls();

      if (container && animation) {
        if (pendingOpenRef.current) {
          openChat();
          pendingOpenRef.current = false;
        }

        observerRef.current.disconnect();
        observerRef.current = null;
      }
    });

    observerRef.current.observe(document.body, {
      childList: true,
      subtree: true,
    });
  };

  // 🚀 Load Jotform script manually
  const loadScript = () => {
    if (scriptLoadedRef.current) return;

    scriptLoadedRef.current = true;
    startObserver();

    const script = document.createElement("script");
    script.src =
      "https://cdn.jotfor.ms/agent/embedjs/01975471ce517020b33b83343ee6c3d6fcc7/embed.js?skipWelcome=1&maximizable=1";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  };

  // 🧠 Button click
  const handleClick = () => {
    // Script already loaded → toggle
    if (scriptLoadedRef.current) {
      isOpen() ? closeChat() : openChat();
      return;
    }

    // First click → load + open
    pendingOpenRef.current = true;
    loadScript();
  };

  // 🔁 Close chat on route change
  useEffect(() => {
    closeChat();
  }, [pathname]);

  return (
  <button className="chatHideMobile" onClick={handleClick}>
  💬 Chat with us
</button>

  );
}


