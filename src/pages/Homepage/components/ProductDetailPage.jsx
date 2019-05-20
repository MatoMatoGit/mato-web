import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const ProductDetailPage = ({productInfo}) => {

    return (
        <div id="product-detail-page" className="product-detail-page">
            <div className="product-image">
                <img src={productInfo.img.img_url} alt={productInfo.img.img_alt}/>
            </div>
            <div className="product-details">
                <p>#{productInfo.SKU}</p>

                <div className="title">
                    <h1 className="name">{productInfo.name}</h1><h1 className="price">{productInfo.price}</h1>
                </div>

                <h2 className="subtitle">{productInfo.subtitle}</h2>
                <p className="description">{productInfo.description}</p>

                <button className="mato-button">Ik wil dit in mijn tuin!</button>
            </div>
            <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Technische informatie
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            {productInfo.description}
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default ProductDetailPage;
