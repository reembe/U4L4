const years = [];
const pm25Levels = [];

async function getData() {
    const response = await fetch('Air_Quality.csv');
    const data = await response.text();

    const rows = data.split("\n");

    rows.forEach((row, index) => {
        if (index > 0) {
            const columns = row.split(",");
            const year = columns[0].trim();
            const pm25 = parseFloat(columns[1].trim());

            if (!isNaN(pm25)) {
                years.push(year);
                pm25Levels.push(pm25);
            }
        }
    });

    createChart();
}

function createChart() {
    const ctx = document.getElementById('pm25Chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: 'PM 2.5 Levels (mcg/m³)',
                data: pm25Levels,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.1,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: Math.min(...pm25Levels) - 1,
                },
            },
        }
    });
}

getData();
