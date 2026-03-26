import Banner from "@/components/global/banner";
import React from "react";
import { contactdetail } from "@/data/homeData";
import Form from "@/components/contact/form";
import { bann } from "@/assets";
import ConDetail from "@/components/contact/condetail";

function Contact() {
  return (
    <>
      <Banner
        img={bann}
        title={"Contact Us"}
        para={
          "Connect with experienced immigration consultants in Noida for clear guidance, support, and confident visa decisions."
        }
        slug={"contact-us"}
      />
      <Form />
       <ConDetail data={contactdetail} />
      {/* 

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1259953560875!2d77.37387757528882!3d28.62598567566839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce51afdb85551%3A0x6dc91b0ba281492b!2sWiderWorldCORE%20OVERSEAS%20-%20Best%20Immigration%20Consultants%20%7C%20Work%20In%20Europe%20%7C%20Canada%20PR%20%26%20Australia%20PR%20%7C%20Visa%20Consultants%20In%20Delhi%20NCR!5e0!3m2!1sen!2sin!4v1769494753704!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowFullScreen={true}
        loading="lazy"
      ></iframe>

      */}
    </>
  );
}

export default Contact;
