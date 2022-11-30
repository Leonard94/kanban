import { Routes, Route } from 'react-router-dom'

import { Header } from '../Header/Header'
import { Projects } from '../../pages/Projects/Projects'
import { Kanban } from '../../pages/Kanban/Kanban'

export const App = () => {
  return (
    <div className='app'>
      <Header />
      <div className='content'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Projects />} />
            <Route path='/kanban/:id' element={<Kanban />} />
            <Route path='*' element={<h1>Page not found</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
