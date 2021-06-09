import React from "react";
import "./footer.css";

export default function Footer() {
  const date = new Date().getFullYear();
  return <footer className="footer">© SoccerStats {date}</footer>;
}
