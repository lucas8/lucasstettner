<script lang="ts">
  import { backOut } from 'svelte/easing'
  import topRightArrow from '../assets/arrow-top-right.svg'

  export let isHovering = false

  const translateUpRight = (node) => {
    return {
      duration: 500,
      css: (t) => {
        const eased = backOut(t)

        console.log(16 - eased)

        return `
					transform: translate(${-16 + eased * 16}px, ${16 - eased * 16}px);
					`
      },
    }
  }
</script>

<div>
  {#if isHovering}
    <img src={topRightArrow} alt="link icon" in:translateUpRight />
  {:else}
    <img src={topRightArrow} alt="link icon" />
  {/if}
</div>

<style>
  div {
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
</style>
