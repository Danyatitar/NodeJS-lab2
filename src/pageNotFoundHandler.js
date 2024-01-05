export default {
  GET: handlePageNotFound,
  POST: handlePageNotFound,
  PUT: handlePageNotFound,
  PATCH: handlePageNotFound,
  DELETE: handlePageNotFound,
  HEAD: handlePageNotFound,
  OPTIONS: handlePageNotFound,
};

function handlePageNotFound(req, res, url, payload) {
  res.json({ message: "Page Not Found" });
}
