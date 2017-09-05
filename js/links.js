$(document).ready(function() {
  const $ul = $('#personal-links');
  const $title = $('#title');
  const $url = $('#url');
  const $setul = $('#settings-personal-links');

  $('#loading').hide();
  loadLinks();

  function loadLinks(){
    if(localStorage.getItem('wtx')){
        $ul.html(localStorage.getItem('wtx'));
        $setul.html(localStorage.getItem('wtx'));
    };
  };

  let currentCity = "";
  if(localStorage.getItem('wtx-city')){
      currentCity = localStorage.getItem('wtx-city')
  }else {
    currentCity = "Provo, UT";
    };
  $(".current-city").html(currentCity);

  //random background image
  const numOfPhotos = 18;
  let ranNum = Math.random() * (numOfPhotos - 1);
  ranNum = Math.ceil(ranNum);
  console.log(ranNum, "this is the random number");
  $('.full-background').css('background-image', 'url(../images/test' + ranNum + '.jpg)');
    let photoCaption = ""
    if(ranNum == 1){
        photoCaption = "Thanksgiving Point Summer Party 2017"
    }else if(ranNum > 1 && ranNum < 6 ){
        photoCaption = "Intern Canyoneering 2017";
    }else if(ranNum == 6 || ranNum == 7 || ranNum == 9 || ranNum == 11){
        photoCaption = "Snowbird Retreat 2016"
    }else if(ranNum == 8 || ranNum == 10){
        photoCaption = "Wavetronix Open House 2016"
    };

    $('#photo-caption').html(photoCaption);
    $('.full-background').css('background-image', 'url(../images/backer' + ranNum + '.jpg)');
  
  //toggle menu
  $("#settings-menu").hide();
  $('#settings').click(function() {
      $('#loading').hide();
      $('#settings-menu').toggle("slide");
      console.log("clicked");
  });
  $('#close-settings').click(function() {
      $('#loading').hide();
      $('#settings-menu').toggle("slide");
      console.log("clicked");
  });

  // add new item
  $('#add').click(function () {
    var ini = $url.val().substring(0, 4);
    if (ini !== '' && ini !== 'http'){
        $url.val('http://' + $url.val());
    } 
    $('#personal-links').append('<li><a href="'+$url.val()+'" target="_blank">'+$title.val()+'</a><button class="removebtn">X</button></li>');
    localStorage.setItem('wtx', $ul.html());
    loadLinks();
    $title.val("");
    $url.val("http://");
  });
  
  //remove item
  $(".removebtn").live('click',function() {
    $(this).parent().replaceWith("");
    //save changes to localstorage
    localStorage.setItem('wtx', $setul.html());
    loadLinks();
  });

  //change local weather city
  $('#add-city').live('click', function() {
      $('#loading').show();
      currentCity = $('#city').val();
      localStorage.setItem('wtx-city', currentCity);
      console.log('this is the current city thing', $('#city').val());
      $(".current-city").html(currentCity);
      getWeather();
      $('#settings-menu').toggle("slide");
  })

  getWeather();

  function getWeather(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appId=9e3f27be804f6018e3b5c76ba252f06b`, false);
    xhr.send();
    let response = JSON.parse(xhr.responseText);
    let temp = response.main.temp;
    temp = temp*9/5 - 459.67;
    temp = Math.round(temp);
    $('#weather-temp').html(temp);
  }


    //checklist for wavetronix links
    let array = [];
    let linkArray = ["roadway", "kbox", "saba", "adp", "pto", "walkertracker", "concur", "glassfrog", "facilities", "todoist", "fidelity", "hsa", "myhealth", "directory", "quickstart"];
    if(localStorage.getItem("wtx-links-on-off")){
        let temp = localStorage.getItem('wtx-links-on-off');
        temp = JSON.parse(temp);
        array = temp;
        for(let x = 0; x < linkArray.length; x++){
            if(array[x] == 0){
                $('.' + linkArray[x] + ' input').attr('checked', false);
                $('#' + linkArray[x]).hide();
            }else{
                $('.' + linkArray[x] + ' input').attr('checked', true);
                $('#' + linkArray[x]).show();
            }
        }
    }else {
        for(let x = 0; x < linkArray.length; x++){
            $('.' + linkArray[x] + ' input').attr('checked', true);
            array[x] = 1;
            $('#' + linkArray[x]).show();
        }
    }


    for(let x = 0; x < linkArray.length; x++){
        $('.' + linkArray[x] + ' label').click(function(){
            if($('.' + linkArray[x] + ' input').attr('checked')){
                $('.' + linkArray[x] + ' input').attr('checked', false);
                array[x] = 0;
                localStorage.setItem('wtx-links-on-off', JSON.stringify(array));
                $('#' + linkArray[x]).hide();
            }else {
                $('.' + linkArray[x] + ' input').attr('checked', true);
                array[x] = 1;
                localStorage.setItem('wtx-links-on-off', JSON.stringify(array));
                $('#' + linkArray[x]).show();
            }
        })
    }

});



