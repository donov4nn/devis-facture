<script>
    import Header from '$lib/projects/Header.svelte'
    import Lines from '$lib/projects/Lines.svelte'
    import Signatures from '$lib/projects/Signatures.svelte'
    import Footer from '$lib/projects/Footer.svelte'

    export let project


</script>

<div class="project flexRowWrap">
    <Header {...project.header} />
    <Lines {...project.lines} />
    <Signatures {...project.signatures} />
    <Footer {...project.header} />
</div>

<style>
    .project {
        width : 50rem;
        padding : 2.2rem;
        padding-bottom: 0.2rem;
        margin : auto;
        margin-bottom: 1rem;
        box-shadow: 0rem 0rem 0rem 0.1rem rgb(231, 218, 218);
    }
</style>