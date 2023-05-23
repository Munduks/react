import Product from "./Product";

const productsStyle = {
    display :"flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:"center"
}
const titleStyle={
    display: "flex",
    justifyContent: "center"
}
const Products=()=>{
    return(
        <div>
            <h1 style={titleStyle}>BEST SELERS</h1>
            <div style={productsStyle}> 
                <Product
                category="Canvases"
                name="OFF-WHITE AIR JORDAN 1 CANVAS"
                price="32.00$ - 120.00$"
                /> 
                <Product 
                 category= 'Posters'
                 name= 'YEEZY BOOST 350 V2 FROZEN YELLOW POSTER'
                 price= '16.00$ - 32.00$'  
                /> 
                <Product 
                 category= 'Stickers'
                 name= 'YEEZY 350 V2 ZEBRA STICKER'
                 price ='5.00$'  
                /> 
                <Product 
                 category= 'Adidas'
                 name= 'ADIDAS YEEZY POWERSHAPE CALABASAS POSTER'
                 price= '16.00$ - 32.00$'  
                /> 
                <Product 
                 category= 'Jordans'
                 name= 'AIR JORDAN 4 RED SUEDE POSTER'
                 price= '16.00$ - 32.00$'  
                /> 
                <Product 
                 category= 'Balenciaga'
                 name= 'BALENCIAGA TRIPLE S POSTER'
                 price= '16.00$ - 32.00$'  
                /> 
                  <Product 
                 category='Nike'
                 name= 'NIKE BLAZER MID SACAI POSTER'
                 price= '16.00$ - 32.00$'  
                /> 
                  <Product 
                 category= 'Artists'
                 name= 'LIL PEEP POSTER'
                 price= '16.00$ - 32.00$'  
                /> 
            </div>  
        </div>    
    );
};

export default Products