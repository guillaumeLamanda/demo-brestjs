import { configure } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

setConsoleOptions({
  panelExclude: [],
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
