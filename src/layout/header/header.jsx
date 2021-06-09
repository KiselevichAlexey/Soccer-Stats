import { Link } from "react-router-dom";
import React from "react";
import "./header.css";
export default function SearchAppBar() {
  return (
    <header className="header">
      <Link to="/" className="brand-name">
        Soccer-Stats
      </Link>
    </header>
  );
}
