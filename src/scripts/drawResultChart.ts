import { T_SCALES_NAMES, T_SCALES_OBJ } from "../types/types";

function drawResultChart(
  container: HTMLDivElement,
  scales: T_SCALES_OBJ,
  chartType: string
) {
  container.innerHTML = `<canvas id="chart"></canvas>
`;
  const ctx = document.querySelector("#chart");

  const data = Object.keys(scales) as T_SCALES_NAMES[];

  // @ts-ignore
  new Chart(ctx, {
    type: chartType || "line",
    data: {
      labels: data.map((key) => `шкала-${key}`),
      datasets: [
        {
          label: "X-балл",
          data: data.map((key) => scales[key].X),
          borderWidth: 2,
          fill: false,
          borderColor: "#198754",
        },
        {
          label: "T-балл",
          data: data.map((key) => scales[key].T),
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
          //   max: 200,
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
