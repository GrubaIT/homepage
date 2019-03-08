import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Image from "grommet/components/Image";
import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";
import ReactPixel from "react-facebook-pixel";

import { Subpage } from "../components";
import ebook from "../images/community-guide.png";
import listImage from "../images/success.svg";
import LeadMagnetForm from "../components/LeadMagnetForm";
import { mailchimpListUrl } from "../constants/general";
import { validate, fieldValidationRule } from "../services/validation-service";

const options = {
    autoConfig: true, // set pixel's autoConfig
    debug: false // enable logs
};

export default class CommunityGuide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValues: {
                name: "",
                email: "",
                newsAgree: false,
                initiativesAgree: false,
                eventsAgree: false
            },
            formErrors: {
                name: null,
                email: null
            }
        };
        this.handleChange = (formValues, formErrors) => this.setState({ formValues, formErrors });
        this.submit = subscribe => {
            const formErrors = validate(this.state.formValues)([
                { field: "name", rule: fieldValidationRule.validateIsRequired },
                { field: "email", rule: fieldValidationRule.validateEmail }
            ]);
            this.setState({ formErrors });

            if (!formErrors.name && !formErrors.email) {
                ReactPixel.trackCustom("Subscribe", {
                    name: this.state.formValues.name,
                    email: this.state.formValues.email,
                    event: "Subscribed to newsletter"
                });
                subscribe({
                    FNAME: this.state.formValues.name,
                    EMAIL: this.state.formValues.email,
                    gdpr: {
                        38015: this.state.formValues.eventsAgree ? "Y" : "N",
                        38019: this.state.formValues.newsAgree ? "Y" : "N",
                        38023: this.state.formValues.initiativesAgree ? "Y" : "N"
                    }
                });
            }
        };
        ReactPixel.init("1977005222589935", {}, options);
    }

    render() {
        return (
            <Subpage title="Wybierz meetup idealny dla Ciebie">
                <section className="community-guide">
                    <section className="community-guide__magnet">
                        <Heading uppercase={true} tag="h4">
                            Przewodnik po śląskich meetupach
                        </Heading>
                        <p>
                            Chcesz rozwijać swoje umiejetności jeszcze szybciej? Chcesz ciągle się rozwijać poznając
                            aktualne trendy w IT i być cenionym specjalistą? A może masz problem i szukasz kogoś kto
                            pomógłby Ci go rozwiązać?
                        </p>
                        <p>
                            Społeczność IT to niesamowite źródło wiedzy, inspiracji a przede wszystkim ludzi, którzy
                            chętnie wymienią się doświadczeniami. Ale gdzie ją spotkać? Przedstawiamy zestawienie 13
                            wyselekcjonowanych spotkań z całego Śląska, na których znajdziesz nie tylko merytorykę ale
                            również niesamowitych ludzi.
                        </p>
                        <section className="community-guide__magnet--two-column">
                            <Box>
                                <Image fit="cover" src={ebook} />
                            </Box>
                            <ul>
                                <li>
                                    <Image className="list-bullet" src={listImage} />
                                    <span>13 sprawdzonych meetupów ze Śląska</span>
                                </li>
                                <li>
                                    <Image className="list-bullet" src={listImage} />
                                    <span>Wszystkie informacje na temat spotkań w jednym miejscu</span>
                                </li>
                                <li>
                                    <Image className="list-bullet" src={listImage} />
                                    <span>Opisy przebiegu i formy spotkań społeczności IT</span>
                                </li>
                            </ul>
                        </section>
                    </section>
                    <section className="community-guide__subscribe">
                        <MailchimpSubscribe
                            url={mailchimpListUrl}
                            render={({ subscribe, status, message }) => {
                                return (
                                    <React.Fragment>
                                        <LeadMagnetForm
                                            processing={status === "sending"}
                                            success={status === "success"}
                                            formValues={this.state.formValues}
                                            formErrors={this.state.formErrors}
                                            onChange={this.handleChange}
                                            onSubmitted={() => this.submit(subscribe)}
                                        />
                                        {status === "error" && (
                                            <div
                                                style={{ color: "red" }}
                                                dangerouslySetInnerHTML={{
                                                    __html: message
                                                }}
                                            />
                                        )}
                                    </React.Fragment>
                                );
                            }}
                        />
                    </section>
                </section>
            </Subpage>
        );
    }
}
