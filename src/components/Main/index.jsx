import React from 'react';
import Head from "./Head/index";
import Tooltip from "../Tooltip/index";
import TodoList from "./TodoList/index";
import Multiselect from "./Multiselect/index";

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Head/>
                <section className="useful edge">
                    <div className="section-description">
                        <h2>Imagine a world where healthcare and benefit administration is efficient, effective and easy
                            to use, for everyone</h2>
                    </div>
                    <div className="container">
                        <div className="useful-wrapper">
                            <div ref={(div) => this.tooltipTargetImg = div} className="useful__icn"/>
                            <Tooltip position="bottom" target={this.tooltipTargetImg} event="mouseenter">
                                Лох
                            </Tooltip>
                            <div className="useful__info">
                                <ul>
                                    <li>No need to make phone calls before seeing the doctor</li>
                                    <li>No need to learn a strange new language to properly understand your benefits
                                    </li>
                                    <li>No need to guess what benefits are available, what you need to pay, when, to
                                        whom
                                    </li>
                                    <li>No more stories about rampant waste, fraud, abuse and inefficiency of the
                                        healthcare system
                                    </li>
                                    <li>You are in charge of your decisions, instead of being thought of as a
                                        “beneficiary”
                                    </li>
                                    <li>Everyone is always synchronized so you get the care you need</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <TodoList/>
                <Multiselect/>
                {/*<section className="revolution">*/}
                {/*<div className="container">*/}
                {/*<div className="section-description">*/}
                {/*<h2>Revolution of Cost, Care and Convenience</h2>*/}
                {/*</div>*/}
                {/*<div className="revolution__item">*/}
                {/*<h3><span className="icn icn-insurers"/>Cost</h3>*/}
                {/*<p>SmartCareWallet is designed to revolutionize healthcare and benefit administration,*/}
                {/*reduces*/}
                {/*administrative cost, fraud, waste, abuse and inefficiency in our healthcare and benefit*/}
                {/*administration universe. SmartCareWallet impacts all programs such as Medicaid,*/}
                {/*Medicare, CHIP, SNAP, TANF,*/}
                {/*commercial insurance and many more. Form a consumer perspective SmartCareWallet gives*/}
                {/*them visibility and control over their costs</p>*/}
                {/*</div>*/}
                {/*<div className="revolution__item">*/}
                {/*<h3><span className="icn icn-providers"/>Care</h3>*/}
                {/*<p>No more data silos that inhibit and prohibit consumer control over their healthcare*/}
                {/*No more searching for old records*/}
                {/*No need for your doctor to talk to anyone else but you</p>*/}
                {/*</div>*/}
                {/*<div className="revolution__item">*/}
                {/*<h3><span className="icn icn-employers"/>Convenience</h3>*/}
                {/*<p>No more learning of arcane terminology (EOB, Copay, Coinsurance, Deductible, Out of*/}
                {/*network, out of pocket maximum). SmartCareWallet makes it all human and usable*/}
                {/*SmartCareWallet owner easily grants permission for public or private data, for short*/}
                {/*periods*/}
                {/*All that is needed to access SmartCareWallet is email address of the wallet owner</p>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</section>*/}
                {/*<section className="manage">*/}
                {/*<div className="container">*/}
                {/*<div className="section-description">*/}
                {/*<h2>What is SmartCareWallet</h2>*/}
                {/*</div>*/}
                {/*<div className="manage-wrapper">*/}
                {/*<div className="manage__item">*/}
                {/*<div className="manage__item--icn">*/}
                {/*<div className="icn icn-protect"></div>*/}
                {/*</div>*/}
                {/*<p className="manage__item--description">SmartCare Wallet is a revolutionary platform*/}
                {/*for decentralized administration of healthcare*/}
                {/*and other benefit programs, that securely connects and synchronizes all parties.</p>*/}
                {/*</div>*/}
                {/*<div className="manage__item">*/}
                {/*<div className="manage__item--icn">*/}
                {/*<div className="icn icn-cards"></div>*/}
                {/*</div>*/}
                {/*<p className="manage__item--description">Wallet provides a framework for publishing edge*/}
                {/*applications called SmartCare Cards.*/}
                {/*Clients and community can publish Cards for a large group or for a specific*/}
                {/*individual, to*/}
                {/*share clinical and administrative information, manage transactions, send a bill,*/}
                {/*collect a*/}
                {/*payment and improve quaity of care and outcomes.</p>*/}
                {/*</div>*/}
                {/*<div className="manage__item">*/}
                {/*<div className="manage__item--icn">*/}
                {/*<div className="icn icn-heart"></div>*/}
                {/*</div>*/}
                {/*<p className="manage__item--description">Cards are built using the SmartCare Protocol*/}
                {/*and SmartCare tokens. Cards can be designed*/}
                {/*to handle all interaction between two or more parties, can be linked, stacked and*/}
                {/*remain in*/}
                {/*sync automatically.</p>*/}
                {/*</div>*/}
                {/*<div className="manage__item">*/}
                {/*<div className="manage__item--icn">*/}
                {/*<div className="icn icn-protect"></div>*/}
                {/*</div>*/}
                {/*<p className="manage__item--description">Cards are built using the SmartCare Protocol*/}
                {/*and SmartCare tokens. Cards can be designed*/}
                {/*to handle all interaction between two or more parties, can be linked, stacked and*/}
                {/*remain in*/}
                {/*sync automatically.</p>*/}
                {/*</div>*/}
                {/*<div className="manage__item">*/}
                {/*<div className="manage__item--icn">*/}
                {/*<div className="icn icn-cards"></div>*/}
                {/*</div>*/}
                {/*<p className="manage__item--description">SmartCareWallet platform is infintely*/}
                {/*expandable by clients and community, within the*/}
                {/*guidelines established to ensure ease of usage, security, privacy and best*/}
                {/*practices</p>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</section>*/}
                {/*<section className="services">*/}
                {/*<div className="container">*/}
                {/*<div className="section-description">*/}
                {/*<h2>SmartCareWallet will optimize and streamline healthcare and benefit*/}
                {/*administration for all the parties involved</h2>*/}
                {/*<p>Insurance companies, doctors, labs, pharmacies, employers, benefit administrators and*/}
                {/*government agencies can use the CW protocol to publish smart application cards that*/}
                {/*contain*/}
                {/*relevant information and logic to process the transaction and are automatically*/}
                {/*processed by*/}
                {/*the*/}
                {/*right SmartCareWallet</p>*/}
                {/*</div>*/}
                {/*<div className="services-wrapper">*/}
                {/*<div className="services__item">*/}
                {/*<div className="services__head-wrap">*/}
                {/*<div className="icn icn-insurers"/>*/}
                {/*<p className="services__item--heading">insurers</p>*/}
                {/*</div>*/}
                {/*<p className="services__item--subheading">Better consumer engagement, much reduced*/}
                {/*administrative costs and transparency*/}
                {/*that actually bends the infamous cost curve in the right direction</p>*/}
                {/*</div>*/}
                {/*<div className="services__item">*/}
                {/*<div className="services__head-wrap">*/}
                {/*<div className="icn icn-providers"/>*/}
                {/*<p className="services__item--heading">Doctors, hospitals, labs, pharmacies and care*/}
                {/*providers</p>*/}
                {/*</div>*/}
                {/*<p className="services__item--subheading">Lower costs, less administrative overhead,*/}
                {/*better benefits and healthier employees</p>*/}
                {/*</div>*/}
                {/*<div className="services__item">*/}
                {/*<div className="services__head-wrap">*/}
                {/*<div className="icn icn-employers"/>*/}
                {/*<p className="services__item--heading">Employers, administrators and brokers</p>*/}
                {/*</div>*/}
                {/*<p className="services__item--subheading">Faster payments, less write-off, transparency,*/}
                {/*much less administrative overhead</p>*/}
                {/*</div>*/}
                {/*<div className="services__item">*/}
                {/*<div className="services__head-wrap">*/}
                {/*<div className="icn icn-agencies"/>*/}
                {/*<p className="services__item--heading">Government programs and community*/}
                {/*organizations</p>*/}
                {/*</div>*/}
                {/*<p className="services__item--subheading">Engage, inform and educate citizens, reduce*/}
                {/*fraud, waste and abuse, improve*/}
                {/*outcomes</p>*/}
                {/*</div>*/}
                {/*<div className="services__item">*/}
                {/*<div className="services__head-wrap">*/}
                {/*<div className="icn icn-developers"/>*/}
                {/*<p className="services__item--heading">Developers and subject matter experts</p>*/}
                {/*</div>*/}
                {/*<p className="services__item--subheading">Create exciting new SmarCare card applications*/}
                {/*that create huge value for all</p>*/}
                {/*</div>*/}
                {/*<div className="services__item">*/}
                {/*<div className="services__head-wrap">*/}
                {/*<div className="icn icn-agencies"/>*/}
                {/*<p className="services__item--heading">Individuals and families</p>*/}
                {/*</div>*/}
                {/*<p className="services__item--subheading">Cost savings, care coordination, transparency*/}
                {/*and better outcomes</p>*/}
                {/*</div>*/}
                {/*<div className="services__item">*/}
                {/*<div className="services__head-wrap">*/}
                {/*<div className="icn icn-developers"/>*/}
                {/*<p className="services__item--heading">Society and economy</p>*/}
                {/*</div>*/}
                {/*<p className="services__item--subheading">Redirect hundreds of billions of dollars*/}
                {/*annually to better uses than admin fees</p>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</section>*/}
                {/*<section className="manage">*/}
                {/*<div className="container">*/}
                {/*<div className="section-description">*/}
                {/*<h2>SmartCareWallet is a decentralized healthcare and benefit administration platform</h2>*/}
                {/*</div>*/}
                {/*<div className="manage-wrapper">*/}
                {/*<div className="manage__item">*/}
                {/*<div className="manage__item--icn">*/}
                {/*<div className="icn icn-cards"></div>*/}
                {/*</div>*/}
                {/*<p className="manage__item--description">Decentralized system of record</p>*/}
                {/*</div>*/}
                {/*<div className="manage__item">*/}
                {/*<div className="manage__item--icn">*/}
                {/*<div className="icn icn-protect"></div>*/}
                {/*</div>*/}
                {/*<p className="manage__item--description">SmartCare Protocol</p>*/}
                {/*</div>*/}
                {/*<div className="manage__item">*/}
                {/*<div className="manage__item--icn">*/}
                {/*<div className="icn icn-cards"></div>*/}
                {/*</div>*/}
                {/*<p className="manage__item--description">SmartCare Coin</p>*/}
                {/*</div>*/}
                {/*<div className="manage__item">*/}
                {/*<div className="manage__item--icn">*/}
                {/*<div className="icn icn-heart"></div>*/}
                {/*</div>*/}
                {/*<p className="manage__item--description">SmartCare Cards</p>*/}
                {/*</div>*/}
                {/*<div className="manage__item">*/}
                {/*<div className="manage__item--icn">*/}
                {/*<div className="icn icn-heart"></div>*/}
                {/*</div>*/}
                {/*<p className="manage__item--description">Model of</p>*/}
                {/*</div>*/}
                {/*<div className="manage__item">*/}
                {/*<div className="manage__item--icn">*/}
                {/*<div className="icn icn-protect"></div>*/}
                {/*</div>*/}
                {/*<p className="manage__item--description">Security, privacy and <br/> access control</p>*/}
                {/*</div>*/}
                {/*<div className="manage__item">*/}
                {/*<div className="manage__item--icn">*/}
                {/*<div className="icn icn-cards"></div>*/}
                {/*</div>*/}
                {/*<p className="manage__item--description">Expansible data model</p>*/}
                {/*</div>*/}
                {/*<div className="manage__item">*/}
                {/*<div className="manage__item--icn">*/}
                {/*<div className="icn icn-protect"></div>*/}
                {/*</div>*/}
                {/*<p className="manage__item--description">SmartCareWallet Community for integration and*/}
                {/*enhancements</p>*/}
                {/*</div>*/}
                {/*<div className="manage__item">*/}
                {/*<div className="manage__item--icn">*/}
                {/*<div className="icn icn-cards"></div>*/}
                {/*</div>*/}
                {/*<p className="manage__item--description">Marketplace of SmartCareCards,*/}
                {/*SmartCareProtocol pairs and more</p>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="btn-container">*/}
                {/*<button className="btn btn-blue-inverse">Technical Whitepaper</button>*/}
                {/*<button className="btn btn-blue-inverse">Join Community</button>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</section>*/}
                {/*<section className="accordion">*/}
                {/*<div className="container">*/}
                {/*<Accordion>*/}
                {/*<div className="accordion-heading"*/}
                {/*data-trigger="SmartCareWallet Decentralized System of Record">*/}
                {/*<div className="accordion-description">*/}
                {/*<ul>*/}
                {/*<li>SmartCareWallet is a benefit administration platform with a decentralized*/}
                {/*system of record*/}
                {/*that is immutable and yet instantly verifiable by all parties*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="accordion-heading" data-trigger="CareWallet Protocol">*/}
                {/*<div className="accordion-description">*/}
                {/*<ul>*/}
                {/*<li>SmartCareWallet Protocol is opensource</li>*/}
                {/*<li>Protocol does not need a central system of record</li>*/}
                {/*<li>Foundation on which smart cards and published and automatically*/}
                {/*synchronized*/}
                {/*</li>*/}
                {/*<li>Protocol is organized into protocol pairs that encapsulate type, structure,*/}
                {/*relationship and*/}
                {/*transactions between two parties*/}
                {/*</li>*/}
                {/*<li>Completely decentralized and is evaluated at end points</li>*/}
                {/*<li>Protocol supports various security and encryption standards</li>*/}
                {/*<li>Protocol can synchronize public &amp; private sides of smart card w/o*/}
                {/*content access*/}
                {/*</li>*/}
                {/*<li>Protocol can NOT read the private side content of the smart card</li>*/}
                {/*<li>Protocol is designed to be accessed via simple end-points like email</li>*/}
                {/*<li>Protocol will be expanded to include new pairs, end-points and support*/}
                {/*different standards*/}
                {/*</li>*/}
                {/*<li>All protocol expansions are open to the community and are subject to peer*/}
                {/*review*/}
                {/*</li>*/}
                {/*<li>SmartCareWallet has scheduled monthly hackathons to review and expand*/}
                {/*protocol*/}
                {/*pairs, end-*/}
                {/*points and standards*/}
                {/*</li>*/}
                {/*<li>Protocol pair submissions that pass peer review will be rewarded with*/}
                {/*bounties of up to 1000*/}
                {/*SCW coins*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="accordion-heading" data-trigger="CareWallet Coin"*/}
                {/*data-trigger-when-open="CareWallet Coin">*/}
                {/*<div className="accordion-description">*/}
                {/*<ul>*/}
                {/*<li>SmartCare Coin is a token based system for streamlining payments*/}
                {/*between stakeholders*/}
                {/*</li>*/}
                {/*<li>SmartCare Coin is based on blockchain technologies</li>*/}
                {/*<li>SmartCare Coin is designed to optimize billing, payments, adjustments,*/}
                {/*recovery,*/}
                {/*reconciliation, audit and review.*/}
                {/*<li>These are processes that are common in healthcare and are quite*/}
                {/*complex*/}
                {/*</li>*/}
                {/*</li>*/}
                {/*<li>SmartCare Coin reduces administrative costs associated with these*/}
                {/*processes*/}
                {/*</li>*/}
                {/*<li>SmartCare Coin synchronizes with SmartCards in the wallet</li>*/}
                {/*<li>SmartCare Coin applies the intellgence of SmartCards to ensure right*/}
                {/*payment to the right*/}
                {/*party at the right time*/}
                {/*</li>*/}
                {/*<li>SmartCare Coin sits on top of CareWallet Protocol where all*/}
                {/*transactions are governed by*/}
                {/*rules of the protocol pairs*/}
                {/*</li>*/}
                {/*<li>SmartCare Coin transactions are verifiable, immutable and auditable,*/}
                {/*leading to easier*/}
                {/*compliance*/}
                {/*</li>*/}
                {/*<li>SmartCare Coin can also be used to pay for CareWallet subscription,*/}
                {/*services, SmartCards*/}
                {/*and more*/}
                {/*</li>*/}
                {/*<li><strong>*/}
                {/*SmartCare Coin does not change value with price of cryptocurrencies (it*/}
                {/*is pegged to US$)*/}
                {/*and has a guaranteed redemption value. SmartCare Coin is an*/}
                {/*intelligent currency designed to foster transparency for all parties and*/}
                {/*lower cost of*/}
                {/*administration. While we expect billions of dollars worth of services to be*/}
                {/*paid via*/}
                {/*SmartCare Coin, it is not a designed to be a speculative currency as many*/}
                {/*cryptocurrencies*/}
                {/*</strong>*/}
                {/*<li>Every SmartCareWallet Coin is backed by reserves, guaranteeing full*/}
                {/*liquidity*/}
                {/*</li>*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="accordion-heading" data-trigger="SmartCareWallet Cards">*/}
                {/*<div className="accordion-description">*/}
                {/*<ul>*/}
                {/*<li>SmartCareCards are intelligent and highly portable applications published on*/}
                {/*the CW protocol and*/}
                {/*are completely understood by SmartCareWallet*/}
                {/*</li>*/}
                {/*<li>SmartCareCards have the unique property of automatically synchronization*/}
                {/*with*/}
                {/*other smart cards*/}
                {/*</li>*/}
                {/*<li>SmartCareCards require no centralized logic processor and are automatically*/}
                {/*evaluated by each*/}
                {/*SmartCareWallet in which the card exists*/}
                {/*</li>*/}
                {/*<li>Each smart card has two «sides» public side and private side*/}
                {/*<li>Public side can be read by public key</li>*/}
                {/*<li>Private side requires both public and private keys</li>*/}
                {/*</li>*/}
                {/*<li>Smart card has four logical edges that control the behaviour of the*/}
                {/*card*/}
                {/*<li>Left Edge – Publisher, subscriber, purpose, duration and other control*/}
                {/*data*/}
                {/*</li>*/}
                {/*<li>Right Edge – Security, encryption, access control, privacy rules*/}
                {/*applicable to public*/}
                {/*and private side access*/}
                {/*</li>*/}
                {/*<li>Top Edge – Context, logic and rules</li>*/}
                {/*<li>Bottom Edge – Links for synchronization with other cards</li>*/}
                {/*</li>*/}
                {/*<li>SmartCareCards are published for a specific protocol pair and must follow*/}
                {/*the rules of the pair that*/}
                {/*are encapsulated in the protocol*/}
                {/*</li>*/}
                {/*<li>One of the greatest innovations of CW is that SmartCards can be linked*/}
                {/*with other*/}
                {/*SmartCareCards and all the cards always remain in sync*/}
                {/*</li>*/}
                {/*<li>SmartCareCards can be published by organizations such as insurance*/}
                {/*companies, hospitals, labs,*/}
                {/*pharmacies and by the SCW community*/}
                {/*</li>*/}
                {/*<li>SmartCareCards can be published as a single card or stack of cards</li>*/}
                {/*<li>SmartCareCards can be published as a single card or stack of cards</li>*/}
                {/*</ul>*/}
                {/*<p>SmartCareWallet company will scheduled and actively manage monthly developer*/}
                {/*meets and hackathons*/}
                {/*to build new*/}
                {/*SmartCareCards, rewarded by bounties of up to 1000 SCW coins</p>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="accordion-heading"*/}
                {/*data-trigger="SmartCareWallet Security Privacy and Access Model">*/}
                {/*<div className="accordion-description">*/}
                {/*<p>SmartCareWallet is designed to improve the security and privacy while also*/}
                {/*improving*/}
                {/*access and accountability in a manner that current centralized systesm can not*/}
                {/*accomplish.</p>*/}
                {/*<p>SmartCareWallet is designed to work with existing protocols, standards and*/}
                {/*formats of data*/}
                {/*while adding a decentralized audit trail for all events that occur at*/}
                {/*application and protocol*/}
                {/*level. Every transaction that happens in SmartCareWallet is immutable, instantly*/}
                {/*verifiable*/}
                {/*by all authorized parties.</p>*/}
                {/*<p>SmartCareWallet protocol and security is*/}
                {/*expandable and serves as an envelope in which*/}
                {/*content in any format can be safely delivered to the right party for the right*/}
                {/*duration.</p>*/}
                {/*<p>Clients and community can expand the SmartCareWallet security model*/}
                {/*to address the*/}
                {/*needs of privacy and portability of data and still leverage their existing and*/}
                {/*planned securtiy*/}
                {/*frameworks.</p>*/}
                {/*<p>Benefit information is very senstive and is governed by numerous*/}
                {/*regulations, standards and*/}
                {/*security considerations. In many ways, the argument and justification for*/}
                {/*existing*/}
                {/*silos of*/}
                {/*centralized systems rests on the need to secure this data and comply with all*/}
                {/*relevant rules.*/}
                {/*</p>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="accordion-heading"*/}
                {/*data-trigger="SmartCareWallet Data Model">*/}
                {/*<div className="accordion-description">*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="accordion-heading"*/}
                {/*data-trigger="SmartCareWallet Marketplace">*/}
                {/*<div className="accordion-description">*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</Accordion>*/}
                {/*</div>*/}
                {/*</section>*/}
                {/*<section className="community">*/}
                {/*<div className="container">*/}
                {/*<h2>Community</h2>*/}
                {/*<div className="community__wrapper">*/}
                {/*<div className="community__wrapper--item">*/}
                {/*SmartCareWallet community is actively managed,*/}
                {/*served and rewarded by SmartCareWallet*/}
                {/*Growth, success and skill of SmartCareWallet communty is a key goal of the company*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</section>*/}
                {/*<section className="technologies">*/}
                {/*<div className="container">*/}
                {/*<div className="section-description">*/}
                {/*<h2>Technologies</h2>*/}
                {/*<h3>SmartCareWallet has only become possible because of confluence of recent technological*/}
                {/*breakthrough in several areas</h3>*/}
                {/*</div>*/}
                {/*<div className="technologies__wrapper">*/}
                {/*/!*<h4>Blockchain</h4>*!/*/}
                {/*/!*<h4>Smart contracts</h4>*!/*/}
                {/*/!*<h4>Machine learning</h4>*!/*/}
                {/*/!*<h4>Behavioral, clinical and transactional analytics</h4>*!/*/}
                {/*/!*<h4>Big Data and MDM</h4>*!/*/}
                {/*/!*<h4>Cloud</h4>*!/*/}
                {/*<div className="technologies__wrapper--icn">*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<p>Combined with, decades of experience and domain expertise of insurance systems,*/}
                {/*government programs, clinical management, care coordination and employee benefits*/}
                {/*administration, that our management team has accumulated</p>*/}
                {/*</div>*/}
                {/*</section>*/}
                {/*<section className="media">*/}
                {/*<div className="container">*/}
                {/*<div className="section-description">*/}
                {/*<h2>Partners and collaborators</h2>*/}
                {/*</div>*/}
                {/*<div className="media-wrapper">*/}
                {/*<div className="media__item">*/}
                {/*<div className="icn icn-emercoin"/>*/}
                {/*</div>*/}
                {/*<div className="media__item">*/}
                {/*<div className="icn icn-emercoin"/>*/}
                {/*</div>*/}
                {/*<div className="media__item">*/}
                {/*<div className="icn icn-ambisafe"/>*/}
                {/*</div>*/}
                {/*<div className="media__item">*/}
                {/*<div className="icn icn-ambisafe"/>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="media-wrapper">*/}
                {/*<div className="media__item">*/}
                {/*<div className="icn icn-emercoin"/>*/}
                {/*</div>*/}
                {/*<div className="media__item">*/}
                {/*<div className="icn icn-emercoin"/>*/}
                {/*</div>*/}
                {/*<div className="media__item">*/}
                {/*<div className="icn icn-ambisafe"/>*/}
                {/*</div>*/}
                {/*<div className="media__item">*/}
                {/*<div className="icn icn-ambisafe"/>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</section>*/}
                {/*<section className="purchase">*/}
                {/*<div className="container">*/}
                {/*<div className="purchase-wrapper">*/}
                {/*<div className="ceo-img">*/}
                {/*</div>*/}
                {/*<div className="quote">*/}
                {/*<p><i>“It is time to rethink and revolutionize the biggest part of US economy by*/}
                {/*employing a*/}
                {/*smart contract*/}
                {/*model that replaces archaic systems and administrative processes with an intelligent*/}
                {/*benefit wallet that*/}
                {/*is highly efficient, is programmable and can be easily and quickly programmed for*/}
                {/*different benefit*/}
                {/*models (employer-employee and government-citizen)”*/}
                {/*</i></p>*/}
                {/*<h4> - Pradeep Goel, CEO of CareWallet</h4>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</section>*/}
                {/*<Media/>*/}
                {/*<section className="join">*/}
                {/*<div className="container">*/}
                {/*<h2>Join the revolution of care, convenience and cost savings</h2>*/}
                {/*<div className="join__wrapper">*/}
                {/*<div className="join__wrapper--item">*/}
                {/*<p>Sign up as a consumer and take control of your care and costs</p>*/}
                {/*<button className="btn btn-blue-inverse btn-sm">Sign up</button>*/}
                {/*</div>*/}
                {/*<div className="join__wrapper--item">*/}
                {/*<p>Invest to change the*/}
                {/*world by buying*/}
                {/*tokens in our ICO</p>*/}
                {/*<button className="btn btn-blue-inverse btn-sm">Buy tokens</button>*/}
                {/*</div>*/}
                {/*<div className="join__wrapper--item">*/}
                {/*<p>Sign up as a client and*/}
                {/*use SmartCareCards*/}
                {/*to dramatically reduce*/}
                {/*your administrative*/}
                {/*costs</p>*/}
                {/*<button className="btn btn-blue-inverse btn-sm">Sign up</button>*/}
                {/*</div>*/}
                {/*<div className="join__wrapper--item">*/}
                {/*<p>*/}
                {/*Sign up for our*/}
                {/*Community and*/}
                {/*publish SmartCare*/}
                {/*Cards that will change*/}
                {/*the world and*/}
                {/*generate recurring*/}
                {/*revenue*/}
                {/*</p>*/}
                {/*<button className="btn btn-blue-inverse btn-sm">Sign up</button>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</section>*/}
                {/*<section className="docs">*/}
                {/*<div className="container">*/}
                {/*<h2>Security, privacy and access control</h2>*/}
                {/*<p>Traffic roars through his neighborhood on Manhattan’s Upper East Side at all hours. The*/}
                {/*whine of refrigerated grocery trucks by the curb makes things worse. And construction of*/}
                {/*a new apartment tower across the street forces him to flee his own home. There is the*/}
                {/*deafening rat-a-tat of jack hammers and the incessant banging and high-pitched wail of*/}
                {/*construction equipment that echoes in his head.</p>*/}
                {/*<button className="btn btn-sm btn-blue-inverse">PDF</button>*/}
                {/*</div>*/}
                {/*</section>*/}


                {/*<section className="features">*/}
                {/*<div className="container">*/}
                {/*<div className="features__item">*/}
                {/*<div className="features__item--picture">*/}
                {/*<div className="icn icn-handler"/>*/}
                {/*</div>*/}
                {/*<div className="features__item--information">*/}
                {/*<h4>CareWallet will handle:</h4>*/}
                {/*<ul>*/}
                {/*<li> - enrollment</li>*/}
                {/*<li> - eligibility</li>*/}
                {/*<li> - pricing</li>*/}
                {/*<li> - payment</li>*/}
                {/*<li> - review of every healthcare and benefit transaction</li>*/}
                {/*<li> - auditing and compliance with state and federal law</li>*/}
                {/*<li> - possibility for employers and government agencies to implement the right*/}
                {/*program for their*/}
                {/*employees and citizens*/}
                {/*</li>*/}
                {/*<li> - more power and transparency to the employer, employee and citizen*/}
                {/*</li>*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</section>*/}


                {/*<section className="edge transparent">*/}
                {/*<div className="container">*/}
                {/*<div className="section-description">*/}
                {/*<h2>*/}
                {/*Easy way to access*/}
                {/*</h2>*/}
                {/*<p>Through care wallet you can always and instantly access every medical, lab, therapeutic*/}
                {/*and financial*/}
                {/*transaction and grant access for as little or as long as you need. This convergence of*/}
                {/*data will reduce*/}
                {/*duplication of services, avoid waste and unnecessary costs and eliminate delays in*/}
                {/*care.</p>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</section>*/}
                {/*<section className="video">*/}

                {/*</section>*/}
                {/*<section className="edge statistic">*/}
                {/*<div className="container">*/}
                {/*<div className="statistic__item">*/}
                {/*<div className="icn icn-users"/>*/}
                {/*<p className="statistic__item--count">3587</p>*/}
                {/*<p className="statistic__item--descr">satisfied clients</p>*/}
                {/*<hr/>*/}
                {/*</div>*/}
                {/*<div className="statistic__item">*/}
                {/*<div className="icn icn-coffee"/>*/}
                {/*<p className="statistic__item--count">207</p>*/}
                {/*<p className="statistic__item--descr">cups of coffee</p>*/}
                {/*<hr/>*/}
                {/*</div>*/}
                {/*<div className="statistic__item">*/}
                {/*<div className="icn icn-comment"/>*/}
                {/*<p className="statistic__item--count">2500</p>*/}
                {/*<p className="statistic__item--descr">blog posts</p>*/}
                {/*<hr/>*/}
                {/*</div>*/}
                {/*<div className="statistic__item">*/}
                {/*<div className="icn icn-heart"/>*/}
                {/*<p className="statistic__item--count">873</p>*/}
                {/*<p className="statistic__item--descr">likes</p>*/}
                {/*<hr/>*/}
                {/*</div>*/}
                {/*<div className="statistic__item">*/}
                {/*<div className="icn icn-food"/>*/}
                {/*<p className="statistic__item--count">900</p>*/}
                {/*<p className="statistic__item--descr">we launched</p>*/}
                {/*<hr/>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</section>*/}
                {/*<section className="road-map">*/}
                {/*<div className="container">*/}
                {/*<div className="section-description">*/}
                {/*<h3>CareWallet Road Map</h3>*/}
                {/*</div>*/}
                {/*<div className="rmap">*/}
                {/*<div className="rmap__item">*/}
                {/*<div className="rmap__item--phase"><span>1</span></div>*/}
                {/*<ul className="rmap__item--descr">*/}
                {/*<li> - Decentralized benefit administration design</li>*/}
                {/*<li> - Care Wallet Launch</li>*/}
                {/*<li> - Data security and compliance contracts (HIPAA, HITECH …)</li>*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*<div className="rmap__item">*/}
                {/*<div className="rmap__item--phase"><span>2</span></div>*/}
                {/*<ul className="rmap__item--descr">*/}
                {/*<li> - Smart access contracts</li>*/}
                {/*<li> - Eligibility contracts</li>*/}
                {/*<li> - Enrollment contracts</li>*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*<div className="rmap__item">*/}
                {/*<div className="rmap__item--phase"><span>3</span></div>*/}
                {/*<ul className="rmap__item--descr">*/}
                {/*<li> - Credentialing contracts</li>*/}
                {/*<li> - Payment and cost sharing contract</li>*/}
                {/*<li> - Replay and Audit book</li>*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*<div className="rmap__item">*/}
                {/*<div className="rmap__item--phase"><span>4</span></div>*/}
                {/*<ul className="rmap__item--descr">*/}
                {/*<li> - Pricing contract book</li>*/}
                {/*<li> - Optimal outcome contracts</li>*/}
                {/*<li> - Extensible benefit data models</li>*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*<div className="rmap__item">*/}
                {/*<div className="rmap__item--phase"><span>5</span></div>*/}
                {/*<ul className="rmap__item--descr">*/}
                {/*<li> - Government programs (Medicaid, SNAP, TANF, CHIP …)</li>*/}
                {/*<li> - Military health systems, VA and other programs</li>*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</section>*/}
                {/*<section className="our-team">*/}
                {/*<div className="container">*/}
                {/*<div className="section-description">*/}
                {/*<h3>Our Team</h3>*/}
                {/*</div>*/}
                {/*<Team/>*/}
                {/*<button className="btn">load more</button>*/}
                {/*</div>*/}
                {/*</section>*/}
            </main>
        )
    }
}

