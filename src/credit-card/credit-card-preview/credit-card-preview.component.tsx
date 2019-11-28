import React from 'react';
import './credit-card-preview.styles.scss';

interface ICreditCardPreview {
    rotate: boolean;
}

const CreditCardPreview: React.FunctionComponent<ICreditCardPreview> = (props) => (
    <div className={`credit-card-preview ${props.rotate ? 'rotate' : ''}`} >

    </div >
)


export default CreditCardPreview;