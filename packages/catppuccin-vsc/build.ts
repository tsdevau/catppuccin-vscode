import { setOutput } from "@actions/core";
import { createVSIX } from "@vscode/vsce";
import { build } from "tsup";
import { getFlag } from "type-flag";

import generateThemes from "@/hooks/generateThemes";
import { readPackageJsonVersion, updatePackageJson } from "@/hooks/packageJson";

const development = getFlag("--dev", Boolean);

await generateThemes();

const packageJsonVersion = await readPackageJsonVersion();
if (!development) {
  console.debug(
    `Regenerating package.json with version "${packageJsonVersion}"`,
  );
  await updatePackageJson();
}

await build({
  clean: true,
  entry: ["src/browser.ts", "src/main.ts", "src/hooks/generateThemes.ts"],
  external: ["vscode"],
  minify: !development,
  sourcemap: development,
  target: "node16",
});

const packagePath = `tsdevau-catppuccin-vsc-${packageJsonVersion}.vsix`;

await createVSIX({ dependencies: false, packagePath });

// the upload step in the CI required the path to the vsix file
if (process.env.GITHUB_ACTIONS) setOutput("vsixPath", packagePath);
