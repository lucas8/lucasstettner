<script lang="ts">
</script>

<li>
  <div class="bar" />
  <h2><slot /></h2>
</li>

<style>
  li {
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
    max-width: 150px;
    transition: all 5s;
    position: relative;
  }

  li::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    background: radial-gradient(
      100% 342.94% at 0% 50%,
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.03) 100%
    );
  }

  li:hover:before {
    opacity: 1;
    transition: all ease-in 200ms;
  }

  .bar {
    height: 100%;
    min-width: 1px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: none;
  }

  li:hover .bar {
    background-color: #fff;
    transition: all ease-in 200ms;
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
  }

  h2 {
    padding: 8px 18px;
    font-size: 1.875rem;
  }
</style>
