const leadsData = [
    {
        company: require('@assets/images/companies/amazon.png'),
        name: 'Amazon Inc.',
        location: 'Seattle, Washington',
        category: 'Ecommerce',
        date: 'October 22, 2018',
    },
    {
        company: require('@assets/images/companies/apple.png'),
        name: 'Apple Inc.',
        location: 'Cupertino, California',
        category: 'Ecommerce',
        date: 'September 08, 2018'
    },
    {
        company: require('@assets/images/companies/google.png'),
        name: 'Google LLC',
        location: 'Menlo Park, California',
        category: 'Search engine',
        date: 'October 10, 2018'
    },
    {
        company: require('@assets/images/companies/airbnb.png'),
        name: 'Airbnb Inc.',
        location: 'San Francisco, California',
        category: 'Real Estate',
        date: 'August 18, 2018'
    },
    {
        company: require('@assets/images/companies/cisco.png'),
        name: 'Cisco Systems',
        location: 'San Jose, California',
        category: 'Operating Systems',
        date: 'March 28, 2018'
    }
];

const leadsBarChart = {
    series: [{
        name: 'Won Leads',
        data: [75, 50, 75, 50, 75, 100, 80],
    },
    {
        name: 'Lost Leads',
        data: [65, 40, 65, 40, 65, 90, 65],
    }],
    chartOptions: {
        chart: {
            toolbar: {
                show: false,
            },
            stacked: true,
        },
        colors: ['#4a81d4', '#e3eaef'],
        legend: {
            show: false,
        },
        tooltip: {
            x: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['2011', '2012', '2013', '2014'],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        grid: {
            xaxis: {
                showLines: false
            },
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            },
        },
        stroke: {
            show: true,
            width: 4,   // thickness of the lines
        }, plotOptions: {
            bar: {
                columnWidth: '20%'
            }
        },
    },
};

export { leadsData, leadsBarChart };
