const lifetimeDonutChart = {
    series: [12, 30, 20],
    chartOptions: {
        labels: ['Campaign', 'Total Sales', 'Daily Sales'],
        colors: ['#4fc6e1', '#6658dd', '#ebeff2'],
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        }
    }
};

const statisticsBarChart = {
    type: "bar",
    series: [{
        name: 'Statistics',
        data: [87, 75, 50, 75, 50, 38, 72, 60, 78, 58]
    }],
    chartOptions: {
        chart: {
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '36%',
            },
        },
        legend: {
            show: true
        },
        colors: ['#4fc6e1'],
        dataLabels: {
            enabled: false
        },
        sparkline: {
            enabled: true
        },
        grid: {
            show: false
        },
        tooltip: {
            show: false
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

const widgetData = [
    {
        image: require('@assets/images/users/user-3.jpg'),
        name: 'Thelma Fridley',
        designation: 'Admin User'
    },
    {
        image: require('@assets/images/users/user-4.jpg'),
        name: 'Chandler Hervieux',
        designation: 'Manager'
    },
    {
        image: require('@assets/images/users/user-5.jpg'),
        name: 'Percy Demers',
        designation: 'Director'
    },
    {
        image: require('@assets/images/users/user-6.jpg'),
        name: 'Antoine Masson',
        designation: 'Premium User'
    }
];

const projectData = [
    {
        name: 'App design and development',
        startdate: 'Jan 03, 2015',
        duedate: '	Oct 12, 2018',
        team: [require('@assets/images/users/user-1.jpg'), require('@assets/images/users/user-2.jpg'), require('@assets/images/users/user-3.jpg'), require('@assets/images/users/user-5.jpg')],
        status: 'Work in Progress',
        client: 'Halette Boivin'
    },
    {
        name: 'Coffee detail page - Main Page',
        startdate: 'Sep 21, 2016',
        duedate: 'May 05, 2018',
        team: [require('@assets/images/users/user-3.jpg'), require('@assets/images/users/user-4.jpg'), require('@assets/images/users/user-5.jpg')],
        status: 'Pending',
        client: 'Durandana Jolicoeur'
    },

    {
        name: 'Poster illustation design',
        startdate: 'Mar 08, 2018',
        duedate: 'Sep 22, 2018',
        team: [require('@assets/images/users/user-2.jpg'), require('@assets/images/users/user-6.jpg'), require('@assets/images/users/user-7.jpg')],
        status: 'Completed',
        client: 'Lucas Sabourin'
    },
    {
        name: 'Drinking bottle graphics',
        startdate: 'Oct 10, 2017',
        duedate: 'May 07, 2018',
        team: [require('@assets/images/users/user-9.jpg'), require('@assets/images/users/user-10.jpg'), require('@assets/images/users/user-1.jpg')],
        status: 'Work in Progress',
        client: 'Donatien Brunelle'
    },
    {
        name: 'Landing page design - Home',
        startdate: 'Coming Soon',
        duedate: 'May 25, 2021',
        team: [require('@assets/images/users/user-5.jpg'), require('@assets/images/users/user-8.jpg'), require('@assets/images/users/user-2.jpg'), require('@assets/images/users/user-7.jpg')],
        status: 'Coming Soon',
        client: 'Karel Auberjo'
    },
];

const tableHead = [{title:'HR'}, {title:'Na'},{title:'WBC'},{title:'Glucose'},{title:'Temp'},{title:'HCO3'},{title:'BUN'},{title:'Age'},{title:'RespRate'},{title:'Mg'},{title:'HCT'},{title:'NIDiasABP'},{title:'K'},{title:'GCS'},{title:'NISysABP'},{title:'Creatinine'},{title:'Urine'},{title:'NIMAP'},];


export { incomeAmountAreaChart, statisticsBarChart, lifetimeDonutChart, widgetData, projectData, tableHead };
