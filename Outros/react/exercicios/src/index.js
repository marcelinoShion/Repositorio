import React from 'react'
import ReactDOM from 'react-dom'
import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
// import './componentes/style.css'
// import Display from './componentes/display'
import Front from './componentes/front'

ReactDOM.render(<Front.front />,document.getElementById('root'))
// ReactDOM.render(
//   <div className='blue' >
//     <Pai nome='Paulo' sobrenome='Silva'>
//       <Filho nome='Pedro'/>
//        <Filho  nome ='Paula' />
//       <Filho  nome='Carla' />  
//     </Pai>
//   </div>,document.getElementById('root')
// )
//Saudacao
// ReactDOM.render(
//   <div>
//     <Saudacao tipo = 'Bom dia' nome = 'Joao'/>
//   </div>,document.getElementById('root')
// )

// import BomDia from './componentes/bomDia'

// import Multi,{BoaNoite} from './componentes/multiplos'
// const elemento = <h1>React4</h1>

// ReactDOM.render(<div>
//   <Multi.BoaTarte nome='Ana'/>
//   <BoaNoite nome='Antonio'/>
// </div>,document.getElementById('root'))


