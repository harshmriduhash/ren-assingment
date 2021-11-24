
import Price from './Price';
import Menu from './Menu';
import Chart from './Chart';

function App() {
  return (
    <>
    <section className='container'>
      <Price/>
      <Menu/>
      
      <hr className='seperator'></hr>
      
      <Chart/>
    </section>
    </>
  );
}

export default App;
