import React, { Component } from "react";
import Main from '../components/Main'
import axios from 'axios'
const url = 'http://localhost:3001/usuario'
const initialState = {
    usuario:{nome:'',idade:''},
    list:[]
}
let x = 0

export default class Crud extends Component {
    state = {...initialState}
    
    componentDidMount(){
        axios(url).then(resp=>{
            this.setState({list:resp.data})
        })
    }
    
    clear(){
        this.setState({usuario:initialState.usuario})
    }
    save(){
        const usuario = this.state.usuario
        const method = usuario.id ? 'put':'post'
        const neoUrl = usuario.id ?`${url}/${usuario.id}`:url
        axios[method](neoUrl,usuario).then(resp=>{
            const list = this.getUpdateList(resp.data)
            this.setState({usuario:initialState.usuario,list})
            
        })
        // this.setState({usuario:initialState.usuario})
    }
    getUpdateList(usuario,add=true){
        const list = this.state.list.filter( u => u.id !== usuario.id)
        if(add) list.unshift(usuario)
        return list
    }
    updateField(event){
        const usuario = {...this.state.usuario}
        usuario[event.target.name] = event.target.value
        console.log(event.target.name)
        this.setState({usuario})
    }
    load(usuario){
        this.setState({usuario})
    }
    remove(usuario){
        axios.delete(`${url}/${usuario.id}`).then(resp=>{
            const list = this.getUpdateList(usuario,false)
            this.setState({list})
        })
    }
    incrementar(){
        setInterval(()=>{
            x += 1
            document.getElementById('pi').textContent = x
            console.log(x)
        },1000)
        
        // console.log(pi)
       
    }
    renderForm (){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label >Nome</label>
                            <input type="text" className="form-control" 
                            name="nome" value={this.state.usuario.nome}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o nome ..."/>
                            
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            
                            <label>Idade</label>
                            <input type="number" className="form-control"
                            name="idade"
                            value={this.state.usuario.idade}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite a idade..." />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content end">
                        <button className="btn btn-primary" onClick={e => this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                            Cancelar 
                        </button>
                        {/* <button className="btn btn-warning ml-2" onClick={e => this.incrementar(e)}>
                            Incrementar
                        </button> */}
                        <p className="p-1 ml-5" id="pi" onClick={e => this.incrementar(e)}>a</p>
                    </div>
                </div>
            </div>
        )
    }
    renderTable(){
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
    renderRows(){
        return this.state.list.map(usuario => {
            return (
                <tr key={usuario.id}>
                    <td>{usuario.nome}</td>
                    <td>{usuario.idade}</td>
                    {/* <td>{usuario.idade}</td> */}
                    <td>
                        <button className="btn btn-warning" onClick={()=> this.load(usuario)}>
                            <i className="fa fa-pencil">
                                
                            </i>
                            Alterar
                        </button>
                        <button className="btn btn-danger ml-2"
                        onClick={()=>this.remove(usuario)}>
                            <i className="fa fa-trash"></i>
                            Excluir
                        </button>
                        
                    </td>
                </tr>
            )
        })
    }
    render(){
        console.table(this.state.list)
       return (
        
        <Main>
        {this.renderForm()}
        {this.renderTable()}
        {/* {document.querySelector('body').addEventListener('load',this.incrementar())} */}
        {/* {setTimeout(()=>{document.getElementById('pi').addEventListener('load',this.incrementar())},1000)} */}
        </Main>
       )
       
    }
}