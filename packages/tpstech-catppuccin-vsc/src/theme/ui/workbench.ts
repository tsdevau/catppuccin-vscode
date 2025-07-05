import { opacity } from "@/theme/utils"
import { ThemeContext, WorkbenchColors } from "@/types"

type WorkbenchPartial = Partial<Record<keyof WorkbenchColors, string>>

const workbench = (context: ThemeContext): WorkbenchPartial => {
  const { options, palette } = context

  const styles = {
    default: {},
    flat: {
      "activityBar.background": palette.mantle,
      "breadcrumb.background": palette.base,
      "commandCenter.background": palette.mantle,
      "debugToolBar.background": palette.mantle,
      "editorGroupHeader.tabsBackground": palette.mantle,
      "minimap.background": opacity(palette.base, 0.5),
      "statusBar.background": palette.mantle,
      "statusBar.noFolderBackground": palette.mantle,
      "tab.border": palette.base,
      "titleBar.activeBackground": palette.mantle,
      "titleBar.inactiveBackground": palette.mantle,
      "scrollbar.shadow": palette.mantle,
    },
    minimal: {
      "activityBar.background": opacity(palette.base, 0.7),
      "breadcrumb.background": opacity(palette.base, 0.5),
      "commandCenter.background": palette.base,
      "debugToolBar.background": palette.base,
      "editor.background": opacity(palette.base, 0.7),
      "editorWidget.background": palette.base,
      "editorGroupHeader.tabsBackground": palette.base,
      "minimap.background": opacity(palette.base, 0.5),
      "statusBar.background": opacity(palette.base, 0.9),
      "statusBar.noFolderBackground": palette.base,
      "sideBar.background": opacity(palette.base, 0.7),
      "sideBarSectionHeader.background": opacity(palette.base, 0.9),
      "tab.border": palette.base,
      "tab.inactiveBackground": opacity(palette.base, 0.7),
      "titleBar.activeBackground": palette.base,
      "titleBar.inactiveBackground": palette.base,
    },
  }

  return styles[options.workbenchMode]
}

export default workbench
