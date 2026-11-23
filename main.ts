import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const source = join(root, "entry.png");
if (!existsSync(source)) throw new Error("entry.png missing");
console.log(`copying entry.png (${statSync(source).size} bytes)`);
mkdirSync("/output", { recursive: true });
copyFileSync(source, "/output/entry.png");
