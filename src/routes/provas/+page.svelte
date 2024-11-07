<script lang="ts">
  import { getProvas } from "$lib";

  let provasPromise = $state(getProvasEvent());

  async function getProvasEvent() {
    return await getProvas();
  }
</script>

<h1>Provas ENEM</h1>
<p>Volte para a tela inicial: <a href="/">home</a></p>

<div>
  <h2>Lista de Provas:</h2>
  <ul>
    {#await provasPromise}
      <p>Carregando...</p>
    {:then provas}
      {#each provas as prova}
        <li>
          <p>{prova.title}</p>
          <div>
            <a href="/questoes/{prova.year}">Abrir Prova</a>
          </div>
        </li>
      {/each}
    {:catch error}
      <p style="color: red">erro</p>
    {/await}
  </ul>
</div>
