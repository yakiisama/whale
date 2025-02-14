import App from './index.svelte';
import type { WhaleParams } from './interface';
import { mount } from 'svelte';

class Entry {
  private containerID = 'whale-container';
  private static globalConfig: Record<'mainLogo', any>;

  constructor(args: WhaleParams) {
    this.init(args);
  }

  static config(config: Record<'mainLogo', string>) {
    Entry.globalConfig = config;
  }

  private init(args: WhaleParams) {
    const outLayer = document.getElementById(this.containerID);
    if (outLayer) {
      outLayer.remove();
    }
    const container = document.createElement('div');
    container.id = this.containerID;
    const shadowRoot = container.attachShadow({ mode: 'open' });
    document.documentElement.appendChild(container);

    mount(App, {
      target: shadowRoot,
      props: {
        options: { ...args },
        globalConfig: Entry.globalConfig,
      },
    });
  }
}

export const createWhale = (args: WhaleParams) => {
  new Entry(args);
  return (window as any).Whale;
};

export const config = (config: Record<'mainLogo', string>) => {
  Entry.config(config);
  return (window as any).Whale;
};
