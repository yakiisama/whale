<script lang="ts">
  import type { TWindow, WhaleParams } from './interface';
  import Menu from './Menu/Menu.svelte';

  interface Props {
    options: WhaleParams;
    globalConfig: {
      mainLogo: string;
    };
  }

  let { options, globalConfig }: Props = $props();

  const tWindow: TWindow = window;

  if (!tWindow.config) {
    tWindow.config = new Map();
  }
  tWindow.config.set(options.name, options);
</script>

<Menu mainLogo={globalConfig.mainLogo}></Menu>
