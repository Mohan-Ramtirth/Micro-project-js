var m;
			var elem = document.querySelectorAll(".b");
			var a = document.querySelectorAll("a");

			document.querySelector(".container").addEventListener("mouseover",imover);
			document.querySelector(".container").addEventListener("mouseout",imout);

				

			function imover()
			{
				a[0].style.display = "block";
				a[1].style.display = "block";
			}

			function imout()
			{
				a[0].style.display = "none";
				a[1].style.display = "none";
			}
			function add(event){
					if(event.target.style.backgroundColor!="dodgerblue")
					{
						event.target.style.backgroundColor="skyblue";

					}
				}

				function sub(event)
				{
					if(event.target.style.backgroundColor!="dodgerblue")
					{
						event.target.style.backgroundColor="#bbb";
					}
				}
					
				function aover(event)
				{
					if(i==0 && event.target == a[0])
					{
						a[0].style.backgroundColor="transparent";
						a[0].style.cursor = "not-allowed";				
				

					}
					else if(i==5 && event.target == a[1])
					{
						a[1].style.backgroundColor="transparent";
						a[1].style.cursor = "not-allowed";
					}
					else
					{
						event.target.style.backgroundColor="rgba(0,0,0,0.8)";
						event.target.style.cursor = "pointer";
					}
				}

				function aout(event)
				{
					event.target.style.backgroundColor = "transparent";
				}


			for(m=0;m<2;m++)
			{
				a[m].addEventListener("mouseover",aover);
				a[m].addEventListener("mouseout",aout);
			}
			for(m=0;m<elem.length;m++)
			{
				elem[m].addEventListener("mouseover",add);
				elem[m].addEventListener("mouseout",sub);
				
				
			}

			