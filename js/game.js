
var items = {
	keycard : false,
	knife 	: false,
	gun		: false,
}

function pickup(item)
{
	items[item] = true;
}

//function for picking up certain items

function get(id) {
	return document.getElementById(id);
}

function start() {
	p1();
	get('option1').innerHTML = 'Play';
	get('level_title').innerHTML = 'Stranded';
}

function optA() {
			alert("You found the keys!!");
			HasKey = true;
			Level5();
}
function optB() {
	alert("Nobody present");
}
function optC() {
	alert("Some metal scraps from the attack maybe");
}
function reload() {
	location.reload();
}

function p1() {
	get('option1').style.display = 'inline';
	get('option2').style.display = 'none';
	get('option3').style.display = 'none';
}	// 2 buttons
function p2() {
	get('option1').style.display = 'inline';
	get('option2').style.display = 'inline';
	get('option3').style.display = 'none';
}	// 3 buttons
function p3() {
	get('option1').style.display = 'inline';
	get('option2').style.display = 'inline';
	get('option3').style.display = 'inline';

}	// Level 1 Awakening in the Cryoroom

function Level1() {
	console.log("Level1()");
	get('level_title').innerHTML = 'And so the journey begins';
	get('status').innerHTML = 'Youve awaken in the Cryoroom, Ship is on emergency power';
	p2();
	get('option1').style.top = '0px';
	get('option2').style.top = '0px';
	get('option1').style.left = '0px';
	get('option2').style.left = '0px';

		// Option 1 - Accept
	var opt1 = get('option1');
	opt1.innerHTML = 'Walk to the hallway';
	opt1.setAttribute("onClick", "javascript:Level2();");

		// Option 2 - Look in the Room
	var opt2 = get('option2');
	opt2.innerHTML = "Look in the room";
	opt2.setAttribute("onClick", "");
}	// Level 2 - Hallway