$(document).ready(function() {
        $(fullpage).fullpage({
            //resize:true,
            scrollingSpeed: 1000,
            loopHorizontal: true,
            navigation: true,
            navigationPosition: 'left',
            navigationTooltips: ['Home', 'Projects', 'Skills', 'Education', 'Learn More'],
            
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
            controlArrows: false,
            loopBottom: true,
            onLeave: function(index, nextIndex, direction) {
                var pages = $('.section');
                for (var i = 0; i < pages.length; i++) {
                    if (i + 1 !== nextIndex) {
                        $(pages[i]).addClass('leaving');
                    } else {
                        $(pages[i]).removeClass('leaving');
                    }
                }
                switch (index) {
                    case 1:
                        move('.page1 h1').scale(1).end();
                        move('.page1 p').scale(1).end();
                        break;
                    case 2:
                        move('#clock').rotate(-360).end();
                        move('h2.alarm').scale(1).end();
                        move('#android').rotate(-360).end();
                        move('h2.android').scale(1).end();
                        move('#book').rotate(-360).end();
                        move('h2.book').scale(1).end();
                        move('#apple').rotate(-360).end();
                        move('h2.apple').scale(1).end();
                        move('#music').rotate(-360).end();
                        move('h2.music').scale(1).end();
                        move('#light').rotate(-360).end();
                        move('h2.light').scale(1).end();
                        break;
                    case 3:
                        move('#java').scale(1).end();
                        move('#html').scale(1).end();
                        move('#css').scale(1).end();
                        move('#mysql').scale(1).end();
                        move('#jmp').scale(1).end();
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    default:
                        break;
                }
            },
            afterLoad: function(anchorLink, index) {
                switch (index) {
                    case 1:
                        move('.page1 h1').scale(1.2).end();
                        move('.page1 p').scale(1.3).end();
                        //move('.page1 h4').set('margin-top','10%').end();
                        break;
                    case 2:
                        move('#clock').rotate(360).end(function() {
                            move('h2.alarm').scale(1.1).end(function() {
                                move('#android').rotate(360).end(function() {
                                    move('h2.android').scale(1.1).end(function() {
                                        move('#book').rotate(360).end(function() {
                                            move('h2.book').scale(1.1).end(function() {
                                                move('#apple').rotate(360).end(function() {
                                                    move('h2.apple').scale(1.1).end(function() {
                                                        move('#music').rotate(360).end(function() {
                                                            move('h2.music').scale(1.1).end(function(){
                                                                move('#light').rotate(360).end(function() {
                                                                    move('h2.light').scale(1.1).end();
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                        break;
                    case 3:
                        move('#java').scale(1.2).end();
                        move('#html').scale(1.2).end();
                        move('#css').scale(1.2).end();
                        move('#mysql').scale(1.2).end();
                        move('#jmp').scale(1.2).end();
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    default:
                        break;
                }


            }

        });

        $('a').hover(function() {
                $(this).addClass('mousehover');
            },
            function() {
                $(this).removeClass('mousehover');
            });
        $('#grad_courses').click(function() {
            if ($('#gra_courses').css('display') == 'none') {
                $('#gra_courses').show();
            } else {
                $('#gra_courses').css('display', 'none');
            }
        });
        $('#under_courses').click(function() {
            if ($('#und_courses').css('display') == 'none') {
                $('#und_courses').show();
            } else {
                $('#und_courses').css('display', 'none');
            }
        });

    });