<nav>
  <div>
    <h1>lucas stettner</h1>
  </div>
</nav>

<style>
  nav {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    font-size: var(--text-header);
    font-weight: 700;
    font-family: var(--font-header);
    font-weight: 700;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    cursor: pointer;
  }
  h1 {
    transition: all ease 150ms;
    padding: 0px 4px;
    background: rgb(var(--color-primary));
  }
  div:hover h1 {
    transform: rotate(5deg);
  }
</style>
