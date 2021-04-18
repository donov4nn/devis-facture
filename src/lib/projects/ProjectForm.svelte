<script>
    import TextArea from '$lib/common/TextArea.svelte';
import {project} from '$lib/stores/project.js'

</script>

<form class="flexRowWrap">
    <div>
        <label for="endingNote">Note de fin</label>
        <TextArea id="endingNote" bind:val={$project.signatures.endingNote} />
    </div>
    <div>
        <label for="signatureName">Nom signature</label>
        <input id="signatureName" type="text" bind:value={$project.signatures.signatureName}>
    </div>
</form>