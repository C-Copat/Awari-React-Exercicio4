import './App.css';
import React, { useEffect } from 'react'

export default function App() {

  // Poderia ter usado uma função que retorna de um servidor fake se o login é valido ou não, juntamente com um token de autenticação

// Client-side 

    const [user,setUser] = React.useState("")
    const [password,setPassword] = React.useState("")
    const [credentials, setCredentials] = React.useState ({
        valid: "",
        auth_token: ""
    }    )
    
    // Fake Generate Auth for Fake server

    function generateAuthToken () {
        return parseInt(Math.random()*10000)
    }

    // Fake Server-side 
    // Quero uma função que retorne true/false + autenticador em um único objeto, estilo payload //

    function fakeServer(user,password) {
    
        if (user === 'Cae' && password === '123') {
            setCredentials((prev) =>{
                return{
                ...prev,
                valid: true,
                auth_token: prev.auth_token || generateAuthToken() 
                }}
            )
        } else {
            setCredentials(prev => {
                return({
                ...prev,
                valid: false,
                })
            })
    
        }
    }

    // Função para login e resposta

    function login () {

    if (user === '' || password === '') {
        alert('Por favor preencha todos os campos.');
        return
    } 

    if (credentials.valid) {
        alert(`Bem-vindo ${user}. Seu token de autenticação é ${credentials.auth_token}`);
    } else {
        alert('E-mail e/ou senha incorreto(s)');
    }
    }


    // Funções de interação (handle)

    function handleLoginClick(e) {
        fakeServer(user,password);
        login()

    }

    function handleUserChange(e) {
        setUser(e.target.value)
    }

    function handlePassChange(e) {
        setPassword(e.target.value)
    }

  
  return (
    <>
      <div className="card-container">   
        <div className="card">
            <div className="card-header">
                <h2>Entrar</h2> 
            </div>

            <div className="card-content">               
                <div className="content">

                    <div className="card-content-row">
                        <label htmlFor="user">Usuário </label>
                        <input 
                            type="text" 
                            id="user" 
                            className="input"
                            value = {user}
                            onChange={handleUserChange}
                        />
                    </div>

                    <div className="card-content-row">
                        <label htmlFor='password'>Senha</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="input"
                            value={password}
                            onChange={handlePassChange}
                        />
                    </div>
                
                </div>
            </div>

            <div className="card-footer">
                <button 
                    type="submit" 
                    id="submit" 
                    onClick={handleLoginClick}> Entrar 
                </button>
                <a 
                    href="www.google.com.br" 
                    className="password-forgot" 
                    target="_blank">
                    Esqueceu a senha?
                </a>
            </div> 
      </div>
  </div>
  </>
  );
}