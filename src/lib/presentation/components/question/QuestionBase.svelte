<script lang="ts">
  import type QuestionModel from "$lib/domain/QuestionModel";
  import AlternativeOption from "./AlternativeOption.svelte";

  export let question: QuestionModel;
</script>

<main>
  <div class="p-4">
    <h4>
      {question.title} - {question.discipline}
    </h4>
    <p class="lead">
      {question.context}
    </p>
    {#each question.files as file}
      <img src={file} alt="Imagem da questão {question.index}" />
    {/each}
    <p class="lead">
      {question.alternativesIntroduction}
    </p>
    <div class="lead">
      {#each question.alternatives as alternative}
        <AlternativeOption questionIndex={question.index} {alternative} />
      {/each}
    </div>
  </div>
</main>
