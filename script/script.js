
function filmes() {
    var tela = document.getElementById("tela")
    var select = document.getElementById("select")

    var valor = select.value
    if (valor == 0) {
        tela.innerHTML =
            `
            <p>Obra do restaurante - Fernandeo de assis</p>
            <p> O professor Que zombou de Deus</p>
            <p>Crente x Macumbeiro</p>
            <p>Moça se casa com gari</p>
            <p>Testemunho do jovem soldado</p>
            <p>Obra do ex boxeador completa</p>
            <p>Libertação de uma organista da cracolândia </p>
            <p>Lindo Testemunho - irmão José Luiz de Boituva </p>
            <p>Testemunho: Deus da descanso do teu trabalho </p>
            <p>O poder do amor cura tudo</p>
            <p>Permissão de Deus na vida do irmão </p>
            <p>Testemunho da irmã Cidinha - Ex moradora de rua</p>
            <p>Escuta na comunhão</p>
            `
    } else if (valor == 1) {
        tela.innerHTML =
            `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/EE_MytHyBp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `
    } else if (valor == 2) {
        tela.innerHTML =
            `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/wFb4JrY4aME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `
    } else if (valor == 3) {
        tela.innerHTML =
            `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/K3mzeKmsRlk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `
    } else if (valor == 4) {
        tela.innerHTML =
            `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PlaVDR1jmsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `
    } else if (valor == 5) {
        tela.innerHTML =
            `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qWBaRuXT05g" title="Testemunho ccb | 2 hrs de Lindas Obras e Milagres🔥ouça na comunhão" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `
    } else if (valor == 6) {
        tela.innerHTML =
            `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/heJh3c5XWko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `
    } else if (valor == 7) {
        tela.innerHTML =
            `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/IeNSV-v0BC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `
    } else if (valor == 8) {
        tela.innerHTML =
            `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9xV2qys3gkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `
    } else if (valor == 9) {
        tela.innerHTML =
            `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/K7qLisN25rQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `
    } else if (valor == 10) {
        tela.innerHTML =
            `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/OjEZJyaTaw0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `
    } else if (valor == 11) {
        tela.innerHTML =
            `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/cv_lru7aZb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `
    } else if (valor == 12) {
        tela.innerHTML =
            `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sXWyE4UziTc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `
    }
    else if (valor == 13) {
        tela.innerHTML =
            `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/SjAw_0LE3I8" title="ESCUTE NA COMUNHÃO - Testemunhos CCB" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `
    }


}
