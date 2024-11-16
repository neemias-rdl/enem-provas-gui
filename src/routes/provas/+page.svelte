<script lang="ts">
  import Header from "$lib/presentation/components/shared/Header.svelte";
  import { getProvas } from "$lib";

  let provasPromise = $state(getProvasEvent());

  async function getProvasEvent() {
    return await getProvas();
  }
</script>

<main>
  <Header />
  <div>
    <section class="py-5 text-start container">
      <h1 class="text-center p-3">Provas</h1>

      {#await provasPromise}
        <div
          class="text-center spinner-border text-primary d-flex align-items-center"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      {:then provas}
        <ul class="list-group">
          {#each provas as prova}
            <li class="list-group-item bg-secondary">
              <a
                class="link-light text-decoration-none fw-bold text-center"
                href="/questoes/{prova.year}/1"
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
</main>
