const qfsiData = {
  labels: [
    'Q1 2022', 'Q2 2022', 'Q3 2022', 'Q4 2022',
    'Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023',
    'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'
  ],
  datasets: [
    {
      label: 'Medan',
      data: [0.47, 0.47, 0.47, 0.48, 0.46, 0.47, 0.48, 0.48, 0.47, 0.47, 0.47, 0.48],
      borderColor: '#3dccc7',
      backgroundColor: 'rgba(61, 204, 199, 0.4)',
      tension: 0.4,
      borderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6
    },
    {
      label: 'Pematang Siantar',
      data: [0.50, 0.48, 0.50, 0.52, 0.51, 0.50, 0.52, 0.52, 0.51, 0.51, 0.51, 0.52],
      borderColor: '#2fbead',
      backgroundColor: 'rgba(47, 190, 173, 0.4)',
      tension: 0.4,
      borderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6
    },
    {
      label: 'Sibolga',
      data: [0.49, 0.48, 0.50, 0.49, 0.50, 0.52, 0.54, 0.50, 0.54, 0.50, 0.49, 0.52],
      borderColor: '#007279',
      backgroundColor: 'rgba(0, 114, 121, 0.4)',
      tension: 0.4,
      borderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6
    },
    {
      label: 'Padang Sidimpuan',
      data: [0.52, 0.50, 0.49, 0.49, 0.47, 0.52, 0.51, 0.48, 0.52, 0.50, 0.46, 0.52],
      borderColor: '#cca30d',
      backgroundColor: 'rgba(204, 163, 13, 0.4)',
      tension: 0.4,
      borderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6
    },
    {
      label: 'Gunungsitoli',
      data: [0.50, 0.47, 0.49, 0.48, 0.50, 0.51, 0.51, 0.50, 0.53, 0.47, 0.48, 0.52],
      borderColor: '#ffeb9c',
      backgroundColor: 'rgba(255, 235, 156, 0.4)',
      tension: 0.4,
      borderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6
    }
  ]
};

// Fungsi untuk mendapatkan nilai min dan max dari seluruh data
function getDataRange(datasets) {
  let allValues = [];
  
  datasets.forEach(dataset => {
    allValues = allValues.concat(dataset.data);
  });
  
  const minValue = Math.min(...allValues);
  const maxValue = Math.max(...allValues);
  
  // Tambahkan padding 5% agar line tidak terlalu mepet dengan tepi
  const padding = (maxValue - minValue) * 0.05;
  
  return {
    min: Math.max(0, minValue - padding), // Pastikan tidak kurang dari 0
    max: Math.min(1, maxValue + padding)  // Pastikan tidak lebih dari 1
  };
}

// Hitung range data
const dataRange = getDataRange(qfsiData.datasets);

// Inisialisasi Chart
const ctx = document.getElementById('qfsiChart').getContext('2d');
let qfsiChart = new Chart(ctx, {
  type: 'line',
  data: qfsiData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 15,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          size: 13
        },
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': ' + context.parsed.y.toFixed(2);
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
            size: 11
          }
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
            size: 11
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
});

// Fungsi untuk update chart berdasarkan filter
function updateChart() {
  const startIndex = parseInt(document.getElementById('startQuarter').value);
  const endIndex = parseInt(document.getElementById('endQuarter').value);
  
  if (startIndex > endIndex) {
    alert('Kuartal awal tidak boleh lebih besar dari kuartal akhir!');
    return;
  }
  
  // Filter data
  const filteredLabels = qfsiData.labels.slice(startIndex, endIndex + 1);
  const filteredDatasets = qfsiData.datasets.map(dataset => ({
    ...dataset,
    data: dataset.data.slice(startIndex, endIndex + 1)
  }));
  
  // Hitung ulang range berdasarkan data yang difilter
  const newRange = getDataRange(filteredDatasets);
  
  // Update chart
  qfsiChart.data.labels = filteredLabels;
  qfsiChart.data.datasets = filteredDatasets;
  qfsiChart.options.scales.y.min = newRange.min;
  qfsiChart.options.scales.y.max = newRange.max;
  qfsiChart.update();
}

// Event listeners
document.getElementById('startQuarter').addEventListener('change', updateChart);
document.getElementById('endQuarter').addEventListener('change', updateChart);

document.getElementById('resetFilter').addEventListener('click', function() {
  document.getElementById('startQuarter').value = '0';
  document.getElementById('endQuarter').value = '11';
  updateChart();
});