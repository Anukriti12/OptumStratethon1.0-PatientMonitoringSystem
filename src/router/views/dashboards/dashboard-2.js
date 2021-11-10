const widgetData = [
    {
        icon: 'fe-aperture',
        value: 12145,
        text: 'Income status',
        color: 'blue',
        progressValue: 60
    },
    {
        icon: 'fe-shopping-cart',
        value: 1576,
        text: 'January\'s Sales',
        color: 'success',
        progressValue: 49
    },
    {
        icon: 'fe-bar-chart-2',
        value: 8947,
        text: 'Payouts',
        color: 'warning',
        progressValue: 18
    },
    {
        icon: 'fe-cpu',
        value: 178,
        text: 'Available Stores',
        color: 'info',
        progressValue: 74
    }
];

const revenueRadialChart = {
    series: [83],
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
  

const lifetimeSalesAreaChart = {
    series: [{
        name: 'Desktop',
        data: [0, 23, 43, 35, 44, 45, 56, 37, 40],
    }, {
        name: 'Laptop',
        data: [25, 23, 26, 24, 25, 32, 30, 24, 19]
    }],
    chartOptions: {
        chart: {
            toolbar: {
                show: false,
            }
        },
        colors: ['#00acc1', '#f1556c'],
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
            show: false,
        },
        tooltip: {
            x: {
                show: false
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

const incomeAmountsLineChart = {
    series: [{
        name: 'Revenue',
        data: [70, 90, 100, 140, 50, 80, 130, 90, 80, 120, 130, 140, 90, 100, 75],
    }],
    chartOptions: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        colors: ['#00acc1'],
        dataLabels: {
            enabled: false
        },
        sparkline: {
            enabled: true,
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
            show: false,
        },
        tooltip: {
            x: {
                show: false
            }
        },
        stroke: {
            show: true,
            width: 1,   // thickness of the lines
        },
        plotOptions: {
            bar: {
                columnWidth: '50%'
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

const totalUsersPieChart = {
    series: [20, 40, 30, 10],
    chartOptions: {
        pie: {
            expandOnClick: false
        },
        colors: ['#00acc1', '#4b88e4', '#e3eaef', '#fd7e14'],
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false,
        },
        tooltip: {
            x: {
                show: false
            }
        },
        grid: {
            show: false,
            padding: {
                top: 30,
                left: 0,
                right: 0,
                bottom: 0
            }
        },
    },
};

const productData = [
    {
        name: 'ASOS Ridley High Waist',
        price: '$80.49',
        quantity: 82,
        amount: '$6,518.18',
        date: 'Sep 1, 2018',
        sales: 54,
        productid: 200125
    },
    {
        name: 'Marco Lightweight Shirt',
        price: '$128.50',
        quantity: 37,
        amount: '$4,754.50',
        date: 'Sep 15, 2018',
        sales: 28,
        productid: 200130
    },
    {
        name: 'Half Sleeve Shirt',
        price: '$39.99',
        quantity: 64,
        amount: '$2,559.36',
        date: 'Nov 1, 2018',
        sales: 55,
        productid: 200140
    },
    {
        name: 'Lightweight Jacket',
        price: '$22.00',
        quantity: 184,
        amount: '$3,680.00',
        date: 'Nov 15, 2018',
        sales: 85,
        productid: 200250
    },
    {
        name: 'Marco Shoes',
        price: '$28.49',
        quantity: 69,
        amount: '$1,965.81',
        date: 'Jan 1, 2019',
        sales: 49,
        productid: 200256
    },
    {
        name: 'ASOS Ridley High Waist',
        price: '$79.49',
        quantity: 82,
        amount: '$6,518.18',
        date: 'Sep 1, 2018',
        sales: 54,
        productid: 200125
    },
    {
        name: 'Half Sleeve Shirt',
        price: '$49.99',
        quantity: 64,
        amount: '$2,559.36',
        date: 'Nov 1, 2018',
        sales: 55,
        productid: 200140
    },
    {
        name: 'Lightweight Jacket',
        price: '$20.00',
        quantity: 184,
        amount: '$3,680.00',
        date: 'Nov 15, 2018',
        sales: 85,
        productid: 200250
    }
];


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

const tableHead = [{title:'HR'}, {title:'Na'},{title:'WBC'},{title:'Glucose'},{title:'DiasABP'},{title:'Temp'},{title:'HCO3'},{title:'BUN'},{title:'RespRate'},{title:'Mg'},{title:'HCT'},{title:'NIDiasABP'},{title:'K'},{title:'GCS'},{title:'NISysABP'},{title:'Creatinine'},{title:'Urine'},{title:'NIMAP'}, ];

const tableData = [
    {
        "BUN": "(02:26)16",
        "Creatinine": "(02:26) 0.8",
        "DiasABP": "(01:11) 67",
        "FiO2": "(01:11) 1",
        "Glucose": "(01:26) 3",
        "HCO3": "(02:26) 21",
        "HCT": "(01:11) 24.7",
        "HR": "(01:11) 88",
        "K": "(14:15) 4.3",
        "Mg": "(02:26) 3.1",
        "MAP": "(01:11) 79",
        "MechVent": "(01:11) 1",
        "Na": "(14:15) 139",
        "NIDiasABP": "(23:11) 60"
    },
    {
        "BUN": "(14:15)18",
        "Creatinine": "(14:15) 1.2",
        "DiasABP": "(01:26) 69",
        "FiO2": "(01:51) 0.5",
        "Glucose": "(03:11) 10",
        "HCO3": "(14:15) 22",
        "HCT": "(02:26) 28.8",
        "HR": "(01:26) 88",
        "K": "(41:04) 3.5",
        "Mg": "(14:15) 1.9",
        "MAP": "(01:26) 81",
        "MechVent": "(01:51) 1",
        "Na": "(41:04) 135",
        "NIDiasABP": "(23:26) 60"
    },
    {
        "BUN": "(41:04)21",
        "Creatinine": "(41:04) 1.3",
        "DiasABP": "(01:31) 64",
        "FiO2": "(02:31) 0.5",
        "Glucose": "(04:11) 11",
        "HCO3": "(41:04) 24",
        "HCT": "(05:00) 28.2",
        "HR": "(01:31) 88",
        "Mg": "(41:04) 2.3",
        "MAP": "(01:31) 81",
        "MechVent": "(02:31) 1",
        "NIDiasABP": "(23:41) 65"
    },
    {
        "DiasABP": "(01:46) 81",
        "FiO2": "(02:11) 0.5",
        "Glucose": "(07:11) 15",
        "HCT": "(07:26) 28.8",
        "HR": "(01:46) 88",
        "Mg": "(46:15) 1.9",
        "MAP": "(01:46) 100",
        "MechVent": "(03:51) 1"
    },
    {
        "DiasABP": "(01:56) 54",
        "FiO2": "(03:31) 0.4",
        "Glucose": "(11:11) 15",
        "HCT": "(14:15) 28.1",
        "HR": "(01:56) 67",
        "MAP": "(01:56) 67",
        "MechVent": "(07:11) 1"
    },
    {
        "DiasABP": "(02:11) 62",
        "FiO2": "(08:11) 0.4",
        "Glucose": "(15:11) 15",
        "HCT": "(21:57) 29.7",
        "HR": "(02:11) 88",
        "MAP": "(02:11) 76"
    },
    {
        "DiasABP": "(02:36) 51",
        "Glucose": "(19:11) 15",
        "HCT": "(30:17) 30.7",
        "HR": "(02:36) 88",
        "MAP": "(02:36) 62"
    },
    {
        "DiasABP": "(02:41) 69",
        "Glucose": "(23:11) 15",
        "HCT": "(41:04) 29.5",
        "HR": "(02:51) 88",
        "MAP": "(02:51) 80"
    },
    {
        "DiasABP": "(02:51) 64",
        "Glucose": "(27:11) 15",
        "HCT": "(46:15) 29.4",
        "HR": "(03:01) 88",
        "MAP": "(03:01) 66"
    },
    {
        "DiasABP": "(03:01) 54",
        "Glucose": "(31:11) 15",
        "HR": "(03:11) 88",
        "MAP": "(03:11) 71"
    },
    {
        "DiasABP": "(03:11) 56",
        "Glucose": "(35:11) 14",
        "HR": "(04:11) 88",
        "MAP": "(04:11) 70"
    },
    {
        "DiasABP": "(04:11) 57",
        "Glucose": "(37:11) 13",
        "HR": "(05:11) 88",
        "MAP": "(05:11) 70"
    },
    {
        "DiasABP": "(05:11) 57",
        "Glucose": "(40:11) 14",
        "HR": "(06:11) 88",
        "MAP": "(05:21) 72"
    },
    {
        "DiasABP": "(05:21) 55",
        "Glucose": "(43:11) 15",
        "HR": "(07:11) 88",
        "MAP": "(06:11) 71"
    },
    {
        "DiasABP": "(06:11) 55",
        "Glucose": "(47:11) 15",
        "HR": "(08:11) 88",
        "MAP": "(07:11) 74"
    },
    {
        "DiasABP": "(07:11) 57",
        "HR": "(09:11) 88",
        "MAP": "(07:21) 89"
    },
    {
        "DiasABP": "(07:21) 66",
        "HR": "(10:11) 88",
        "MAP": "(07:31) 78"
    },
    {
        "DiasABP": "(07:31) 60",
        "HR": "(10:16) 80",
        "MAP": "(07:51) 67"
    },
    {
        "DiasABP": "(07:51) 54",
        "HR": "(11:11) 80",
        "MAP": "(08:11) 92"
    },
    {
        "DiasABP": "(08:11) 71",
        "HR": "(12:11) 80",
        "MAP": "(08:26) 61"
    },
    {
        "DiasABP": "(08:26) 49",
        "HR": "(13:11) 80",
        "MAP": "(08:31) 64"
    },
    {
        "DiasABP": "(08:31) 51",
        "HR": "(14:11) 80",
        "MAP": "(09:11) 82"
    },
    {
        "DiasABP": "(08:41) 70",
        "HR": "(14:11) 80",
        "MAP": "(10:11) 90"
    },
    {
        "DiasABP": "(09:11) 63",
        "HR": "(15:11) 80",
        "MAP": "(10:16) 75"
    },
    {
        "DiasABP": "(10:11) 68",
        "HR": "(16:11) 80",
        "MAP": "(11:11) 81"
    },
    {
        "DiasABP": "(10:11) 68",
        "HR": "(17:11) 80",
        "MAP": "(10:16) 75"
    },
    {
        "DiasABP": "(10:16) 58",
        "HR": "(18:11) 80",
        "MAP": "(11:11) 81"
    },
    {
        "DiasABP": "(11:11) 61",
        "HR": "(19:11) 80",
        "MAP": "(12:11) 81"
    },
    {
        "DiasABP": "(12:11) 62",
        "HR": "(20:11) 80",
        "MAP": "(13:85) 85"
    },
    {
        "DiasABP": "(13:11) 65",
        "HR": "(20:11) 80",
        "MAP": "(14:11) 79"
    },
    {
        "DiasABP": "(14:11) 60",
        "HR": "(20:11) 80",
        "MAP": "(15:11) 76"
    },
    {
        "DiasABP": "(15:11) 58",
        "HR": "(21:11) 81",
        "MAP": "(16:11) 62"
    },
    {
        "DiasABP": "(16:11) 48",
        "HR": "(22:11) 80"
    },
    {
        "DiasABP": "(16:11) 48",
        "HR": "(23:16) 80"
    },
    {
        "DiasABP": "(16:31) 59"
    },
    {
        "DiasABP": "(17:11) 55"
    },
    {
        "DiasABP": "(17:41) 54"
    },
    {
        "DiasABP": "(17:56) 61"
    },
    {
        "DiasABP": "(18:11) 62"
    },
    {
        "DiasABP": "(19:11) 59" 
    },
    {
        "DiasABP": "(20:11) 59"
    }
];
export { widgetData, lifetimeSalesAreaChart, incomeAmountsLineChart, revenueRadialChart, totalUsersPieChart, productData, tableHead, tableData, notes, time1};

