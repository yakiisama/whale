<script context="module" lang="ts">
  import { tick } from 'svelte';

  /**
   * Usage: <div use:portal={'css selector'}> or <div use:portal={document.body}>
   *
   * @param {HTMLElement} el
   * @param {HTMLElement|string} target DOM Element or CSS Selector
   */
  export function portal(el: HTMLElement, target: HTMLElement | string = 'body') {
    let targetEl: HTMLElement | null;

    async function update(newTarget: HTMLElement | string) {
      target = newTarget;
      if (typeof target === 'string') {
        targetEl = document.querySelector(target);
        if (targetEl === null) {
          await tick();
          targetEl = document.querySelector(target);
        }
        if (targetEl === null) {
          throw new Error(
            `No element found matching css selector: "${target}"`
          );
        }
      } else if (target instanceof HTMLElement) {
        targetEl = target;
      } else {
        throw new Error('Target must be a CSS selector or an HTMLElement');
      }

      if (targetEl) {
        targetEl.appendChild(el);
      }
    }

    update(target);

    return {
      update,
      destroy() {
        if (targetEl && targetEl.contains(el)) {
          targetEl.removeChild(el);
        }
      }
    };
  }
</script>

<div use:portal>
  <!-- 这个 div 元素将使用 portal 行为 -->
</div>
