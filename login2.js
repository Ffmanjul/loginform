function validate()
{
var username=document.getElementByID("username").value;
var password=document.getElementByID("password").value;
if(username=="admin"&& password=="user")
{
	alert("login succesfully");
	return false;

}
else
{

	alert("login failed");

}
}