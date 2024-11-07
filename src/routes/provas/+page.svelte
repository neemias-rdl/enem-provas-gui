<script lang="ts">
  import { getProvas } from "$lib";

  let provasPromise = $state(getProvasEvent());

  async function getProvasEvent() {
    return await getProvas();
  }
</script>

<div>
  <section class="py-5 text-start container">
    <h1 class="text-center p-3">
      <a class="link-secondary" aria-label="Home" href="/">
        <i class="bi bi-house-fill"></i>
      </a>
      Provas
    </h1>

    {#await provasPromise}
      <div class="text-center spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    {:then provas}
      <ul class="list-group">
        {#each provas as prova}
          <li class="list-group-item bg-secondary">
            <a
              class="link-light text-decoration-none fw-bold text-center"
              href="/questoes/{prova.year}"
            >
              <div class="row text-center">
                {prova.title}
              </div>
            </a>
          </li>
        {/each}
      </ul>
    {:catch error}
      <p style="color: red">erro</p>
    {/await}
  </section>
</div>
