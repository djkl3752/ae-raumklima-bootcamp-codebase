 async function loadData() {
            const card = document.getElementById('card');
            const tempC = document.getElementById('temp_c')
            const humPct = document.getElementById('hum_pct')

            try {
                card.innerHTML = '<p class="laden">⏳ Lade Daten...</p>';

                const response = await fetch('daten-raumkarte.json')
                const bundles = await response.json();

                const latest = bundles[0];                    
                const bme = latest.readings.bme680;        

                card.innerHTML = `
                    <h2>Sensor SN00001</h2>
                    <div class="wert">TEMP*🌡️ ${bme.temp_c} °C</div>
                    <div class="wert1">LFTF*💧 ${bme.hum_pct} %</div>
                    <p style="color: #999; font-size: 13px;">
            }       
        }

document.addEventListener("DOMContentLoaded", ()=> {    
    loadData();
}