/**
 * Created by nimishagoyal on 21/07/17.
 */
$(function () {
    $.get('/all', function (data) {
        console.log(data);
        for (var prop in data) {
            $('#container').append(
                '<div class="bar col-md-6">' +
                '<div class="inner-bar">' +
                '<img src=" ' + data[prop].img + '">' +
                '<ul>' +
                '<li class="bar-name"><h3 ><a class="anchor" id="'+data[prop].name+'">' + data[prop].name + '</a></h3></li>' +
                '<li class="bar-address">' + data[prop].address + '</li>' +
                '<li class="bar-tel">' + data[prop].tel + '</li>' +
                '</ul>' +
                '</div>' +
                '</div>'
            );
        }
        $('.anchor').click(function () {
            //console.log("hi");
            //$('#collage').append("hi");
            console.log("id= "+this.id);
            $.post('/bars', {id:this.id}, function (data) {
                console.log(data);
                // main(JSON.stringify(data));
                main(data);


            });

            window.location.href="bar.html";
        });
    });
    display = function(){
        console.log(window.obj);
    };

    function main(data) {
        window.obj = data;
        console.log("maindata: ");
        console.log(window.obj);


    }


});