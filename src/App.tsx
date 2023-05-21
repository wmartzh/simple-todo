import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/main-layout'
import DayPlanner from './pages/day-planner'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {


  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<DayPlanner/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </Provider>

    </>
  )
}

export default App
