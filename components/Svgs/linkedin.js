import React from "react";

function IconLinkedin(props) {
  return (
    <a href={props.url} target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="32"
        fill="none"
        viewBox="0 0 33 32"
      >
        <path
          fill="#F5F5F5"
          d="M7.651 4a2.666 2.666 0 00-2.667 2.667v18.666A2.666 2.666 0 007.651 28h18.667a2.666 2.666 0 002.666-2.667V6.667A2.666 2.666 0 0026.318 4H7.65zm0 2.667h18.667v18.666H7.65V6.667zm3.706 1.755c-1.143 0-1.828.687-1.828 1.601 0 .915.685 1.6 1.713 1.6 1.143 0 1.828-.685 1.828-1.6 0-.914-.685-1.601-1.713-1.601zM9.62 13.333v9.334h3.364v-9.334H9.62zm6.14 0v9.334h3.365v-5.102c0-1.519 1.084-1.737 1.409-1.737.325 0 1.195.326 1.195 1.737v5.102h3.255v-5.102c0-2.93-1.301-4.232-2.93-4.232-1.627 0-2.496.542-2.929 1.302v-1.302H15.76z"
        ></path>
      </svg>
    </a>
  );
}

export default IconLinkedin;