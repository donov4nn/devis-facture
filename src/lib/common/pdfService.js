import pdfMake from 'pdfmake'

export function projectToPdf (item) {
    const dd = {
        content : [
            formatInfosAndCustomer(item),
            formatProjectInfo(item),
            {
                text : item.querySelector('.projectInfo p:nth-child(3)').innerText
            },
            {
                text : item.querySelector('.projectInfo p:nth-child(4)').innerText
            }
        ]
    }
    pdfMake.fonts = {
        Roboto : {
            normal : 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf'
        }
    }
    pdfMake.createPdf(dd).open()
}

function formatInfosAndCustomer (item) {
    return {
        columns : [
            {
                text : item.querySelector('.infos').innerText
            },
            {
                text : item.querySelector('.customer').innerText
            }
        ]
    }
}

function formatProjectInfo (item) {
    return {
        columns : [
            {
                text : item.querySelector('.projectInfo p:nth-child(1)').innerText
            },
            {
                text : item.querySelector('.projectInfo p:nth-child(2)').innerText
            }
        ]
    }
}