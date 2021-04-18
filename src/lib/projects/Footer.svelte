<script>
    export let companyName, adress, phone, email, typeEntreprise
</script>

<div class="footer wd100">
    <p>{companyName} - {adress.street}, {adress.complement}, {adress.zip} {adress.city}, {adress.country}</p>
    <p>Téléphone : {phone} - e-mail : {email} - {typeEntreprise}</p>
</div>

<style>
    .footer {
        border-top: gray solid 0.1rem;
        font-size: 0.7rem;
        text-align: center;
    }
</style>