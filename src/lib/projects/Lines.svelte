<script>
  import PayementForm from '$lib/projects/PayementForm.svelte'
</script>

<div class="lines flexRowWrap wd100">
    <table class="wd100">
        <thead>
            <tr>
                <th>N°</th>
                <th>Désignation</th>
                <th>Qté</th>
                <th>PU HT</th>
                <th>TVA</th>
                <th>Total HT</th>
            </tr>
        </thead>
        <tbody>
            {#each new Array(10).fill({}) as item, i}
                <tr>
                    <td>{i+1}</td>
                    <td>Nom du matériau ou de la remise...</td>
                    <td>1 hr</td>
                    <td>55,00 €</td>
                    <td>55 %</td>
                    <td>55,00 €</td>
                </tr>
            {/each}
        </tbody>
    </table>
    <div class="ajouterLigne wd100">
    </div>
    <div class="wd100 totalWrapper">
        <div class="total flexRowWrap">
            <p>Total HT</p>
            <p>-</p>
            <p class="larger">Total TTC</p>
            <p class="larger">-</p>
        </div>
        <PayementForm />
    </div>
</div>

<style>
  .lines {
      min-height: 10rem;
  }
  .ajouterLigne {
      text-align : center;
      padding : 1rem 0;
  }
  .totalWrapper {
      display : flex;
      flex-direction: column;
  }
  .total {
      font-weight: 700;
  }
  .total p {
      width : 50%;
      border-top :  solid .07rem rgba(184, 181, 181, 0.418);
  }
  .total p:last-child, .total p:nth-last-child(2)  {
      border-bottom :  solid .07rem rgba(184, 181, 181, 0.418);
  }
  .total p:nth-child(2n) {
      text-align: right;
  }
  .total {
        margin-left: auto;
        margin-top : auto;
    }
    tbody {
        text-align: center;
    }
    thead th {
        padding-bottom: 1.7rem;
    }
    tbody td {
        padding-bottom: .6rem;
    }
    tbody td:not(:last-of-type), thead th:not(:last-of-type) {
        border-right : solid .07rem rgba(184, 181, 181, 0.418);
    }
    thead {
        font-weight: 800;
    }
    table {
        border-collapse: collapse;
    }
</style>