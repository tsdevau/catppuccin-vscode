import { mkdir, readdir, unlink, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { defineConfig } from "tsup";

import frappe from "tsdevau-catppuccin-vsc/themes/frappe.json" with { type: "json" };
import latte from "tsdevau-catppuccin-vsc/themes/latte.json" with { type: "json" };
import macchiato from "tsdevau-catppuccin-vsc/themes/macchiato.json" with { type: "json" };
import mocha from "tsdevau-catppuccin-vsc/themes/mocha.json" with { type: "json" };

export default defineConfig({
  clean: true,
  entryPoints: ["src/index.ts", "src/compile.ts"],
  format: ["esm", "cjs"],
  dts: { resolve: true },
  minify: false,
  sourcemap: false,
  target: "node16",
  async onSuccess() {
    // create the dir
    const root = new URL("themes", import.meta.url).pathname;
    await mkdir(root, { recursive: true });
    // empty the dir
    const files = await readdir(root);
    await Promise.all(files.map((file) => unlink(join(root, file))));
    // write the files
    await Promise.all([
      writeFile(join(root, "mocha.json"), JSON.stringify(mocha)),
      writeFile(join(root, "macchiato.json"), JSON.stringify(macchiato)),
      writeFile(join(root, "frappe.json"), JSON.stringify(frappe)),
      writeFile(join(root, "latte.json"), JSON.stringify(latte)),
    ]);
  },
});
