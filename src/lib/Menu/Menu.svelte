<script lang="ts">
  import circleCloseImg from '@/assets/img/circleClose.svg';
  import svelteImg from '@/assets/svelte.svg';
  import { type TWindow, type WhaleParams } from '../interface';
  import { movable } from '@svelte-put/movable';
  import Modal from '../Modal/Modal.svelte';

  interface Props {
    mainLogo: string;
  }

  let { mainLogo }: Props = $props();

  const configList = (window as TWindow).config;

  let selectMenu = $state<WhaleParams>();
  let modalRef: Modal;
  let whaleRef: HTMLElement;
  let handle: HTMLElement | undefined = $state();
  const openModal = (data: WhaleParams) => {
    selectMenu = data;
    modalRef.open();
  };
</script>

<div
  id="whale"
  use:movable={{
    handle,
    limit: { delta: { x: 0 }, parent: 'screen' },
    cursor: false,
  }}
  bind:this={whaleRef}
  onmouseleave={() => whaleRef.classList.remove('hover')}
>
  <!-- <div class="menu-close animate">
    <img src={circleCloseImg} alt="closeMenu" />
  </div> -->

  <div
    class="menu"
    bind:this={handle}
    bind:this={whaleRef}
    onmouseenter={() => whaleRef.classList.add('hover')}
  >
    <div class="menu-logo animate">
      <img src={mainLogo} draggable="false" alt="brand" />
    </div>
  </div>

  <div class="sub-menu animate">
    {#each Array.from(configList?.entries() || []) as [key, value]}
      <div
        class="feat"
        data-tool-name={value.name}
        onclick={() => openModal(value)}
      >
        <span class="feat__logo" data-tool-name={value.name}>
          <img
            data-tool-name={value.name}
            src={value.logo}
            alt="logo"
            draggable="false"
          />
        </span>
        <div class="feat__tooltip">
          <div class="feat__tooltip-name">{value.name || ''}</div>
          <div class="feat__tooltip-desc">{value.desc || ''}</div>
        </div>
      </div>
    {/each}
  </div>

  <Modal bind:this={modalRef} title={selectMenu?.title} dom={selectMenu?.dom} />
</div>

<style lang="less">
  @import './Menu.less';
</style>
