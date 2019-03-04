import { dark } from 'mdx-deck/themes';
import funky from 'react-syntax-highlighter/styles/prism/funky';
import typescript from 'react-syntax-highlighter/languages/prism/typescript';
import javascript from 'react-syntax-highlighter/languages/prism/javascript';
import bash from 'react-syntax-highlighter/languages/prism/bash';

export default {
  ...dark,
  prism: {
    style: funky
  },
  languages: {
    typescript,
    javascript,
    bash
  }
}
