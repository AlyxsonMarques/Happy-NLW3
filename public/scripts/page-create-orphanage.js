const map = L.map('mapid').setView([-23.5400615, -46.2051663], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon
({
	iconUrl: "/images/map-marker.svg",
	iconSize: [58, 68],
	iconAnchor: [29, 68],
})

let marker;

map.on('click', (event) => 
{
	const lat = event.latlng.lat;
	const lng = event.latlng.lng;

	document.querySelector('[name=lat]').value = lat;
	document.querySelector('[name=lng]').value = lng;

	// remove icon
	marker && map.removeLayer(marker);
	//means
	/*
	if(marker)
	{
		map.removeLayer(marker);
	}
	*/

	//add icon layer
	marker = L.marker([lat, lng], { icon })
	.addTo(map);
});


//photos upload
function addPhotoField()
{
	const container = document.querySelector('#images');

	const fieldsContainer = document.querySelectorAll('.new-upload');

	const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

	const input = newFieldContainer.children[0]

	if(input.value == "")
	{
		return;
	}

	newFieldContainer.children[0].value = "";
	
	container.appendChild(newFieldContainer);
}

function deleteField(event)
{
	const span = event.currentTarget;

	const fieldsContainer = document.querySelectorAll('.new-upload');

	if(fieldsContainer.length <= 1)
	{
		span.parentNode.children[0].value = "";
		return
	}

	span.parentNode.remove();

}

function toggleSelect(event)
{
	document.querySelectorAll('.button-select button')
	.forEach((button) => button.classList.remove('active'));

	const button = event.currentTarget;
	button.classList.add('active');

	const input = document.querySelector('[name="opening_on_weekends"]');
	
	input.value = button.dataset.value
}

function validate(event)
{
	const latitude = document.querySelector('.latitude');
	const longitude = document.querySelector('.longitude');

	if(latitude.value == '' || longitude.value == '')
	{
	event.preventDefault();
	window.alert("Preencha a localização =)");
	}
}