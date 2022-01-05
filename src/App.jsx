import React from 'react'

import './App.css' 

import Header from './components/Header/Header'
import Button from './components/Button/Button'

import imageThinkingMan from './assets/thinking-man.png'

export default function App() {

   
    
    return (

        
        <>
            <Header />

            <main className="bg-image">
                <section className="main-text">
                    <p>Desenvolvedores prontos para a ação</p>
                    <h1>Seu projeto pronto </h1>
                    <h1> na velocidade da luz</h1>

                    <div className="action-button">
                    <Button />
                    </div>
                </section>
                
            </main>

            <section className="container">
                    <section className="description">
                        <div className="main-description">
                            <h1>Nossa Iniciativa</h1>
                            <p>Somos desenvolvedores que se dedicam a fazer projetos perfeitos e entregar valor para todos os seus clientes. Gostamos de ver clientes satisfeitos com projetos feitos com carinho, atenção e qualidade altíssima.</p>
                        </div>

                        <div className="description-image">
                            <img className="image-thinking-man" loading="lazing" src={imageThinkingMan} alt="homem negro com a mão direita no queixo, olhando para o lado direito e pensando" />
                        </div>
                    </section>
                    
                    <div className="bar">
                        <div></div>
                    </div>
            </section>
                
            <section className="contact">
                <div className="content">
                    <div className="contact-description">
                        <h1>Manda um oi, ligamos para você</h1>
                        <p>Preencha seus dados para que a gente possa entrar em contato.</p>
                    </div>
                    <form action="POST">
                        <div>
                            <label htmlFor="nome completo">
                                Nome completo
                                <input id="nome completo" type="text"/>
                            </label>
                            <label htmlFor="seu número do WhatsApp">
                                WhatsApp
                                <input id="seu número do WhatsApp" type="number"/>
                            </label>

                            <label>
                                <input type="button" value="peça uma reunião" />
                            </label>
                        </div>
                        
                        
                        
                        
                    </form>
                </div>
                
            </section>
            

        </>
    )
}