import React, { Component } from "react";

class Carousel extends Component {

    render() {
        return (
            
            <div id="carousel-example-1z" className="carousel slide carousel-fade animated fadeInUp" data-ride="carousel">
                
                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-1z" data-slide-to="1"></li>

                </ol>
                
                <div className="carousel-inner" role="listbox" style={{height: 350 + 'px'}}>
                    
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://ingenierosweb.co/wp-content/uploads/2016/05/javascriptlogo-1-2.jpg" alt="First slide"/>
                    </div>
                       
                    <div className="carousel-item">
                            <img className="d-block w-100" src="https://www.tutofox.com/wp-content/uploads/2020/03/1_HSisLuifMO6KbLfPOKtLow.jpeg" alt="Second slide"/>
                    </div>
                            

                </div>
                        
                
                <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                       
            </div>
                    

        );

    }
}

export default Carousel;