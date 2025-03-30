import { ConfigurationChangeEvent, ExtensionContext, window, workspace } from "vscode"

export const activate = (context: ExtensionContext) => {
  context.subscriptions.push(
    workspace.onDidChangeConfiguration((event: ConfigurationChangeEvent) => {
      if (event.affectsConfiguration("tpstech-catppuccin")) {
        window.showErrorMessage("VSCode Web doesn't support advanced Catppuccin by tpsTech options at this time.")
      }
    }),
  )
}
