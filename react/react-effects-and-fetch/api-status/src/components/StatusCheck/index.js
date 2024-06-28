import "./StatusCheck.css";
import { useState } from "react";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  // const statusIcon = "⁉️";
  // Something needs to change here…
  //

  const statusIcons = {
    check: "✅",
    cross: "❌",
    hourglass: "⏳",
    alert: "🚨",
    unknown: "⁉️",
  };

  const [status, setStatus] = useState(statusIcons.unknown);
  async function handleCheckApiStatus() {
    /**
     * Hint 1:
     * Use the `fetch()` function and pass the `apiStatusUrl` into it
     *
     * Hint 2:
     * The fetch function returns a promise which resolves to a Response
     * object once it is ready.
     *
     * Hint 3:
     * The Response object has a `ok` property which is true if the response
     * is okay and false if it is not.
     **/
    // --v-- write your code here --v--
    try {
      setStatus(statusIcons.hourglass);
      const response = await fetch(apiStatusUrl);

      const data = await response.json();

      console.table(response);
      console.table(data);

      if (response.ok) {
        setStatus(statusIcons.check);
      } else if (!response.ok) {
        setStatus(statusIcons.cross);
      }
    } catch (error) {
      setStatus(statusIcons.alert);
      console.error("Error fetching API:", error);
    }
    // --^-- write your code here --^--
  }

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        <span className="status-check__icon">{status}</span>
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus}
      >
        Check API Status
      </button>
    </article>
  );
}
