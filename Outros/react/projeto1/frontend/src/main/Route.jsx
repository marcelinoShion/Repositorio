import React from 'react'
// import Main from '../components/Main'
import Sub from '../components/Sub'
import Home from '../components/Home'
import Pagina3 from '../components/Pagina3'
import Error from '../components/Error'
import Crud from '../user/Crud'
import {Routes,Route} from 'react-router-dom'

export default props =>
<Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/sub' element={<Sub/>}/>
    <Route path='/pag' element={<Pagina3/>} />
    <Route path='/12' element={<Crud/>}/>
    <Route path='*' element={<Error/>}/>
    

</Routes>
















