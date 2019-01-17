import React, { Component } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Label from 'grommet/components/Label';

import { Subpage } from '../components';
import SubpageSection from '../components/SubpageSection';

const listUrl = 'https://gruba.us19.list-manage.com/subscribe/post?u=96f84be021aa289a749b39fc4&amp;id=b4b94cf7e5';
const LeadMagnetForm = (props) => {
    return <form>
        <fieldset>
            <input type='text' placeholder='Imię' />
            <input type='email' placeholder='Email' />
        </fieldset>
        <fieldset>
            <Label>Mozesz wybrać jakie wiadomości chciałbyś od nas otrzymywać</Label>
        </fieldset>
        <input type='checkbox' id='events_agree' /><label for=''>Wydarzenia</label>
        <input type='checkbox' id='news_agree' /><label for=''>Wiadomości ze świata społeczności</label>
        <input type='checkbox' id='initiatives_agree' /><label for=''>Nowe inicjatywy</label>
        <button type='submit'>Pobierz przewodnik</button>
    </form>;
}

export default class CommunityGuide extends Component {
    render() {
        return (
            <Subpage title='Przewodnik po śląskiej społeczności'>
                <SubpageSection title='Zrobiliśmy dla Ciebie coś specjalnego'>
                    <MailchimpSubscribe url={listUrl} render={({ subscribe, status, message }) => (
                        <div>
                            <LeadMagnetForm onSubmitted={formData => subscribe(formData)} />
                            {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                            {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
                            {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                        </div>
                    )} />
                </SubpageSection>
            </Subpage>
        )
    }
}
