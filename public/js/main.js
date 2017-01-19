var $friends = $('#friends');

var $name = $('#name');

var $occupation = $('#occupation');

var $age = $('#age');

var friendTemplate = "" +

    "<li>" +

    "<p><strong>Name:</strong> {{name}}</p>" +

    "<p><strong>Occupation:</strong> {{occupation}}</p>" +

    "<p><strong>Age:</strong> {{age}}</p>" +

    "</li>"

//Adding a friend

function addFriend(friend){

    $friends.append(Mustache.render(friendTemplate, friend));

};

$(document).ready(function(){

    //alert("JQuery is working");

    //GET Data request

    $.ajax({

        type: 'GET',

        url: "http://rest.learncode.academy/api/learncode/friends",

        

        success: function(friends){

            $.each(friends, function(i, friend){

                addFriend(friend);

            });

        },
        error    : function(){

            alert('Error');

        }

    });

});

 //POST to add a friend

    $('#add-friend').on('click', function(){

        var friend = {

            name: $name.val(),

            occupation: $occupation.val(),

            age: $age.val(),

        };

        $.ajax({

        type: 'Post',

        url: "http://rest.learncode.academy/api/learncode/friends",

        data: friend,

        success: function(newFriend){

            addFriend(newFriend);

            },

        error: function(){

            alert('Error');

            }

        });

    });