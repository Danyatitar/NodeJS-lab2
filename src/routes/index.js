export function GET(req, res, url, payload) {
  const ip = res.socket.remoteAddress;
  const port = res.socket.remotePort;
  res.writeHead(200, { "Content-Type": "application/json" });
  res.json({
    message: `Path: ${url.pathname}. Your IP: ${ip}. Your port: ${port}.`,
  });
}
