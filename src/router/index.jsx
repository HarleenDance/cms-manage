/* 
    App > List + Edit + Means
    Login
    Register
    History模式  --  BrowserRouter
    Hash模式     --  HashRouter
*/

import App from '../App'
import ListTable from '@/pages/List/ListTable.tsx'
import List from '@/pages/List/Lists.tsx'
import Edit from '@/pages/Edit/Edit.tsx'
import Means from '@/pages/Means/Means.tsx'
import Login from '@/pages/Login/Login.tsx'
import Register from '@/pages/Register/Register.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const BaseRouter = () => (
    <Router>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/listtable' element={<ListTable />}></Route>
                <Route path='/list' element={<List />}></Route>
                <Route path='/edit' element={<Edit />}></Route>
                <Route path='/edit/:id' element={<Edit />}></Route>
                <Route path='/means' element={<Means />}></Route>
            </Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
        </Routes>
    </Router>
)

export default BaseRouter