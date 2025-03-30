import type { TextmateColors, ThemeContext } from "@/types";

import cpp from "./cpp";
import cs from "./cs";
import css from "./css";
import data from "./data";
import diff from "./diff";
import dotenv from "./dotenv";
import gdscript from "./gdscript";
import golang from "./golang";
import graphql from "./graphql";
import html from "./html";
import java from "./java";
import javascript from "./javascript";
import julia from "./julia";
import latex from "./latex";
import liquid from "./liquid";
import lua from "./lua";
import markdown from "./markdown";
import nix from "./nix";
import php from "./php";
import python from "./python";
import regex from "./regex";
import rust from "./rust";
import shell from "./shell";
import typst from "./typst";

export default function tokens(context: ThemeContext): TextmateColors {
  const { options, palette } = context;

  return [
    {
      name: "Basic text & variable names (incl. leading punctuation)",
      scope: [
        "text",
        "source",
        "variable.other.readwrite",
        "punctuation.definition.variable",
      ],
      settings: {
        foreground: "#f4f4f5",
      },
    },
    {
      name: "Symbols",
      scope: "constant.other.symbol",
      settings: {
        foreground: "#c084fc",
      },
    },
    {
      name: "Parentheses, Brackets, Braces",
      scope: "punctuation",
      settings: {
        foreground: "#a8a29e",
        fontStyle: "",
      },
    },
    {
      name: "Comments",
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "#a8a29e",
        fontStyle: options.italicComments ? "italic" : "",
      },
    },
    {
      scope: ["string", "punctuation.definition.string"],
      settings: {
        foreground: "#6ee7b7",
      },
    },
    {
      name: "Template literal quasi element",
      scope: ["punctuation.quasi.element"],
      settings: {
        foreground: "#c084fc",
        fontStyle: "italic",
      },
    },
    {
      name: "Escape characters",
      scope: "constant.character.escape",
      settings: {
        foreground: "#c084fc",
      },
    },
    {
      name: "Numbers",
      scope: [
        "constant.numeric",
        "keyword.other.unit.user-defined",
        "keyword.other.unit.suffix.floating-point",
      ],
      settings: {
        foreground: "#FF8A65",
      },
    },
    {
      name: "Constants",
      scope: [
        "variable.other.constant",
        "entity.name.constant",
        "entity.name.enum",
        "constant.language",
        "support.constant",
      ],
      settings: {
        foreground: "#fde68a",
      },
    },
    {
      name: "Flow control keywords",
      scope: [
        "keyword.operator.word",
        "keyword.operator.new",
        "variable.language.super",
        "variable.language.this",
        "variable.language.self",
        "constant.language.null",
        "constant.language.undefined",
        "constant.language.boolean",
        // include punctuation like $ and @ if they're part of the keyword
        "punctuation.definition.keyword",
        // leading punctuation like $this in PHP
        "variable.language.this punctuation.definition.variable",
        "keyword.control.directive",
        "punctuation.definition.directive",
      ],
      settings: {
        foreground: "#F7768E",
        fontStyle: "italic bold",
      },
    },
    {
      name: "Tags",
      scope: "entity.name.tag",
      settings: {
        foreground: "#fda4af",
        fontStyle: "bold",
      },
    },
    {
      name: "Keywords",
      scope: [
        "token.storage",
        "storage",
        "keyword",
        "keyword.control",
        "keyword.operator",
        "keyword.operator.new",
        "keyword.operator.expression.delete",
        "keyword.operator.expression.in",
        "keyword.operator.expression.of",
        "keyword.operator.expression.instanceof",
        "keyword.operator.expression.typeof",
        "keyword.operator.expression.void",
        "keyword.operator.expression.keyof",
        "keyword.operator.expression.import",
        "keyword.operator.less",
        "keyword.operator.module",
        "keyword.operator.assignment",
        "keyword.operator.assignment.compound",
        "keyword.operator.expression.instanceof",
        "keyword.operator.ternary",
        "keyword.operator.optional",
        "keyword.operator.logical",
        "keyword.operator.channel",
        "keyword.operator.bitwise",
        "keyword.operator.arithmetic",
        "keyword.operator.comparison",
        "keyword.operator.decrement",
        "keyword.operator.increment",
        "keyword.operator.relational",
        "keyword.operator.delete",
        "support.type.object.dom",
        "punctuation.accessor",
        "punctuation.definition.generic",
        "meta.function.closure punctuation.section.parameters",
        "punctuation.definition.tag",
        "punctuation.separator.key-value",
      ],
      settings: {
        foreground: "#c084fc",
        fontStyle: "italic",
      },
    },
    {
      name: "Punctuation",
      scope: [
        "punctuation.separator",
        "punctuation.accessor",
        "punctuation.definition.generic",
      ],
      settings: {
        foreground: "#f4f4f5",
      },
    },
    {
      scope: [
        "entity.name.function",
        "meta.function-call.method",
        "support.function.misc",
        "variable.function",
        "support.function.builtin",
        "keyword.other.special-method",
        "support.function",
      ],
      settings: {
        foreground: "#60a5fa",
      },
    },
    {
      name: "Classes",
      scope: [
        "entity.name.class",
        "entity.other.inherited-class",
        "support.class",
        "meta.function-call.constructor",
        "entity.name.struct",
      ],
      settings: {
        foreground: "#fde68a",
      },
    },
    {
      name: "Enum member",
      scope: [
        "meta.enum variable.other.readwrite",
        "variable.other.enummember",
      ],
      settings: {
        foreground: "#c084fc",
      },
    },
    {
      name: "Object properties",
      scope: "meta.property.object",
      settings: {
        foreground: palette.teal,
      },
    },
    {
      name: "Types",
      scope: [
        "meta.type",
        "meta.type-alias",
        "support.type",
        "entity.name.type",
      ],
      settings: {
        foreground: "#fde68a",
      },
    },
    {
      name: "Decorators",
      scope: [
        "meta.annotation variable.function",
        "meta.annotation variable.annotation.function",
        "meta.annotation punctuation.definition.annotation",
        "meta.decorator",
        "punctuation.decorator",
      ],
      settings: {
        foreground: "#c695c6",
      },
    },
    {
      scope: ["variable.parameter", "meta.function.parameters"],
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      scope: "entity.other.attribute-name",
      settings: {
        foreground: "#ffedd5",
      },
    },
    // {
    //   name: "Type parameters",
    //   scope: "punctuation.definition.typeparameters",
    //   settings: {
    //     foreground: palette.sky,
    //   },
    // },
    {
      name: "Namespaces",
      scope: "entity.name.namespace",
      settings: {
        foreground: "#fde68a",
      },
    },
    {
      name: "Property names (left hand assignments in json/yaml/css)",
      scope: [
        "support.type.property-name",
        "support.type.property-name.css",
        "support.type.property-name.scss",
        "support.type.property-name.json",
      ],
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "Property constant values",
      scope: "support.constant.property-value",
      settings: {
        foreground: "#fde68a",
      },
    },
    {
      name: "Object properties",
      scope: "variable.object.property",
      settings: {
        foreground: "#6ee7b7",
      },
    },
    {
      name: "String template interpolation",
      scope: ["string.template variable", "string variable"],
      settings: {
        foreground: "#fde68a",
      },
    },
    {
      name: "String interpolation",
      scope: [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded",
      ],
      settings: {
        foreground: "#A1887F",
      },
    },
    {
      name: "`new` as bold",
      scope: "keyword.operator.new",
      settings: {
        fontStyle: "bold",
      },
    },

    // per-language tokens
    ...[
      cpp,
      cs,
      css,
      data,
      diff,
      dotenv,
      gdscript,
      golang,
      graphql,
      html,
      java,
      javascript,
      julia,
      latex,
      liquid,
      lua,
      markdown,
      nix,
      php,
      python,
      regex,
      rust,
      shell,
      typst,
    ].flatMap((element) => element(context)),
  ];
}
