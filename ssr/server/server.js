import express from "express";
import fs from 'fs'
import path from 'path'
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from "../src/App";

const app = express();
const PORT = 8000;

app.use('^/$', (req, res, next) => {

  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log('Err::', err);
      return res.status(500).send('Some error occurred!')
    }

    const comp = `<div id="root"></div>`;
    const serverComp = `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`;

    return res.send(data.replace(comp, serverComp));
  })
})

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`)
})