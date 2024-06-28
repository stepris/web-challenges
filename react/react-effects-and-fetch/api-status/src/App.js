import React from "react";
import StatusCheck from "./components/StatusCheck";
import "./styles.css";

export default function App() {
  return (
    <>
      <h1>API Status</h1>
      <StatusCheck />
    </>
  );
}

/* React Effects and Fetch: API Status

This App offers an interface to check the status of an API.

************************************************

Task

Look at the ./src/components/StatusCheck/index.js file.

There is a function named handleCheckApiStatus. The function is called when you click the button.

Inside of this function use fetch() to load status information from the API URL given in the variable apiStatusUrl. You will receive a different random result every time you call the API.

Your task is to write the logic for handleCheckApiStatus so that - depending on response.ok - the icon displays either ✅ or ❌.

You can use the following hints as guideline:

- fetch() returns a promise, so make sure to wait for the result.
- Check whether response.ok is truthy;
- if so, the icon should display ✅
- if not, the icon should display ❌

Hint: Since the side effect using fetch() is called upon a user interaction, not upon a render of the component, you don't need useEffect to solve this challenge.

Bonus 1:
Can you display a '⏳' icon while waiting for the response?

Bonus 2:
The API giving you the status might not be reachable at all, so that the network request cannot be established. In this case the promise given by fetch() won't resolve. This might break the app.

Do you have an idea how to catch this kind of error? Can you implement the error handling and show the status icon 🚨 if it happens.

Hint: This type of error will most probably not happen by chance. To test this case you can simulate the situation with your browser's dev tools. Follow this Firefox Docs guide to block the request:
https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#blocking-specific-urls

You can use the the wildcard * as URL to block all requests. Don't forget to turn this setting off again after your test.

Notes
You only have to touch the ./src/components/StatusCheck/index.js file. */
