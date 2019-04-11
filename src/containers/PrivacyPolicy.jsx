import React from 'react';
import { Subpage } from '../components';
import SubpageSection from '../components/SubpageSection';

export default class PrivacyPolicy extends React.Component {
    render() {
        return (
            <Subpage title='Polityka prywatności' className='privacy-policy'>
                <SubpageSection headerUppercase={true} title='DEFINICJE'>
                    <p>Niniejsze definicje oznaczają:</p>

                    <ol start='1' type='1' className='privacy-policy__points'>
                        <li>
                            Administrator/Gruba.IT – Fundacja Gruba.IT z
                            siedzibą w Katowicach przy ul. Św. Jana 11/4,
                            wpisaną do rejestru stowarzyszeń, innych organizacji
                            społecznych i zawodowych, fundacji oraz publicznych
                            zakładów opieki zadrowotnej KRS prowadzonego przez
                            Sąd Rejonowy Katowice-Wschód w Katowicach KRS:
                            0000724287, REGON: 38001252, NIP: 6342928145.
                        </li>
                        <li>
                            Newsletter – wiadomość e-mail przesyłana cyklicznie
                            przez Gruba.IT na podany przez Użytkownika tej
                            usługi adres e-mail zawierająca informacje dotyczące
                            organizowanych przez Gruba.IT konferencji, meetupów
                            i innych inicjatyw.
                        </li>
                        <li>
                            Serwis – witryna internetowa dostępna w Internecie
                            pod adresem:
                            <a href='http://www.gruba.it/'>www.gruba.it</a>
                        </li>
                        <li>
                            Pliki cookies - tak zwane internetowe ciasteczka,
                            czyli maleńkie informacje, zapisywane przez serwer
                            na dysku komputera, w postaci małej wielkości plików
                            tekstowych.
                        </li>
                        <li>
                            Polityka – niniejsza polityka określająca zasady
                            dotyczące plików cookies oraz zasady przetwarzania i
                            ochrony danych osobowych.
                        </li>
                        <li>
                            RODO - Rozporządzenia Parlamentu Europejskiego i
                            Rady (UE) 2016/679 z dnia 27 kwietnia 2016 roku w
                            sprawie ochrony osób fizycznych w związku z
                            przetwarzaniem danych osobowych i w sprawie
                            swobodnego przepływu takich danych oraz uchylenia
                            dyrektywy 95/46/WE.
                        </li>
                        <li>
                            Użytkownik – osoba fizyczna, osoba prawna,
                            przedsiębiorca prowadzący działalność gospodarczą
                            oraz każda inna jednostka organizacyjna prowadząca
                            we własnym imieniu działalność gospodarczą lub
                            zawodową korzystająca z Serwisu.
                        </li>
                    </ol>
                </SubpageSection>
                <SubpageSection headerUppercase={true} title='DANE OSOBOWE'>
                    <ol start='1' type='1' className='privacy-policy__points'>
                        <li>
                            W celu skorzystania z usług oferowanych przez
                            Administratora za pośrednictwem Serwisu oraz na
                            wydarzeniach organizowanych przez Administratora,
                            konieczne jest podanie przez Użytkownika adresu
                            e-mail, imienia oraz nazwiska.
                        </li>
                        <li>
                            Podanie danych osobowych jest obowiązkowe przy
                            rejestracji na wydarzenia oraz konieczne do
                            świadczenia usługi Newslettera przez Administratora
                            na rzecz Użytkownika za pośrednictwem Serwisu.
                        </li>
                        <li>
                            Podczas wizyty w Serwisie, automatycznie zbierane są
                            takie dane jak: adres IP, nazwa domeny, typ
                            przeglądarki, typ systemu operacyjnego za pomocą
                            narzędzi analitycznych.
                        </li>
                        <li>
                            Dane zbierane podczas wizyty w Serwisie będą
                            wykorzystane do umożliwienia przesłania Newslettera.
                        </li>
                        <li>
                            Dane zbierane podczas rejestracji na wydarzenia będą
                            wykorzystywane jedynie w celach organizacyjnych
                            wydarzenia oraz informacyjnych (informacje dotyczące
                            wydarzeń, w których użytkownik wyraził chęć udziału
                            oraz przyszłych wydarzeń organizowanych przez
                            Gruba.IT)
                        </li>
                        <li>
                            Dane zbierane automatycznie mogą być użyte do
                            analizy zachowań Użytkowników na stronie
                            internetowej{' '}
                            <a href='http://www.gruba.it/'>www.gruba.it</a>,
                            zbierania danych demograficznych o Użytkownikach lub
                            do personalizacji zawartości naszych stron
                            internetowych. Dane te są zbierane automatycznie o
                            każdym Użytkowniku.
                        </li>
                        <li>
                            Podstawą przetwarzania danych osobowych Użytkownika
                            jest realizacja umowy na dostarczanie Newslettera
                            lub podjęcie działań przed jej zawarciem, lub
                            realizacja zamówienia na uczestnictwo w wydarzeniu
                            organizowanym przez fundację. Dane w tym celu
                            przetwarzane będą na podstawie art. 6 ust. 1 lit. b)
                            RODO. Dane będą przechowywane do momentu rozwiązania
                            umowy o dostarczanie Newslettera.
                        </li>
                    </ol>
                </SubpageSection>
                <SubpageSection
                    headerUppercase={true}
                    title='UDOSTĘPNIANIE I POWIERZANIE DANYCH OSOBOWYCH'>
                    <ol start='1' type='1' className='privacy-policy__points'>
                        <li>Administratorem danych osobowych jest Gruba.IT.</li>
                        <li>
                            Inspektorem Danych Osobowych Gruba.IT jest Jakub
                            Sikora –{' '}
                            <a href='mailto:jakub@gruba.it'>jakub@gruba.it</a>.{' '}
                        </li>
                        <li>
                            Administrator może powierzyć przetwarzanie zebranych
                            danych osobowych Użytkowników innemu podmiotowi
                            jedynie na podstawie zawartej z nim umowy
                            powierzenia przetwarzania danych osobowych.
                        </li>
                        <li>
                            W celu wykonania umów o świadczenie usługi
                            Newslettera oraz organizacji wydarzenia, dane
                            Użytkowników będą powierzane lub udostępniane
                            podmiotom przetwarzającym je na zlecenie Gruba.IT,
                            np. dostawcy hostingu, chmury publicznej, usługi
                            mailingowej, usługi obsługi systemu rejestracji na
                            wydarzenia, podwykonawcom naszych usług oraz
                            podmiotom uprawnionym do uzyskania danych na
                            podstawie obowiązującego prawa np. sądy lub organy
                            ścigania – oczywiście tylko gdy wystąpią z żądaniem
                            w oparciu o stosowną podstawę prawną.
                        </li>
                        <li>
                            Zebrane dane osobowe przechowujemy na terenie
                            Europejskiego Obszaru Gospodarczego („EOG”), ale
                            mogą one być także przesyłane do kraju spoza tego
                            obszaru i tam przetwarzane. Każda operacja
                            przesyłania danych osobowych jest wykonywana zgodnie
                            z obowiązującym prawem. Jeśli dane są przekazywane
                            poza obszar EOG, Gruba.IT stosuje standardowe
                            klauzule umowne oraz Tarczę Prywatności (decyzja
                            Komisji Europejskiej z 12.7.2016 r.,"Tarcza
                            Prywatności") jako środki zabezpieczające w
                            odniesieniu do krajów, w przypadku których Komisja
                            Europejska nie stwierdziła odpowiedniego poziomu
                            ochrony danych.
                        </li>
                        <li>
                            Dane osobowe zebrane przez Gruba.IT mogą zostać
                            przekazane upoważnionym, na podstawie obowiązujących
                            przepisów prawa, organom państwowym.
                        </li>
                        <li>
                            W przypadku kontroli Prezesa Urzędu Ochrony Danych
                            Osobowych, dane Użytkowników Serwisu mogą zostać
                            udostępnione pracownikom urzędu zgodnie z
                            obowiązującymi przepisami.
                        </li>
                        <li>
                            W przypadku naruszenia naruszenia prawa lub gdy będą
                            wymagały tego przepisy prawa, Administrator będzie
                            uprawniony do udostępnienia danych organom wymiaru
                            sprawiedliwości.
                        </li>
                    </ol>{' '}
                </SubpageSection>
                <SubpageSection
                    headerUppercase={true}
                    title='PRAWA UŻYTKOWNIKA'>
                    <ol start='1' type='1' className='privacy-policy__points'>
                        <li>
                            Użytkownik ma prawo dostępu do swoich danych
                            osobowych i może dokonać ich sprostowania, usunięcia
                            lub ograniczenia przetwarzania weryfikacji lub
                            poprawienia, a także usunięcia, poprzez skierowanie
                            odpowiedniego żądania do Administratora na adres{' '}
                            <a href='mailto:fundacja@gruba.it'>
                                fundacja@gruba.it
                            </a>
                            , klikając na odpowiedni link w komunikacji
                            elektronicznej lub pocztą na adres Gruba.IT podany w
                            postanowieniu § 1 Polityki.
                        </li>
                        <li>
                            Użytkownik ma prawo wniesienia skargi do Prezesa
                            Urzędu Ochrony Danych Osobowych gdy uzna, iż
                            przetwarzanie danych osobowych narusza przepisy
                            ustawy o ochronie danych osobowych lub RODO.
                        </li>
                    </ol>
                </SubpageSection>
                <SubpageSection headerUppercase={true} title='PLIKI COOKIES'>
                    <ol start='1' type='1' className='privacy-policy__points'>
                        <li>
                            Gruba.IT wykorzystuje Pliki cookies na urządzeniu
                            końcowym Użytkownika (np. komputerze, tablecie,
                            smartfonie). Pliki cookies mogą być odczytywane
                            przez system teleinformatyczny Usługodawcy.
                        </li>
                        <li>
                            Gruba.IT uzyskuje dostęp do informacji w zawartych w
                            Plikach cookies w celach: statystycznych oraz
                            zapewnienia prawidłowego działania strony www.
                        </li>
                        <li>
                            Gruba.IT informuje Użytkowników, że istnieje
                            możliwość takiej konfiguracji przeglądarki
                            internetowej, która uniemożliwia przechowywanie
                            Plików cookies na urządzeniu końcowym Użytkownika.
                        </li>
                        <li>
                            Gruba.IT wskazuje także, że Pliki cookies mogą być
                            przez Użytkownika usunięte po ich zapisaniu przez
                            Wykonawcę, poprzez: odpowiednie funkcje przeglądarki
                            internetowej, programy służące w tym celu lub
                            skorzystanie z odpowiednich narzędzi dostępnych w
                            ramach systemu operacyjnego, z którego korzysta
                            Użytkownik.
                        </li>
                        <li>
                            Pod tymi linkami zamieszczone są informacje o
                            sposobach usunięcia Plików cookies w
                            najpopularniejszych przeglądarkach internetowych:
                        </li>
                        <ul>
                            <li>
                                Firefox:{' '}
                                <a href='http://support.mozilla.org/pl/kb/usuwanie-ciasteczek'>
                                    http://support.mozilla.org/pl/kb/usuwanie-ciasteczek
                                </a>
                                ,
                            </li>
                            <li>
                                Opera:{' '}
                                <a href='http://help.opera.com/Linux/9.60/pl/cookies.html'>
                                    http://help.opera.com/Linux/9.60/pl/cookies.html
                                </a>
                                ,
                            </li>
                            <li>
                                Internet Explorer:{' '}
                                <a href='http://support.microsoft.com/kb/278835/pl'>
                                    http://support.microsoft.com/kb/278835/pl
                                </a>
                                ,
                            </li>
                            <li>
                                Chrome:{' '}
                                <a href='http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647'>
                                    http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647
                                </a>
                                .
                            </li>
                        </ul>

                        <li>
                            Gruba.IT informuje Użytkowników, że zmiana
                            konfiguracji przeglądarki internetowej, która
                            uniemożliwia lub ogranicza przechowywanie Plików
                            cookies na urządzeniu końcowym Użytkownika może
                            spowodować ograniczenia funkcjonalności świadczonych
                            usług. Do podobnych skutków może prowadzić
                            wykasowanie Plików cookies w trakcie świadczenia
                            usługi. Może to powodować brak możliwości
                            zalogowania się do Serwisu lub przerwanie sesji po
                            zalogowaniu.
                        </li>
                    </ol>
                </SubpageSection>
                <SubpageSection
                    headerUppercase={true}
                    title='POSTANOWIENIA KOŃCOWE'>
                    <ol start='1' type='1' className='privacy-policy__points'>
                        <li>
                            W sprawach nieuregulowanych w Polityce zastosowanie
                            znajdują obowiązujące przepisy prawa, w
                            szczególności: ustawy o świadczeniu usług drogą
                            elektroniczną, ustawy o ochronie danych osobowych,
                            kodeksu cywilnego oraz RODO.
                        </li>
                        <li>
                            Gruba.IT zastrzega sobie prawo zmiany Polityki z
                            ważnych przyczyn. Za ważne przyczyny uznaje się:
                            wprowadzenie nowych, nowelizacje obowiązujących
                            przepisów prawnych, dostosowanie do zmian
                            wprowadzonych przez Gruba.IT.
                        </li>
                        <li>
                            Gruba.IT powiadamia o treści zmian poprzez
                            ogłoszenie komunikatu o zmianie Polityki na stronie{' '}
                            <a href='http://www.gruba.it/'>www.gruba.it</a>
                        </li>
                        <li>
                            Sądem właściwym do sporów wynikłych ze stosowania
                            niniejszej Polityki jest sąd właściwy według
                            obowiązujących przepisów prawa.
                        </li>
                    </ol>
                </SubpageSection>

                <p>
                    Ostatnia zmiana wersji polityki pochodzi z dnia 2019-04-10
                </p>
            </Subpage>
        );
    }
}
