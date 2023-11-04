import {Routes,Route,RedirectFunction} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom'


import Home from "../components/home/Home"
import UserCrud from "../components/user/UserCrud"

export default props =>
<Routes>
    <Route exact path="/" element={<Home />}/>
    <Route path="/user" element={<UserCrud />}/>
    {/* <Redirect from='*' to='/' /> */}
    <Route path="*" element={<Home />} />
</Routes>





