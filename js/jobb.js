

function laddaJobb() {
    const xml = new XMLHttpRequest();
    xml.open('GET', 'Json/Arbetsplatser.json', true)
    xml.onload = function () {
        if (this.status === 200) {
            const ArbPlats = JSON.parse(this.responseText);
            let output = '';
            ArbPlats.forEach(function (arb) {
                output += `
                <ul>
                    <li>ARbetsPlats: ${arb.ArbetsPlats}</li>
                    <li>Start: ${arb.SysselStart}</li>
                    <li>Slut: ${arb.SysselSlut}</li>
                    <li>Sysselsättningsgrad: ${arb.SysGrad}</li>
                    <li>Om: ${arb.Om}</li>
                </ul>
                `;
            });

            document.getElementById("MinaJobb").innerHTML = output;
        }
    }
    xml.send();
}
function laddaUtbildning() {
    const xml = new XMLHttpRequest();
    xml.open('GET', 'Json/Utbildningar.json', true)
    xml.onload = function () {
        if (this.status === 200) {
            const bildning = JSON.parse(this.responseText);
            let output = '';
            bildning.forEach(function (utbild) {
                output += `
                <ul>
                    <li>Utbildning: ${utbild.Utbildning}</li>
                </ul>
                `;
            });

            document.getElementById("MinaUtbildningar").innerHTML = output;
        }
    }
    xml.send();
}

laddaJobb();
laddaUtbildning();

