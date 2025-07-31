import React, { useState } from "react";

import Background from "./components/Background";
import Header from "./components/Header";
import IntroText from "./components/IntroText";
import Form from "./components/Form";
import Ticket from "./components/Ticket";

function generateTicketNumber() {
  const num = Math.floor(100000 + Math.random() * 900000);
  return `#${num}`;
}

function App() {
  const [userData, setUserData] = useState(null);

  function handleFormSubmit(formData) {
    const ticketNumber = generateTicketNumber();
    setUserData({ ...formData, ticketNumber });
  }

  return (
    <Background>
      {!userData ? (
        <>
          <Header />
          <IntroText />
          <Form onSubmitForm={handleFormSubmit} />
        </>
      ) : (
        <Ticket data={userData} />
      )}
    </Background>
  );
}

export default App;
