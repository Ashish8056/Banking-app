function loginValue(){
	
	document.getElementById("euid").innerHTML="";
	document.getElementById("epass").innerHTML="";
	var st=true;
	if(document.getElementById("uid").value==""){
		st=false;
		document.getElementById("euid").innerHTML="User id is required";
	}
	if(document.getElementById("pass").value==""){
		st=false;
		document.getElementById("epass").innerHTML="Password is required";
	}
	return st;		
}
function activeLink(linkid)
{
	document.getElementById(linkid).style.color='green';
}
function checkAmountLimit()
{
	if(document.getElementById("amount").value>15000)
	{
		document.getElementById("msg").innerHTML="Dear user, maximum 15000 is allowed per transaction";
		return false;
	}
	return true;
}
function checkNo()
{
	if(document.getElementById("an").innerHTML==document.getElementById("accountno").value)
	{
		document.getElementById("msg").innerHTML="Dear user, this is your own account no";
		return false;
	}
	return true;
}