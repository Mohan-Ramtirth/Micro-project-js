var j,n,i=0;

	var s = ["m1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg","image6.jpg"];
		
		function togg()
		{
			var element = document.body;
			var icon = document.querySelector("#icon");
			var fa = document.querySelector(".fa");
			element.classList.toggle("light-mode");
			if (element.className == "light-mode")
			 {
			 	icon.style.backgroundColor = "black";
			 	fa.style.color = "white";

			 }
			 else
			 {
			 	icon.style.backgroundColor = "white";
			 	fa.style.color = "grey";

			 }

		}	

		function slide()
		{
			document.querySelectorAll(".b").item(j).style.backgroundColor="#bbb";
			document.querySelectorAll(".b").item(i).style.backgroundColor="dodgerblue";
			
				page();	
			

		}

			
		

		

		function page()
		{
			document.getElementById("num").innerHTML = i+1+"/"+s.length;
			document.querySelector("#num").style.opacity="1";
			document.querySelector("#num").style.transition="opacity 2s ease";				
				setTimeout(function(){
				document.querySelector("#num").style.opacity="0";

			},2000);
		}


		function dot(k)
		{
			var x = document.querySelectorAll(".b");

				i=k;
				page();


					for(j=0;j<=5;j++)
					{
						document.querySelectorAll(".b").item(j).style.backgroundColor="#bbb";
				
					}
			 	
				document.querySelectorAll(".b").item(k).style.backgroundColor="dodgerblue";
				
				document.querySelector(".image-container").style.left="-"+k+"00%";

		}


		
		function Mslide()
		{
			j=i;
			i=i-1;

					if(i<0)
					{
						i=0;
					}

				document.querySelector(".image-container").style.left="-"+i+"00%";


				slide();
		}	



		function Pslide()
		{
			j=i;
			i=i+1;
			
					if(i>5)
					{
						i=5;
					}


				document.querySelector(".image-container").style.left="-"+i+"00%";	
				

				slide();

		}


	document.onkeydown = function(event)
				{
					switch(event.keyCode)
					{
						case 37: Mslide();
								 break;

						case 39: Pslide();
								 break; 

						case 84: togg();
						         break;
					}
				}

function setCookie(cname,cvalue,exdays)
{
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";	
}

function getCookie(cname)
{
	var name = cname + "=";
	var ca = document.cookie.split(';');

	for (var i = 0; i < ca.length; i++) 
	{
		var c =	ca[i];
		while(c.charAt(0) == ' ')
		{
			c = c.substring(1);
		}

		if(c.indexOf(name) == 0)
		{
			return c.substring(name.length,c.length);
		}
	}
	return "";
}

function checkCookie()
{
	var user = getCookie('username');

	if(user != "")
	{
		alert("Welcome again "+user);
	}
	else
	{
		user = prompt("Please Enter Your Name :");
		if(user != "" && user != null)
		{
			setCookie("username",user,365);
		}
	}
}