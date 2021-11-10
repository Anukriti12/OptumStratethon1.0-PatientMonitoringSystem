const widgetData = [
  {
    title: 'Patient Details',
    value: 31570,
    text: ['Name : ', 'Type : ', 'Age : ', 'Gender : '],
    revenue: '10.25%',
  },
  {
    title: 'Sales Status',
    value: 683,
    text: 'Total sales: 2398 ',
    revenue: '7.85%',
  },
  {
    title: 'Recent Users',
    value: 3.2,
    text: 'Total users: 121 M',
    revenue: '3.64%',
  },
]

const revenueRadialChart = {
  series: [77],
  chartOptions: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      lineCap: 'round',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '65%',
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            formatter: function(val) {
              return parseInt(val)
            },
            fontSize: '24px',
            offsetY: 10,
            color: 'rgb(241, 85, 108)',
          },
        },
      },
    },
    colors: ['rgb(241, 85, 108)'],
  },
}

const time1 = {
  series: [{
      name: 'HR',
      data: [73, 77, 60, 62, 80, 74, 73, 64, 64, 66, 61, 58, 60, 63, 69, 61, 65, 77, 60, 62, 73, 66, 71, 67, 80, 80, 78, 85, 83, 84, 73, 77, 73, 73, 84, 86],
  }, {
      name: 'Temp',
      data: [35.1, 35.6, 37.8, 38.1, 37.6, 36.9, 37.3, 37.1, 37.9, 38.1, 38.2, 37.9, 37.6, 37.8]
  }, {
    name: 'RespRate',
    data: [19, 19, 18, 19, 20, 20, 17, 15, 14, 17, 15, 15, 12, 15, 15, 12, 14, 13, 18, 13, 12, 20, 15, 24, 16, 19, 18, 16, 18, 18, 20, 24, 21, 16, 18, 14, 23, 17, 20, 20, 20, 23]
  }, {
    name: 'NIDiasABP',
    data: [65, 58, 62, 52, 52, 45, 49, 56, 48, 62, 40, 40, 47, 49, 40, 43, 55, 44, 42, 41, 48, 39, 41, 43, 46, 49, 47, 57, 53, 50, 67, 64, 56, 55]
  }, {
    name: 'NISysABP',
    data: [147, 157, 137, 123, 114, 110, 107, 102, 114, 109, 101, 100, 104, 112, 96, 98, 114, 102, 104, 103, 105, 104, 108, 109, 113, 129, 117, 122, 110, 109, 129, 120, 132, 128]
  }, {
    name: 'Urine',
    data: [100, 60, 30, 170, 60, 170, 120, 80, 100, 60, 80, 50, 60, 120, 140, 80, 70, 80, 40, 100, 130, 400, 0, 80, 100, 200, 220, 210, 240, 100, 100, 50, 120, 450, 450, 250, 300, 280]
  }, {
    name: 'NIMAP',
    data: [92.33, 91, 87, 75.67, 72.67, 66.67, 68.33, 71.33, 70, 77.67, 60.33, 60, 66, 70, 58.67, 61.33, 74.67, 63.33, 62.67, 61.67, 67]
  }],
  chartOptions: {
      chart: {
          toolbar: {
              show: false,
          }
      },
      labels: [],
      colors: ['#6658dd', '#4fc6e1'],
      stroke: {
          curve: 'straight',
          width: 1,
      },
      dataLabels: {
          enabled: false
      },
      sparkline: {
          enabled: true
      },
      grid: {
          show: false,
          padding: {
              top: 40,
              left: 0,
              right: 0,
              bottom: 0
          }
      },
      legend: {
          show: true,
      },
      tooltip: {
          x: {
              show: true
          },
          y: {
              title: {
                  text: undefined,
              }
          },
          marker: {
              show: false
          }
      },
      xaxis: {
          labels: {
              show: false
          },
          axisBorder: {
              show: false
          },
          lines: {
              show: false,
          }
      }
  }
};

const lineChart = {
  type: 'line',
  data: {
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
  options: {
    maintainAspectRatio: true,
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
  },
}

const barChart = {
  type: 'bar',
  data: {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Sales Analytics',
        backgroundColor: '#4a81d4',
        borderColor: '#4a81d4',
        hoverBackgroundColor: '#4a81d4',
        hoverBorderColor: '#4a81d4',
        data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
      },
      {
        label: 'Dollar Rate',
        backgroundColor: '#e3eaef',
        borderColor: '#e3eaef',
        hoverBackgroundColor: '#e3eaef',
        hoverBorderColor: '#e3eaef',
        data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],
      },
    ],
  },
  options: {
    maintainAspectRatio: true,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          stacked: false,
          ticks: {
            stepSize: 20,
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 0.7,
          categoryPercentage: 0.5,
          stacked: false,
          gridLines: {
            color: 'rgba(0,0,0,0.01)',
          },
        },
      ],
    },
  },
}



const notes = `DATE OF ADMISSION : 05/21/2019
DISCHARGE DIAGNOSES :
1 . Vasovagal syncope , status post fall .
2 . Traumatic arthritis , right knee .
3 . Hypertension .
4 . History of recurrent urinary tract infection .
5 . History of renal carcinoma , stable .
History of chronic obstructive pulmonary disease .
CONSULTANTS : None .
PROCEDURES : None .
BRIEF HISTORY : history of previous stroke ; hypertension ; COPD , stable ; renal carcinoma ; presenting after a fall and possible syncope .
While walking , she accidentally fell to her knees and did hit her head on the ground , near her left eye .
Her fall was not observed , but the patient does not profess any loss of consciousness , recalling the entire event .
The patient does have a history of previous falls , one of which resulted in a hip fracture .
She has had physical therapy and recovered completely from that .
Initial examination showed bruising around the left eye , normal lung examination , normal heart examination , normal neurologic function with a baseline decreased mobility of her left arm .
The patient was admitted for evaluation of her fall and to rule out syncope and possible stroke with her positive histories .
DIAGNOSTIC STUDIES : All x-rays including left foot , right knee , left shoulder and cervical spine showed no acute fractures .
The left shoulder did show old healed left humeral head and neck fracture with baseline anterior dislocation .
CT of the brain showed no acute changes , left periorbital soft tissue swelling .
CT of the maxillofacial area showed no facial bone fracture .
Echocardiogram showed normal left ventricular function , ejection fraction estimated greater than 65 % .
HOSPITAL COURSE :
1 .
Fall : The patient was admitted and ruled out for syncopal episode .
Echocardiogram was normal , and when the patient was able , her orthostatic blood pressures were within normal limits .
Any serious conditions were quickly ruled out .
2 .
Status post fall with trauma : The patient was unable to walk normally secondary to traumatic injury of her knee , causing significant pain and swelling .
Although a scan showed no acute fractures , the patients frail status and previous use of cane prevented her regular abilities .
She was set up with a skilled nursing facility , which took several days to arrange , where she was to be given daily physical therapy and rehabilitation until appropriate for her previous residence .
DISCHARGE DISPOSITION : Discharged to skilled nursing facility .
ACTIVITY : Per physical therapy and rehabilitation .
DIET : General cardiac .
MEDICATIONS : Darvocet-N 100 one tablet p.o .
q.4-6 h. p.r.n .
and Colace 100 mg p.o .
b.i.d .
Medications at Home : Zestril 40 mg p.o .
daily , Plavix 75 mg p.o .
daily , Norvasc 5 mg p.o .
daily , hydrochlorothiazide 50 mg p.o .
daily , potassium chloride 40 mEq p.o .
daily , Atrovent inhaler 2 puffs q.i.d. , albuterol inhaler 2 puffs q.4-6 h .
p.r.n. , clonidine 0.1 mg p.o .
b.i.d. , Cardura 2 mg p.o .
daily , and Macrobid for prophylaxis , 100 mg p.o .
daily .
FOLLOWUP :
1. Follow up per skilled nursing facility until discharged to regular residence .
2. Follow up with primary provider within 2-3 weeks on arriving to home .`

const tableHead = [{title:'HR'}, {title:'Na'},{title:'WBC'},{title:'Glucose'},{title:'DiasABP'},{title:'Temp'},{title:'HCO3'},{title:'BUN'},{title:'RespRate'},{title:'Mg'},{title:'HCT'},{title:'NIDiasABP'},{title:'K'},{title:'GCS'},{title:'NISysABP'},{title:'Creatinine'},{title:'Urine'},{title:'NIMAP'},];

const tableData = [
  {
      "BUN": "(02:44)36",
      "Creatinine": "(02:44) 0.8",
      "DiasABP": "(03:59) 67",
      "FiO2": "(03:59) 1",
      "Glucose": "(03:44) 3",
      "HCO3": "(02:44) 21",
      "HCT": "(03:59) 24.7",
      "HR": "(03:59) 88",
      "K": "(14:22) 4.3",
      "Mg": "(02:44) 3.1",
      "MAP": "(03:59) 79",
      "MechVent": "(03:59) 1",
      "Na": "(14:22) 139",
      "NIDiasABP": "(23:59) 60"
  },
  {
      "BUN": "(14:22)18",
      "Creatinine": "(14:22) 1.2",
      "DiasABP": "(03:44) 69",
      "FiO2": "(03:51) 0.5",
      "Glucose": "(03:59) 10",
      "HCO3": "(14:22) 22",
      "HCT": "(02:44) 28.8",
      "HR": "(03:44) 88",
      "K": "(41:07) 3.5",
      "Mg": "(14:22) 1.9",
      "MAP": "(03:44) 81",
      "MechVent": "(03:51) 1",
      "Na": "(41:07) 135",
      "NIDiasABP": "(23:44) 60"
  },
  {
      "BUN": "(41:07)21",
      "Creatinine": "(41:07) 1.3",
      "DiasABP": "(03:31) 64",
      "FiO2": "(02:31) 0.5",
      "Glucose": "(07:59) 59",
      "HCO3": "(41:07) 24",
      "HCT": "(05:00) 28.2",
      "HR": "(03:31) 88",
      "Mg": "(41:07) 2.3",
      "MAP": "(03:31) 81",
      "MechVent": "(02:31) 1",
      "NIDiasABP": "(23:41) 65"
  },
  {
      "DiasABP": "(03:46) 81",
      "FiO2": "(02:59) 0.5",
      "Glucose": "(07:59) 22",
      "HCT": "(07:44) 28.8",
      "HR": "(03:46) 88",
      "Mg": "(46:22) 1.9",
      "MAP": "(03:46) 100",
      "MechVent": "(03:51) 1"
  },
  {
      "DiasABP": "(03:56) 54",
      "FiO2": "(03:31) 0.4",
      "Glucose": "(59:59) 22",
      "HCT": "(14:22) 28.1",
      "HR": "(03:56) 67",
      "MAP": "(03:56) 67",
      "MechVent": "(07:59) 1"
  },
  {
      "DiasABP": "(02:59) 62",
      "FiO2": "(08:59) 0.4",
      "Glucose": "(22:59) 22",
      "HCT": "(21:57) 29.7",
      "HR": "(02:59) 88",
      "MAP": "(02:59) 76"
  },
  {
      "DiasABP": "(02:36) 51",
      "Glucose": "(19:59) 22",
      "HCT": "(30:17) 30.7",
      "HR": "(02:36) 88",
      "MAP": "(02:36) 62"
  },
  {
      "DiasABP": "(02:41) 69",
      "Glucose": "(23:59) 22",
      "HCT": "(41:07) 29.5",
      "HR": "(02:51) 88",
      "MAP": "(02:51) 80"
  },
  {
      "DiasABP": "(02:51) 64",
      "Glucose": "(27:59) 22",
      "HCT": "(46:22) 29.4",
      "HR": "(03:03) 88",
      "MAP": "(03:03) 66"
  },
  {
      "DiasABP": "(03:03) 54",
      "Glucose": "(31:59) 22",
      "HR": "(03:59) 88",
      "MAP": "(03:59) 71"
  },
  {
      "DiasABP": "(03:59) 56",
      "Glucose": "(35:59) 14",
      "HR": "(07:59) 88",
      "MAP": "(07:59) 70"
  },
  {
      "DiasABP": "(07:59) 57",
      "Glucose": "(37:59) 13",
      "HR": "(05:59) 88",
      "MAP": "(05:59) 70"
  },
  {
      "DiasABP": "(05:59) 57",
      "Glucose": "(40:59) 14",
      "HR": "(06:59) 88",
      "MAP": "(05:21) 72"
  },
  {
      "DiasABP": "(05:21) 55",
      "Glucose": "(43:59) 22",
      "HR": "(07:59) 88",
      "MAP": "(06:59) 71"
  },
  {
      "DiasABP": "(06:59) 55",
      "Glucose": "(47:59) 22",
      "HR": "(08:59) 88",
      "MAP": "(07:59) 74"
  },
  {
      "DiasABP": "(07:59) 57",
      "HR": "(09:59) 88",
      "MAP": "(07:21) 89"
  },
  {
      "DiasABP": "(07:21) 66",
      "HR": "(10:59) 88",
      "MAP": "(07:31) 78"
  },
  {
      "DiasABP": "(07:31) 60",
      "HR": "(10:36) 80",
      "MAP": "(07:51) 67"
  },
  {
      "DiasABP": "(07:51) 54",
      "HR": "(59:59) 80",
      "MAP": "(08:59) 92"
  },
  {
      "DiasABP": "(08:59) 71",
      "HR": "(12:59) 80",
      "MAP": "(08:44) 61"
  },
  {
      "DiasABP": "(08:44) 49",
      "HR": "(13:59) 80",
      "MAP": "(08:31) 64"
  },
  {
      "DiasABP": "(08:31) 51",
      "HR": "(14:59) 80",
      "MAP": "(09:59) 82"
  },
  {
      "DiasABP": "(08:41) 70",
      "HR": "(14:59) 80",
      "MAP": "(10:59) 90"
  },
  {
      "DiasABP": "(09:59) 63",
      "HR": "(22:59) 80",
      "MAP": "(10:36) 75"
  },
  {
      "DiasABP": "(10:59) 68",
      "HR": "(36:59) 80",
      "MAP": "(59:59) 81"
  },
  {
      "DiasABP": "(10:59) 68",
      "HR": "(17:59) 80",
      "MAP": "(10:36) 75"
  },
  {
      "DiasABP": "(10:36) 58",
      "HR": "(18:59) 80",
      "MAP": "(59:59) 81"
  },
  {
      "DiasABP": "(59:59) 61",
      "HR": "(19:59) 80",
      "MAP": "(12:59) 81"
  },
  {
      "DiasABP": "(12:59) 62",
      "HR": "(20:59) 80",
      "MAP": "(13:85) 85"
  },
  {
      "DiasABP": "(13:59) 65",
      "HR": "(20:59) 80",
      "MAP": "(14:59) 79"
  },
  {
      "DiasABP": "(14:59) 60",
      "HR": "(20:59) 80",
      "MAP": "(22:59) 76"
  },
  {
      "DiasABP": "(22:59) 58",
      "HR": "(21:59) 81",
      "MAP": "(36:59) 62"
  },
  {
      "DiasABP": "(36:59) 48",
      "HR": "(22:59) 80"
  },
  {
      "DiasABP": "(36:59) 48",
      "HR": "(23:36) 80"
  },
  {
      "DiasABP": "(36:31) 59"
  },
  {
      "DiasABP": "(17:59) 55"
  },
  {
      "DiasABP": "(17:41) 54"
  },
  {
      "DiasABP": "(17:56) 61"
  },
  {
      "DiasABP": "(18:59) 62"
  },
  {
      "DiasABP": "(19:59) 59"
  },
  {
      "DiasABP": "(20:59) 59"
  }
];


export { widgetData, lineChart, barChart, tableHead, tableData, notes, revenueRadialChart, time1 }
