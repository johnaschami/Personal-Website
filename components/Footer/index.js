import React from "react";
import Socials from "../Socials";
import Button from "../Button";

const Footer = () => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0 flex flex-col items-center justify-center text-center">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            
            {/* Updated Button to Send Email */}
            <div className="flex justify-center">
              <Button
                type="primary"
                onClick={() => window.location.href = "mailto:johnas1433@yahoo.com"}
              >
                Email Me
              </Button>
            </div>

            <div className="mt-10 flex justify-center">
              <Socials />
            </div>
          </div>
        </div>
      </div>

      {/* Credits Section */}
      <div className="flex justify-center">
        <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
          Made With ❤ by{" "}
          <a
            href="https://hakunamatataai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-1"
          >
            HakunaMatata AI
          </a>
        </h1>
      </div>
    </>
  );
};

export default Footer;
