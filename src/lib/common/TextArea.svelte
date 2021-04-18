<script>
    import { onMount } from "svelte";
    export let val, id

    function handleInput () {
        const textarea = document.querySelector('textarea')
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight+'px';
    }

    onMount(() => window.setTimeout(handleInput, 0))
</script>

<textarea on:input={handleInput} {id} name={id} bind:value={val}></textarea>
