const ctx = document.getElementById('pm25Chart').getContext('2d');
const labels = ["Annual Average 2009", "Annual Average 2010", "Annual Average 2011", "Annual Average 2012", "Annual Average 2013", "Annual Average 2014", "Annual Average 2015", "Annual Average 2016", "Annual Average 2017", "Annual Average 2018", "Annual Average 2019", "Annual Average 2020", "Annual Average 2021", "Annual Average 2022"];
const dataValues = [9.9, 9.2, 9.8, 8.6, 8.2, 8.6, 8.1, 7.1, 7.1, 6.7, 6.2, 5.9, 6.4, 5.6];

const data = {
    labels: labels,
    datasets: [{
        label: 'PM 2.5 Levels (mcg/m3)',
        data: dataValues,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time Period'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'PM 2.5 Level (mcg/m3)'
                }
            }
        }
    }
};

new Chart(ctx, config);
