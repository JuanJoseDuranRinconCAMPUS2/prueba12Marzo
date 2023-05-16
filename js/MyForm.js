import { newRecluta } from "./getReclutas.js";
import { deleteRecluta } from "./getReclutas.js";
import { deleteSkill, newSkill } from "./getSkill.js";
import { deleteModulo, newModulo } from "./getModulo.js";
import { deleteNota, newNota } from "./getNotas.js";

function DataValues() {
    const MyFormR = document.querySelector("#myFormulario-Recluta");
    MyFormR.addEventListener("submit", (e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        console.log(data);
        newRecluta(data)
        alert("Usuario Registrado, Ahora rellena los otros formularios por favor, para evitar errores de carga no vuelvas a enviar otro usuario hasta tener completo todos los formularios")
    })

    const MyFormS = document.querySelector("#myFormulario-Skill");
    MyFormS.addEventListener("submit", (e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        console.log(data);
        newSkill(data);
        alert("Skill Registrada, Ahora rellena los otros formularios por favor, para evitar errores de carga no vuelvas a enviar otro usuario hasta tener completo todos los formularios")
    });
    const MyFormM = document.querySelector("#myFormulario-Modulo");
    MyFormM.addEventListener("submit", (e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        newModulo(data);
        console.log(data);
    })
    const MyFormN = document.querySelector("#myFormulario-Nota");
    MyFormN.addEventListener("submit", (e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        newNota(data)
    })
}

let OperacionTotal=async ()=>{
    const url = 'http://localhost:41987/Reclutas';
    try {
        const response = await fetch(url);
        let result = await response.json();    
        result.forEach(val => {
            tableData(val)
            

        });
        setTimeout(() => {
            let EliminarBoton = document.querySelectorAll(".btn3");
                EliminarBoton.forEach(boton => boton.addEventListener("click", (event) => {
                const botonId = event.currentTarget.id;
                let confirmar = confirm("¿Seguro quieres borrar este Recluta? :c");
                if (confirmar) {
                    deleteRecluta(botonId)
                    deleteModulo(botonId)
                    deleteNota(botonId)
                    deleteSkill(botonId)
                }
            }));
        }, 5000);
        } catch (error) {
                console.error(error);
        }
}

let OperacionTeam=async (team)=>{
    const url = `http://localhost:41987/reclutas?id_Team_gte=${team}&id_Team_lte=${team}`;
    try {
        const response = await fetch(url);
        let result = await response.json();    
        result.forEach(val => {
            tableTeam(val)   
        });
        } catch (error) {
                console.error(error);
        }
}
let OperacionSkillsAndModules=async (skill)=>{
    const url = `http://localhost:41987/modulo_Skill?id_skill_gte=${skill}&id_skill_lte=${skill}`;
    try {
        const response = await fetch(url);
        let result = await response.json();    
        result.forEach(val => {
            tableModulo(val)   
        });
        } catch (error) {
                console.error(error);
        }
}
let OperacionMeses=async ()=>{
    const url = `http://localhost:41987/reclutas?fecha_Ingreso_lte=2023-03-12`;
    try {
        const response = await fetch(url);
        let result = await response.json();    
        result.forEach(val => {
            tableMeses(val)   
        });
        } catch (error) {
                console.error(error);
        }
}
let OperacionMenores=async ()=>{
    const url = `http://localhost:41987/reclutas?edad_lte=18`;
    try {
        const response = await fetch(url);
        let result = await response.json();    
        result.forEach(val => {
            tableMenores(val);
        });
        } catch (error) {
                console.error(error);
        }
}

let OperacionSkill=async ()=>{
    const url = `http://localhost:41987/skill`;
    try {
        const response = await fetch(url);
        let result = await response.json();    
        result.forEach(val => {
            SelectionSkills(val) 
            SelectionSkillsData(val)  
        });
        } catch (error) {
                console.error(error);
        }
}
let OperacionModulo=async ()=>{
    const url = `http://localhost:41987/modulo_Skill`;
    try {
        const response = await fetch(url);
        let result = await response.json();    
        result.forEach(val => {
            SelectionModulo(val)  
            SelectionEstudiantes(val)
        });
        } catch (error) {
                console.error(error);
        }
}
let OperacionReclutas=async ()=>{
    const url = `http://localhost:41987/Reclutas`;
    try {
        const response = await fetch(url);
        let result = await response.json();    
        result.forEach(val => {
            SelectionRecluta(val);
            SelectionModulosEstudiados(val);
        });
        } catch (error) {
                console.error(error);
        }
}
let OperacionEvaluaciones= async (recluta)=>{
    const url = `http://localhost:41987/Evaluacion?Id_recluta_gte=${recluta}&Id_recluta_lte=${recluta}`;
    try {
        const response = await fetch(url);
        let result = await response.json();    
        result.forEach(val => {
            console.log(val["id_modulo,"]);
            OperacionModuloEstudiado(val["id_modulo,"])  
        });
        } catch (error) {
                console.error(error);
        }
}
let OperacionEvaluacionesBad= async (modulo)=>{
    const url = `http://localhost:41987/Evaluacion?id_modulo,_gte=${modulo}&id_modulo,_lte=${modulo}&nota_lte=3`;
    try {
        const response = await fetch(url);
        let result = await response.json();    
        result.forEach(val => {
            console.log(val["Id_recluta"]);
            OperacionModuloEstudiadoBad(val["Id_recluta"]);
        });
        } catch (error) {
                console.error(error);
        }
}


let OperacionModuloEstudiado=async (modulo)=>{
    const url = `http://localhost:41987/modulo_Skill/${modulo}`;
    try {
        const response = await fetch(url);
        let result = await response.json();    
        tableModuloEstudido(result)
        } catch (error) {
                console.error(error);
        }
}

let OperacionModuloEstudiadoBad=async (modulo)=>{
    const url = `http://localhost:41987/reclutas/${modulo}`;
    try {
        const response = await fetch(url);
        let result = await response.json(); 
        console.log(result);   
        tableModuloEstudidoBad(result)
        } catch (error) {
                console.error(error);
        }
}

const removerTablita = function removerTablita() {
    var divTabla = document.querySelectorAll("#atributos2");
    for (var i = 0; i < divTabla.length; i++) {
        divTabla[i].remove();
    }
}
const removerTablitaModulos = function removerTablitaModulos() {
    var divTabla2 = document.querySelectorAll("#atributos3");
    for (var i = 0; i < divTabla2.length; i++) {
        divTabla2[i].remove();
    }
}

const removerTablitaEstudios = function removerTablitaModulos() {
    var divTabla3 = document.querySelectorAll("#atributos4");
    for (var i = 0; i < divTabla3.length; i++) {
        divTabla3[i].remove();
    }
}
const removerTablitaEstudiosBad = function removerTablitaModulos() {
    var divTabla4 = document.querySelectorAll("#atributos5");
    for (var i = 0; i < divTabla4.length; i++) {
        divTabla4[i].remove();
    }
}
function SistemaBotones() {
    let BotonTeam = document.querySelectorAll(".btn1");
    BotonTeam.forEach(boton => boton.addEventListener("click", (event) => {
                    removerTablita()
                    const botonId = event.currentTarget.id;
                    OperacionTeam(botonId);
                 }));
}

function selectSkill(){
    let selectSkills = document.querySelector("#SelectSkills")
    selectSkills.addEventListener("change", (e)=>{
        var seleccion = selectSkills.options[selectSkills.selectedIndex].value;
        removerTablitaModulos()
        OperacionSkillsAndModules(seleccion)
    })
}
function selectEstudiantes(){
    let selectEs = document.querySelector("#SelectEstudiantes")
    selectEs.addEventListener("change", (e)=>{
        removerTablitaEstudios()
        var seleccion = selectEs.options[selectEs.selectedIndex].value;
        OperacionEvaluaciones(seleccion);
    })
}
function selectEstudiantesBad(){
    let selectEsB = document.querySelector("#SelectEstudiantesBad")
    selectEsB.addEventListener("change", (e)=>{
        var seleccion = selectEsB.options[selectEsB.selectedIndex].value;
        removerTablitaEstudiosBad()
        OperacionEvaluacionesBad(seleccion);
        console.log(seleccion);
    })
}
function tableData(Recluta){
    let myTbodyData = document.querySelector("#myTbodyData");
    
    myTbodyData.insertAdjacentHTML("beforeend", `
    <tr id="atributos">
        <td>${Recluta.nombre}</td>
        <td>${Recluta.edad}</td>
        <td>${Recluta.telefono}</td>
        <td>${Recluta.CC}</td>
        <td>${Recluta.email}</td>
        <td>${Recluta.id_Team}</td>
        <td><button class="btn3" id="${Recluta.id}">
        ¡Borrar!
        </button></td>
    </tr>
    `)
}

function tableTeam(Recluta){
    let myTbodyTeam = document.querySelector("#myTbodyTeam");
    
    myTbodyTeam.insertAdjacentHTML("beforeend", `
    <tr id="atributos2">
        <td>${Recluta.nombre}</td>
        <td>${Recluta.edad}</td>
        <td>${Recluta.telefono}</td>
        <td>${Recluta.CC}</td>
        <td>${Recluta.email}</td>
        <td>${Recluta.id_Team}</td>
    </tr>
    `)
}

function tableMeses(Recluta){
    let myTbodyMeses = document.querySelector("#myTbodyMeses");
    
    myTbodyMeses.insertAdjacentHTML("beforeend", `
    <tr id="atributos">
        <td>${Recluta.nombre}</td>
        <td>${Recluta.edad}</td>
        <td>${Recluta.telefono}</td>
        <td>${Recluta.CC}</td>
        <td>${Recluta.email}</td>
        <td>${Recluta.id_Team}</td>
    </tr>
    `)
}
function tableMenores(Recluta){
    let myTbodyMenores = document.querySelector("#myTbodyEdad");
    
    myTbodyMenores.insertAdjacentHTML("beforeend", `
    <tr id="atributos">
        <td>${Recluta.nombre}</td>
        <td>${Recluta.edad}</td>
        <td>${Recluta.telefono}</td>
        <td>${Recluta.CC}</td>
        <td>${Recluta.email}</td>
        <td>${Recluta.id_Team}</td>
    </tr>
    `)
}
function tableModulo(modulo){
    let myTbodyModulo = document.querySelector("#myTbodyModulo");
    
    myTbodyModulo.insertAdjacentHTML("beforeend", `
    <tr id="atributos3">
        <td>${modulo.id_skill}</td>
        <td>${modulo.nombre_Modulo}</td>
        <td>${modulo.id}</td>
    </tr>
    `)
}
function tableModuloEstudido(modulo){
    let myTbodyModulo = document.querySelector("#myTbodyModulosEstudiados");
    
    myTbodyModulo.insertAdjacentHTML("beforeend", `
    <tr id="atributos4">
        <td>${modulo.id_skill}</td>
        <td>${modulo.nombre_Modulo}</td>
        <td>${modulo.id}</td>
    </tr>
    `)
}
function tableModuloEstudidoBad(Recluta){
    let myTbodyBad = document.querySelector("#myTbodyModulosEstudiadosBad");
    console.log(myTbodyBad);
    myTbodyBad.insertAdjacentHTML("beforeend", `
    <tr id="atributos5">
        <td>${Recluta.id}</td>
        <td>${Recluta.nombre}</td>
        <td>${Recluta.edad}</td>
        <td>${Recluta.telefono}</td>
        <td>${Recluta.CC}</td>
        <td>${Recluta.email}</td>
        <td>${Recluta.id_Team}</td>
    </tr>
    `)
}
function SelectionSkills(Recluta){
    let mySelection = document.querySelector("#skill");
    
    mySelection.insertAdjacentHTML("beforeend", `
    <option value="${Recluta.id}">${Recluta.nombre_Skill}</option>
    `)
}
function SelectionRecluta(Recluta){
    let mySystem = document.querySelector("#recluta");
    mySystem.insertAdjacentHTML("beforeend", `
    <option value="${Recluta.id}">${Recluta.nombre}</option>
    `)
}
function SelectionModulo(Recluta){
    let myModulo = document.querySelector("#modulo");
    
    myModulo.insertAdjacentHTML("beforeend", `
    <option value="${Recluta.id}">${Recluta.nombre_Modulo}</option>
    `)
}
function SelectionSkillsData(skill){
    let mySkills2 = document.querySelector("#SelectSkills");
    mySkills2.insertAdjacentHTML("beforeend", `
    <option value="${skill.id}">${skill.nombre_Skill}</option>
    `)
}
function SelectionModulosEstudiados(recluta){
    let myModulos2 = document.querySelector("#SelectEstudiantes");
    myModulos2.insertAdjacentHTML("beforeend", `
    <option value="${recluta.id}">${recluta.nombre}</option>
    `)
}
function SelectionEstudiantes(modulo){
    let myEstudiantes = document.querySelector("#SelectEstudiantesBad");
    myEstudiantes.insertAdjacentHTML("beforeend", `
    <option value="${modulo.id}">${modulo.nombre_Modulo}</option>
    `)
}

export default{
    showForm(){
        const ProsemaCarga = new Promise((resolve, reject)=>{
            const ws = new Worker("/js/wsMyForm.js", {type: "module"});
            let id = [];
            let count= 0;
            ws.postMessage({module: "displayForm", data: this.data})
            id = [".contenedorGalactico"]
            ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==0) ? ws.terminate(): count++; 
            if (id.length == 1) {
                resolve();
            }
        });
            
            
        })
        ProsemaCarga.then(()=>{
            DataValues()
            OperacionSkill();
            OperacionModulo();
            OperacionReclutas();
            OperacionTotal();
            OperacionMenores();
            SistemaBotones();
            OperacionMeses();
            selectSkill();
            selectEstudiantes();
            selectEstudiantesBad()
        })
        
    }
}
