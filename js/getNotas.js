let url="http://localhost:41987/Evaluacion"

let Myheaders = new Headers({
    "content-Type" : "application/json"
});


export let newNota = async (recluta)=>{
    try{
       
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(recluta)})
    }catch(error){
        console.log(error)
    }
}

export let deleteNota= async (id) =>{
    try{
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }catch(error){
        console.log(error)
    }
}