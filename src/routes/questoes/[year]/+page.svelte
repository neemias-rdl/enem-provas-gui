<script lang="ts">
  import Header from "$lib/presentation/components/shared/Header.svelte";
  import { page } from "$app/stores";
  import QuestionBase from "$lib/presentation/components/question/QuestionBase.svelte";
  import { mockQuestionModel } from "$lib/tests/mocks/MockQuestionModel";
  let year = $page.params.year;
</script>

<main>
  <Header />
  <h1>Questões Da prova do ano: {year}</h1>
  <div>
    <QuestionBase question={mockQuestionModel} />
  </div>
</main>
