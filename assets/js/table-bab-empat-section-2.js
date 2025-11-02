const data_spells = [
    {
        kota: "Kota Gunungsitoli",
        rows: [
          { category: "Consistently food-secure", movement: "FS → FS → FS", secure: 3, insecure: 0, frek: 42, pct: 41.6, cum: 41.6 },
          { category: "Chronically food-insecure", movement: "FI → FI → FI", secure: 0, insecure: 3, frek: 26, pct: 25.7, cum: 67.3 },
          { category: "Transitorily food-insecure", movement: "FI → FS → FI", secure: 1, insecure: 2, frek: 9, pct: 8.9, cum: 76.2 },
          { category: "Transitorily food-insecure", movement: "FS → FI → FI", secure: 1, insecure: 2, frek: 9, pct: 8.9, cum: 85.1 },
          { category: "Transitorily food-insecure", movement: "FS → FI → FS", secure: 2, insecure: 1, frek: 6, pct: 5.9, cum: 91 },
          { category: "Transitorily food-insecure", movement: "FS → FS → FI", secure: 2, insecure: 1, frek: 4, pct: 4, cum: 95 },
          { category: "Transitorily food-insecure", movement: "FI → FI → FS", secure: 1, insecure: 2, frek: 3, pct: 3, cum: 98 },
          { category: "Transitorily food-insecure", movement: "FI → FS → FS", secure: 2, insecure: 1, frek: 2, pct: 2, cum: 100 }
        ]
    },
    {
        kota: "Kota Padang Sidempuan",
        rows: [
          { category: "Consistently food-secure", movement: "FS → FS → FS", secure: 3, insecure: 0, frek: 25, pct: 31.6, cum: 31.6 },
          { category: "Chronically food-insecure", movement: "FI → FI → FI", secure: 0, insecure: 3, frek: 24, pct: 30.4, cum: 62 },
          { category: "Transitorily food-insecure", movement: "FS → FI → FS", secure: 2, insecure: 1, frek: 7, pct: 8.9, cum: 70.9 },
          { category: "Transitorily food-insecure", movement: "FS → FS → FI", secure: 2, insecure: 1, frek: 6, pct: 7.6, cum: 78.5 },
          { category: "Transitorily food-insecure", movement: "FI → FS → FS", secure: 2, insecure: 1, frek: 5, pct: 6.3, cum: 84.8 },
          { category: "Transitorily food-insecure", movement: "FI → FI → FS", secure: 1, insecure: 2, frek: 4, pct: 5.1, cum: 89.9 },
          { category: "Transitorily food-insecure", movement: "FI → FS → FI", secure: 1, insecure: 2, frek: 4, pct: 5.1, cum: 95 },
          { category: "Transitorily food-insecure", movement: "FS → FI → FI", secure: 1, insecure: 2, frek: 4, pct: 5.1, cum: 100.1 }
        ]
    },
    {
        kota: "Kota Medan",
        rows: [
          { category: "Consistently food-secure", movement: "FS → FS → FS", secure: 3, insecure: 0, frek: 70, pct: 46.4, cum: 46.4 },
          { category: "Chronically food-insecure", movement: "FI → FI → FI", secure: 0, insecure: 3, frek: 30, pct: 19.9, cum: 66.3 },
          { category: "Transitorily food-insecure", movement: "FS → FS → FI", secure: 2, insecure: 1, frek: 22, pct: 14.6, cum: 80.9 },
          { category: "Transitorily food-insecure", movement: "FS → FI → FI", secure: 1, insecure: 2, frek: 11, pct: 7.3, cum: 88.2 },
          { category: "Transitorily food-insecure", movement: "FI → FS → FI", secure: 1, insecure: 2, frek: 8, pct: 5.3, cum: 93.5 },
          { category: "Transitorily food-insecure", movement: "FI → FS → FS", secure: 2, insecure: 1, frek: 8, pct: 5.3, cum: 98.8 },
          { category: "Transitorily food-insecure", movement: "FI → FI → FS", secure: 1, insecure: 2, frek: 1, pct: 0.7, cum: 99.5 },
          { category: "Transitorily food-insecure", movement: "FS → FI → FS", secure: 2, insecure: 1, frek: 1, pct: 0.7, cum: 100 }
        ]
    },
    {
        kota: "Kota Pematangsiantar",
        rows: [
          { category: "Consistently food-secure", movement: "FS → FS → FS", secure: 3, insecure: 0, frek: 11, pct: 20.8, cum: 20.8 },
          { category: "Chronically food-insecure", movement: "FI → FI → FI", secure: 0, insecure: 3, frek: 16, pct: 30.2, cum: 51 },
          { category: "Transitorily food-insecure", movement: "FS → FS → FI", secure: 2, insecure: 1, frek: 15, pct: 28.3, cum: 79.3 },
          { category: "Transitorily food-insecure", movement: "FI → FI → FS", secure: 1, insecure: 2, frek: 4, pct: 7.5, cum: 86.8 },
          { category: "Transitorily food-insecure", movement: "FS → FI → FI", secure: 1, insecure: 2, frek: 3, pct: 5.7, cum: 92.5 },
          { category: "Transitorily food-insecure", movement: "FS → FI → FS", secure: 2, insecure: 1, frek: 2, pct: 3.8, cum: 96.3 },
          { category: "Transitorily food-insecure", movement: "FI → FS → FI", secure: 1, insecure: 2, frek: 1, pct: 1.9, cum: 98.2 },
          { category: "Transitorily food-insecure", movement: "FI → FS → FS", secure: 2, insecure: 1, frek: 1, pct: 1.9, cum: 100 }
        ]
    },
    {
        kota: "Kota Sibolga",
        rows: [
          { category: "Consistently food-secure", movement: "FS → FS → FS", secure: 3, insecure: 0, frek: 6, pct: 35.3, cum: 35.3 },
          { category: "Chronically food-insecure", movement: "FI → FI → FI", secure: 0, insecure: 3, frek: 8, pct: 47.1, cum: 82.4 },
          { category: "Transitorily food-insecure", movement: "FI → FI → FS", secure: 1, insecure: 2, frek: 1, pct: 5.9, cum: 88.3 },
          { category: "Transitorily food-insecure", movement: "FI → FS → FS", secure: 2, insecure: 1, frek: 1, pct: 5.9, cum: 94.2 },
          { category: "Transitorily food-insecure", movement: "FS → FS → FI", secure: 2, insecure: 1, frek: 1, pct: 5.9, cum: 100 }
        ]
    }
];

function renderTableSpells(index) {
    const selectedDataSpells = data_spells[index];
    const tbody = document.getElementById('tableBody2');
      
    let html = '';
    let currentCategory = '';
    let categoryRowspan = 0;
    let categoryStartIndex = 0;

    // Hitung rowspan untuk setiap kategori
    const categoryGroups = {};
    selectedDataSpells.rows.forEach(row => {
        if (!categoryGroups[row.category]) {
          categoryGroups[row.category] = 0;
        }
        categoryGroups[row.category]++;
    });

    selectedDataSpells.rows.forEach((row, idx) => {
        const categoryClass = row.category.includes('Consistently') ? 'category-consistent' :
                            row.category.includes('Chronically') ? 'category-chronically' :
                            'category-transitorily';
        
        html += '<tr>';
        
        // Kota name (hanya di baris pertama)
        if (idx === 0) {
          html += `<td class="kota-name" rowspan="${selectedDataSpells.rows.length}">${selectedDataSpells.kota}</td>`;
        }
        
        // Category (rowspan untuk setiap grup kategori)
        if (currentCategory !== row.category) {
          currentCategory = row.category;
          categoryRowspan = categoryGroups[row.category];
          html += `<td class="${categoryClass}" rowspan="${categoryRowspan}">${row.category}</td>`;
        }
        
        html += `
            <td class="movement-cell" style="text-align: center">${row.movement}</td>
            <td class="value-highlight" style="text-align: center">${row.secure}</td>
            <td style="text-align: center">${row.insecure}</td>
            <td style="text-align: center">${row.frek}</td>
            <td style="text-align: center">${row.pct}</td>
            <td style="text-align: center">${row.cum}</td>
        `;
        html += '</tr>';
    });

    tbody.innerHTML = html;
}

document.getElementById('kotaSelect2').addEventListener('change', function() {
    renderTableSpells(parseInt(this.value));
});

// Render tabel pertama kali
renderTableSpells(0);