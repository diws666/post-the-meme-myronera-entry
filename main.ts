import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const POST_JSON_FILENAME = "POST.json";

async function main() {
  const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

  await mkdir(outputDir, { recursive: true });
  await copyFile(join(botDir, POST_JSON_FILENAME), join(outputDir, POST_JSON_FILENAME));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
