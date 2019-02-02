import * as EmailValidator from 'email-validator';

export const validate = (formValues) => {
    return (fieldRules) => {
        const formErrors = {};
        fieldRules.map(fieldRule => {
            const value = formValues[fieldRule.field];

            switch(fieldRule.rule) {
                case fieldValidationRule.validateEmail:
                    formErrors[fieldRule.field] = EmailValidator.validate(value)
                        ? null
                        : 'Zły adres email';
                    break;
                case fieldValidationRule.validateIsRequired:
                    formErrors[fieldRule.field] = value !== null && value !== undefined && value !== ''
                        ? null
                        : 'Pole wymagane';
                    break;
            }
        });
        
        return formErrors;
    }
}

export const fieldValidationRule = {
    validateEmail: 0,
    validateIsRequired: 1
}