let url="http://localhost:41987/skill"

let Myheaders = new Headers({
    "content-Type" : "application/json"
});


export let newSkill = async (recluta)=>{
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

export let deleteSkill= async (id) =>{
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