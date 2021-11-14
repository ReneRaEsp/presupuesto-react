import Gasto from './Gasto.jsx';
import PropTypes from 'prop-types';

const Gastos = ( {gastos} ) => {
  return(
    <div className="gastos-realizados">
      <h2> Listado </h2>
    {
      gastos.map(gasto => (
        <Gasto 
        key={gasto.id}
        gasto={gasto} />
      ))
    }
    </div>
  );
}

Gastos.propTypes = {
  gastos: PropTypes.array.isRequired
}

export default Gastos;
