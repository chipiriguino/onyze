import './App.css';
import Information from './components/Information/Information';
import Pay from './components/Pay/Pay'
import InfoPay from './components/InfoPay/InfoPay'

function App() {
  return (
    <div >
      
      <div className="align-components">
      <Information/>
      <div className="align-pay">
      <Pay/>
      </div>
      </div>
      <div className="align-infopay">
<InfoPay/>
</div>
    </div>
  );
}

export default App;
