import { shade } from "@/theme/utils";
import { ThemeContext, WorkbenchColors } from "@/types";

type PickStartsWith<T extends object, S extends string> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [K in keyof T as K extends `${S}${infer R}` ? K : never]: T[K];
};

type BracketHLs = keyof PickStartsWith<
  WorkbenchColors,
  "editorBracketHighlight"
>;

const brackets = (context: ThemeContext): Record<BracketHLs, string> => {
  const { isLatte, options, palette } = context;

  // invert the shade of dimmed brackets if current theme is latte
  const dimAmount = -0.07 * (isLatte ? -1 : 1);

  const styles = {
    rainbow: {
      "editorBracketHighlight.foreground1": palette.sky,
      "editorBracketHighlight.foreground2": palette.peach,
      "editorBracketHighlight.foreground3": palette.mauve,
      "editorBracketHighlight.foreground4": palette.green,
      "editorBracketHighlight.foreground5": palette.sapphire,
      "editorBracketHighlight.foreground6": palette.blue,
      "editorBracketHighlight.unexpectedBracket.foreground": palette.red,
    },
    dimmed: {
      "editorBracketHighlight.foreground1": shade(palette.sky, dimAmount),
      "editorBracketHighlight.foreground2": shade(palette.peach, dimAmount),
      "editorBracketHighlight.foreground3": shade(palette.mauve, dimAmount),
      "editorBracketHighlight.foreground4": shade(palette.green, dimAmount),
      "editorBracketHighlight.foreground5": shade(palette.sapphire, dimAmount),
      "editorBracketHighlight.foreground6": shade(palette.blue, dimAmount),
      "editorBracketHighlight.unexpectedBracket.foreground": shade(
        palette.red,
        dimAmount,
      ),
    },
    monochromatic: {
      "editorBracketHighlight.foreground1": palette.subtext1,
      "editorBracketHighlight.foreground2": palette.subtext0,
      "editorBracketHighlight.foreground3": palette.overlay2,
      "editorBracketHighlight.foreground4": palette.overlay1,
      "editorBracketHighlight.foreground5": palette.overlay0,
      "editorBracketHighlight.foreground6": palette.surface2,
      "editorBracketHighlight.unexpectedBracket.foreground": palette.red,
    },
    neovim: {
      "editorBracketHighlight.foreground1": palette.sky,
      "editorBracketHighlight.foreground2": palette.teal,
      "editorBracketHighlight.foreground3": palette.mauve,
      "editorBracketHighlight.foreground4": palette.blue,
      "editorBracketHighlight.foreground5": palette.pink,
      "editorBracketHighlight.foreground6": palette.flamingo,
      "editorBracketHighlight.unexpectedBracket.foreground": palette.red,
    },
  };

  return styles[options.bracketMode];
};

export default brackets;
