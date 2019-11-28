import React from 'react'
import './credit-card-form-container.style.scss';
import CreditCardForm from '../credit-card-form/credit-card-form.component';

const CreditCardFormContainer: React.FunctionComponent = (params) => (
    <div className="credit-card-form-container">
        <CreditCardForm />
    </div>
)


export default CreditCardFormContainer;