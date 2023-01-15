<script lang="ts">
  import { fade } from 'svelte/transition'
  import MenuItem from './lib/MenuItem.svelte'
</script>

<main>
  <div>
    <h1 transition:fade>lucas●stettner</h1>
    <ul>
      <MenuItem>About</MenuItem>
      <MenuItem>Work</MenuItem>
      <MenuItem>Contact</MenuItem>
    </ul>
  </div>
</main>

<style>
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
  }
  ul {
    margin-top: 16px;
  }
</style>
