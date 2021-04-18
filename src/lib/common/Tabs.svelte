<script>
    export let items = [];
    export let activeTabValue = 1;

    const handleClick = tabValue => () => (activeTabValue = tabValue);
  </script>

  <ul>
  {#each items as item}
      <li class={activeTabValue === item.value ? 'active' : ''}>
          <span on:click={handleClick(item.value)}>{item.label}</span>
      </li>
  {/each}
  </ul>
  {#each items as item}
      {#if activeTabValue == item.value}
      <div class="box">
          <svelte:component this={item.component}/>
      </div>
      {/if}
  {/each}
  <style>
      .box {
        margin-bottom: .1rem;
        padding: .3rem;
        border-radius: 0 0 .5rem .5rem;
        border-top: 0;
      }
    ul {
      display: flex;
      flex-wrap: wrap;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
      border-bottom: .01rem solid hsla(229, 50%, 50%, 0.99);
      color : rgb(138, 135, 135);
      user-select: none;
    }
    li {
        margin-bottom: -.1rem;
        font-size : min(1rem, 3.2vw);
    }

    span {
      border: .01rem solid transparent;
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
      display: block;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }

    span:hover {
      border-color: hsla(229, 50%, 50%, 0.99) hsla(229, 50%, 50%, 0.99) transparent;
    }

    li.active > span {
      color: black;
      background-color: #fff;
      border-color: hsla(229, 50%, 50%, 0.99) hsla(229, 50%, 50%, 0.99) #fff;
    }
  </style>