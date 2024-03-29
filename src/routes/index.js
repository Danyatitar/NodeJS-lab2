function GET(req, res, url, payload) {
  res.writeHead(200, {
    "Content-type": "text/html",
  });
  res.end("<h1>Lab 2</h1>");
}

function POST(req, res, url, payload) {
  res.writeHead(200, {
    "Content-type": "application/json",
  });
  res.json({ message: "main POST request parsed body", data: payload });
}

function PATCH(req, res, url, payload) {
  res.writeHead(200, {
    "Content-type": "application/json",
  });
  res.json({ message: "main PATCH request parsed body", data: payload });
}

function OPTIONS(req, res, url, payload) {
  res.writeHead(204, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end();
}

export { GET, POST, OPTIONS };
