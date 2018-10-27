import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Paragraph from "grommet/components/Paragraph";
import Heading from "grommet/components/Heading";
import Grommet from "grommet/components/Grommet";
import Accordion from "grommet/components/Accordion";
import AccordionPanel from "grommet/components/AccordionPanel";
import Box from "grommet/components/Box";
import Tiles from "grommet/components/Tiles";
import Tile from "grommet/components/Tile";
import Header from "grommet/components/Header";
import CheckmarkIcon from "grommet/components/icons/base/Checkmark";
import Countdown from "../Home/Sections/Common/Countdown";
import logo from "../Home/Sections/images/logo.svg";
import Footer from "../Home/Sections/Footer";

const SubpageSection = ({ headerUppercase, title, children }) => (
  <Box className="subpage__section">
    <Heading
      strong={true}
      uppercase={headerUppercase}
      align="start"
      margin="small"
    >
      {title}
    </Heading>
    <div className="subpage__section--content">{children}</div>
  </Box>
);

class Contest extends Component {
  render() {
    return (
      <section className="subpage contest">
        <div className="subpage__header">
          <NavLink to="/" className="subpage__header--logo">
            <img src={logo} />
          </NavLink>
          <Heading
            className="subpage__header--title"
            strong={true}
            uppercase={true}
            align="center"
            margin="none"
          >
            Zadanie specjalne
          </Heading>
        </div>
        <Grommet className="content-wrapper">
          <SubpageSection headerUppercase={false} title="Treść zadania">
            <p>
              Wyobraź sobie, że wpadłeś na genialny pomysł urządzenia, które
              może nauczyć programowania każdą osobę. Twoim zadaniem jest
              stworzenie takiego produktu i przygotowanie go do sprzedaży.
              Możesz całkowicie puscić wodze fantazji I nie przejmować się
              fizcznymi ograniczeniami, czy tym że nie wiesz jak coś dokładnie
              działa. Jeśli Twój produkt czerpie energię z magii wytwarzanej
              przez róg jednorożca zamiast baterii paluszków - świetnie! Jeśli
              czyta on w myślach I przekazuje wiedze telepatycznie zamiast
              wyświetlać na ekranie - pasuje! Wysil wyobraźnie I spełnij
              poniższe wymagania.
            </p>
          </SubpageSection>

          <SubpageSection
            headerUppercase={false}
            title="Grupa do której kierujesz produkt"
          >
            <p>
              Uczniowie szkół podstawowych, którzy nie wiedzą nic o
              programowaniu.
            </p>
          </SubpageSection>

          <SubpageSection headerUppercase={false} title="Cel">
            <p>
              Produkt musi móc nauczyć osobę nie znającą programowania od
              poziomu 0 do poziomu ekspert w minimum 6 miesięcy.
            </p>
          </SubpageSection>

          <SubpageSection headerUppercase={false} title="Wymagania">
            <Tiles fill={true} flush={false}>
              <Tile separator="top" align="start" basis="1/4">
                <Header size="small" pad={{ horizontal: "small" }}>
                  <Heading tag="h4" strong={true} margin="none">
                    Opis produktu
                  </Heading>
                </Header>
                <Box pad="small">
                  <Paragraph margin="none">
                    Najlepiej w formie pliku tekstowego np. MS Word. Opis
                    powinien zawierać informacje:
                    <ul>
                      <li>
                        <CheckmarkIcon size="xsmall" /> Jak wygląda produkt
                      </li>
                      <li>
                        <CheckmarkIcon size="xsmall" /> Prosta instrukacji
                        używania produktu
                      </li>
                      <li>
                        <CheckmarkIcon size="xsmall" /> W jaki sposób działa i
                        spełnia główne zadanie
                      </li>
                    </ul>
                  </Paragraph>
                </Box>
              </Tile>
              <Tile separator="top" align="start" basis="1/4">
                <Header size="small" pad={{ horizontal: "small" }}>
                  <Heading tag="h4" strong={true} margin="none">
                    Filmik promocyjny
                  </Heading>
                </Header>
                <Box pad="small">
                  <Paragraph margin="none">
                    Naprawdę prosty filmik promocyjny dla produktu ( do 3
                    minut). Nie nmusi być nic bardzo wyszukanego, liczy się
                    pomysł.
                  </Paragraph>
                </Box>
              </Tile>
              <Tile separator="top" align="start" basis="1/4">
                <Header size="small" pad={{ horizontal: "small" }}>
                  <Heading tag="h4" strong={true} margin="none">
                    Strona WWW
                  </Heading>
                </Header>
                <Box pad="small">
                  <Paragraph margin="none">
                    Prosta strona www z opisem produktu (może być zrobiona w
                    HTML, czy narysowana ręcznie/na komputerze)
                  </Paragraph>
                </Box>
              </Tile>
            </Tiles>
            <p>
              Całość spakowana w jedną paczkę. Paczkę wyślij na email:
              <a>zadanie@gruba.it</a>
            </p>
          </SubpageSection>

          <SubpageSection headerUppercase={false} title="Co oceniamy">
            <p>
              Pomysłowość i kreatywność pod kątem tego jak produkt spełnia swoje
              zadanie Sposób przekazania informacji o produkcie w filmiku I na
              stronie - nie oceniamy wyglądu filmiku, czy strony www (może być
              brzydko, jeśli wszystkie potrzebne informacje są przekazane)
            </p>
          </SubpageSection>

          <SubpageSection
            headerUppercase={false}
            title="Czas na wykonanie zadania"
          >
            <p>Koniec roku szkolnego czyli 23 czerwca</p>
            Pozostało:
            <Countdown date={'2018-06-24'} />
          </SubpageSection>

          <SubpageSection headerUppercase={false} title="Nagroda">
            <React.Fragment>
              <p>
                Do wygrania jest świetne narzędzie do zabawy i nauki
                programowania - Pixel Kit. Możesz stworzyć na nim własne gry,
                tworzyć animacje dźwięki, stworzyć własną stację pogody, czy
                nawet łączyć się z Międzynarodową Stacją Kosmiczną (ISS). Możesz
                programować zarówno używając prostych bloków logiki, jak i
                języka Javascript jeśli czujesz się już na siłach! Polecamy, bo
                zabawa przednia i sporo można się nauczyć.
              </p>
              <div className="centered-content">
                <video
                  autoplay="true"
                  loop="true"
                  muted=""
                  class="LearnBlock-video"
                  id="LearnBlock-video"
                >
                  <source
                    type="video/webm"
                    src="https://static.kano.me/assets/videos/product-page/pixel-kit/product/learn-code.webm"
                  />
                  <source
                    type="video/mp4"
                    src="https://static.kano.me/assets/videos/product-page/pixel-kit/product/learn-code.mp4"
                  />
                  <img title="Your browser does not support the <video> tag" />
                </video>
              </div>
            </React.Fragment>
          </SubpageSection>

          <SubpageSection headerUppercase={false} title="Pytania i odpowiedzi">
            <Accordion>
              <AccordionPanel heading="Czy jak nie mam wszystkiego na czas to mogę I tak brać udział w konkursie?">
                <Paragraph>
                  <strong>TAK</strong>, jeśli zrobienie strony sprawia Ci
                  problem - możesz wymyślić tylko jej zarys, jeśli nie zdążyłeś
                  z filmikiem, napisz jaki masz na niego pomysł, albo wrzuć
                  kilka zdjęć lub obrazków przedstawiających reklamy produktu.
                  KAŻDE zgłoszenie bierze udział w konkursie, więc nie bój się i
                  wyślij co masz!
                </Paragraph>
              </AccordionPanel>
              <AccordionPanel heading="Czy jak nie umiem kręcić filmików lub pisać w HTML nadal mogę wziąć w konkursie?">
                <Paragraph>
                  Oczywiście, możesz te części zadania, z którymi nie dajesz
                  sobie rady zastąpić czymś innym, oceniamy pomysłowość i
                  zgodność produktu ze swoim przeznaczeniem - nie przejmuj się
                  technicznym rozwiązaniem.
                </Paragraph>
              </AccordionPanel>
            </Accordion>
          </SubpageSection>
          <Footer />
        </Grommet>
      </section>
    );
  }
}

export default Contest;

const Section = ({ title, children }) => (
  <React.Fragment>
    <Heading tag="h3">{title} </Heading>
    <Paragraph size="medium" width="xlarge">
      {children}
    </Paragraph>
  </React.Fragment>
);
