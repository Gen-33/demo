let elem1 = document.getElementsByClassName("sub-m1");
let elem2 = document.getElementsByClassName("sub-m2");
let elem3 = document.getElementsByClassName("sub-m3");
let elem4 = document.getElementsByClassName("sub-m4");

let elem5 = document.getElementsByClassName("c5");
let elem6 = document.getElementsByClassName("c6");
let elem7 = document.getElementsByClassName("c7");

let elem1d = document.getElementsByClassName("sub-md1");
let elem2d = document.getElementsByClassName("sub-md2");
let elem3d = document.getElementsByClassName("sub-md3");
let elem4d = document.getElementsByClassName("sub-md4");

let elem5d = document.getElementsByClassName("c5d");
let elem6d = document.getElementsByClassName("c6d");
let elem7d = document.getElementsByClassName("c7d");

let minmenu = document.getElementsByClassName("mm");
let minmenud = document.getElementsByClassName("mmd");

let lsql = document.getElementsByClassName("sqleft");
let lsqld = document.getElementsByClassName("sqleftd");	
let lsqr =	document.getElementsByClassName("sqright");
let lsqrd =	document.getElementsByClassName("sqrightd");


let minmenuAddN5 = document.getElementsByClassName("Added5");
let minmenuAddN6 = document.getElementsByClassName("Added6");
let minmenuAddN7 = document.getElementsByClassName("Added7");
let sgl, sqr;
//sql=(document.getElementsByClassName("sqleft")); 
//let wi = document.documentElement.clientWidth;

 window.addEventListener(`resize`, (event) => 
 {   mainnavload();
  // works with problems 15-09-2021 ---
 }, false);



function mainnavload()
{	console.log('test 24-01-2022 stop this damned cvirus');

	console.log(document.documentElement.offsetWidth - document.documentElement.clientWidth);

	 wi = document.documentElement.offsetWidth; // actually it doesnt work correctly ... nonone know why:))
	 net = document.documentElement.clientWidth;
	 wis = document.documentElement.clientWidth;
	 winet = wi - net;
	
		
	if (document.documentElement.clientWidth > (180*7+100))
	{
	elem1[0].style.display = "block";
	elem2[0].style.display = "block";
	elem3[0].style.display = "block";
	elem4[0].style.display = "block";
	elem5[0].style.display = "block";
	elem6[0].style.display = "block";
	elem7[0].style.display = "block";
	
	elem1d[0].style.display = "block";
	elem2d[0].style.display = "block";
	elem3d[0].style.display = "block";
	elem4d[0].style.display = "block";
	elem5d[0].style.display = "block";
	elem6d[0].style.display = "block";
	elem7d[0].style.display = "block";
	
	minmenu[0].style.display = "none";
	minmenud[0].style.display = "none";
	
	lsqr[0].style.display = "none";
	lsqrd[0].style.display = "none";
	lsql[0].style.display = "none";
	lsqld[0].style.display = "none";
		
	}
	
	if ((180*7) < (document.documentElement.clientWidth) || (180*7==document.documentElement.clientWidth))
	{console.log('width more than 1260');
	
	elem1[0].style.display = "block";
	elem2[0].style.display = "block";
	elem3[0].style.display = "block";
	elem4[0].style.display = "block";
	elem5[0].style.display = "block";
	elem6[0].style.display = "block";
	elem7[0].style.display = "block";
	
	elem1d[0].style.display = "block";
	elem2d[0].style.display = "block";
	elem3d[0].style.display = "block";
	elem4d[0].style.display = "block";
	elem5d[0].style.display = "block";
	elem6d[0].style.display = "block";
	elem7d[0].style.display = "block";
	
	minmenu[0].style.display = "none";
	minmenud[0].style.display = "none";
	
	lsqr[0].style.display = "none";
	lsqrd[0].style.display = "none";
	lsql[0].style.display = "none";
	lsqld[0].style.display = "none";
	}
		
	// 1: 6 items + min menu + 2 sections
	if (((180*6+60) <= document.documentElement.clientWidth )&&( document.documentElement.clientWidth < (7*180)))
	{
	elem1[0].style.display = "block";
	elem2[0].style.display = "block";
	elem3[0].style.display = "block";
	elem4[0].style.display = "block";
	elem5[0].style.display = "block";
	elem6[0].style.display = "block";
	elem7[0].style.display = "none";
	
	elem1d[0].style.display = "block";
	elem2d[0].style.display = "block";
	elem3d[0].style.display = "block";
	elem4d[0].style.display = "block";
	elem5d[0].style.display = "block";
	elem6d[0].style.display = "block";
	elem7d[0].style.display = "none";
	
	minmenu[0].style.display = "block";
	minmenud[0].style.display = "block";
		
	lsql[0].style.width = Math.trunc((document.documentElement.clientWidth - 6*180 - 60) / 2-1,3)+'px';
	lsql[0].style.display = "block";
	lsqld[0].style.width = Math.trunc((document.documentElement.clientWidth - 6*180 - 60) / 2-1,3)+'px';
	lsqld[0].style.display = "block";
	
	lsqr[0].style.width = Math.trunc((document.documentElement.clientWidth - 6*180 - 60) / 2-1,3)+'px';
	lsqr[0].style.display = "block";
	lsqrd[0].style.width = Math.trunc((document.documentElement.clientWidth - 6*180 - 60) / 2-1,3)+'px';
	lsqrd[0].style.display = "block";		
	}			
	// 2: 5 items + min menu + 2 sections
	if (((180*5+60) <= document.documentElement.clientWidth) && (document.documentElement.clientWidth < (6*180+60)))
	{  // 1154, 965 - problem
	elem1[0].style.display = "block";
	elem2[0].style.display = "block";
	elem3[0].style.display = "block";
	elem4[0].style.display = "block";
	elem5[0].style.display = "block";
	elem6[0].style.display = "none";
	elem7[0].style.display = "none";
	
	elem1d[0].style.display = "block";
	elem2d[0].style.display = "block";
	elem3d[0].style.display = "block";
	elem4d[0].style.display = "block";
	elem5d[0].style.display = "block";
	elem6d[0].style.display = "none";
	elem7d[0].style.display = "none";
	
	minmenu[0].style.display = "block";
	minmenud[0].style.display = "block";
		
	lsql[0].style.width = Math.trunc((document.documentElement.clientWidth - 5*180 - 60) / 2-1,3)+'px';
	lsql[0].style.display = "block";
	lsqld[0].style.width = Math.trunc((document.documentElement.clientWidth - 5*180 - 60) / 2-1,3)+'px';
	lsqld[0].style.display = "block";
	
	lsqr[0].style.width = Math.trunc((document.documentElement.clientWidth - 5*180 - 60) / 2-1,3)+'px';
	lsqr[0].style.display = "block";
	lsqrd[0].style.width = Math.trunc((document.documentElement.clientWidth - 5*180 - 60) / 2-1,3)+'px';
	lsqrd[0].style.display = "block";	

		console.log(elem1[0].style);
	}	
	
	// 3: 4 items + min menu + 2 sections
	if (((180*4+60) <= document.documentElement.clientWidth) && (document.documentElement.clientWidth < (5*180+60)))
	{			//	780----		960
	elem1[0].style.display = "block";
	elem2[0].style.display = "block";
	elem3[0].style.display = "block";
	elem4[0].style.display = "block";
	elem5[0].style.display = "none";
	elem6[0].style.display = "none";
	elem7[0].style.display = "none";
	
	elem1d[0].style.display = "block";
	elem2d[0].style.display = "block";
	elem3d[0].style.display = "block";
	elem4d[0].style.display = "block";
	elem5d[0].style.display = "none";
	elem6d[0].style.display = "none";
	elem7d[0].style.display = "none";
	
	minmenu[0].style.display = "block";
	minmenud[0].style.display = "block";
		
	lsql[0].style.width = Math.trunc((document.documentElement.clientWidth - 4*180 - 60) / 2-1,3)+'px';
	lsql[0].style.display = "block";
	lsqld[0].style.width = Math.trunc((document.documentElement.clientWidth - 4*180 - 60) / 2-1,3)+'px';
	lsqld[0].style.display = "block";
	
	lsqr[0].style.width = Math.trunc((document.documentElement.clientWidth - 4*180 - 60) / 2-1,3)+'px';
	lsqr[0].style.display = "block";
	lsqrd[0].style.width = Math.trunc((document.documentElement.clientWidth - 4*180 - 60) / 2-1,3)+'px';
	lsqrd[0].style.display = "block";		
	}	
	// 4: 4 items + min menu + 2 sections - repeat if less than 4
	if (document.documentElement.clientWidth < (4*180+60))
	{
	elem1[0].style.display = "block";
	elem2[0].style.display = "block";
	elem3[0].style.display = "block";
	elem4[0].style.display = "block";
	elem5[0].style.display = "none";
	elem6[0].style.display = "none";
	elem7[0].style.display = "none";
	
	elem1d[0].style.display = "block";
	elem2d[0].style.display = "block";
	elem3d[0].style.display = "block";
	elem4d[0].style.display = "block";
	elem5d[0].style.display = "none";
	elem6d[0].style.display = "none";
	elem7d[0].style.display = "none";
	
	minmenu[0].style.display = "block";
	minmenud[0].style.display = "block";
		
	lsql[0].style.display = "none";

	lsqld[0].style.display = "none";
		
	lsqr[0].style.display = "none";

	lsqrd[0].style.display = "none";		
	} /* */
	secondfunc();
}


function secondfunc(){
	let qt = getRandomInt(1, 10); //<!-- from 1 to 9 must be -->
	currentSlide(qt);
}



   




   
 /* (function () {   
  }());*/
  
// ******inserted from cite js for slideshow/start ******
 let slideIndex = 1;
function plusSlides(n) {
  showSlides(slideIndex += n);
};
function currentSlide(n) {
  showSlides(slideIndex = n);
};
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} // 2, 3, 4 ; 4 ка срабатывает
  if (n < 1) {slideIndex = slides.length} //0, 1, 2 срабатывает 0
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }   
  (slides[slideIndex-1].style.height) = "50px";
   slides[slideIndex-1].style.display = "block";  
   testg = (slides[slideIndex-1].style.height);
   dots[slideIndex-1].className += " active";
 };
//*******slideshow end ******

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}; // getRandomInt(10, 20)



 let logovar = 0;

function clifive(NL) 
{		// *** v/ 10/09/2021 ***
	//console.log('start'+Date.now());
	let start = Date.now();
	let bf0 = [];
	let bf=[], bfr = [];  
	let slcount, slstep, shiftint;
	let te;
		
	logovar = document.getElementsByClassName("clogo");	
	logov = document.getElementsByClassName("clogo0");	
	shiftint = (NL*2260-3+3); // in miliseconds
	console.log(shiftint + '=seconds from start');
	//console.log(logovar[0].style.display);
	for (i = 0; i < NL; i++) 
	{ 	
		logovar[i].style.display = "block";	
		logovar[i].style.left = ((62+i*252))+'px';		
		bf0[i] = parseInt(logovar[i].style.left);						
	};					
	let iq = 0;
	let n = 1;

		// iq - must be infinite - variable of time windows, question
				
		{ // console.log('cyclerun is started');
		for (iz = 0; iz < NL; iz++)
						{	// здеесь iq увеличивается на 1	
							// цикл не двойной потому что сколько слайдов столько и шагов !!!																	 
									// ***! --> здесь делается несколько шагов одного слайда
							setTimeout(function(){iq++}, 2260*(iz+1)); // ***! --> здесь делается несколько шагов одного слайда
							setTimeout(run, 1*2260*iz, slcount, slstep);	// это - шаги каждого слайда!										
						}							
						//***********						
		function run(){    
							 let timePassed2 = Date.now() - start;
					   					  		
							 if(timePassed2<(1000*(iq+1)+iq*1260))
										{//console.log('lower than 1k');
											setTimeout(						
														function(){ 								
														run();											
														});
										} 			
								// "-10" to remove starting  jerk after 7 sec
							 if(((iq*1260+1000+1000*iq-0)<=timePassed2
							 &&timePassed2<((iq+1)*1260+0+(iq+1)*1000-3))) 
							 { // "-3" to terminate return flashes (jerks) of slides 
															
								setTimeout(					
									function()									
										{									  
										 draw((timePassed2-1000*(iq+1)), slcount, slstep);
																		
										 run();																			
										});										
							 };						
							}; //**** run end													
															
				/*
				function drawnull(timePa){					
					 let re;
					 re = (NL-iq-1);				 
					 logovar[re].style.left = '0px'; 					 				
				};				
				*/		
								
				function draw(timePa, slcount, slstep){													
														
					for (izzi = 0; izzi < NL; izzi++){
									
					bf[izzi] = (timePa/5+bf0[izzi]);					
					 //if ((parseFloat(logovar[izzi].style.left) <= 1322))
						 {
						 // 252 * 5 + 62 = 1322
						 logovar[izzi].style.left = bf[izzi] +'px';
						 //rn = (NL-izzi-1);	
							if ((parseFloat(logovar[izzi].style.left) > 1322))
									{	//console.log('more than 1322');
										//	logovar[izzi].style.display = 'none';	
																 
									} else {logovar[izzi].style.display = "block";	};						 
							if (parseFloat(logovar[izzi].style.left)>=((NL-1)*252+62)) // ((NL-1)*252+62) or 1826
							{
								
							te = parseFloat(logovar[izzi].style.left) - ((NL)*252); // approx 2000 with NL=8
							logovar[izzi].style.left = te + 'px';
							
							}											 						 
						};
						 		
						// last step checking 
						if (parseFloat(logovar[0].style.left) >= ((NL-1)*252+60))
						 {		
							//console.log('99++--//');							
						 };						
					};				
					};
		};						
		 setTimeout(clifive, shiftint, NL);						
					//	setTimeout("(console.log('00-*-00'))", 27000);				
					// NL*1000*3 = not bad / small delay but it is good - 7 seconds against 1 sec
					// timing must be thought through - not working smoothly
									
}; // ***00******** end bracket of clifive() 09.09.2021 ********00***
