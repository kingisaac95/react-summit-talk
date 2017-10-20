import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import dotenv from 'dotenv';
import { jsonGraphqlExpress } from 'json-graphql-server';
import config from '../webpack.config.dev';
import data from '../client/assets/data/PhotoAlbum';

/* eslint-disable no-console */

dotenv.config();

const port = process.env.PORT || 4500;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/graphql', jsonGraphqlExpress(data));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../client/index.html'));
});

app.listen(port, err =>{
  if (!err) open(`http://localhost:${port}`);  else {
    console.log(err);
  }
});
