<script>
    import {project} from '$lib/stores/project.js'
</script>

<form class="flexRowWrap">
    <div>
        <label for="civility">Titre</label>
        <select bind:value={$project.header.customer.civility}>
            <option value="M">M.</option>
            <option value="Mme">Mme.</option>
        </select>
    </div>
    <div>
        <label for="firstName">Prénom</label>
        <input id="firstName" type="text" bind:value={$project.header.customer.firstName}>
    </div>
    <div>
        <label for="name">Nom</label>
        <input id="name" type="text" bind:value={$project.header.customer.name}>
    </div>
    <div>
        <label for="taxNumber">Numéro TVA</label>
        <input id="taxNumber" type="text" bind:value={$project.header.customer.taxNumber}>
    </div>
    <div>
        <label for="adressStreet">Rue et voie</label>
        <input id="adressStreet" type="text" bind:value={$project.header.customer.adress.street}>
    </div>
    <div>
        <label for="adressComplement">Complément adresse</label>
        <input id="adressComplement" type="text" bind:value={$project.header.customer.adress.complement}>
    </div>
    <div>
        <label for="adressZip">Code postal</label>
        <input id="adressZip" type="text" bind:value={$project.header.customer.adress.zip}>
    </div>
    <div>
        <label for="adressCity">Ville</label>
        <input id="adressCity" type="text" bind:value={$project.header.customer.adress.city}>
    </div>
    <div>
        <label for="adressCountry">Pays</label>
        <input id="adressCountry" type="text" bind:value={$project.header.customer.adress.country}>
    </div>
    <div></div>
</form>