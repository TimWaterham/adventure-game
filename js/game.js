
var items = {
	keycard : false,
	knife 	: false,
	gun		: false,
};

var situation = {
	power : false,
};

function pickup(item)
{
	items[item] = true;
}

//function for picking up certain items

function get(id) {
	return document.getElementById(id);
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
	get('level_image').src = "img/cryo.jpg";
	p3();
	get('option1').style.top = '0px';
	get('option2').style.top = '0px';
	get('option1').style.left = '0px';
	get('option2').style.left = '0px';
	get('option3').style.top = '0px';
	get('option3').style.left = '0px';

		// Option 1 - Accept
	var opt1 = get('option1');
	opt1.innerHTML = 'Walk to the hallway';
	opt1.setAttribute("onClick", "javascript:Level2();");

		// Option 2 - Look in the Room to get a keycard for the armory locker
	var opt2 = get('option2');
	opt2.innerHTML = "Look in the room";
	opt2.setAttribute("onClick", "items[0]=(true);");
}		

// Level 2 - Hallway

function Level2() {
	console.log("Level1()");
	get('level_title').innerHTML = 'Find a way to restore power to the ship';
	get('status').innerHTML = 'You can go to the armory, to find some tools if needed, or you can go to see if you can access engineering';
	get('level_image').src = "img/hallway.jpg";
	p3();
	get('option1').style.top = '0px';
	get('option2').style.top = '0px';
	get('option1').style.left = '0px';
	get('option2').style.left = '0px';
	get('option3').style.top = '0px';
	get('option3').style.left = '0px';

		// Option 1 - Accept
	var opt1 = get('option1');
	opt1.innerHTML = 'Walk to engineering';
	opt1.setAttribute("onClick", "javascript:Level3();");

		// Option 2 - Look in the Room to get a keycard for the armory locker
	var opt2 = get('option2');
	opt2.innerHTML = "Walk to the Armory";
	opt2.onclick = function(){
		if(items[0]){
			Level4();
		} else {
			alert('Its locked magnetically, impossible to force open, you have to find a keycard.');
		}
	};

	var opt3 = get('option3')
	opt3.innerHTML = "Return to the Cryoroom"
	opt3.setAttribute("onClick", "javascript:Level1();");
}		// Level 2 - Hallway
