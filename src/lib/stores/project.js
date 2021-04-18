const companyName = 'Nom Entreprise'
const phone = '0672394709'
const email = 'dono.m51@gmail.com'
const adress = {
        entitled : 'Intitulé adresse',
        street : '11 rue du rondeau',
        complement : 'Complément adresse',
        zip : '51210',
        city : 'Montmirail',
        country : 'France'
}
const header = {
    id : 'DEV-2021-0045',
    projectDate : (new Date()).toLocaleDateString(),
    validityPeriod : '3 mois',
    companyName,
    adress,
    phone,
    email,
    website : 'www.site.com',
    customer : {
        civility : 'M',
        firstName : 'Donovan',
        name : 'Michel',
        taxNumber : '0015 4652 4561 3232',
        adress
    },
    note : 'Notes d\'en-tête spécifiques à ce document...',
    typeEntreprise : 'EURL'
}

const signatures = {
    endingNote : 'Le montant peut être révisé en fonction du temps réel passé sur le chantier et de l’ajustement des fournitures et/ou de leurs prix.',
    customerNote : 'Bon pour accord',
    signaturePath : '/signature.png',
    signatureName : 'Donovan Michel'
}

const lines = {
    payementMethods : [
        {
            active : true,
            libelle : 'espèces',
        },
        {
            active : true,
            libelle : 'chèque',
        },
        {
            active : true,
            libelle : 'virement bancaire',
        },
        {
            active : true,
            libelle : 'carte bleue',
        },
    ],
}

const model = {
    header, lines, signatures
}

import {writable, derived, readable, get}from 'svelte/store'

export const project = writable(model)