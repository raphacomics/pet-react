import React from 'react';
import image from "../img/caoGato_Banner.png";

export default function Home() {
    return ( 
        <main className="bg-primary text-white">
            <div className="container">
                <div className="row d-flex align-items-center py-5">

                    <div className="col-6">
                        <h1>O seu Pet vai adorar os produtos PraPet!</h1>
                        <p>Produzimos produtos personalizados, confortáveis e estilosos para o seu Pet. Aqui você encontra peças divertidas e cheias de personalidade para cuidar do seu companheiro e também decorar a sua casa!</p>

                        <button className="btn btn-warning btn-lg mt-3">Contato</button>
                    </div>
                
                    <div className="col-6">
                        <img src={image} alt="dog and cat" />
                     </div>

                </div>
            
            </div>
        </main>
    )
}