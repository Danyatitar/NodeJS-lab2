function safeJSON(data, fallback) {
  try {
    return JSON.parse(data);
  } catch (err) {
    return fallback;
  }
}

export { safeJSON };
