<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Current Week',
            backgroundColor: 'rgba(26, 128, 156, 0.3)',
            borderColor: '#1abc9c',
            data: [32, 42, 42, 62, 52, 75, 62],
          },
          {
            label: 'Previous Week',
            fill: true,
            backgroundColor: 'transparent',
            borderColor: '#f1556c',
            borderDash: [5, 5],
            data: [42, 58, 66, 93, 82, 105, 92],
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          intersect: false,
        },
        hover: {
          intersect: true,
        },
        plugins: {
          filler: {
            propagate: false,
          },
        },
        scales: {
          xAxes: [
            {
              reverse: true,
              gridLines: {
                color: 'rgba(0,0,0,0.05)',
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                stepSize: 20,
              },
              display: true,
              borderDash: [5, 5],
              gridLines: {
                color: 'rgba(0,0,0,0)',
                fontColor: '#fff',
              },
            },
          ],
        },
      }
    )
  },
}
</script>