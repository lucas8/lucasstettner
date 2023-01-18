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

    const path = `<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_681_79)">
<rect width="128" height="128" rx="40" fill="rgb(${color}"/>
</g>
<defs>
<clipPath id="clip0_681_79">
<rect width="128" height="128" fill="white"/>
</clipPath>
</defs>
</svg>
`

    const link = window.document.createElement('link')

    link.type = 'image/svg+xml'
    link.rel = 'shortcut icon'
    link.href = path

    window.document.getElementsByTagName('head')[0].appendChild(link)

    console.log(link)
  }

  onMount(() => {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]
    // set a random primary color
    window.document.body.style.setProperty('--color-primary', color)
    setFavicon(color)
  })
</script>

<Nav />
<main>
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
      />
      <Item />
      <Item />
    </ul>
  </section>
</main>

<style>
  main {
    padding-top: 128px;
  }
  p {
    font-size: var(--text-body);
    color: #fff;
    line-height: 1.875rem;
    font-weight: 500;
  }
  section {
    margin-bottom: 128px;
  }
  h2 {
    font-family: var(--font-header);
    font-size: var(--text-header);
    font-weight: 700;
    margin-bottom: 1.125rem;
  }
</style>
