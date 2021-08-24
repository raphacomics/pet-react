import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import sanityClient from "../client.js";



export default function Produtos() {

    const [prodData, setProd] = useState(null);    

    useEffect( () => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
                    title,
                    slug,
                    mainImage{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    }, 
                    body
                }`)
                .then((data) => setProd(data))
                .catch(console.error)
    }, [])

    return (
        <main>
            <section className="container-fluid produtos">
            <div className="container py-5  ">
                <div className="prod-intro">
                    <span>Produtos</span>
                    <h2>Veja os produtos da PraPet</h2>
                </div>
                <div className="prod-list">
                    {prodData && prodData.map((post, index) => (

                        <Link className="prod-link" to={"/produtos/" + post.slug.current} key={post.slug.current}>

                            <div className="produto-card d-flex flex-column"  key={index}> 

                                    <div className="foto">
                                        <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                                    </div>

                                    <div className="card-info d-flex flex-column justify-content-between flex-grow-1">
                                        
                                        <div className="mb-4"> 
                                            <h4 className="card-title">{post.title}</h4>
                                            <p className="descricao">{post.body}</p>
                                        </div>
                                    

                                        <div className="d-flex justify-content-between align-items-center gap-5">
                                            <span className="preco">400</span>
                                            <button className="btn b-yellow comprar mt-auto">
                                                Ver Produto
                                            </button>
                                        </div>


                                    </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            </section>
        </main>
    )
}