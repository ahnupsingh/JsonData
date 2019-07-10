const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const router2 = jsonServer.router('posts.json');
const paxsafeRouter = jsonServer.router('paxsafe.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.use(router2);
server.use(paxsafeRouter);

server.listen(port);
