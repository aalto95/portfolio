import React from "react";
import LinkedInIcon from "./icons/LinkedInIcon";
import MailIcon from "./icons/MailIcon";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import { TelegramIcon } from "./icons/TelegramIcon";

const Contacts = () => {
  return (
    <div id="contacts" className="flex justify-center items-center m-10">
      <section className="flex flex-col justify-center items-center border-t-2 w-5/6 border-darkgray">
        <h1 className="text-3xl font-bold m-10">Get in touch</h1>
        <a
          href="https://www.linkedin.com/in/stanislav-pavlov-9776ba206/"
          className="h-14 w-72 md:w-96 bg-white flex justify-center items-center mb-2"
        >
          <p className="mr-2 text-black text-sm">LinkedIn</p>
          <LinkedInIcon className="w-8 h-8" />
        </a>
        <a
          href="https://t.me/scotlandfjord"
          className="h-14 w-72 md:w-96 bg-white flex justify-center items-center mb-2"
        >
          <p className="mr-2 text-black text-sm">Telegram</p>
          <TelegramIcon className="w-8 h-8" />
        </a>
        <a
          href="mailto:scotlandfjord@protonmail.com"
          className="h-14 w-72 md:w-96 bg-white flex justify-center items-center mb-2"
        >
          <p className="mr-2 text-black text-sm" id="mail">
            scotlandfjord@protonmail.com
          </p>
          <MailIcon className="w-8 h-8" />
        </a>
        <button
          onClick={() => {
            alert("Email was copied to clipboard!");
          }}
        >
          <CopyToClipboard
            className="h-14 w-72 md:w-96 bg-black flex justify-center items-center"
            text="scotlandfjord@protonmail.com"
          >
            <p className="mr-2 text-black text-sm">COPY EMAIL TO CLIPBOARD</p>
          </CopyToClipboard>
        </button>
      </section>
    </div>
  );
};

export default Contacts;
