import React from "react";

import ticketBg from "../images/pattern-ticket.svg";
import logo from "../images/logo-full.svg";

export default function Ticket({ data }) {
  const { avatar, fullName, email, github, ticketNumber } = data;

  return (
    <div className="ticket-screen">
      <div className="ticket-header">
        <img src={logo} alt="Logo" className="logo" />
        <h1>
          Congrats, <span>{fullName}</span>! <br />
          Your ticket is ready.
        </h1>
        <p>
          We've emailed your ticket to <strong>{email}</strong> and will send
          updates in the run up to the event.
        </p>
      </div>

      <div className="ticket-container">
        <img src={ticketBg} alt="Ticket" className="ticket-background" />

        <div className="ticket-content">
          <div className="ticket-title">
            <img src={logo} alt="" className="logo-img" />
            <p>Jan 31, 2025 / Austin, TX</p>
          </div>

          <div className="ticket-user">
            <img
              src={URL.createObjectURL(avatar)}
              alt="avatar"
              className="ticket-avatar"
            />
            <div>
              <p className="name">{fullName}</p>
              <p className="handle">@{github}</p>
            </div>
          </div>

          {/* Ticket number positioned bottom-right (adjust position via CSS) */}
          <div className="ticket-number">{ticketNumber}</div>
        </div>
      </div>
    </div>
  );
}
