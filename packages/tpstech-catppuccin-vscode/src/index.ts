import frappeJson from "tpstech-catppuccin-vsc/themes/frappe.json" with { type: "json" }
import latteJson from "tpstech-catppuccin-vsc/themes/latte.json" with { type: "json" }
import macchiatoJson from "tpstech-catppuccin-vsc/themes/macchiato.json" with { type: "json" }
import mochaJson from "tpstech-catppuccin-vsc/themes/mocha.json" with { type: "json" }

export { compile } from "./compile.js"

// shim the name for the Shiki theme, as the name is used for the className

export const latte = {
  ...latteJson,
  name: "tpstech-catppuccin-latte",
}
export const frappe = {
  ...frappeJson,
  name: "tpstech-catppuccin-frappe",
}
export const macchiato = {
  ...macchiatoJson,
  name: "tpstech-catppuccin-macchiato",
}
export const mocha = {
  ...mochaJson,
  name: "tpstech-catppuccin-mocha",
}
