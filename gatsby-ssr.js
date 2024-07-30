// gatsby-ssr.js

/*const React = require("react");

exports.onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setPreBodyComponents([
    <noscript key="noscript-gtm">
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-P7TD4BSV"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
    </noscript>,
  ]);
};
*/

// gatsby-ssr.js
const React = require("react");

exports.onRenderBody = ({ setHeadComponents, pathname }, pluginOptions) => {
  const locationCookie = getCookieValue("selectedLocation");

  if (locationCookie && pathname === "/" && isValidLocation(locationCookie)) {
    setHeadComponents([
      <meta httpEquiv="refresh" content={`0; url=/${locationCookie}`} />
    ]);
  }
};

function getCookieValue(cookieName) {
  if (typeof document !== "undefined") {
    const cookie = document.cookie
      .split("; ")
      .find(row => row.startsWith(`${cookieName}=`));
    return cookie ? cookie.split("=")[1] : null;
  }
  return null;
}

function isValidLocation(location) {
  const validLocations = ["escondido", "hemet"];
  return validLocations.includes(location);
}
