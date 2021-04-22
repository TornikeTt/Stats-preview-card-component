import React from "react"

let Box = () => {
    const footer_side_date = [
        {num: "10k+" , text: "companies"},
        {num: 314, text: "templates"},
        {num: "12M+", text: "queries"},
    ]

    const rDate = footer_side_date.map((e, index) => {
        return(
            <div key={index}>
                <p>{e.num}</p>
                <small>{e.text}</small>
            </div>
        )
    })
    
    return(
        <div className="box">    
            <div className="card__information">
                <h1>Get <span>insights</span> that help your business grow.</h1>

                <p> Discover the benefits of data analytics and make 
                    better decisions regarding revenue, 
                    customer experience, and overall efficiency.</p>
    
                <div className="footer_side">
                    {rDate}    
                </div>
            </div>

            <picture>
                <source media="(max-width: 375px)" srcSet="images/image-header-mobile.jpg"/>
                <img src='images/image-header-desktop.jpg' alt="image for right side" /> 
            </picture>

        </div>
    )
}
   


export default Box





