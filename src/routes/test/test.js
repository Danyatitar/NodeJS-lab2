function GET(req, res, url, payload) {
  res.writeHead(200, {
    "Content-type": "application/xml",
  });
  res.end("<response><message>This is test route</message></response>");
}

function POST(req, res, url, payload) {
  res.writeHead(200, {
    "Content-type": "application/json",
  });
  res.json({ message: "POST request /test parsed body", data: payload });
}

function OPTIONS(req, res, payload, body) {
  res.writeHead(204, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end();
}

export { GET, POST, OPTIONS };
