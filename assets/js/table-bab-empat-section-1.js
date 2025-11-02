// Data kabupaten/kota
const data_transition = [
    {
        kota: "Kota Gunungsitoli",
        insecure_to_insecure: 23.8,
        insecure_to_secure: 10.9,
        insecure_total: 34.7,
        secure_to_insecure: 24.8,
        secure_to_secure: 40.6,
        secure_total: 65.3,
        total: 100
    },
    {
        kota: "Kota Padang Sidempuan",
        insecure_to_insecure: 25.8,
        insecure_to_secure: 15.9,
        insecure_total: 41.7,
        secure_to_insecure: 17.2,
        secure_to_secure: 41.1,
        secure_total: 58.3,
        total: 100
    },
    {
        kota: "Kota Medan",
        insecure_to_insecure: 32.9,
        insecure_to_secure: 13.9,
        insecure_total: 46.8,
        secure_to_insecure: 13.9,
        secure_to_secure: 39.2,
        secure_total: 53.2,
        total: 100
    },
    {
        kota: "Kota Pematangsiantar",
        insecure_to_insecure: 35.8,
        insecure_to_secure: 15.1,
        insecure_total: 50.9,
        secure_to_insecure: 17.0,
        secure_to_secure: 32.1,
        secure_total: 49.1,
        total: 100
    },
    {
        kota: "Kota Sibolga",
        insecure_to_insecure: 47.1,
        insecure_to_secure: 11.8,
        insecure_total: 58.8,
        secure_to_insecure: 5.9,
        secure_to_secure: 35.3,
        secure_total: 41.2,
        total: 100
    }
];

// Fungsi untuk render tabel
function renderTableTransition(index) {
    const selectedDataTransition = data_transition[index];
    const tbody = document.getElementById('tableBody1');
      
    const totalQ42024Insecure = selectedDataTransition.insecure_to_insecure + selectedDataTransition.secure_to_insecure;
    const totalQ42024Secure = selectedDataTransition.insecure_to_secure + selectedDataTransition.secure_to_secure;
      
    tbody.innerHTML = `
        <tr class="row-insecure">
          <td class="cell-kota" rowspan="3">${selectedDataTransition.kota}</td>
          <td class="cell-insecure">Food-insecure</td>
          <td class="cell-center value-insecure">${selectedDataTransition.insecure_to_insecure}</td>
          <td class="cell-center value-secure">${selectedDataTransition.insecure_to_secure}</td>
          <td class="cell-center value-neutral">${selectedDataTransition.insecure_total}</td>
        </tr>
        <tr class="row-secure">
          <td class="cell-secure">Food-secure</td>
          <td class="cell-center value-insecure">${selectedDataTransition.secure_to_insecure}</td>
          <td class="cell-center value-secure">${selectedDataTransition.secure_to_secure}</td>
          <td class="cell-center value-neutral">${selectedDataTransition.secure_total}</td>
        </tr>
        <tr class="row-total">
          <td class="cell-total">Total</td>
          <td class="cell-center value-neutral">${totalQ42024Insecure.toFixed(1)}</td>
          <td class="cell-center value-neutral">${totalQ42024Secure.toFixed(1)}</td>
          <td class="cell-center value-neutral">${selectedDataTransition.total}</td>
        </tr>
    `;
}

// Event listener untuk dropdown
document.getElementById('kotaSelect1').addEventListener('change', function() {
    renderTableTransition(parseInt(this.value));
});

// Render tabel pertama kali
renderTableTransition(0);