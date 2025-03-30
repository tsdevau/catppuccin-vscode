import frappeJson from "tsdevau-catppuccin-vsc/themes/frappe.json" with { type: "json" };
import latteJson from "tsdevau-catppuccin-vsc/themes/latte.json" with { type: "json" };
import macchiatoJson from "tsdevau-catppuccin-vsc/themes/macchiato.json" with { type: "json" };
import mochaJson from "tsdevau-catppuccin-vsc/themes/mocha.json" with { type: "json" };

export { compile } from "./compile.js";

// shim the name for the Shiki theme, as the name is used for the className

export const latte = {
  ...latteJson,
  name: "tsdevau-catppuccin-latte",
};
export const frappe = {
  ...frappeJson,
  name: "tsdevau-catppuccin-frappe",
};
export const macchiato = {
  ...macchiatoJson,
  name: "tsdevau-catppuccin-macchiato",
};
export const mocha = {
  ...mochaJson,
  name: "tsdevau-catppuccin-mocha",
};
