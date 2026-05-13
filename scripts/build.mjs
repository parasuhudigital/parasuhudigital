import { execSync } from "node:child_process";

const hasCreds =
  !!process.env.NEXT_PUBLIC_TINA_CLIENT_ID && !!process.env.TINA_TOKEN;

if (hasCreds) {
  console.log("\n→ TinaCloud credentials detected. Building with admin UI...\n");
  try {
    execSync("tinacms build", { stdio: "inherit" });
  } catch (err) {
    console.error("\n✗ TinaCMS build failed. Continuing with Next.js only.\n");
  }
} else {
  console.log(
    "\n→ No TinaCloud credentials. Skipping admin UI build.\n" +
      "  Add NEXT_PUBLIC_TINA_CLIENT_ID and TINA_TOKEN to enable /admin route.\n"
  );
}

execSync("next build", { stdio: "inherit" });
