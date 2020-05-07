var j,n,i=0;

	var s = ["m1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg","image6.jpg"];
			

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
					}
				}
