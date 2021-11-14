const Gasto = ({ gasto }) => {
  const { nombre, cantidad } = gasto;
  return (
    <li className="gastos">
      <p>
        {nombre}
        <span className="gasto"> $ {cantidad} </span>
      </p>
    </li>
  );
};

export default Gasto;
