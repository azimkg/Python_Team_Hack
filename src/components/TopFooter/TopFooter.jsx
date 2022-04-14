import React from "react";
import twitter from "../assets/twitter.svg";
import mail from "../assets/mail.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";

const TopFooter = () => {
  return (
    <div>
      <div className="top-footer">
        <h3 className="top-footer-title">Наши страницы</h3>
        <div className="top-footer-main">
          <div className="top-footer-block">
            <svg
              className="icon"
              width="30"
              height="30"
              fill="rgb(18, 120, 74)"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
              alt=""
            >
              <path d="m15 8.91v5.74h-3.1v-5.36c0-1.34-.47-2.26-1.6-2.26-.86 0-1.39.62-1.62 1.22-.07.21-.11.51-.11.81v5.59h-3.1s.04-9.05 0-10h3.1v1.41c0 .01.01.01 0 .01v-.01c.48-.68 1.17-1.66 2.83-1.66 2.05 0 3.6 1.43 3.6 4.51zm-13.32-8.55c-1.02 0-1.68.72-1.68 1.66 0 .93.64 1.67 1.64 1.67h.02c1.03 0 1.68-.74 1.68-1.67-.03-.94-.65-1.66-1.66-1.66zm-1.44 14.28h2.86v-10h-2.86z" />
            </svg>
          </div>
          <div className="top-footer-block">
            <svg
              className="icon"
              width="30"
              height="30"
              fill="rgb(18, 120, 74)"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
              alt=""
            >
              <path d="m15 2.85c-.55.24-1.14.41-1.77.49.64-.38 1.12-.98 1.35-1.7-.6.35-1.25.61-1.96.75-.56-.6-1.36-.97-2.24-.97-1.7 0-3.08 1.38-3.08 3.08 0 .24.03.48.08.7-2.55-.14-4.82-1.37-6.34-3.23-.26.45-.41.98-.41 1.55 0 1.07.54 2.01 1.37 2.56-.51-.02-.98-.16-1.4-.39v.04c0 1.49 1.06 2.74 2.47 3.02-.26.07-.53.1-.81.1-.2 0-.39-.02-.58-.05.39 1.22 1.53 2.11 2.87 2.14-1.05.82-2.38 1.31-3.82 1.31-.25 0-.49-.01-.73-.04 1.36.87 2.98 1.38 4.72 1.38 5.66 0 8.75-4.69 8.75-8.75l-.01-.4c.61-.43 1.13-.97 1.54-1.59zm0 0" />
            </svg>
          </div>
          <div className="top-footer-block">
            <svg
              className="icon"
              width="30"
              height="30"
              fill="rgb(18, 120, 74)"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
              alt=""
            >
              <path d="m0 1.1h11l-5.5 4.2zm5.5 6.2-5.5-4.2v6.7h11v-6.7z" />
            </svg>
          </div>
          <div className="top-footer-block">
            <svg
              className="icon"
              width="30"
              height="30"
              fill="rgb(18, 120, 74)"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
              alt=""
            >
              <path d="m11.5 0v2.25h-2.93c-.31 0-.57.32-.57.63v1.62h3.25l-.61 2.25h-2.64v8.25h-2.25v-8.25h-2.25v-2.25h2.25v-1.75c0-1.59 1.17-2.75 2.75-2.75z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
