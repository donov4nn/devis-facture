<script>
    import {project} from '$lib/stores/project.js'
    import TextArea from '$lib/common/TextArea.svelte'
</script>

<form class="flexRowWrap">
    <div>
        <label for="idDevis">Numéro de Devis</label>
        <input id="idDevis" type="text" bind:value={$project.header.id}>
    </div>
    <div>
        <label for="projectDate">Date du projet</label>
        <input id="projectDate" type="text" bind:value={$project.header.projectDate}>
    </div>
    <div>
        <label for="validityPeriod">Durée de validité</label>
        <input id="validityPeriod" type="text" bind:value={$project.header.validityPeriod}>
    </div>
    <div>
        <label for="companyName">Nom de la société</label>
        <input id="companyName" type="text" bind:value={$project.header.companyName}>
    </div>
    <div>
        <label for="phone">Numéro de téléphone</label>
        <input id="phone" type="text" bind:value={$project.header.phone}>
    </div>
    <div>
        <label for="email">Email</label>
        <input id="email" type="text" bind:value={$project.header.email}>
    </div>
    <div>
        <label for="website">Site internet</label>
        <input id="website" type="text" bind:value={$project.header.website}>
    </div>
    <div>
        <label for="note">Note d'en-tête</label>
        <TextArea id="note" bind:val={$project.header.note} />
    </div>
    <div>
        <label for="adressStreet">Rue et voie</label>
        <input id="adressStreet" type="text" bind:value={$project.header.adress.street}>
    </div>
    <div>
        <label for="adressComplement">Complément adresse</label>
        <input id="adressComplement" type="text" bind:value={$project.header.adress.complement}>
    </div>
    <div>
        <label for="adressZip">Code postal</label>
        <input id="adressZip" type="text" bind:value={$project.header.adress.zip}>
    </div>
    <div>
        <label for="adressCity">Ville</label>
        <input id="adressCity" type="text" bind:value={$project.header.adress.city}>
    </div>
    <div>
        <label for="adressCountry">Pays</label>
        <input id="adressCountry" type="text" bind:value={$project.header.adress.country}>
    </div>
    <div></div>
</form>