let url="http://localhost:41987/modulo_Skill"

let Myheaders = new Headers({
    "content-Type" : "application/json"
});


export let newModulo = async (recluta)=>{
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

export let deleteModulo= async (id) =>{
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