<script lang="ts">
  import LinkArrow from './LinkArrow.svelte'

  export let title: string = 'Title'
  export let description: string = 'Description'

  let isHovering = false

  const handleMouseEnter = () => {
    isHovering = true
  }

  const handleMouseLeave = () => {
    isHovering = false
  }
</script>

<li on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
  <span class="title"
    >{title}
    <span class="description"> — {description}</span></span
  >

  <LinkArrow {isHovering} />
</li>

<style>
  .title {
    font-size: var(--text-body);
    font-weight: 500;
    font-family: var(--font-body);
  }
  .description {
    color: #ffffff70;
  }
  li {
    cursor: pointer;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
