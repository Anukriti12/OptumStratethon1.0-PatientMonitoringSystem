const opportunityData = [
    {
        company: require('@assets/images/companies/amazon.png'),
        name: 'Amazon Inc.',
        location: 'Seattle, Washington',
        category: 'Ecommerce',
        email: 'collier@jourrapide.com',
        phone: '828-216-2190',
        status: 'Hot',
    },
    {
        company: require('@assets/images/companies/apple.png'),
        name: 'Apple Inc.',
        location: 'Cupertino, California',
        category: 'Ecommerce',
        email: 'deanes@dayrep.com',
        phone: '077 6157 4248',
        status: 'Cold',
    },
    {
        company: require('@assets/images/companies/google.png'),
        name: 'Google LLC',
        location: 'Menlo Park, California',
        category: 'Search engine',
        email: 'nnac@hotmai.us',
        phone: '(216) 76 298 896',
        status: 'In-progress',
    },
    {
        company: require('@assets/images/companies/airbnb.png'),
        name: 'Airbnb Inc.',
        location: 'San Francisco, California',
        category: 'Real Estate',
        email: 'austin@dayrep.com',
        phone: '(02) 75 150 655',
        status: 'Lost',
    },
    {
        company: require('@assets/images/companies/cisco.png'),
        name: 'Cisco Systems',
        location: 'San Jose, California',
        category: 'Operating Systems',
        email: 'annette@email.net',
        phone: '(+15) 73 483 758',
        status: 'Won',
    }
];

const simplePieChart = {
    series: [20, 40, 30, 10, 28],
    chartOptions: {
        pie: {
            expandOnClick: false
        },
        colors: ['#4fc6e1', '#6658dd', '#f7b84b', '#f1556c', '#1abc9c'],
        labels: ['Won', 'Hot', 'Cold', 'In-progress', 'Lost'],
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
        responsive: [{
            breakpoint: 600,
            options: {
                legend: {
                    show: false
                },
            }
        }]
    },
};

export { opportunityData, simplePieChart };
