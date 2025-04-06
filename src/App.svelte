<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import Item from './lib/Item.svelte'
  import Nav from './lib/Nav.svelte'
  import fontastique from './assets/fontastique.png'
  import patch from './assets/patch.png'
  import tunedin from './assets/tunedin.png'
  import snippet from './assets/snippet.png'
  import seesaw from './assets/seesaw.png'
  import showsinnyc from './assets/showsinnyc.png'

  // TODO: do a pass on colors these again
  const COLORS = ['255, 0, 153', '143, 69, 0', '79, 184, 30']

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
    window.document.body.style.setProperty('--color-primary', color)
    setFavicon(color)
  })
</script>

<svelte:head>
    <link rel="preload" as="image" href={fontastique} />
    <link rel="preload" as="image" href={patch} />
    <link rel="preload" as="image" href={tunedin} />
    <link rel="preload" as="image" href={snippet} />
    <link rel="preload" as="image" href={seesaw} />
</svelte:head>

<main>
  <Nav />
  <section in:fade>
    <p>
      Design Engineer at <a href="https://carrymoney.com">Carry</a>.
    </p>
    <p>
      Previously, I worked on engineering education systems at <a
        href="https://primer.com">Primer</a
      >, was a mentor at
      <a href="https://www.instagram.com/nanohackers">Nano Hacker Academy</a> and helped
      build the
      <a href="https://www.beamcenter.org/projects/flipnyc"
        >world's largest flipbooks</a
      >.
    </p>
  </section>
  <section in:fade={{ delay: 200 }}>
    <h2>Projects</h2>
    <ul>
      <Item
        src={seesaw}
        title="Seesaw"
        description="Daily design inspiration catalog"
        href="https://seesaw.website"
      />
      <Item
        src={showsinnyc}
        title="Showsin.nyc"
        description="Live music aggregator for venues across NYC"
        href="https://showsin.nyc"
      />
      <Item
        src={fontastique}
        title="Fontastique"
        description="Opinionated font app built for designers"
        href="https://github.com/lucas8/fontastique"
      />
      <Item
        src={patch}
        title="Patch"
        description="Collaborative tool for creating modular synthesizers"
        href="https://github.com/lucas8/patch"
      />
      <Item
        src={tunedin}
        title="Tunedin"
        description="Multiplayer spotify rooms for friends"
        href="https://github.com/lucas8/tunedin"
      />
      <Item
        src={snippet}
        title="Snippet"
        description="A small application for sharing collaborative code snippets"
        href="https://github.com/lucas8/snippet"
      />
    </ul>
  </section>
  <section in:fade={{ delay: 200 }}>
    <h2>Contact</h2>
    <p style="margin-top: 0">
      You can find me on <a href="https://twitter.com/lucasstettner">X</a
      >, <a href="https://github.com/lucas8">github</a>, or reach out to
      <a href="mailto:lucas.stettner@gmail.com">lucas.stettner@gmail.com</a>.
    </p>
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
    letter-spacing: 0.02em;
  }
  p:not(:first-child) {
    margin-top: 36px;
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
    background-image: linear-gradient(#ffffff50, #ffffff50);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 100% 1.5px;
  }
  a:hover {
    color: rgba(255, 255, 255, 0.5);
    background-size: 0% 1px;
  }
</style>
