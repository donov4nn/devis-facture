<script>
    import Project from '$lib/projects/Project.svelte'
    import { project } from '$lib/stores/project.js'
    import html2canvas from 'html2canvas'
    import { jsPDF } from 'jspdf'

    async function handleClick () {
        const canvas = await html2canvas(document.querySelector('.project'), {scale:'5'})
        const pdf = new jsPDF({format:'A4'})
        pdf.addImage(canvas, 'JPEG', 5, 5, 200, 285)
        pdf.save('project.pdf')
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