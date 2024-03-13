// import 'dotenv/config';
import { useState } from "react";
import { Button, TextField, Typography, Container } from "@material-ui/core";

const Shortify = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  // console.log(process.env)

  const handleShorten = () => {
    fetch("http://localhost:3000/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: "https://github.com/krishnakodoth/Express/tree/main/short-url",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setShortUrl("http://localhost:3000/shorten/"+data.shortUrl)
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Shortify - URL Shortener
      </Typography>
      <TextField
        label="Enter URL"
        variant="outlined"
        fullWidth
        margin="normal"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleShorten}>
        Shorten
      </Button>
      {shortUrl && (
        <div style={{ marginTop: "20px" }}>
          <Typography variant="subtitle1">Shortened URL:</Typography>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </Container>
  );
};

export default Shortify;
