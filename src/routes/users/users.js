function GET(req, res, url, payload) {
  res.writeHead(200, {
    "Content-type": "plain/text",
  });
  res.end("This is users route");
}

function POST(req, res, url, payload) {
  res.writeHead(200, {
    "Content-type": "application/json",
  });
  res.json({ message: "POST request /users parsed body", data: payload });
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
