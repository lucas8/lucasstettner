<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import Item from './lib/Item.svelte'
  import Nav from './lib/Nav.svelte'
  import primerCover from './assets/primer-cover.png'

  // TODO: load fonts
  // TODO: do a pass on these again
  const COLORS = ['255, 0, 153', '143, 69, 0', '79, 184, 30', '181, 185, 0']

  const setFavicon = (color: string) => {
    if (typeof window === 'undefined') return

    const path = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect fill=%22rgb(${color})%22 width=%22256%22 height=%22256%22 /></svg>`

    const link = window.document.createElement('link')

    link.type = 'image/svg+xml'
    link.rel = 'shortcut icon'
    link.href = path

    window.document.getElementsByTagName('head')[0].appendChild(link)
  }

  onMount(() => {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]
    // set a random primary color
    window.document.body.style.setProperty('--color-primary', color)
    setFavicon(color)
  })
</script>

<main>
  <Nav />
  <section id="about" in:fade>
    <p>
      Crafting interfaces. Building polished software and web experiences.
      Experimenting with magical details in user interfaces. Webmaster at <a
        href="/">Linear</a
      >.
    </p>
    <p style="margin-top: 36px">
      In the past I’ve developed the <a href="/">Vercel</a> design system, website,
      and dashboard.
    </p>
  </section>
  <section id="work" in:fade={{ delay: 200 }}>
    <h2>Work</h2>
    <ul>
      <Item
        src={primerCover}
        title="Primer"
        description="Building magical learing experiences for students"
        href="https://primer.com"
      />
      <Item />
      <Item />
    </ul>
  </section>
</main>

<style>
  main {
    max-width: 38rem;
    margin: 0 auto;
    padding-bottom: 128px;
  }
  p {
    font-size: var(--text-body);
    color: #fff;
    line-height: 1.875rem;
    font-weight: 500;
  }
  section {
    padding-top: 128px;
  }
  h2 {
    font-family: var(--font-header);
    font-size: var(--text-header);
    font-weight: 700;
    margin-bottom: 1.125rem;
  }

  a {
    text-decoration: none;
    color: #fff;
    transition: color ease 100ms;
    position: relative;
  }

  a:hover {
    color: rgba(255, 255, 255, 0.5);
  }

  a::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    background: #ffffff;
    transform: translateY(1px);
    transition: all ease 100ms;
    opacity: 1;
  }

  a:hover::before {
    transform: translateY(3px);
    opacity: 0;
  }
</style>
