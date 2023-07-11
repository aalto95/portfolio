import React, { MouseEvent } from "react";
import LinkedInIcon from "./icons/LinkedInIcon";
import MailIcon from "./icons/MailIcon";
import { TelegramIcon } from "./icons/TelegramIcon";

const Contacts: React.FC = () => {
  const [email] = React.useState("scotlandfjord@protonmail.com");
  const [telegramNickname] = React.useState("");
  function copyToClipboard(e: MouseEvent) {
    const target = e.currentTarget as HTMLButtonElement;
    target.blur();
    navigator.clipboard.writeText(email);
  }

  return (
    <div w-display="flex" w-justify="center" w-items="center">
      <section
        id="contacts"
        w-display="flex"
        w-justify="center"
        w-items="center"
        w-flex="col"
        w-border="t-2 darkgray"
        w-w="full md:4/6"
        w-mx="4"
        w-mt="10"
      >
        <h1 w-text="3xl center" w-font="bold" w-mb="4" w-mt="10">
          Get in touch
        </h1>
        <a
          w-display="flex"
          w-justify="center"
          w-items="center"
          w-min-h="14"
          w-w="full md:96"
          w-bg="white focus:gray-200 hover:gray-200"
          w-mb="2"
          w-transform="duration-500"
          href="https://www.linkedin.com/in/stanislav-pavlov-9776ba206/"
        >
          <p w-mr="2" w-text="black sm">
            LinkedIn
          </p>
          <LinkedInIcon className="w-8 h-8" />
        </a>
        {/* <a
          w-display="flex"
          w-justify="center"
          w-items="center"
          w-h="14"
          w-w="full md:96"
          w-mb="2"
          w-bg="white"
          href={"https://t.me/" + telegramNickname}
        >
          <p w-mr="2" w-text="black sm">
            Telegram
          </p>
          <TelegramIcon className="w-8 h-8" />
        </a> */}
        <a
          w-display="flex"
          w-justify="center"
          w-items="center"
          w-min-h="14"
          w-w="full md:96"
          w-mb="2"
          w-bg="white focus:gray-200 hover:gray-200"
          w-transform="duration-500"
          href={"mailto:" + email}
        >
          <p className="mr-2 text-black text-sm" id="mail">
            {email}
          </p>
          <MailIcon className="w-8 h-8" />
        </a>
        <button
          onClick={(e) => copyToClipboard(e)}
          w-display="flex"
          w-justify="center"
          w-items="center"
          w-min-h="14"
          w-w="full md:96"
          w-bg="gray-200 dark:black focus:gray-900 hover:gray-900"
          w-transform="transition duration-300"
        >
          <p w-mr="2" w-text="white sm">
            COPY EMAIL TO CLIPBOARD
          </p>
        </button>
      </section>
    </div>
  );
};

export default Contacts;
