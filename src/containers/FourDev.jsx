import React, { Component } from 'react';
import PresentationMaterials from '../components/PresentationMaterials';


class FourDev extends Component {
    render() {
        return (
            <PresentationMaterials presentationTitle='Jedno narzedzie, które rozwiąże twoje problemy z microservicami'>
            <p>Siema!</p>
            <p>Super, że jesteś zainteresowany dalszym zgłębieniem wiedzy z Service Fabric! Poeksperymentujmy trochę, by nauczyć się czegoś nowego. Przygotowałem kilka przydatnych linków, które wprowadzą Cię jak od A do Z stworzyc swoją następną aplikację na Service Fabric</p>
            <p>Miłej zabawy z nową wiedzą! Jakbyś miał problemy to pisz śmiało na mojego maila: <a href='mailto:jakub@gruba.it'>jakub@gruba.it</a>. Zapraszam Cię też to poklikania po stronie Gruba.IT - zobacz jakie fajne wydarzenia organizujemy! Mam nadzieję, że zobaczymy się wkrótce na jednym z nich.</p>
              <ul>
                <li><a target='_blank' href='https://humanaction-my.sharepoint.com/:p:/g/personal/sikora_humanaction_eu/EZbrkjNw4wJArJXNcpvTzaoBxhqAAJ5s8Ac7hxeCxNBaxQ?e=SYs73D'>Prezentacja</a></li>
                <li><a target='_blank' href='https://help.pluralsight.com/help/microsoft-azure-courses'>Info jak dostać dostęp do darmowych kursów z Azure (będzie potrzebne zaraz)</a></li>
                <li><a target='_blank' href='https://app.pluralsight.com/player?course=microsoft-azure-dotnet-secure-services-applications&author=scott-allen&name=microsoft-azure-dotnet-secure-services-applications-m3&clip=0&mode=live'>Piguła wiedzy o podstawach z Azure na Pluralsight</a></li>
                <li><a target='_blank' href='https://www.pluralsight.com/courses/azure-service-fabric-programming-models'>Solidny kurs z SF na Pluralsight</a></li>
                <li><a target='_blank' href='https://www.youtube.com/watch?v=tToSCPvOr10'>Ciekawa prelekcja Szymona Kulca o SF</a></li>
                <li><a target='_blank' href='https://docs.microsoft.com/en-us/azure/service-fabric/'>Service Fabric - krok po kroku od Microsoft</a></li>
                <li><a target='_blank' href='https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-diagnostics-event-analysis-appinsights'>Service Fabric i Application Insights - więcej info jak to dobrze połączyć</a></li>
                <li><a target='_blank' href='https://docs.microsoft.com/pl-pl/azure/service-fabric/service-fabric-diagnostics-event-analysis-oms'>Service Fabric i OMS Log Analytics - więcej info jak to spiać ze sobą + ARM Template</a></li>
                <li><a target='_blank' href='https://sikora.humanaction.eu/tag/service-fabric/'>Moje artykuły o SF</a></li>
              </ul>
              <p>Powodzenia! Do zobaczenia gdzieś na Śląsku! :)</p>
              <p>Jakub z Gruba.IT</p>
            </PresentationMaterials>
          );
    }
}

export default FourDev;