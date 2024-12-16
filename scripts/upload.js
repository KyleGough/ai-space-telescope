import { readFile } from 'fs';
import axios from 'axios';

const path = process.argv[2];

const secrets = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
};

if (!path) {
  console.log('File must be provided.');
  process.exit(1);
}

if (!path.toLowerCase().endsWith('.png')) {
  console.log('File must be a PNG file.');
  process.exit(1);
}

/**
 * Uploads a file via the Sirv API.
 */
const uploadFile = (token, path) => {
  readFile(path, (err, data) => {
    if (err) throw err;

    const fileName = `${getRandomFileName(6)}.png`;
    const encodedFilename = encodeURIComponent(`/Images/${fileName}`);
    const uploadURL = `https://api.sirv.com/v2/files/upload?filename=${encodedFilename}`;

    axios
      .post(uploadURL, data, {
        headers: {
          'content-type': 'image/png',
          authorization: `Bearer ${token}`,
        },
      })
      .then(() => console.log(`Successfully uploaded file ${fileName}`))
      .catch((err) => {
        console.log(`Failed to upload file ${path}`);
        console.error(err);
      });
  });
};

/**
 * Generates a filename consisting of 6 random hex digits.
 */
const getRandomFileName = (length) => {
  return [...Array(length)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('');
};

axios
  .post('https://api.sirv.com/v2/token', secrets)
  .then((res) => uploadFile(res.data.token, path))
  .catch((err) => console.log(err));
