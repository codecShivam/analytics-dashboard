import './App.css';
import Analysis from './components/ui/Analysis';
import Sidebar from './components/ui/Sidebar';

const App = () => {
  return (
    <div className="flex gap-5 pr-16  max-md:flex-wrap max-md:pr-5">
      <Sidebar />
      <Analysis />
    </div>
  );
};

export default App;
