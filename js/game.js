
var items = {
	keycard : false,
	toolbox : false
};

var situations = {
	power  : false,
	shield : false,
	emergencypower: false
};

function pickup(item)
{
	items[item] = true;
}

function enable(situation)
{
	situations[situation] = true;
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

function i1() {
	get('1').style.display = 'none';
}

function Level1() {
	console.log("Level1()");
	get('level_title').innerHTML = 'And so the journey begins';
	get('status').innerHTML = 'Youve awaken in the Cryoroom, Ship is on emergency power';
	get('level_image').src = "img/cryo.jpg";
	p3();
	get('option1').style.top = '600px';
	get('option2').style.top = '650px';
	get('option1').style.left = '550px';
	get('option2').style.left = '0px';
	get('option3').style.top = '600px';
	get('option3').style.left = '700px'; 

		// Option 1 - Accept
	var opt1 = get('option1');
	opt1.innerHTML = 'Walk to the hallway';
	opt1.setAttribute("onClick", "javascript:Level2();");

		// Option 2 - Look in the Room to get a keycard for the armory locker
	var opt2 = get('option2');
	opt2.innerHTML = "Look in the room";
	opt2.setAttribute("onClick", "pickup('keycard')");

	var opt3 = get('option3');
	opt3.innerHTML = "Wake up the crew";
	opt3.onclick = function(){
		if(situations.power){
			Level5();
		} else {
			alert('There is not enough power to safely awaken the crew.');
		}
	};

}	

// Level 2 - Hallway

function Level2() {
	console.log("Level2()");
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
		if(items.keycard){
			Level4();
		} else {
			alert('Its locked magnetically, impossible to force open, you have to find a keycard.');
		}
	};

	var opt3 = get('option3')
	opt3.innerHTML = "Return to the Cryoroom"
	opt3.setAttribute("onClick", "javascript:Level1();");
}		// Level 2 - Hallway


function Level3() {
	console.log("Level3()");
	get('level_title').innerHTML = 'Find a way to restore power to the ship';
	get('status').innerHTML = 'You can try to put the reactor on, but thats dangerous if the emergency power isnt running.';
	get('level_image').src = "img/reactor.jpg";
	p3();
	get('option1').style.top = '400px';
	get('option2').style.top = '400px';
	get('option1').style.left = '1000px';
	get('option2').style.left = '100px';
	get('option3').style.top = '650px';
	get('option3').style.left = '400px';

	var opt1 = get('option1');
	opt1.innerHTML = 'Turn on Reactor Shielding';
	opt1.onclick = function(){
		if(situations.emergencypower){
			enable("shield");
		} else { 
			alert('there is no power to turn the shield on')
			}
	};

	var opt2 = get('option2');
	opt2.innerHTML = "Turn on the Reactor";
	opt2.onclick = function(){
		if(situations.shield){
			enable("power");
		} else {
			Level6()
	};
}
	var opt3 = get('option3')
	opt3.innerHTML = "Return to the Hallway"
	opt3.setAttribute("onClick", "javascript:Level2();");

}

function Level4() {
	console.log("Level4()");
	get('level_title').innerHTML = 'Find some tools to help you out';
	get('status').innerHTML = 'You notice the conduit is broken, but cant fix it without the proper tools';
	get('level_image').src = "img/armory.jpg";
	p3();
	get('option1').style.top = '400px';
	get('option2').style.top = '400px';
	get('option1').style.left = '1000px';
	get('option2').style.left = '100px';
	get('option3').style.top = '400px';
	get('option3').style.left = '400px';

	var opt1 = get('option1');
	opt1.innerHTML = 'Search The Room';
	opt1.setAttribute("onClick", "pickup('toolbox')");

	var opt2 = get('option2');
	opt2.innerHTML = "Fix the broken conduit";
	opt2.onclick = function(){
		if(items.toolbox){
			enable("emergencypower");
		} else {
			Level7()
	};
}
	var opt3 = get('option3')
	opt3.innerHTML = "Return to the Hallway"
	opt3.setAttribute("onClick", "javascript:Level2();");

}

function Level5() {
	console.log("Level5()");
	get('level_title').innerHTML = 'Youve awaken the crew, Time to get home';
	get('status').innerHTML = 'Congrats, you won.';
	get('level_image').src = "img/bridge.jpg";
	p1();
	get('option1').style.top = '400px';
	get('option1').style.left = '1000px';

	var opt1 = get('option1');
	opt1.innerHTML = 'Restart ?';
	opt1.setAttribute("onClick", "location.reload(true)");

}

function Level6() {
	console.log("Level6()");
	get('level_title').innerHTML = 'The ship exploded due to the reactor failing without the shield.';
	get('status').innerHTML = 'You lost.';
	get('level_image').src = "img/end.jpg";
	p1();
	get('option1').style.top = '400px';
	get('option1').style.left = '1000px';

	var opt1 = get('option1');
	opt1.innerHTML = 'Restart ?';
	opt1.setAttribute("onClick", "location.reload(true)");

}

function Level7() {
	console.log("Level7()");
	get('level_title').innerHTML = 'You tried to fix the conduit without the proper equipment, caused a overload which made the entire ship explode due to a overload.';
	get('status').innerHTML = 'You lost.';
	get('level_image').src = "img/electronicoverload.jpg";
	p1();
	get('option1').style.top = '400px';
	get('option1').style.left = '1000px';

	var opt1 = get('option1');
	opt1.innerHTML = 'Restart ?';
	opt1.setAttribute("onClick", "location.reload(true)");

}