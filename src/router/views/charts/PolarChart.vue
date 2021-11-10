<script>
import { PolarArea } from 'vue-chartjs'

export default {
  extends: PolarArea,
  mounted() {
    this.renderChart(
      {
        labels: ['Direct', 'Affilliate', 'Sponsored', 'E-mail'],
        datasets: [
          {
            data: [251, 135, 48, 154],
            backgroundColor: ['#4a81d4', '#fa5c7c', '#4fc6e1', '#ebeff2'],
            borderColor: 'transparent',
          },
        ],
      },
      {
        maintainAspectRatio: true,
        legend: {
          position: 'top',
        },
      }
    )
  },
}
</script>