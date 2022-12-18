let listActivity = localStorage.getItem('listActivity')
let parseList = []

if(listActivity){
    parseList = JSON.parse(listActivity)
    parseList.forEach(activity => {
        let newActivity = document.createElement('li')
        newActivity.textContent = activity.activity
        document.getElementById('list-aktivitas').append(newActivity)
    })    
}

function handleClear(event){
    event.preventDefault()
    Swal.fire({
        title: 'Apakah anda menghapus list aktivitas?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Kirim'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Selesai Dihapus!',
                    'List aktivitas telah dihapus',
                    'success'
                )
                localStorage.clear()
                let listAktivitas = document.getElementById('list-aktivitas')
                let inputAktivitas = document.getElementById('input-aktivitas')
                listAktivitas.innerHTML = ""
                inputAktivitas.value = ""
            }
        })
}
    

function addActivity(event){
    event.preventDefault()
    let inputAktivitas = document.getElementById('input-aktivitas')
    if(!inputAktivitas.value){
        return;
    }
    listActivity = localStorage.getItem('listActivity')
    parseList = []
    if(listActivity){
        parseList = JSON.parse(listActivity)
    }
    let activity = {
        id: parseList.length > 0 ? parseList.length + 1 : 1,
        activity: inputAktivitas.value
    }
    parseList.push(activity)
    localStorage.setItem('listActivity', JSON.stringify(parseList))
    let newActivity = document.createElement('li')
    newActivity.textContent = inputAktivitas.value
    document.getElementById('list-aktivitas').append(newActivity)
    inputAktivitas.value = ""
}