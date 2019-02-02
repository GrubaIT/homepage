import React from 'react';
import Label from 'grommet/components/Label';
import CheckBox from 'grommet/components/CheckBox';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import Spinning from 'grommet/components/icons/Spinning';

const LeadMagnetForm = ({formValues, formErrors, onChange, onSubmitted, processing, success}) => {
    const inputChanged = ({target}) => {
        onChange({...formValues, [target.name]: target.value}, {...formErrors, [target.name]: null});
    };
    const checkboxChanged = ({target}) => {
        onChange({...formValues, [target.name]: target.checked}, formErrors);
    };
    const checkAll = ({target}) => {
        onChange({...formValues, eventsAgree: target.checked, newsAgree: target.checked, initiativesAgree: target.checked}, formErrors);
    };
    const submit = () => {
        if (!success) {
            onSubmitted();
        }
    }

    return <div className='form'>
        <fieldset className='fieldset'>
            <FormField label='Imię' className='fieldset__input' error={formErrors.name}>
                <TextInput name='name' onDOMChange={inputChanged} value={formValues.name} />
            </FormField>
            <FormField label='Email' className='fieldset__input' error={formErrors.email} >
                <TextInput name='email' onDOMChange={inputChanged} value={formValues.email}/>
            </FormField>
        </fieldset>
        <fieldset className='fieldset'>
            <Label>Oprócz wysłania Ci przewodnika, chcielibyśmy zachować z Tobą kontakt</Label>
        </fieldset>
        <fieldset className='fieldset'>
            <CheckBox className='fieldset__checkbox' label='Zaznacz wszystko' toggle={true} onChange={checkAll}
                checked={formValues.newsAgree && formValues.initiativesAgree && formValues.eventsAgree} />
            <CheckBox className='fieldset__checkbox' label='Chciałbyś być na bieząco z wiadomościami ze świata społeczności?'
                name='newsAgree' toggle={true} checked={formValues.newsAgree} onChange={checkboxChanged}  />
            <CheckBox className='fieldset__checkbox' label='Podsyłać Ci nowe, śląskie inicjatywy?' toggle={true}
                name='initiativesAgree' checked={formValues.initiativesAgree} onChange={checkboxChanged}  />
            <CheckBox className='fieldset__checkbox' label='Informować Cię o wydarzeniach na Śląsku?' toggle={true}
                name='eventsAgree' checked={formValues.eventsAgree} onChange={checkboxChanged}  />
            <Button onClick={submit}
                className={`submit ${processing ? 'sending' : ''} ${success ? 'sent' : ''}`}
                label={`${success ? 'Odbierz maila :)' : 'Pobierz przewodnik po meetupach'}`}
                icon={<Spinning className='loading' />} />
        </fieldset>
    </div>;
}

export default LeadMagnetForm;