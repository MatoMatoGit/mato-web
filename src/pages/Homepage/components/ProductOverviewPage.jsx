import React from 'react'
import ProductDetailPage from './ProductDetailPage'

const ProductOverviewPage = ({data}) => {

    const defaultData = data.default;
    // const products = defaultData.map((product, index) =>
    //     <div className={"product " + product.name + " " + product.isEnabled} key={index}>
    //         <a href={"#" + product.name}>
    //             <img src={product.img.img_url} alt={product.img.img_alt}/>
    //             <h2>{product.name}</h2>
    //         </a>
    //     </div>
    // );

    return (
        <div id="product-overview-page" className="product-overview-page">

            {/*<h1>Onze producten</h1>*/}
            {/*<p>Simpel en modulair. Alles werkt los van elkaar en samen.</p>*/}

            {/*<div className="product-overview">*/}
            {/*    {products}*/}
            {/*</div>*/}

            {/*<div className="actions">*/}
            {/*    <button className="mato-button">Wij leggen het voor u aan</button>*/}
            {/*    <button className="mato-button">Laat je adviseren</button>*/}
            {/*</div>*/}

            {/*<ProductDetailPage productInfo={defaultData[0]}/>*/}
            <ProductDetailPage productInfo={defaultData[0]}/>
        </div>
    )
};

export default ProductOverviewPage;
