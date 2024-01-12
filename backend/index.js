const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "" } } //Add private key
    );
    console.log("Chat Engine response:", r.data);
    return res.status(r.status).json(r.data);
  } catch (e) {
    console.error("Chat Engine error:", e.response.data);
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
