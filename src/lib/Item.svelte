<script lang="ts">
  import { spring } from 'svelte/motion'
  import { fade } from 'svelte/transition'
  import LinkArrow from './LinkArrow.svelte'

  export let src: string = ''
  export let href = '/'
  export let title: string = 'Title'
  export let description: string = 'Description'

  let isHovering = false
  let height = spring(40)

  const handleMouseEnter = () => {
    isHovering = true
    height.set(200)
  }

  const handleMouseLeave = () => {
    isHovering = false
    height.set(40)
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<li
  style:--height="{$height}px"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
  <a {href}>
    {#if isHovering}
      <img {src} alt="background" transition:fade />
    {/if}
    <div class:isHovering>
      <span class="title"
        >{title}
        <span class="description"> — {description}</span></span
      >

      <LinkArrow delay={400} {isHovering} />
    </div></a
  >
</li>

<style>
  .title {
    font-size: var(--text-body);
    font-weight: 500;
    font-family: var(--font-body);
  }
  .description {
    color: #ffffff80;
  }
  a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    position: relative;
    color: #fff;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  div {
    transition: background-color ease 200ms;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 40px;
    width: 100%;
    padding: 0 8px;
    z-index: 1;
  }
  div.isHovering {
    background-color: rgba(0, 0, 0, 0.85);
    border-top: 1px solid #ffffff50;
  }
  li {
    min-height: 40px;
    height: var(--height);
    cursor: pointer;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #ffffff50;
    list-style: none;
  }
  li:not(:last-child) {
    border-bottom-width: 0px;
  }
</style>
