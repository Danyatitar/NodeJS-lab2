function safeJSON(data, fallback) {
  try {
    return JSON.parse(data);
  } catch (err) {
    return fallback;
  }
}

function xmlParse(data) {
  const tokens = data
    .replaceAll("\n", "")
    .replaceAll("  ", "")
    .replaceAll(">", ">|")
    .replaceAll("<", "|<")
    .split("|");
  tokens.pop();
  tokens.shift();
  const root = {};
  const stack = [root];
  let currentElement = root;
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i].trim();
    if (token.startsWith("<") && token.endsWith(">")) {
      if (token.startsWith("</")) {
        stack.pop();
        currentElement = stack[stack.length - 1];
      } else {
        const tagName = token.slice(1, -1);
        const newElement = { tagName, content: [] };
        if (!currentElement[tagName]) {
          currentElement[tagName] = [];
        }
        currentElement[tagName].push(newElement);
        stack.push(newElement);
        currentElement = newElement;
      }
    } else if (token) {
      currentElement.content.push(token);
    }
  }
  return root;
}
function parseForm(data, failback) {
  if (typeof data !== "string") {
    throw new Error("The input data should be a string.");
  }

  try {
    const splitData = data.split("\r\n");
    const formData = {};

    for (const line of splitData) {
      if (line.includes("Content-Disposition: form-data; name=")) {
        const key = line.split("=")[1].replaceAll('"', "").trim();
        const valueIndex = splitData.indexOf(line) + 2;

        if (valueIndex < splitData.length) {
          const value = splitData[valueIndex];
          formData[key] = value;
        } else {
          console.log(`No matching value found for the key '${key}'`);
        }
      }
    }

    return formData;
  } catch (error) {
    console.error("Error parsing form-data:", error);
    throw failback;
  }
}

export { safeJSON, xmlParse, parseForm };
