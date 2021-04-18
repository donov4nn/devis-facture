<script>
    export let endingNote, customerNote, signatureName, signaturePath
</script>

<div class="signatures wd100 flexRowWrap">
    <p class="wd100 endingNote">{endingNote}</p>
    <div class="wd50">
        <div class="topSignature">
            <p class="bold">Le client</p>
            <p>Mention manuscrite et datée</p>
            <p>" {customerNote} "</p>
        </div>
        <div class="cadre"></div>
    </div>
    <div class="wd50">
        <div class="topSignature">
            <p class="bold">{signatureName}</p>
        </div>
        <div class="cadre">
            <img src={signaturePath} alt="signature">
        </div>
    </div>
</div>

<style>
    .endingNote {
        padding : 1rem 0;
    }
    .signatures > div {
        text-align: center;
        display : flex;
        flex-direction: column;
        padding-bottom: 3rem;
    }
    .topSignature {
        width : 100%;
        margin-top : auto;
        margin-bottom: 0.5rem;
    }
    .topSignature > p {
        margin-top : auto;
        padding : 0;
    }
    .cadre {
        border : solid 0.1rem rgb(214, 214, 214);
        border-radius: 1rem;
        width : 50%;
        height : 5rem;
        margin : 0 auto;
    }
    img {
        width : 100%;
        object-fit: contain;
        height : 100%;
    }
</style>