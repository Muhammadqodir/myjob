var altContactData = [];
function addAltContactRow() {
	var no = altContactData.length;
	var htmlData = '<div class="row" id="altC'+no+'">'+
	'<div class="col-md-5"><div class="formControl" style="margin-top: 10px;">'+
	'<select onchange="saveAltContactRow('+no+')" id="altC_key'+no+'">'+
	'<option>Почта</option><option>Facebook</option><option>Instagram</option><option>IMO</option><option>Linkedin</option><option>Telegram</option><option>Twitter</option><option>Viber</option><option>IMO</option><option>VK</option><option>WhatsApp</option></select></div></div><div class="col-6" style="padding-left: 0px; padding-right: 0px;"><div class="formControl" id="" style="margin-top: 10px;">'+
	'<input onkeyup="saveAltContactRow('+no+')" id="altC_val'+no+'"></div></div><div class="col-1">'+
	'<h5 class="backButton" onclick="removeAltContactsRow('+no+')">'+
	'<i class="fas fa-trash-alt" ></i></h5></div></div>';
	altContactData.push({"key": "IMO", "value":"empty"});
	$("#altContacts").append(htmlData);
}

function getAltContacts() {
	var returnData = [];
	for (var i = 0; i < altContactData.length; i++) {
		if (altContactData[i]["value"] != "empty" || altContactData[i]["value"] != "") {
			returnData.push(altContactData[i]);
		}
	}
	return JSON.stringify(returnData);
}

function removeAltContactsRow(id) {
	$("#altC"+id).remove();
	altContactData[id]["value"] = "empty";
}

function saveAltContactRow(id) {
	var key = $("#altC_key"+id+" option:selected").text();
	// console.log(key);
	var val = $("#altC_val"+id).val();
	// console.log(val);
	var newContact = {"key": key, "value": val};
	altContactData[id] = newContact;
}

var skillsList = [];
function initSkillBtn() {
	var input = document.getElementById("skill");
	input.addEventListener("keyup", function(event) {
	  if (event.keyCode === 13) {
	    event.preventDefault();
	    document.getElementById("btnAddSkill").click();
	  }
	});
}

function removeSkill(id) {
	$("#skill"+id).remove();
}

function addSkill() {
	var skill = $("#skill").val();
	if (skill != "") {
		var no = skillsList.length;
		$("#skill").val("");
		$("#skillsList").append('<span class="skill" id="skill'+no+'"> <i class="far fa-check-circle"></i> '+skill+' <i class="fas fa-times" onclick="removeSkill('+no+')" style="color: #FF5F5F; cursor: pointer;"></i> </span>');
		skillsList.push(skill)
	}
}