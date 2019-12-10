
  /*var _sliderItems = document.querySelector('.slider_item');
  var sliderIndicators = document.createElement('ol');
  sliderIndicators.classList.add('slider__indicators');
         var sliderIndicatorsItem = document.createElement('li');
              sliderIndicatorsItem.classList.add('active');
              sliderIndicators.appendChild(sliderIndicatorsItem);
              _sliderItems.appendChild(sliderIndicators);*/



function displayLocation(latitude,longitude){
	        let request = new XMLHttpRequest();

	        let method = 'GET';
	        let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&key=AIzaSyC1Gmq71IvFRPah8m0VYL6iICOwtHEshss';
	        let async = true;

	        request.open(method, url, async);
	        request.onreadystatechange = function(){
	          if(request.readyState == 4 && request.status == 200){
	            let data = JSON.parse(request.responseText);
	            let address = data.results[0];
	            let city = address.address_components[2].short_name;
	            let city_user = document.getElementById("user_city");
	            city_user.innerHTML = city;
	            if (city != 'Москва') {
	            	let phone = '7 900 0000 777';
	            	phone_user.innerHTML = phone;
	            	phone_user_tablet.innerHTML = phone;
	            }
	          }
	        };
	        request.send();
	      };

	      let successCallback = function(position){
	        let x = position.coords.latitude;
	        let y = position.coords.longitude;
	        displayLocation(x,y);
	      };

	      let errorCallback = function(error){
	        let errorMessage = 'Unknown error';
	        switch(error.code) {
	          case 1:
	            errorMessage = 'Permission denied';
	            break;
	          case 2:
	            errorMessage = 'Position unavailable';
	            break;
	          case 3:
	            errorMessage = 'Timeout';
	            break;
	        }
	        alert(errorMessage);
	      };

	      let options = {
	        enableHighAccuracy: true,
	        timeout: 1000,
	        maximumAge: 0
	      };

	      navigator.geolocation.getCurrentPosition(successCallback,errorCallback,options);