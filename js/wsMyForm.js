export let wsMyForm = {
    displayForm(p1){
        return`
        <fieldset id="FormDatos">
            <legend id="titleForm">Formulario De Registro</legend>
            <form id="myFormulario-Recluta">
                <fieldset>
                    <legend id="titleForm"> Datos De Registro</legend>
                    <h4 id="text1">Ingresa tus datos iniciales</h4>
                    <div class="underline">
                    </div><br>
                    <h4 id="text1">Nombre</h4>
                    <input type="text" name="nombre" placeholder="Nombre del Recluta" required><br>
                    <h4 id="text1">Edad</h4>
                    <input type="number" min="1" max="99" name="edad" placeholder="Edad del Recluta" required><br>
                    <h4 id="text1">Telefono</h4>
                    <input type="tel" name="telefono" placeholder="Telefono del Recluta" required><br>
                    <h4 id="text1">email</h4>
                    <input type="email" name="email" placeholder="Correo del Recluta" required><br>
                    <h4 id="text1">direccion</h4>
                    <input type="text" name="dirrecion" placeholder="Direccion del Recluta" required><br>
                    <h4 id="text1">Fecha De Nacimiento</h4>
                    <input type="date" name="fecha_Nacimiento" placeholder="Fecha de Nacimiento Del Recluta" required><br>
                    <h4 id="text1">Identificacion</h4>
                    <input type="number" name="CC" placeholder="Identificacion del Recluta" required><br>
                    <h4 id="text1">Fecha De Ingreso</h4>
                    <input type="date" name="fecha_Ingreso" placeholder="Fecha de Registro Del Recluta" required><br>
                    <h4 id="text1">Team Del Recluta</h4>
                    <select name="id_Team" required>
                        <option value="1">Columbia</option>
                        <option value="2">Challenger</option>
                        <option value="3">Discovery</option>
                        <option value="4">Atlantis</option>
                    </select>
                </fieldset>
                <button class="btn1" type="submit">¡Enviar!</button>
            </form>  
          
            <form id="myFormulario-Skill">
                <fieldset>
                    <legend id="titleForm">Datos de tu Skill</legend>
                    <h4>Ingresa la siguiente Informacion</h4>
                    <input type="text" name="nombre_Skill" placeholder="Nombre de tu skill" required><br>
                </fieldset>
                <button class="btn1" type="submit">¡Enviar!</button>
            </form>
            <form id="myFormulario-Modulo">
                <fieldset>
                    <legend id="titleForm">Datos del modulo de tu Skill</legend>
                    <h4>Selecciona tu Skill</h4>
                    <select name="id_skill" required id="skill">
                        <option value="0">Selecciona una opcion</option>
                        
                    </select>
                    <h4>Ingresa la siguiente Informacion</h4>
                    <input type="text" name="nombre_Modulo" placeholder="Nombre del modulo" required><br>
                </fieldset>
                <button class="btn1" type="submit">¡Enviar!</button>
            </form>
            <form id="myFormulario-Nota">
                <fieldset>
                    <legend id="titleForm">Datos de la Evaluación</legend>
                    <h4>Ingresa la siguiente Informacion</h4>
                    <select name="Id_recluta" required id="recluta">
                        <option value="0">Selecciona una opcion</option>
                        
                    </select>
                    <select name="id_modulo," required id="modulo">
                        <option value="0">Selecciona una opcion</option>
                        
                    </select>
                    <input type="number" name="nota" placeholder="Nota del Recluta" min="0" max="5" required><br>
                </fieldset>
                <button class="btn1" type="submit">¡Enviar!</button>
            </form>
        </fieldset>
        `
    },
  
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyForm[`${e.data.module}`](e.data.data));
})