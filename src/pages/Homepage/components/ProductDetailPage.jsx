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
                <div className="title">
                    <h1 className="name">{productInfo.name}</h1><h1 className="price">{productInfo.price}</h1>
                </div>

                <h2 className="subtitle">{productInfo.subtitle}</h2>
                <p className="description">{productInfo.description}</p>

                <a className="mato-button" href='#contact'>Ik wil een {productInfo.name}</a>
            </div>
            <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Technische informatie
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <table>
                            <tr>
                                <th>Specificatie</th>
                                <th>Waade</th>
                                <th>Opmerking</th>
                            </tr>
                            <tr>
                                <td>Afmeting (l x b x h)</td>
                                <td>7,5 x 3 x 1 (cm)</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Bedrijfsspanning</td>
                                <td>3V</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Bedrijfssvermogen actief</td>
                                <td>15mW</td>
                                <td>3V x 5mA</td>
                            </tr>
                            <tr>
                                <td>Bedrijfssvermogen slaap</td>
                                <td>20μW</td>
                                <td>3V x 6.7μA</td>
                            </tr>
                            <tr>
                                <td>Batterij type</td>
                                <td>CR2032</td>
                                <td>200 mAh</td>
                            </tr>
                            <tr>
                                <td>Typische batterij levensduur</td>
                                <td>4 maanden</td>
                                <td></td>
                            </tr>
                        </table>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default ProductDetailPage;
