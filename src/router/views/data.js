// const widgetData = [
//     {
//         // icon: 'fe-heart',
//         color: 'primary',
//         value: 72,
//         text: 'Name : Ankit Priyarup'
//     },
//     // {
//     //     icon: 'fe-shopping-cart',
//     //     color: 'success',
//     //     value: 127,
//     //     text: "Today's Sales"
//     // },
//     {
//         icon: 'fe-bar-chart-line-',
//         color: 'info',
//         value: 3,
//         text: 'Conversion'
//     },
//     {
//         icon: 'fe-eye',
//         color: 'warning',
//         value: 78.41,
//         text: "Today's Visits"
//     }
// ];
const widgetData = [
  {
    title: 'Income Status',
    value: 31570,
    text: 'Total income: $22506 ',
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
  {
    title: 'Total Revenue',
    value: 68541,
    text: 'Total revenue: $1.2 M',
    revenue: '17.48%',
  },
]

const incomeAmountAreaChart = {
  series: [{
      name: 'Bitcoin',
      data: [0, 23, 43, 35, 44, 45, 56],
  }, {
      name: 'Litecoin',
      data: [25, 23, 26, 24, 25, 32, 30]
  }],
  chartOptions: {
      chart: {
          toolbar: {
              show: false,
          }
      },
      labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
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

const revenueRadialChart = {
  series: [80],
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

const productData = [
  {
    name: 'ASOS Ridley High Waist',
    price: '$80.49',
    quantity: 82,
    amount: '$6,518.18',
    date: 'Sep 1, 2018',
    sales: 54,
    productid: 200125,
  },
  {
    name: 'Marco Lightweight Shirt',
    price: '$128.50',
    quantity: 37,
    amount: '$4,754.50',
    date: 'Sep 15, 2018',
    sales: 28,
    productid: 200130,
  },
  {
    name: 'Half Sleeve Shirt',
    price: '$39.99',
    quantity: 64,
    amount: '$2,559.36',
    date: 'Nov 1, 2018',
    sales: 55,
    productid: 200140,
  },
  {
    name: 'Lightweight Jacket',
    price: '$22.00',
    quantity: 184,
    amount: '$3,680.00',
    date: 'Nov 15, 2018',
    sales: 85,
    productid: 200250,
  },
  {
    name: 'Marco Shoes',
    price: '$28.49',
    quantity: 69,
    amount: '$1,965.81',
    date: 'Jan 1, 2019',
    sales: 49,
    productid: 200256,
  },
  {
    name: 'ASOS Ridley High Waist',
    price: '$79.49',
    quantity: 82,
    amount: '$6,518.18',
    date: 'Sep 1, 2018',
    sales: 54,
    productid: 200125,
  },
  {
    name: 'Half Sleeve Shirt',
    price: '$49.99',
    quantity: 64,
    amount: '$2,559.36',
    date: 'Nov 1, 2018',
    sales: 55,
    productid: 200140,
  },
  {
    name: 'Lightweight Jacket',
    price: '$20.00',
    quantity: 184,
    amount: '$3,680.00',
    date: 'Nov 15, 2018',
    sales: 85,
    productid: 200250,
  },
]

const notes = `DATE OF ADMISSION: 05/22/2019
ADMITTING DIAGNOSIS: Syncope.
CHIEF COMPLAINT: Vertigo or dizziness.

HISTORY OF PRESENT ILLNESS: past medical history of coronary artery disease, CABG done a few years ago, atrial fibrillation, peripheral arterial disease, peripheral neuropathy, recently retired one year ago secondary to leg pain. The patient came to the ER for an episode of vertigo while reaching for some books. The patient was able to reach the books, to support self, but did not have any syncope. No nausea or vomiting. No chest pain. No shortness of breath. Came to ER and had a CT head, which was within normal limits. The impression was atrophy with old ischemic changes but no acute intracranial findings. No focal weakness, headache, vision changes or speech changes. The patient has had similar episodes since one year. Peripheral neuropathy since one year and not relieved with multiple medications. The patient also complains of weight loss of 25 pounds in the last 6 months. No colonoscopy done. Recent history of hematochezia but believes it was secondary to proctitis and secondary to decreased appetite. No nausea, vomiting, no abdominal pain.

PROCEDURES PERFORMED: The patient had a chest x-ray, which showed cardiomegaly with atherosclerotic heart disease, pleural thickening and small pleural effusion, a left costophrenic angle which has not changed when compared to prior examination, COPD pattern. The patient also had a head CT which showed atrophy with old ischemic changes. No acute intracranial findings.

CONSULTS OBTAINED: A rehab consult was done.

PAST MEDICAL/SURGICAL HISTORY: Positive for atrial fibrillation. The patient had AVR 6 years ago. Peripheral arterial disease with hypertension, peripheral neuropathy, atherosclerosis, hemorrhoids, proctitis, CABG, and cholecystectomy.

FAMILY HISTORY: Positive for atherosclerosis, hypertension, autoimmune diseases in the family.

SOCIAL HISTORY: Never smoked. Alcohol socially. No drugs.

ALLERGIES: NO KNOWN DRUG ALLERGIES.

REVIEW OF SYSTEMS: Weight loss of 25 pounds within the last 6 months, shortness of breath, constipation, bleeding from hemorrhoids, increased frequency of urination, muscle aches, dizziness and faintness, focal weakness and numbness in both legs, knees and feet.

PHYSICAL EXAMINATION: VITAL SIGNS: Blood pressure 188/74, pulse 62, respirations 18 and saturation of 98% on room air. General Appearance: The patient is a pleasant man, comfortable. HEENT: Conjunctivae are normal. PERRLA. EOMI. NECK: No masses. Trachea is central. No thyromegaly. LUNGS: Clear to auscultation and percussion bilaterally. HEART: Irregular rhythm. ABDOMEN: Soft, nontender, and nondistended. Bowel sounds are positive. GENITOURINARY: Prostate is hypertrophic with smooth margin. EXTREMITIES: Upper and lower limbs bilaterally normal. SKIN: Normal. NEUROLOGIC: Cranial nerves are grossly within normal limits. No nystagmus. DTRs are normal. Good sensation. The patient is alert, awake, and oriented x3. Mild confusion.

LABORATORY DATA AND RADIOLOGICAL RESULTS: WBC 8.6, hemoglobin 13.4, hematocrit 39.8, platelets 207,000, MCV 91.6, neutrophil percentage of 72.6%. Sodium 133, potassium 4.7, chloride 104. Blood urea nitrogen of 18 and creatinine of 1.1. PT 17.4, INR 1.6, PTT 33.

The patient had a chest x-ray, which showed cardiomegaly with atherosclerotic heart disease, pleural thickening and small pleural effusion, a left costophrenic angle which has not changed when compared to prior examination, COPD pattern. The patient also had a head CT, which showed atrophy with old ischemic changes. No acute intracranial findings.

HOSPITAL COURSE AND TREATMENT: This is an (XX)-year-old male with syncope.
1. Syncope. This may be secondary to questionable cerebral ischemia/atrial fibrillation/hypotension, so Neurology was kept on board and the patient was scheduled for a carotid Doppler and a 2-D echo. Orthostatics were ordered. Vitamin B12, TSH, free T4 and T3 were ordered along with cortisol level in the morning. FOBT x3 were done and cardiology followup as outpatient. The patient had a carotid Doppler done on the next day and it showed mild irregular plaque disease, right and left internal carotid arteries, approximately 20-59%. The patient’s vitamin B12 level came the next morning and the level was 1180. His folate was 18.7 and his TSH was 1.98, free T4 of 1.38 and T4 level of 7.4, cortisol level of 15.4, which are within normal limits. Dr. Doe, who is the patient’s cardiologist, was informed. Dr. Doe was kind enough to see the patient the very next day, and his impression was that the patient has atrial fibrillation, rate controlled, status post AVR, St. Jude, and peripheral neuropathy. Subtherapeutic INR, the patient’s relative target INR is 2-3. He suggested PT evaluation and suggested a low dose of SSRI and Dr. Doe was of the opinion that the patient does not need any further cardiac recommendation. CT chest, abdomen, and pelvis were done. CT chest had an impression of coronary artery calcification, aortic valve replacement, cardiomegaly, suspect a very small left pleural effusion, no acute active pulmonary disease. CT abdomen and pelvis showed prior cholecystectomy, diverticulosis of sigmoid colon, two benign-appearing simple cysts involving the right kidney, calcified arteriosclerotic plaque disease of the abdominal aorta and iliac vessels bilaterally. The patient was ruled out of any malignancy whatsoever.
2. Hypertension. The patient at home was on Cardizem ER 90 mg thrice daily, and it was changed initially to Cardizem 90 mg thrice daily, and then with Dr. Doe’s request, we changed the Cardizem to 240 mg t.i.d.
3. Atrial fibrillation with subtherapeutic INR. The patient at home was on Digitalis. That was continued. Dr. Doe was of the opinion that the patient himself takes care of the Coumadin, and Dr. Doe was of the opinion that probably that is why the patient is not able to maintain therapeutic INR. In the hospital, the patient’s warfarin was increased to 5 mg q.h.s., and at the time of the discharge, he was requested to follow his appointments so that his INR can be maintained.
4. Gout. The patient was on allopurinol. There were no acute issues regarding the gout.
5. Prophylaxis. The patient was on Protonix and TEDs.
6. Social. The patient is FULL CODE.`


const tableHead = [{title:'HR'}, {title:'Na'},{title:'WBC'},{title:'Glucose'},{title:'Temp'},{title:'HCO3'},{title:'BUN'},{title:'RespRate'},{title:'Mg'},{title:'HCT'},{title:'NIDiasABP'},{title:'K'},{title:'GCS'},{title:'NISysABP'},{title:'Creatinine'},{title:'Urine'},{title:'NIMAP'},];

const tableData = [
  {
      "HR": "(00:07) 73",
      "NA": "(10:37) 137",
      "WBC": "(10:37) 11.2",
      "Glucose": "(10:37) 205",
      "Temp": "(00:07) 35.1",
      "HCO3": "(10:37) 26",
      "BUN": "(10:37) 13",
      "Age": "(00:00) 54",
      "RespRate": "(00:07) 19",
      "Mg": "(10:37) 1.5",
      "HCT": "(03:08) 33.7",
      "NIDiasABP": "(00:07) 65",
      "K": "(10:37) 4.4",
      "GCD": "(00:07) 15",
      "NISysABP": "(00:07) 147",
      "Creatinine": "(10:37) 0.8",
      "Urine": "(00:07) 900",
      "NIMAP": "(00:07) 92.33"
  },
  {
      "HR": "(00:37) 77",
      "NA": "(33:07) 136",
      "WBC": "(33:07) 9.4",
      "Glucose": "(33:07) 115",
      "Temp": "(00:37) 35.6",
      "HCO3": "(33:07) 28",
      "BUN": "(33:07) 8",
      "Age": "",
      "RespRate": "(00:37) 19",
      "Mg": "(33:07) 1.9",
      "HCT": "(10:37) 33.5",
      "NIDiasABP": "(00:37) 58",
      "K": "(33:07) 4",
      "GCD": "(03:37) 15",
      "NISysABP": "(00:37) 157",
      "Creatinine": "(33:07) 0.7",
      "Urine": "(00:37) 60",
      "NIMAP": "(00:37) 91"
  },
  {
      "HR": "(01:37) 60",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "(03:37) 37.8",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(01:37) 18",
      "Mg": "",
      "HCT": "(33:07) 30.3",
      "NIDiasABP": "(01:37) 62",
      "K": "",
      "GCD": "(07:37) 15",
      "NISysABP": "(01:37) 137",
      "Creatinine": "",
      "Urine": "(01:37) 30",
      "NIMAP": "(01:37) 87"
  },
  {
      "HR": "(02:37) 62",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "(07:37) 38.1",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(02:37) 19",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(02:37) 52",
      "K": "",
      "GCD": "(11:37) 15",
      "NISysABP": "(02:37) 123",
      "Creatinine": "",
      "Urine": "(02:37) 170",
      "NIMAP": "(02:37) 75.67"
  },
  {
      "HR": "(03:37) 80",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "(11:37) 37.6",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(03:37) 20",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(03:37) 52",
      "K": "",
      "GCD": "(15:37) 15",
      "NISysABP": "(03:37) 114",
      "Creatinine": "",
      "Urine": "(03:37) 60",
      "NIMAP": "(03:37) 72.67"
  },
  {
      "HR": "(04:37) 74",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "(15:37) 36.9",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(04:37) 20",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(05:37) 45",
      "K": "",
      "GCD": "(19:37) 15",
      "NISysABP": "(05:37) 110",
      "Creatinine": "",
      "Urine": "(05:37) 170",
      "NIMAP": "(05:37) 66.67"
  },
  {
      "HR": "(05:37) 73",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "(19:37) 37.3",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(05:37) 17",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(07:37) 49",
      "K": "",
      "GCD": "(23:37) 15",
      "NISysABP": "(07:37) 107",
      "Creatinine": "",
      "Urine": "(07:37) 120",
      "NIMAP": "(07:37) 68.33"
  },
  {
      "HR": "(07:37) 64",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "(23:37) 37.1",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(07:37) 15",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(08:37) 56",
      "K": "",
      "GCD": "(27:37) 15",
      "NISysABP": "(08:37) 102",
      "Creatinine": "",
      "Urine": "(08:37) 80",
      "NIMAP": "(08:37) 71.33"
  },
  {
      "HR": "(08:37) 64",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "(27:37) 37.9",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(08:37) 14",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(09:37) 48",
      "K": "",
      "GCD": "(31:37) 14",
      "NISysABP": "(09:37) 114",
      "Creatinine": "",
      "Urine": "(09:37) 100",
      "NIMAP": "(09:37) 70"
  },
  {
      "HR": "(09:37) 66",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "(31:37) 38.1",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(09:37) 17",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(10:37) 62",
      "K": "",
      "GCD": "(35:37) 15",
      "NISysABP": "(10:37) 109",
      "Creatinine": "",
      "Urine": "(10:37) 60",
      "NIMAP": "(10:37) 77.67"
  },
  {
      "HR": "(10:37) 61",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "(35:37) 38.2",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(10:37) 15",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(11:37) 40",
      "K": "",
      "GCD": "(39:37) 15",
      "NISysABP": "(11:37) 101",
      "Creatinine": "",
      "Urine": "(11:37) 80",
      "NIMAP": "(11:37) 60.33"
  },
  {
      "HR": "(11:37) 58",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "(39:37) 37.9",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(11:37) 15",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(12:37) 40",
      "K": "",
      "GCD": "(43:37) 15",
      "NISysABP": "(12:37) 100",
      "Creatinine": "",
      "Urine": "(12:37) 50",
      "NIMAP": "(12:37) 60"
  },
  {
      "HR": "(12:37) 58",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "(43:37) 37.6",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(12:37) 12",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(13:37) 47",
      "K": "",
      "GCD": "(47:37) 15",
      "NISysABP": "(13:37) 104",
      "Creatinine": "",
      "Urine": "(13:37) 60",
      "NIMAP": "(13:37) 66"
  },
  {
      "HR": "(13:37) 60",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "(47:37) 37.8",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(13:37) 15",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(15:37) 49",
      "K": "",
      "GCD": "",
      "NISysABP": "(15:37) 112",
      "Creatinine": "",
      "Urine": "(15:37) 120",
      "NIMAP": "(15:37) 70"
  },
  {
      "HR": "(14:37) 63",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(14:37) 15",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(16:37) 40",
      "K": "",
      "GCD": "",
      "NISysABP": "(16:37) 96",
      "Creatinine": "",
      "Urine": "(17:37) 140",
      "NIMAP": "(16:37) 58.67"
  },
  {
      "HR": "(15:37) 69",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(15:37) 12",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(17:37) 43",
      "K": "",
      "GCD": "",
      "NISysABP": "(17:37) 98",
      "Creatinine": "",
      "Urine": "(19:37) 80",
      "NIMAP": "(17:37) 61.33"
  },
  {
      "HR": "(16:37) 61",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(16:37) 14",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(19:37) 55",
      "K": "",
      "GCD": "",
      "NISysABP": "(19:37) 114",
      "Creatinine": "",
      "Urine": "(21:37) 70",
      "NIMAP": "(19:37) 74.67"
  },
  {
      "HR": "(17:37) 65",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(17:37) 13",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(21:37) 44",
      "K": "",
      "GCD": "",
      "NISysABP": "(21:37) 102",
      "Creatinine": "",
      "Urine": "(22:37) 80",
      "NIMAP": "(21:37) 63.33"
  },
  {
      "HR": "(18:37) 77",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(18:37) 18",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(22:37) 42",
      "K": "",
      "GCD": "",
      "NISysABP": "(22:37) 104",
      "Creatinine": "",
      "Urine": "(23:37) 40",
      "NIMAP": "(22:37) 62.67"
  },
  {
      "HR": "(19:37) 60",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(19:37) 13",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(23:37) 41",
      "K": "",
      "GCD": "",
      "NISysABP": "(23:37) 103",
      "Creatinine": "",
      "Urine": "(24:37) 100",
      "NIMAP": "(23:37) 61.67"
  },
  {
      "HR": "(20:37) 62",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(20:37) 12",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(25:37) 48",
      "K": "",
      "GCD": "",
      "NISysABP": "(25:37) 105",
      "Creatinine": "",
      "Urine": "(25:37) 130",
      "NIMAP": "(25:37) 67"
  },
  {
      "HR": "(21:37) 73",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(21:37) 20",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(27:37) 39",
      "K": "",
      "GCD": "",
      "NISysABP": "(27:37) 104",
      "Creatinine": "",
      "Urine": "(27:37) 400",
      "NIMAP": "(27:37) 60.67"
  },
  {
      "HR": "(22:37) 66",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(22:37) 15",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(29:37) 41",
      "K": "",
      "GCD": "",
      "NISysABP": "(29:37) 108",
      "Creatinine": "",
      "Urine": "(27:37) 0",
      "NIMAP": "(29:37) 63.33"
  },
  {
      "HR": "(23:37) 71",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(23:37) 24",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(31:37) 43",
      "K": "",
      "GCD": "",
      "NISysABP": "(31:37) 109",
      "Creatinine": "",
      "Urine": "(28:37) 80",
      "NIMAP": "(31:37) 65"
  },
  {
      "HR": "(25:37) 67",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(25:37) 16",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(33:37) 46",
      "K": "",
      "GCD": "",
      "NISysABP": "(33:37) 113",
      "Creatinine": "",
      "Urine": "(29:37) 100",
      "NIMAP": "(33:37) 68.33"
  },
  {
      "HR": "(27:37) 80",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(26:37) 19",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(35:37) 49",
      "K": "",
      "GCD": "",
      "NISysABP": "(35:37) 129",
      "Creatinine": "",
      "Urine": "(30:37) 450",
      "NIMAP": "(35:37) 75.67"
  },
  {
      "HR": "(29:37) 80",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(27:37) 18",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(37:37) 47",
      "K": "",
      "GCD": "",
      "NISysABP": "(37:37) 117",
      "Creatinine": "",
      "Urine": "(31:37) 220",
      "NIMAP": "(37:37) 70.33"
  },
  {
      "HR": "(31:37) 78",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(29:37) 16",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(39:37) 57",
      "K": "",
      "GCD": "",
      "NISysABP": "(39:37) 122",
      "Creatinine": "",
      "Urine": "(32:37) 210",
      "NIMAP": "(39:37) 78.67"
  },
  {
      "HR": "(33:37) 85",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(31:37) 18",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(40:37) 53",
      "K": "",
      "GCD": "",
      "NISysABP": "(40:37) 110",
      "Creatinine": "",
      "Urine": "(33:37) 240",
      "NIMAP": "(40:37) 72"
  },
  {
      "HR": "(35:37) 83",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(33:37) 18",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(41:37) 50",
      "K": "",
      "GCD": "",
      "NISysABP": "(41:37) 109",
      "Creatinine": "",
      "Urine": "(34:37) 100",
      "NIMAP": "(41:37) 69.67"
  },
  {
      "HR": "(37:37) 84",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(35:37) 20",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(42:37) 67",
      "K": "",
      "GCD": "",
      "NISysABP": "(42:37) 129",
      "Creatinine": "",
      "Urine": "(35:37) 100",
      "NIMAP": "(42:37) 87.67"
  },
  {
      "HR": "(39:37) 73",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(37:37) 24",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(43:37) 64",
      "K": "",
      "GCD": "",
      "NISysABP": "(43:37) 120",
      "Creatinine": "",
      "Urine": "(36:37) 50",
      "NIMAP": "(43:37) 82.67"
  },
  {
      "HR": "(40:37) 77",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(38:37) 21",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(45:37) 56",
      "K": "",
      "GCD": "",
      "NISysABP": "(45:37) 132",
      "Creatinine": "",
      "Urine": "(37:37) 120",
      "NIMAP": "(45:37) 81.33"
  },
  {
      "HR": "(41:37) 73",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(39:37) 16",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "(47:37) 55",
      "K": "",
      "GCD": "",
      "NISysABP": "(47:37) 128",
      "Creatinine": "",
      "Urine": "(39:37) 450",
      "NIMAP": "(47:37) 79.33"
  },
  {
      "HR": "(43:37) 73",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(40:37) 18",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "",
      "K": "",
      "GCD": "",
      "NISysABP": "",
      "Creatinine": "",
      "Urine": "(41:37) 450",
      "NIMAP": ""
  },
  {
      "HR": "(45:37) 84",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(41:37) 14",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "",
      "K": "",
      "GCD": "",
      "NISysABP": "",
      "Creatinine": "",
      "Urine": "(43:37) 250",
      "NIMAP": ""
  },
  {
      "HR": "(47:37) 86",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(42:37) 23",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "",
      "K": "",
      "GCD": "",
      "NISysABP": "",
      "Creatinine": "",
      "Urine": "(45:37) 300",
      "NIMAP": ""
  },
  {
      "HR": "",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(43:37) 17",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "",
      "K": "",
      "GCD": "",
      "NISysABP": "",
      "Creatinine": "",
      "Urine": "(47:37) 280",
      "NIMAP": ""
  },
  {
      "HR": "",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(44:37) 20",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "",
      "K": "",
      "GCD": "",
      "NISysABP": "",
      "Creatinine": "",
      "Urine": "",
      "NIMAP": ""
  },
  {
      "HR": "",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(45:37) 20",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "",
      "K": "",
      "GCD": "",
      "NISysABP": "",
      "Creatinine": "",
      "Urine": "",
      "NIMAP": ""
  },
  {
      "HR": "",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(46:37) 20",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "",
      "K": "",
      "GCD": "",
      "NISysABP": "",
      "Creatinine": "",
      "Urine": "",
      "NIMAP": ""
  },
  {
      "HR": "",
      "NA": "",
      "WBC": "",
      "Glucose": "",
      "Temp": "",
      "HCO3": "",
      "BUN": "",
      "Age": "",
      "RespRate": "(47:37) 23",
      "Mg": "",
      "HCT": "",
      "NIDiasABP": "",
      "K": "",
      "GCD": "",
      "NISysABP": "",
      "Creatinine": "",
      "Urine": "",
      "NIMAP": ""
  }
];

const time1 = {
  series: [{
      name: 'HR',
      data: [88, 88, 88, 88, 67, 88, 67, 88, 88, 88, 88, 88, 88, 88, 88, 80, 80, 80, 80, 80, 80, 80, 80, 80],
  }, {
      name: 'Glucose',
      data: [3, 10, 11, 15, 15, 15, 15, 15, 15, 14, 13, 14, 15, 14]
  }, {
    name: 'DiasABP',
    data: [67, 69, 64, 81, 54, 62, 51, 69, 64, 54, 56, 57, 57, 55, 55, 57, 66, 60, 54, 71, 49, 71, 49, 51, 70, 63, 68, 68, 58, 61, 62, 65, 60, 58, 48, 48, 48, 59, 55, 54, 61, 62, 59, 59]
  }, {
    name: 'HCO3',
    data: [21, 22, 24]
  }, {
    name: 'BUN',
    data: [16, 18, 21]
  }, {
    name: 'HCT',
    data: [3.1, 1.9, 2.3, 1.9]
  }, {
    name: 'NiDiasABP',
    data: [24.7, 28.8, 28.2, 28.8, 28.1, 29.7, 29.5, 29.4]
  }, {
    name: 'K',
    data: [60, 60, 65]
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

export { widgetData, revenueRadialChart, notes, productData, tableHead, tableData, incomeAmountAreaChart, time1}
