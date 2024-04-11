import './App.css';
import Sidebar from './components/ui/Sidebar';
import MetaMaskConnect from "./components/wallet/MetaMaskConnect"

const App = () => {
  return (
    <div className="flex gap-5 pr-16  max-md:flex-wrap max-md:pr-5">
      <Sidebar />
      <MetaMaskConnect />
    </div>
  );
};

export default App;
