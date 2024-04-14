import './App.css';
import Analysis from './components/ui/Analysis';
import Sidebar from './components/ui/Sidebar';

const App = () => {
  return (
    <div className="flex  bg-[#F8F8FF]">
      <Sidebar />
      <Analysis />
    </div>
  );
};

export default App;
