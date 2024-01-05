import { readdir } from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.join(__dirname, "/routes");

const router = new Map();

async function loadRoutesDir(dirname, base) {
  const relativePath = path.join(base, dirname);
  const workDir = path.join(baseDir, relativePath);
  const dir = await readdir(workDir, { withFileTypes: true });

  for (const dirent of dir) {
    if (dirent.isDirectory()) {
      await loadRoutesDir(dirent.name, path.join(base, dirname));
    } else if (dirent.isFile() && path.extname(dirent.name) === ".js") {
      let modulePath = pathToFileURL(path.join(workDir, dirent.name));
      let module = await import(modulePath);

      router.set(relativePath.replaceAll(path.sep, "/"), {
        ...module,
      });
    }
  }
}

await loadRoutesDir("", path.sep);

console.log("🪵  ~ router:", router);

export default router;
