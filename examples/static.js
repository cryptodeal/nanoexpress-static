/* eslint-disable import/no-unresolved, node/no-missing-import, eslint-comments/disable-enable-pair */
import nanoexpress from '@nanoexpress/pro-slim'; // Or your choice, you can use PRO version itself
import path from 'path';
import staticServe from '../static.es.js';

const app = nanoexpress();

// Simple implementation for `headers` middleware to work
// effectively with browsers `Ranges` header
app.use(async (req) => {
  req.headers = {};
  req.forEach((key, value) => {
    req.headers[key] = value;
  });
});

// Always use inside `async` to make it work properly
app.use(
  staticServe(path.resolve('./examples/static'), {
    mode: 'cached',
    compressed: false
  })
);

app.listen(4000);
