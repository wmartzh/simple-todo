import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import DayPlanner from './pages/DayPlanner'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<DayPlanner/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
