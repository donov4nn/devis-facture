<script>
    import { fade } from 'svelte/transition'
    import {project} from '$lib/stores/project.js'

    let displayForm = false

    function handleChange (i) {
        $project.lines.payementMethods[i].active = !$project.lines.payementMethods[i].active
        console.log($project.lines.payementMethods)
    }

    function handleClick () {
        displayForm = !displayForm
    }

    function formatPayement(items) {
        const actives = items.filter(item => item.active)
        const str = actives.length > 0 ? 'Paiement par ' : ''
        const lastIndex = actives.length - 1
        return str + actives.map((item, index) =>  index !== lastIndex ? `${item.libelle} ou par ` : item.libelle).join('')
    }
</script>

<div class="moyenPaiement" on:click={handleClick}>
    {#key $project.lines.payementMethods}
        <p in:fade>
            {formatPayement($project.lines.payementMethods)}
        </p>
    {/key}
</div>
<form class="flexRowWrap" style="display : {displayForm ? 'flex' : 'none'}">
    {#each $project.lines.payementMethods as item, i}
        <div>
            <label for={i} class="flexRowWrap" ><p class="wd50">{item.libelle}</p>
                <input class="wd50" id={i} on:change={() => handleChange(i)} type="checkbox" checked={$project.lines.payementMethods[i].active} >
            </label>
        </div>
    {/each}
</form>

<style>
    form div {
        width: 50%;
    }
    input {
        cursor :pointer;
    }
    form label {
        width : 100%;
    }
    .moyenPaiement {
        margin-top: .7rem;
        min-height: 2rem;
        cursor: pointer;
        margin-left: auto;
        padding : .6rem 0;
    }
    .moyenPaiement p {
        min-height: 2rem;
        min-width : 10rem;
    }
    .moyenPaiement:hover {
        background-color: rgba(243, 240, 240, 0.5);
    }
</style>