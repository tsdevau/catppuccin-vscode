import type { TextmateColors, ThemeContext } from "@/types"

const tokens = (context: ThemeContext): TextmateColors => {
  const { palette } = context

  return [
    {
      name: "Regex string begin/end in JS/TS",
      scope: ["string.regexp punctuation.definition.string.begin", "string.regexp punctuation.definition.string.end"],
      settings: {
        foreground: "#6ee7b7",
      },
    },
    {
      name: "Regex anchors (^, $)",
      scope: "keyword.control.anchor.regexp",
      settings: {
        foreground: "#c084fc",
      },
    },
    {
      name: "Regex regular string",
      scope: "string.regexp",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Regex group parenthesis & backreference (\\1, \\2, \\3, ...)",
      scope: ["punctuation.definition.group.regexp", "keyword.other.back-reference.regexp"],
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "Regex character class []",
      scope: "punctuation.definition.character-class.regexp",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Regex character classes (\\d, \\w, \\s)",
      scope: "constant.other.character-class.regexp",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "Regex range",
      scope: "constant.other.character-class.range.regexp",
      settings: {
        foreground: palette.rosewater,
      },
    },
    {
      name: "Regex quantifier",
      scope: "keyword.operator.quantifier.regexp",
      settings: {
        foreground: "#fde68a",
      },
    },
    {
      name: "Regex constant/numeric",
      scope: "constant.character.numeric.regexp",
      settings: {
        foreground: "#FF8A65",
      },
    },
    {
      name: "Regex lookaheads, negative lookaheads, lookbehinds, negative lookbehinds",
      scope: [
        "punctuation.definition.group.no-capture.regexp",
        "meta.assertion.look-ahead.regexp",
        "meta.assertion.negative-look-ahead.regexp",
      ],
      settings: {
        foreground: palette.blue,
      },
    },
  ]
}

export default tokens
