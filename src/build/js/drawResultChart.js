function drawResultChart(container, scales, chartType) {
    container.innerHTML = "<canvas id=\"chart\"></canvas>\n";
    var ctx = document.querySelector("#chart");
    var data = Object.keys(scales);
    new Chart(ctx, {
        type: chartType || "line",
        data: {
            labels: data.map(function (key) { return "\u0448\u043A\u0430\u043B\u0430-".concat(key); }),
            datasets: [
                {
                    label: "X-балл",
                    data: data.map(function (key) { return scales[key].X; }),
                    borderWidth: 2,
                    fill: false,
                    borderColor: "#198754",
                },
                {
                    label: "T-балл",
                    data: data.map(function (key) { return scales[key].T; }),
                    borderWidth: 2,
                    fill: false,
                    borderColor: "#dc3545",
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    position: "average",
                    backgroundColor: "#0d6efd",
                    borderColor: "red",
                    titleColor: "whitesmoke",
                    titleFont: { weight: "normal", family: "Roboto", size: 14 },
                    bodyColor: "whitesmoke",
                    bodyFont: { weight: "normal", family: "Roboto", size: 12 },
                },
            },
            layout: {
                padding: "1rem",
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Величина баллов",
                        color: "whitesmoke",
                        font: { weight: "bold", family: "Montserrat", size: 20 },
                        padding: 6,
                    },
                    grid: {
                        lineWidth: 1,
                        color: "#adb5bd",
                    },
                    ticks: {
                        color: "#0d6efd",
                        font: {
                            weight: "bold",
                            family: "Roboto",
                            size: 15,
                            lineHeight: 0.7,
                        },
                    },
                },
                x: {
                    title: {
                        display: true,
                        text: "Шкалы по СМИЛ (MMPI)",
                        color: "whitesmoke",
                        font: { weight: "bold", family: "Montserrat", size: 20 },
                        padding: 6,
                    },
                    grid: {
                        lineWidth: 1,
                        color: "#adb5bd",
                    },
                    ticks: {
                        color: "#0d6efd",
                        font: {
                            weight: "bold",
                            family: "Roboto",
                            size: 15,
                            lineHeight: 0.7,
                        },
                    },
                },
            },
        },
    });
}
export { drawResultChart };
