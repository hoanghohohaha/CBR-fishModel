import './App.css';
import HomePage from './pages/Home/Homepage';
import { Routes, Route } from 'react-router-dom';
import PatchNotesPage from './pages/PatchNotes/PatchNotesPage/PatchNotesPage';
import FishModelPage from './pages/Models/Fish/FishModelPage';
import RefsAndNotes from './pages/RefsAndNotes/RefsAndNotes';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fishmodel" element={<FishModelPage />} />
          <Route path="/refs" element={<RefsAndNotes/>}/>
          <Route path='/patchnote' element={<PatchNotesPage />} />
          {/* <Route path="/setting" element={<SettingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/stat" element={<StatPage />} /> */}
          {/* <Route path='*'>
                <ErrorPage />
              </Route> */}
        </Routes>
    </div>
  )
}

export default App;
