const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8083d4154fmsha398f533065c185p1f26bejsnd629c0a831f3',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

let buttonGetData = document.getElementById('btn-get')
buttonGetData.addEventListener('click', function(event){
	event.preventDefault()
	let inputNegara = document.getElementById('input-negara')
	let namaNegara = inputNegara.value
	let inputTanggal = document.getElementById('input-tanggal')
	let tanggal = inputTanggal.value
	if(namaNegara == "" && tanggal == "" ){
		alert('Negara dan Tanggal tidak boleh kosong!')
	} else if(namaNegara == ""){
		alert('Nama negara tidak boleh kosong!')
	} else if (tanggal == ""){
		alert('Tanggal tidak boleh kosong!')
	} else {
		fetch(`https://covid-193.p.rapidapi.com/history?country=${namaNegara}&day=${tanggal}`, options)
		.then(response => response.json())
		.then(response => {
			document.getElementById('text-active').innerHTML = response['response'][0]['cases']['active']
			document.getElementById('text-new').innerHTML = response['response'][0]['cases']['new']
			document.getElementById('text-recover').innerHTML = response['response'][0]['cases']['recovered']
			document.getElementById('text-totalcases').innerHTML = response['response'][0]['cases']['total']
			document.getElementById('text-deaths').innerHTML = response['response'][0]['deaths']['total']
			document.getElementById('text-tests').innerHTML = response['response'][0]['tests']['total']
		})
		.catch(err => alert('Nama negara atau tanggal yang diinput salah!'));
	}
})

