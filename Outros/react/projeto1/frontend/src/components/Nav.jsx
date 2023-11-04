import React from "react";
import Nav from './Nav.css'
import {Link} from 'react-router-dom'


export default props => 
<nav className="nav  bg-danger ">
   <Link to={'/'}> Home</Link>
   <Link to={'/sub'}>Sub</Link>
   <Link to={'/pag'}>Pagina3</Link>
   <Link to={'/12'}>Provisorio</Link>
</nav>
