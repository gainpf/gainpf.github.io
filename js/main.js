(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    const ctx = document.getElementById('gainpfPieChart');

    const data = {
        labels: [
            'TA',
            'NRA',
            'TA to NRA'
        ],
        datasets: [{
            label: 'Loan Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };

    new Chart(ctx, {
        type: 'pie',
        responsive: true,
        data: data,
        options: {
            aspectRatio: 1,
            responsive: true,

            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            scales: {
                y: [{
                    beginAtZero: true,
                    grid: {
                        display: false
                    }
                }]
            }
        }
    });




    // var triggerTabList = [].slice.call(document.querySelectorAll('#performanceTab a'))
    // triggerTabList.forEach(function (triggerEl) {
    //     var tabTrigger = new bootstrap.Tab(triggerEl)

    //     triggerEl.addEventListener('click', function (event) {
    //         event.preventDefault()
    //         tabTrigger.show()
    //     })
    // })



    //Less Than 10 days
    const labels = ['DTE', 'DPI', 'DCE', 'Panchayat', 'Kottakal', 'Vaidya', 'DHSE', 'VHSE', 'FARM', 'HOMEO'];
    const lessThanTenData = {
        labels: labels,
        datasets: [{
            label: 'Loan Sanctioning Performance of Departments(2022-23)',
            data: [65, 59, 80, 81, 56, 55, 40, 34, 56, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(254, 45, 114, 0.2)',
                'rgba(132, 34, 88, 0.2)',
                'rgba(145, 68, 23, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgb(254, 45, 114)',
                'rgb(132, 34, 88)',
                'rgb(145, 68, 23)',

            ],
            borderWidth: 1
        }]
    };

    const lessThanTenConfig = {
        type: 'bar',
        responsive: true,
        data: lessThanTenData,
        options: {
            tooltips: {
                enabled: true
            },
            hover: {
                animationDuration: 1
            },
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            scales: {

                y: {
                    ticks: {
                        // For a category axis, the val is the index so the lookup via getLabelForValue is needed
                        max: Math.max(...data.datasets[0].data) + 10
                    },
                    beginAtZero: true
                }
            }
        },
    };

    const lessThanTenChart = document.getElementById('lessThanTenChart');
    new Chart(lessThanTenChart, lessThanTenConfig);

    //Greater Than 20 days
    const greaterThanTwentyData = {
        labels: labels,
        datasets: [{
            label: 'Loan Sanctioning Performance of Departments(2022-23)',
            data: [20, 20, 40, 56, 23, 58, 58, 12, 34, 68],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(254, 45, 114, 0.2)',
                'rgba(132, 34, 88, 0.2)',
                'rgba(145, 68, 23, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgb(254, 45, 114)',
                'rgb(132, 34, 88)',
                'rgb(145, 68, 23)',

            ],
            borderWidth: 1
        }]
    };

    const greaterThanTwentyConfig = {
        type: 'bar',
        plugins: [ChartDataLabels],
        responsive: true,
        data: greaterThanTwentyData,
        options: {

            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: function (value, context) {
                        return value;
                    }
                },
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };

    const greaterThanTwentyChart = document.getElementById('greaterThanTwentyChart');
    new Chart(greaterThanTwentyChart, greaterThanTwentyConfig);


    //Greater Than 30 days
    const greaterThanThirtyData = {
        labels: labels,
        datasets: [{
            label: 'Loan Sanctioning Performance of Departments(2022-23)',
            data: [44, 55, 23, 56, 76, 58, 65, 18, 56, 22],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(254, 45, 114, 0.2)',
                'rgba(132, 34, 88, 0.2)',
                'rgba(145, 68, 23, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgb(254, 45, 114)',
                'rgb(132, 34, 88)',
                'rgb(145, 68, 23)',

            ],
            borderWidth: 1
        }]
    };

    const greaterThanThirtyConfig = {
        type: 'bar',
        responsive: true,
        data: greaterThanThirtyData,
        options: {
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };

    const greaterThanThirtyChart = document.getElementById('greaterThanThirtyChart');
    new Chart(greaterThanThirtyChart, greaterThanThirtyConfig);




    //Carousel Config

    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        autoWidth: false,
        items: 1,
        dots: true,
        loop: false,
        nav: true,
        responsiveClass: true,
        navText: [
            '<span class="fas fa-chevron-circle-left  nav-arrow-color"></span>', '<span class="fas fa-chevron-circle-right nav-arrow-color"></span>'
        ],
        responsive: {
            0:{
              items: 1,
              nav: false,
              dots: false,
            
            },
            480:{
              items: 1,
              nav: false,
              dots: false,
             
            },
            769:{
              items: 1
            }
        }
    });


   


})(jQuery);

