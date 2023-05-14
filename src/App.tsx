import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import DayPlanner from './pages/DayPlanner'
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
