import React, { Component } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Label from 'grommet/components/Label';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';

import { Subpage } from '../components';
import SubpageSection from '../components/SubpageSection';
import ebook from '../images/community-guide.png';

const listUrl = 'https://gruba.us19.list-manage.com/subscribe/post?u=96f84be021aa289a749b39fc4&amp;id=b4b94cf7e5';
const LeadMagnetForm = (props) => {
    return <form className='form'>
        <fieldset className='fieldset'>
            <input type='text' placeholder='Imię' />
            <input type='email' placeholder='Email' />
        </fieldset>
        <fieldset className='fieldset'>
            <Label>Oprócz wysłania Ci przewodnika, chcielibyśmy zachować z Tobą kontakt</Label>
        </fieldset>
        <fieldset className='fieldset'>
            <div className='fieldset__checkbox'><input type='checkbox' id='news_agree' /><label for='news_agree'>Chciałbyś być na bieząco z wiadomościami ze świata społeczności?</label></div>
            <div className='fieldset__checkbox'><input type='checkbox' id='initiatives_agree' /><label for='initiatives_agree'>Podsyłać Ci nowe, śląskie inicjatywy?</label></div>
            <div className='fieldset__checkbox'><input type='checkbox' id='events_agree' /><label for='events_agree'>Informować Cię o wydarzeniach na Śląsku?</label></div>
        </fieldset>
        <button type='submit' className='submit'>Pobierz przewodnik po meetupach</button>
    </form>;
}

export default class CommunityGuide extends Component {
    render() {
        return (
            <Subpage title='Wybierz meetup idealny dla Ciebie'>
                <section className='community-guide'>
                    <section className='community-guide__magnet'>
                        <h2>Przewodnik po śląskich meetupach</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla mollis, maximus nisi varius, ornare urna. Quisque in euismod velit. Donec vestibulum quis lorem eu aliquet.
                        </p>
                        <section className='community-guide__magnet--two-column'>
                            <Box>
                                <Image
                                    fit='cover'
                                    src={ebook}
                                />
                            </Box>
                            <ul>
                                <li>13 najlepszych śląskich meetupów o róznej tematyce w jednym miejscu</li>
                                <li>Kazdy z nich opisany z naszej, niezaleznej perspektywy, tak abyś mógł łatwiej podjąć decyzję</li>
                                <li>Szczegóły organizacyjne, które ułatwią Ci dopasować meetup do swojego kalendarza</li>
                            </ul>
                        </section>
                    </section>
                    <section className='community-guide__subscribe'>
                        <MailchimpSubscribe url={listUrl} render={({ subscribe, status, message }) => (
                            <React.Fragment>
                                <LeadMagnetForm onSubmitted={formData => subscribe(formData)} />
                                {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                                {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
                                {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                            </React.Fragment>
                        )} />
                    </section>
                </section>
            </Subpage>
        )
    }
}
