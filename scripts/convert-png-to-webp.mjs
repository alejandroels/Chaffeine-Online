import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.resolve("public");

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".png")) {
      files.push(fullPath);
    }
  }

  return files;
}

const pngFiles = walk(publicDir);

for (const inputPath of pngFiles) {
  const outputPath = inputPath.replace(/\.png$/i, ".webp");
  await sharp(inputPath).webp({ quality: 85, effort: 4 }).toFile(outputPath);
  console.log(`Converted: ${path.relative(publicDir, inputPath)} -> ${path.relative(publicDir, outputPath)}`);
}

console.log(`Done. ${pngFiles.length} files converted.`);
