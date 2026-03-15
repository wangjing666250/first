import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import PillarUI from '../../../packages/pillar-ui/src/index';
import '../../../packages/pillar-ui/src/style.css';

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(PillarUI);
  },
};

export default theme;