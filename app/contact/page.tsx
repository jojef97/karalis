"use client";
import { useState } from "react";
import { Phone, Mail, Copy, Check } from "lucide-react";
import "./page.css";

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

export default function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);

  function handleCopy(text: string) {
    copyToClipboard(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="contact-page">
      <div className="about-box">
        <h1 className="title">About us:</h1>
        <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
               anim id est laborum."</p>
      </div>
      <div className="contact-icons">
        <div className="icon-box" onClick={() => handleCopy("+302101234567")}>
          <Phone size={24} />
          <span>+30 210 1234567</span>
          {copied === "+302101234567" ? (
            <Check size={16} className="copy-icon" />
          ) : (
            <Copy size={16} className="copy-icon" />
          )}
        </div>
        <div className="icon-box" onClick={() => handleCopy("info@karalis.com")}>
          <Mail size={24} />
          <span>info@karalis.com</span>
          {copied === "info@karalis.com" ? (
            <Check size={16} className="copy-icon" />
          ) : (
            <Copy size={16} className="copy-icon" />
          )}
        </div>
      </div>
    </div>
  );
}