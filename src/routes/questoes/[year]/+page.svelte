<script lang="ts">
  import Header from "$lib/presentation/components/shared/Header.svelte";
  import { page } from "$app/stores";
  import QuestionBase from "$lib/presentation/components/question/QuestionBase.svelte";
  import { mockQuestionModel } from "$lib/tests/mocks/MockQuestionModel";
  import { getQuestoesByYear } from "$lib";

  let year: string = $page.params.year;

  let questionsPromise = $state(getQuestionsByYearEvent());

  async function getQuestionsByYearEvent() {
    return await getQuestoesByYear(year);
  }
</script>

<main>
  <Header />
  <h1>Questões Da prova do ano: {year}</h1>
  <div>
    {#await questionsPromise}
      <div
        class="text-center spinner-border text-primary d-flex align-items-center"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    {:then questoes}
      {#each questoes as questao}
        <QuestionBase question={questao} />
      {/each}
    {:catch error}
      <p style="color: red">Algo deu errado, tente novamente</p>
    {/await}
  </div>
</main>
