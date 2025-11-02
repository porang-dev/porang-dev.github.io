// Data untuk 4 pilar QFSI
const pillarData = {
  labels: [
    'Q1 2022', 'Q2 2022', 'Q3 2022', 'Q4 2022',
    'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023',
    'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'
  ],
  
  // Pilar Accessibility
  accessibility: {
    medan: [0.54, 0.52, 0.50, 0.43, 0.50, 0.55, 0.54, 0.49, 0.56, 0.52, 0.48, 0.44],
    pematangSiantar: [0.49, 0.43, 0.44, 0.43, 0.49, 0.56, 0.50, 0.50, 0.51, 0.48, 0.48, 0.43],
    sibolga: [0.42, 0.40, 0.40, 0.41, 0.41, 0.46, 0.41, 0.40, 0.45, 0.40, 0.40, 0.40],
    padangSidimpuan: [0.43, 0.42, 0.37, 0.38, 0.41, 0.45, 0.41, 0.39, 0.43, 0.39, 0.39, 0.38],
    gunungsitoli: [0.38, 0.33, 0.32, 0.37, 0.39, 0.43, 0.36, 0.32, 0.38, 0.34, 0.34, 0.37]
  },
  
  // Pilar Availability
  availability: {
    medan: [0.30, 0.33, 0.32, 0.41, 0.27, 0.30, 0.35, 0.39, 0.25, 0.34, 0.34, 0.40],
    pematangSiantar: [0.40, 0.38, 0.40, 0.47, 0.37, 0.33, 0.44, 0.42, 0.36, 0.43, 0.42, 0.50],
    sibolga: [0.45, 0.44, 0.47, 0.44, 0.49, 0.50, 0.61, 0.45, 0.57, 0.46, 0.39, 0.53],
    padangSidimpuan: [0.53, 0.49, 0.48, 0.42, 0.34, 0.53, 0.50, 0.40, 0.52, 0.49, 0.30, 0.56],
    gunungsitoli: [0.60, 0.53, 0.57, 0.48, 0.53, 0.58, 0.59, 0.65, 0.66, 0.47, 0.45, 0.61]
  },
  
  // Pilar Utilization
  utilization: {
    medan: [0.30, 0.29, 0.29, 0.34, 0.32, 0.28, 0.29, 0.31, 0.31, 0.29, 0.30, 0.33],
    pematangSiantar: [0.32, 0.32, 0.33, 0.35, 0.35, 0.33, 0.33, 0.34, 0.35, 0.32, 0.32, 0.34],
    sibolga: [0.30, 0.31, 0.31, 0.33, 0.31, 0.30, 0.31, 0.35, 0.29, 0.30, 0.33, 0.31],
    padangSidimpuan: [0.30, 0.29, 0.30, 0.33, 0.32, 0.31, 0.31, 0.33, 0.31, 0.28, 0.30, 0.31],
    gunungsitoli: [0.23, 0.25, 0.27, 0.28, 0.26, 0.26, 0.27, 0.25, 0.24, 0.25, 0.27, 0.26]
  },
  
  // Pilar Stability
  stability: {
    medan: [0.74, 0.75, 0.75, 0.75, 0.76, 0.74, 0.75, 0.74, 0.75, 0.75, 0.75, 0.76],
    pematangSiantar: [0.78, 0.79, 0.81, 0.82, 0.83, 0.77, 0.81, 0.80, 0.81, 0.81, 0.81, 0.82],
    sibolga: [0.79, 0.78, 0.81, 0.80, 0.79, 0.80, 0.82, 0.81, 0.84, 0.83, 0.85, 0.84],
    padangSidimpuan: [0.81, 0.80, 0.81, 0.82, 0.81, 0.80, 0.82, 0.82, 0.83, 0.85, 0.85, 0.84],
    gunungsitoli: [0.79, 0.79, 0.80, 0.80, 0.80, 0.80, 0.81, 0.79, 0.82, 0.83, 0.84, 0.83]
  }
};

// Konfigurasi warna untuk setiap kota
const cityColors = {
  medan: { border: '#3dccc7', bg: 'rgba(61, 204, 199, 0.5)' },
  pematangSiantar: { border: '#2fbead', bg: 'rgba(47, 190, 173, 0.5)' },
  sibolga: { border: '#007279', bg: 'rgba(0, 114, 121, 0.5)' },
  padangSidimpuan: { border: '#cca30d', bg: 'rgba(204, 163, 13, 0.5)' },
  gunungsitoli: { border: '#ffeb9c', bg: 'rgba(255, 235, 156, 0.5)' }
};

// Array untuk tracking visibility state setiap kota
const cityVisibility = [true, true, true, true, true];

// Fungsi untuk membuat dataset untuk satu pilar
function createDatasets(pillarName) {
  const cities = ['medan', 'pematangSiantar', 'sibolga', 'padangSidimpuan', 'gunungsitoli'];
  const cityLabels = ['Medan', 'Pematang Siantar', 'Sibolga', 'Padang Sidimpuan', 'Gunungsitoli'];
  
  return cities.map((city, index) => ({
    label: cityLabels[index],
    data: pillarData[pillarName][city],
    borderColor: cityColors[city].border,
    backgroundColor: cityColors[city].bg,
    tension: 0.4,
    borderWidth: 2,
    pointRadius: 3,
    pointHoverRadius: 5,
    hidden: !cityVisibility[index] // Set visibility berdasarkan state
  }));
}

// Fungsi untuk mendapatkan range data (hanya dari dataset yang visible)
function getDataRange(datasets) {
  let allValues = [];
  
  datasets.forEach(dataset => {
    if (!dataset.hidden) { // Hanya hitung data yang visible
      allValues = allValues.concat(dataset.data);
    }
  });
  
  // Jika semua hidden, gunakan range default
  if (allValues.length === 0) {
    return { min: 0, max: 1 };
  }
  
  const minValue = Math.min(...allValues);
  const maxValue = Math.max(...allValues);
  
  const padding = (maxValue - minValue) * 0.05;
  
  return {
    min: Math.max(0, minValue - padding),
    max: Math.min(1, maxValue + padding)
  };
}

// Konfigurasi chart yang umum
function getChartConfig(datasets, pillarName) {
  const dataRange = getDataRange(datasets);
  
  return {
    type: 'line',
    data: {
      labels: pillarData.labels,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false // Legend dipindahkan ke bawah (shared)
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 10,
          titleFont: {
            size: 12,
            weight: 'bold'
          },
          bodyFont: {
            size: 11
          },
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + context.parsed.y.toFixed(3);
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            font: {
              size: 9
            },
            maxRotation: 45,
            minRotation: 45
          }
        },
        y: {
          min: dataRange.min,
          max: dataRange.max,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          },
          ticks: {
            font: {
              size: 9
            },
            callback: function(value) {
              return value.toFixed(2);
            }
          }
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      }
    }
  };
}

// Inisialisasi semua chart
const accessibilityChart = new Chart(
  document.getElementById('accessibilityChart'),
  getChartConfig(createDatasets('accessibility'), 'accessibility')
);

const availabilityChart = new Chart(
  document.getElementById('availabilityChart'),
  getChartConfig(createDatasets('availability'), 'availability')
);

const utilizationChart = new Chart(
  document.getElementById('utilizationChart'),
  getChartConfig(createDatasets('utilization'), 'utilization')
);

const stabilityChart = new Chart(
  document.getElementById('stabilityChart'),
  getChartConfig(createDatasets('stability'), 'stability')
);

// Simpan semua chart dalam array untuk memudahkan update
const allCharts = {
  accessibility: accessibilityChart,
  availability: availabilityChart,
  utilization: utilizationChart,
  stability: stabilityChart
};

// Fungsi untuk toggle visibility kota
function toggleCity(cityIndex) {
  // Toggle visibility state
  cityVisibility[cityIndex] = !cityVisibility[cityIndex];
  
  // Update visual legend
  const legendItem = document.querySelector(`.legend-item[data-city="${cityIndex}"]`);
  if (cityVisibility[cityIndex]) {
    legendItem.classList.remove('hidden');
  } else {
    legendItem.classList.add('hidden');
  }
  
  // Update semua chart
  Object.keys(allCharts).forEach(pillarName => {
    const chart = allCharts[pillarName];
    
    // Toggle dataset visibility
    chart.data.datasets[cityIndex].hidden = !cityVisibility[cityIndex];
    
    // Recalculate Y-axis range
    const newRange = getDataRange(chart.data.datasets);
    chart.options.scales.y.min = newRange.min;
    chart.options.scales.y.max = newRange.max;
    
    chart.update();
  });
}

// Fungsi untuk update semua chart berdasarkan filter
function updateAllCharts() {
  const startIndex = parseInt(document.getElementById('startQuarterPillar').value);
  const endIndex = parseInt(document.getElementById('endQuarterPillar').value);
  
  if (startIndex > endIndex) {
    alert('Kuartal awal tidak boleh lebih besar dari kuartal akhir!');
    return;
  }
  
  const filteredLabels = pillarData.labels.slice(startIndex, endIndex + 1);
  
  // Update setiap chart
  Object.keys(allCharts).forEach(pillarName => {
    const chart = allCharts[pillarName];
    const datasets = createDatasets(pillarName);
    
    // Filter data untuk setiap dataset
    const filteredDatasets = datasets.map(dataset => ({
      ...dataset,
      data: dataset.data.slice(startIndex, endIndex + 1)
    }));
    
    // Hitung range baru
    const newRange = getDataRange(filteredDatasets);
    
    // Update chart
    chart.data.labels = filteredLabels;
    chart.data.datasets = filteredDatasets;
    chart.options.scales.y.min = newRange.min;
    chart.options.scales.y.max = newRange.max;
    chart.update();
  });
}

// Event listeners
document.getElementById('startQuarterPillar').addEventListener('change', updateAllCharts);
document.getElementById('endQuarterPillar').addEventListener('change', updateAllCharts);

document.getElementById('resetFilterPillar').addEventListener('click', function() {
  document.getElementById('startQuarterPillar').value = '0';
  document.getElementById('endQuarterPillar').value = '11';
  updateAllCharts();
});