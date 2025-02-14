<script lang="ts">
  import closeImg from '@/assets/img/close.svg?raw';
  import { portal } from '../Portal/Portal.svelte';
  interface Props {
    title?: string;
    dom?: HTMLElement;
  }

  let { title, dom }: Props = $props();

  let show = $state(false);
  let close = $state(false);

  const handleClose = () => {
    show = false;
    close = true;
    setTimeout(() => {
      close = false;
    }, 300);
  };

  let root: HTMLDivElement;
  export const open = () => {
    show = true;
    const targetElement = root.querySelector('.content')!;
    if (dom) {
      targetElement.innerHTML = '';
      targetElement.appendChild(dom);
    }
  };
</script>

<div
  id="modal-wrapper"
  class:active={show}
  bind:this={root}
>
  <div class="modal__mask" class:active={show} onclick={handleClose}></div>
  <div class="modal__content" class:active={show} class:closing={close}>
    <div class="modal__content-header">
      <span class="title">{title}</span>
      <div class="close" onclick={handleClose}>
        {@html closeImg}
      </div>
    </div>
    <div class="content"></div>
    <div class="footer">
      <button class="btn cancel" onclick={handleClose}>cancel</button>
      <button class="btn confirm" onclick={handleClose}>confirm</button>
    </div>
  </div>
</div>

<style lang="less">
  @import './Modal.less';
</style>
