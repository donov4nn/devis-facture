<script>
    export let companyName, adress, phone, email, website, customer, id, validityPeriod, projectDate, note
</script>

<div class="infos wd50">
    <p>{companyName}</p>
    <p>{adress.street}</p>
    <p>{adress.complement}</p>
    <p>{adress.zip} {adress.city}</p>
    <p class="finAdresse">{adress.country}</p>
    <p>Tél : {phone}</p>
    <p>{email}</p>
    <p>{website}</p>
</div>
<div class="customer wd50">
    <p>{customer.civility}. {customer.firstName} {customer.name}</p>
    <p>{customer.adress.entitled}</p>
    <p>{customer.adress.street}</p>
    <p>{customer.adress.complement}</p>
    <p>{customer.adress.zip} {adress.city}</p>
    <p>{customer.adress.country}</p>
    <p>{customer.taxNumber}</p>
</div>
<div class="projectInfo flexRowWrap wd100">
    <p class="wd50 bold larger">Project n°{id}</p>
    <p class="wd50">En date du {projectDate}</p>
    <p class="wd50">Valable {validityPeriod}</p>
    <p class="wd100">{note}</p>
</div>

<style>
    .customer {
        padding : 4.5rem;
    }
    .projectInfo {
        padding-bottom: 2rem;
    }
    .projectInfo p:nth-child(2) {
        padding-left: 4.5rem;
    }
    .infos p:first-of-type {
        font-weight: 700;
        font-size : 1.6rem;
        padding-bottom : .8rem;
    }
    .finAdresse, .customer p:first-of-type {
        padding-bottom : .5rem;
    }
</style>