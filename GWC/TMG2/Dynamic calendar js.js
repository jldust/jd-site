// JavaScript Document
/*This function builds a calender dynamically**/
function buildCal(m, y, cM, cH, cDW, cD, brdr)
{
	/*Store the months in a list, and the number of days in each month*/
	var monthNames=['January','February','March','April','May','June','July','August','September','October','November','December'];
	var daysInMonth=[31,0,31,30,31,30,31,31,30,31,30,31];

	var oD = new Date(y, m-1, 1); //DD replaced line to fix date bug when current day is 31st
	oD.od=oD.getDay()+1; //DD replaced line to fix date bug when current day is 31st

	/*Get today's date*/
	var todaydate=new Date()
	var scanfortoday=(y==todaydate.getFullYear() && m==todaydate.getMonth()+1)? todaydate.getDate() : 0

	/*Check number of days for the current month*/
	daysInMonth[1]=(((oD.getFullYear()%100!=0)&&(oD.getFullYear()%4==0))||(oD.getFullYear()%400==0))?29:28;
	
	/*Draw Calendar Table*/
	var t='<div class="'+cM+'"><table class="'+cM+'" cols="7" cellpadding="0" border="'+brdr+'" cellspacing="0"><tr align="center">';
	t+='<td colspan="7" align="center" class="'+cH+'">'+monthNames[m-1]+' - '+y+'</td></tr><tr align="center">';
	
	/*Write days of week out on calendar*/
	for(s=0;s<7;s++)t+='<td class="'+cDW+'">'+"SMTWTFS".substr(s,1)+'</td>';
	t+='</tr><tr align="center">';
	
	/*Write each day of the month out on calendar*/
	for(i=1;i<=42;i++)
	{
		var x=((i-oD.od>=0)&&(i-oD.od<daysInMonth[m-1]))? i-oD.od+1 : '';
		var y='<a href ="Add events page.html">'+x+'</a>' //DD added
		/*Highlight today in calendar so that we see it!*/
		if (x==scanfortoday && m==todaydate.getMonth()+1) //DD added
			y='<span id="today">'+y+'</span>'; //DD added
			
			t+='<td class="'+cD+'">'+y+'</td>';
		if(((i)%7==0)&&(i<36))t+='</tr><tr align="center">';
	}
	return t+='</tr></table></div>';
}