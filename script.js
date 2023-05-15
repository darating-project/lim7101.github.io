const ctx01 = document.getElementById("myChart01");
const ctx02 = document.getElementById("myChart02");
const ctx03 = document.getElementById("myChart03");
const ctx04 = document.getElementById("myChart04");

new Chart(ctx01, {
  type: "doughnut",
  data: {
    labels: [],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#79A2F2", "#ebf2fc"],
        borderWidth: 5,
      },
    ],
  },
  options: {
    plugins: {
      doughnutlabel: {
        labels: [
          {
            text: "550",
            font: {
              size: 20,
              weight: "bold",
            },
          },
          {
            text: "total",
          },
        ],
      },
      legend: {
        display: true,
      },
    },
  },
});

new Chart(ctx02, {
  type: "doughnut",
  data: {
    labels: [],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#79A2F2", "#ebf2fc"],
        borderWidth: 5,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
      },
    },
  },
});
new Chart(ctx03, {
  type: "doughnut",
  data: {
    labels: [],
    datasets: [
      {
        data: [50, 50],
        backgroundColor: ["#79A2F2", "#ebf2fc"],
        borderWidth: 5,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
      },
    },
  },
});
new Chart(ctx04, {
  type: "doughnut",
  data: {
    labels: [],
    datasets: [
      {
        data: [30, 70],
        backgroundColor: ["#79A2F2", "#ebf2fc"],
        borderWidth: 5,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
      },
    },
  },
});
