import { setOutput } from "@actions/core"
import { createVSIX } from "@vscode/vsce"
import { build } from "tsup"
import { getFlag } from "type-flag"

import generateThemes from "@/hooks/generateThemes"
import { readPackageJsonVersion, updatePackageJson } from "@/hooks/packageJson"

let development = getFlag("--dev", Boolean)
development = false

await generateThemes()

const packageJsonVersion = await readPackageJsonVersion()
if (!development) {
  console.debug(`Regenerating package.json with version "${packageJsonVersion}"`)
  await updatePackageJson()
}

await build({
  clean: true,
  entry: ["src/browser.ts", "src/main.ts", "src/hooks/generateThemes.ts"],
  external: ["vscode"],
  minify: true,
  sourcemap: false,
  target: "node16",
})

const packagePath = `tpstech-catppuccin-vsc-${packageJsonVersion}.vsix`

await createVSIX({ dependencies: false, packagePath })

// the upload step in the CI required the path to the vsix file
// if (process.env.GITHUB_ACTIONS) setOutput("vsixPath", packagePath);
setOutput("vsixPath", packagePath)
