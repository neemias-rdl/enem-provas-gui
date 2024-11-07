<script>
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
            {#each prova.languages as language}
              <input type="radio" value="{prova.year}_{language.value}" />
              <label for="{prova.year}_{language.value}">
                {language.label}
              </label>
              <br />
            {/each}
          </div>
        </li>
        <button>Abrir Prova</button>
      {/each}
    {:catch error}
      <p style="color: red">erro</p>
    {/await}
  </ul>
</div>
