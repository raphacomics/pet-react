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
                    }
                }`)
                .then((data) => setProd(data))
                .catch(console.error)
    }, [])

    return (
        <main>
            <section className="container">
                <h1>Produtos</h1>
                <h2>Veja os produtos da PraPet</h2>
                <div className="row">
                    {prodData && prodData.map((post, index) => (
                        <article className="col-lg-3 col-md-4 col-sm-6">
                            <Link to={"/produtos/" + post.slug.current} key={post.slug.current}>
                            <span key={index}>
                                <img className="img-fluid" src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                                <span>
                                    <h4>{post.title}</h4>
                                </span>
                            </span>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}