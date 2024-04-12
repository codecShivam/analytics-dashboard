import './App.css';
import Analysis from './components/ui/Analysis';
import Sidebar from './components/ui/Sidebar';

const App = () => {
  return (
    <div className="flex gap-5 bg-[#F8F8FF]  max-md:flex-wrap max-md:pr-5">
      <Sidebar />
      <Analysis />
    </div>
  );
};

export default App;
