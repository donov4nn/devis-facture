<script>
    import Project from '$lib/projects/Project.svelte'
    import { project } from '$lib/stores/project.js'
    import { projectToPdf } from '$lib/common/pdfService.js'

    async function handleClick () {
        projectToPdf(document.querySelector('.project'))
    }
</script>

<a href="/projects/edit">
    <button class="pushable">
        <span class="front">Edit</span>
    </button>
</a>
<button class="pushable" on:click={handleClick}>
    <span class="front">PDF</span>
</button>

<Project bind:project={$project} />

<style>
    button {
        margin : 2rem;
    }
</style>