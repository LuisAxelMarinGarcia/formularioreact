import './App.css'
function Titulo(props) {
  return (<div class="form-row">
  <select name="title">
      <option class="option" value="title">Titulo</option>
      <option class="option" value="Empresario">Empresario</option>
      <option class="option" value="Reportero">Reportero/a</option>
      <option class="option" value="Secretario">Secretario/a</option>
  </select>
  <span class="select-btn">
      <i class="zmdi zmdi-chevron-down"></i>
  </span>
</div>);
}
function Nombre(props) {
  return (<div class="form-group">
  <div class="form-row form-row-1">
    <input type="text" name="first_name" id="first_name" class="input-text" placeholder="Nombre" required/>
  </div>
  <div class="form-row form-row-2">
    <input type="text" name="last_name" id="last_name" class="input-text" placeholder="Apellidos" required/>
  </div>
</div>);
}
function Posicion(props) {
  return (<div class="form-row">
  <select name="position">
      <option value="Posicion">Posicion</option>
      <option value="director">Director</option>
      <option value="manager">Manager</option>
      <option value="empleado">Empleado</option>
  </select>
  <span class="select-btn">
      <i class="zmdi zmdi-chevron-down"></i>
  </span>
</div>);
}
function Compania(props) {
  return (  <div class="form-row">
  <input type="text" name="company" class="company" id="company" placeholder="Compañia" required/>
</div>);
}
function Grupo(props) {
  return (  <div class="form-group">
  <div class="form-row form-row-3">
    <input type="text" name="business" class="business" id="business" placeholder="Area de trabajo" required/>
  </div>
  <div class="form-row form-row-4">
    <select name="Rango">
        <option value="empleado">Empleado</option>
        <option value="becario">Becario</option>
        <option value="colega">Colega</option>
        <option value="asociado">Asociado</option>
    </select>
    <span class="select-btn">
        <i class="zmdi zmdi-chevron-down"></i>
    </span>
  </div>
</div>);
}
function Izquierda(props) {
  return ( 				<div class="form-left">
  <h2>Información general</h2>
  <Titulo titulo="titulo"/>
  <Nombre nombre="nombre"/>
  <Posicion posicion="posicion"/>
  <Compania compania="compania"/>
  <Grupo grupo="grupo"/>
</div>);
}
function Calle(props) {
  return (  <div class="form-row">
  <input type="text" name="street" class="street" id="street" placeholder="Calle" required/>
</div>);
}
function Adicional(props) {
  return (
    <div class="form-row">
      <input type="text" name="additional" class="additional" id="additional" placeholder="Información extra (opcional)"/>
    </div>);
}
function Direccion(props) {
  return (  <div class="form-group">
  <div class="form-row form-row-1">
    <input type="text" name="zip" class="zip" id="zip" placeholder="Codigo postal" required/>
  </div>
  <div class="form-row form-row-2">
    <select name="place">
        <option value="place">Lugar</option>
        <option value="Street">Calle</option>
        <option value="District">Colonia</option>
        <option value="City">Ciudad</option>
    </select>
    <span class="select-btn">
        <i class="zmdi zmdi-chevron-down"></i>
    </span>
  </div>
</div>);
}
function Pais(props) {
  return (  <div class="form-row">
  <select name="country">
      <option value="country">Pais</option>
      <option value="Mexico">Mexico</option>
      <option value="colombia">Colombia</option>
      <option value="venezuela">Venezuela</option>
  </select>
  <span class="select-btn">
      <i class="zmdi zmdi-chevron-down"></i>
  </span>
</div>);
}
function Numero(props) {
  return (  <div class="form-group">
  <div class="form-row form-row-1">
    <input type="text" name="code" class="code" id="code" placeholder="ID" required/>
  </div>
  <div class="form-row form-row-2">
    <input type="text" name="phone" class="phone" id="phone" placeholder="Numero de telefono" required/>
  </div>
</div>);
}
function Email(props) {
  return (  <div class="form-row">
  <input type="text" name="your_email" id="your_email" class="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="Correo electrónico"/>
</div>);
}
function TyC(props) {
  return ( 
  <div class="form-checkbox">
    <label class="container"><p>Acepto <a href="#" class="text">los terminos y condiciones</a> del sitio.</p>
        <input type="checkbox" name="checkbox"/>
        <span class="checkmark"></span>
    </label>
  </div>
  );
}
function Confirmar(props) {
  return (<div class="form-row-last">
  <input type="submit" name="Registrarse" class="register" value="Registrarse"/>
</div>);
}
function Derecha(props) {
  return (				<div class="form-right">
  <h2>Detalles de contacto</h2>
  <Calle calle="calle"/>
  <Adicional adicional="adicional"/>
  <Direccion direccion="direccion"/>
  <Pais pais="pais"/>
  <Numero numero="numero"/>
  <Email email="email"/>
  <TyC terminos="condiciones"/>
  <Confirmar confirmar="confirmar"/>
</div>);
}

function App() {

  return (
    <div className="App">
      	<div class="page-content">
		<div class="form-v10-content">
			<form class="form-detail" action="#" method="post" id="myform">
      <Izquierda izquierda="izquierda"/>
      <Derecha derecha="derecha"/>
			</form>
		</div>
	</div>
    </div>
  )
}

export default App
