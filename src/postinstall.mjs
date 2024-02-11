import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Convert __dirname to ES6 syntax
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Copy .releaserc.js to the user's project directory
const sourcePath = path.join(__dirname, ".releaserc.js");
const destinationPath = path.join(process.cwd(), ".releaserc.js");

fs.copyFile(sourcePath, destinationPath, (err) => {
  if (err) throw err;
  console.log(".releaserc.js has been copied to your project.");
});
