import remarkPresetLintConsistent from 'remark-preset-lint-consistent'
import remarkPresetLintRecommended from 'remark-preset-lint-recommended'
import remarkPresetMarkdownStyleGuide from "preset-lint-markdown-style-guide"
import remarkPresetPrettier from 'remark-preset-prettier'

const remarkConfig = {
  settings: {
    bullet: '-', // Use `-` for list item bullets (default)
    // See <https://github.com/remarkjs/remark/tree/main/packages/remark-stringify> for more options.
  },
  plugins: [
    remarkPresetLintConsistent, // Check that markdown is consistent.
    remarkPresetLintRecommended, // Few recommended rules.
    remarkPresetMarkdownStyleGuide, // Style guide.
    remarkPresetPrettier, // Use prettier to format code blocks.
  ]
}

export default remarkConfig