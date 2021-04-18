<script>
    import HeaderForm from '$lib/projects/HeaderForm.svelte'
    import CustomerForm from '$lib/projects/CustomerForm.svelte'
    import ProjectForm from '$lib/projects/ProjectForm.svelte'
    import Tabs from '$lib/common/Tabs.svelte'

    const items = [
        {label : 'En-tête', value:1, component : HeaderForm},
        {label : 'Client', value:2, component : CustomerForm},
        {label : 'Devis & Factures', value:3, component : ProjectForm},
    ]
</script>

<a href="/projects">
    <button class="pushable">
        <span class="front">Projects</span>
    </button>
</a>

<Tabs {items} />

<style>
    button {
        margin : 2rem;
    }
</style>