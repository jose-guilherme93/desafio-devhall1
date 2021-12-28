import React from 'react'
import Header from './components/Header/Header'
import './App.css' 
import Button from './components/Button/Button'

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

        </>
    )
}