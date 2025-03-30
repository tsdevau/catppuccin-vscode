import type { TextmateColors, ThemeContext } from "@/types";

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context;

  return [
    {
      name: "JS/TS constants",
      scope: ["variable.other.constant", "support.variable.property.process"],
      settings: {
        foreground: "#fde68a",
      },
    },
    {
      name: "JS/TS class properties",
      scope: ["meta.property.object", "meta.export"],
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "JS/TS properties",
      scope: ["variable.other.property"],
      settings: {
        foreground: "#9FA8DA",
      },
    },
    {
      name: "JS/TS variable readwrite/readonly imports",
      scope: [
        "variable.other.readwrite",
        "variable.other.readonly",
        "support.class.component",
      ],
      settings: {
        foreground: "#ccfbf1",
      },
    },
    {
      name: "JSDoc; these are mainly params, so styled as such",
      scope: [
        "variable.other.jsdoc",
        "comment.block.documentation variable.other",
      ],
      settings: {
        foreground: "#7dd3fc",
        fontStyle: "",
      },
    },
    {
      name: "JSDoc keywords",
      scope: "storage.type.class.jsdoc",
      settings: {
        foreground: "#fde68a",
        fontStyle: "",
      },
    },
    {
      name: "JS/TS console",
      scope: "support.type.object.console",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "JS/TS modules (module, etc.)",
      scope: [
        "support.module.node",
        "support.type.object.module",
        "support.module.node",
      ],
      settings: {
        foreground: "#fde68a",
      },
    },
    {
      name: "JS/TS Integers",
      scope: "constant.numeric",
      settings: {
        foreground: "#FF8A65",
      },
    },
    {
      name: "JS/TS Math",
      scope: ["support.constant.math", "support.constant.property.math"],
      settings: {
        foreground: "#fde68a",
      },
    },
    {
      name: "JS/TS flow control keywords",
      scope: [
        "keyword.control.flow",
        "storage.modifier.async",
        "constant.language.boolean",
        "variable.language.this",
        "variable.language.super",
        "constant.language.null",
        "constant.language.undefined",
      ],
      settings: {
        foreground: "#F7768E",
        fontStyle: "italic bold",
      },
    },
    {
      name: "JS/TS builtins, types, primitives",
      scope: [
        "entity.name.type",
        "support.type.builtin",
        "support.type.primitive",
        "support.type.flowtype",
        "entity.name.class.identifier.namespace.type",
      ],
      settings: {
        foreground: "#fdba74",
        fontStyle: "italic",
      },
    },
    {
      name: "JS/TS JSDoc definition block punctuation",
      scope: "punctuation.definition.block.tag.jsdoc",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "JS/TS template literals",
      scope: ["keyword.other.template.begin", "keyword.other.template.end"],
      settings: {
        foreground: "#6ee7b7",
      },
    },
    {
      name: "JS/TS template literals variable braces",
      scope: [
        "keyword.other.substitution.begin",
        "keyword.other.substitution.end",
      ],
      settings: {
        foreground: "#fde68a",
      },
    },
    {
      name: "JS/TS Keywords (const, let, var, function, return, etc)",
      scope: [
        "keyword.control",
        "keyword.operator.arithmetic",
        "keyword.operator.assignment.compound",
        "keyword.operator.assignment",
        "keyword.operator.bitwise",
        "keyword.operator.channel",
        "keyword.operator.comparison",
        "keyword.operator.decrement",
        "keyword.operator.delete",
        "keyword.operator.expression.as",
        "keyword.operator.expression.delete",
        "keyword.operator.expression.for",
        "keyword.operator.expression.import",
        "keyword.operator.expression.in",
        "keyword.operator.expression.infer",
        "keyword.operator.expression.instanceof",
        "keyword.operator.expression.is",
        "keyword.operator.expression.keyof",
        "keyword.operator.expression.of",
        "keyword.operator.expression.typeof",
        "keyword.operator.expression.void",
        "keyword.operator.increment",
        "keyword.operator.less",
        "keyword.operator.logical",
        "keyword.operator.module",
        "keyword.operator.new",
        "keyword.operator.optional",
        "keyword.operator.relational",
        "keyword.operator.ternary",
        "keyword.operator",
        "keyword",
        "storage",
        "support.type.object.dom",
        "token.storage",
      ],
      settings: {
        foreground: "#c084fc",
        fontStyle: "italic",
      },
    },
    {
      name: "JS/TS dom variables",
      scope: ["support.variable.dom", "support.variable.property.dom"],
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "JS/TS Dollar",
      scope: ["variable.type.dollar", "support.class.dollar"],
      settings: {
        foreground: "#5fb4b4",
        fontStyle: "bold",
      },
    },
    {
      name: "JS/TS generic parameters",
      scope: "variable.parameter.generic",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "JS/TS punctuation separators",
      scope: [
        "punctuation.separator.key-value",
        "punctuation.separator.delimiter",
      ],
      settings: {
        foreground: "#f4f4f5",
      },
    },
    {
      name: "JS/TS punctuation definition",
      scope: [
        "punctuation.definition.string.begin",
        "punctuation.definition.string.end",
      ],
      settings: {
        foreground: "#6ee7b7",
      },
    },
    {
      name: "JS/TS string interpolation",
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
      name: "JS/TS function names",
      scope: [
        "entity.name.function",
        "support.function.console",
        "support.function",
      ],
      settings: {
        foreground: "#60a5fa",
      },
    },
    {
      name: "JS/TS function parameters",
      scope: ["variable.parameter.function"],
      settings: {
        foreground: "#7dd3fc",
      },
    },
    // {
    //   name: "JS/TS Arrow functions",
    //   scope: [
    //     "keyword.declaration.function.arrow.js",
    //     "storage.type.function.arrow.ts",
    //   ],
    //   settings: {
    //     foreground: palette.teal,
    //   },
    // },
    {
      name: "JS/TS Decorator punctuations (decorators inherit from blue functions, instead of styleguide peach)",
      scope: "punctuation.decorator.ts",
      settings: {
        foreground: "#c695c6",
        fontStyle: "italic",
      },
    },
  ];
};

export default tokens;
