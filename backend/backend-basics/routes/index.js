// import { server } from "./server.js";

// server.listen(…

import { server } from "./server.js";

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use.`);
  } else {
    console.error(err);
  }
});

console.log(server);
