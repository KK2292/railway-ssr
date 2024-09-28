const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { App } = require('../App');

const app = express();
const port = 9001;

app.get('/', (req, res) => {
  const appString = renderToString(React.createElement(App));
  const html = `
    <!doctype html>
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SSR</title>
      </head>
      <body>
        <div id="root">${appString}</div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});