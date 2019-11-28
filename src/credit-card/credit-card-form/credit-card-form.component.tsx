import React, { useState } from 'react';
import CreditCardPreview from '../credit-card-preview/credit-card-preview.component';
import './credit-card-form.styles.scss';

const CreditCardForm: React.FunctionComponent = () => {

    const [form, setForm] = useState(null);

    const handleFocusPin = (e: any) => {
        console.log(e);
    }

    const handleChangeForm = (e: any) => {
        console.log(e.target.value);

    }

    return (
        <>
            <CreditCardPreview rotate={true} />
            <div className="credit-card-form">
                <form onChange={handleChangeForm}>
                    <h3>Ingrese sus datos personales</h3>
                    <ul>
                        <li>
                            <label >Ingrese su nombre </label>
                            <input type="text" name="name"></input>
                        </li>
                        <li>
                            <label >Ingrese su numero de tarjeta </label>
                            <input type="number" name="number"></input>
                        </li>
                        <li>
                            <label >Ingrese la fecha de vencimiento </label>
                            <input type="number" name="name"></input>
                        </li>
                        <li>
                            <label >Ingrese su clave </label>
                            <input
                                onFocus={handleFocusPin}
                                type="number" name="name"></input>
                        </li>

                    </ul>

                </form>
            </div>
        </>
    )
};


export default CreditCardForm;
