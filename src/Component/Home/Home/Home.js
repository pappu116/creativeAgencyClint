import React from "react";
import ClientComments from "../ClientsComment/ClientComments";
import FooterContactForm from "../FooterContactFrom/FooterContactForm";
import Header from "../Header/Header";
import OurPartner from "../OurPartner/OurPartner";
import OurWork from "../OurWork/OurWork";
import Service from "../Service/Service";

const Home = () => {
  return (
    <main>
      <Header />
      <OurPartner />
      <Service />
      <OurWork />
      <ClientComments />
      <FooterContactForm />
    </main>
  );
};

export default Home;
