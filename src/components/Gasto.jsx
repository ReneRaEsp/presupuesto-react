const Gasto = ( {gasto} ) => {
  return(
    <div>
      <p> { gasto.nombre } </p>
      <p> { gasto.cantidad } </p>
    </div>
  );
}

export default Gasto;
