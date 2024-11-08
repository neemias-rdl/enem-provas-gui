<script lang="ts">
  import type AlternativeModel from "$lib/domain/AlternativeModel";

  export let questionIndex: number;
  export let alternative: AlternativeModel;

  const alternativeId = `alternative${questionIndex}_${alternative.letter}`;
</script>

<main>
  <div class="form-check">
    <input type="radio" class="form-check-input" id={alternativeId} />
    <label class="form-check-label" for="flexRadioDefault1">
      {alternative.letter}) {alternative.text}
    </label>
  </div>
</main>
