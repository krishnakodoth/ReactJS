// import 'dotenv/config';
import { useState } from 'react';
import { Button, TextField, Typography, Container } from '@material-ui/core';

const Shortify = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  // console.log(process.env)

  const handleShorten = async () => {
    // Implement your logic to send a POST request to your server to shorten the URL
    // Update the shortUrl state with the result
    // For simplicity, let's assume the server returns a shortened URL directly
    const response = await fetch("http://localhost:3000/shorten", {
      method: 'POST',
      mode: 'no-cors',      
      body: JSON.stringify({ "url": "https://github.com/krishnakodoth/Express/tree/main/short-url"}),
    });

    // const result = await response.json();
    const result = await response;
    console.log(result)
    // setShortUrl(result.shortUrl);
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
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
        <div style={{ marginTop: '20px' }}>
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