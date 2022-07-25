import React, { useState, UseEffect } from "react";
import Articuno from '../assets/images/sandslash.jpg'
import Venonat from '../assets/images/venonat.jpg'


const Pokemon = () => {
    return (
        <>
        <div className="container">
            <div className="row">
            <h1>ejemplo prueba</h1>
            </div>
        </div>

        <div className="row">
            <div className="col-4"><div class="card" style="width: 18rem;">
            <img src={Articuno} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">sandslash</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a></div>
                    </div>
                    </div>
            <div className="col-4"> <div className="col-4"><div class="card" style="width: 18rem;">
            <img src={Venonat} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Venonat</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a></div>
                    </div>
                    </div>
                    </div>
            <div className="col-4">Pokemon 3</div>
        </div>
        

        
        </>
    )

}
export default Pokemon