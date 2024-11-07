<script lang="ts">
  import { page } from "$app/stores";
  let year = $page.params.year;
</script>

<main>
  <h1>Questões Da prova do ano: {year}</h1>
  <div class="filter_prova_questoes">
    <select name="Linguas" id="linguas_dropdown">
      <option value="ingles">Inglês</option>
      <option value="espanhol">Espanhol</option>
    </select>

    <select name="Disciplinas" id="disciplinas_dropdown">
      <option value="humanas">Humanidades e Portugues</option>
      <option value="exatas">Ciências e Matemática</option>
      <option value="todas">Todas</option>
    </select>

    <button>Buscar Questões</button>
  </div>

  <div>
    <!-- LISTA DE QUESTÕES -->
  </div>
</main>

<style>
  .filter_prova_questoes {
    display: flex;
    flex-direction: row;
    align-items: start;
  }
</style>
