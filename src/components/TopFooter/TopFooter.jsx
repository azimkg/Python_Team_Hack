import React from "react";
import twitter from "../assets/twitter.svg";

const TopFooter = () => {
  return (
    <div>
      <div className="top-footer">
        <h3 className="top-footer-title">Поделиться страницей</h3>
        <div className="top-footer-block">
          <svg
            className="icon"
            width="30"
            height="30"
            fill="rgb(6, 82, 6)"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
            alt=""
          >
            <path d="m15 2.85c-.55.24-1.14.41-1.77.49.64-.38 1.12-.98 1.35-1.7-.6.35-1.25.61-1.96.75-.56-.6-1.36-.97-2.24-.97-1.7 0-3.08 1.38-3.08 3.08 0 .24.03.48.08.7-2.55-.14-4.82-1.37-6.34-3.23-.26.45-.41.98-.41 1.55 0 1.07.54 2.01 1.37 2.56-.51-.02-.98-.16-1.4-.39v.04c0 1.49 1.06 2.74 2.47 3.02-.26.07-.53.1-.81.1-.2 0-.39-.02-.58-.05.39 1.22 1.53 2.11 2.87 2.14-1.05.82-2.38 1.31-3.82 1.31-.25 0-.49-.01-.73-.04 1.36.87 2.98 1.38 4.72 1.38 5.66 0 8.75-4.69 8.75-8.75l-.01-.4c.61-.43 1.13-.97 1.54-1.59zm0 0" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
