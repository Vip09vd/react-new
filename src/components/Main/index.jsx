import React from 'react';
import Team from './Team';
import Head from "./Head/index";
import Video from "./Video/index";
import Accordion from 'react-responsive-accordion';
import Media from "./Media/index";

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Head/>
                <section className="revolution">
                    <div className="container">
                        <div className="section-description">
                            <h2>Revolution of Cost, Care and Convenience</h2>
                        </div>
                        <div className="revolution__item">
                            <h3><span className="icn icn-insurers"/>Cost</h3>
                            <p>CareWallet will revolutionize healthcare and benefit administration, and reduce
                                administrative cost, fraud, waste, abuse and inefficiency in our healthcare and benefit
                                administration universe, ranging from Medicaid, Medicare, CHIP, SNAP, TANF,
                                commercial insurance and many more programs and care delivery</p>
                        </div>
                        <div className="revolution__item">
                            <h3><span className="icn icn-providers"/>Care</h3>
                            <p>No more data silos that inhibit and prohibit consumer control over their healthcare
                                No more searching for old records
                                Your doctor does not need to talk to everyone else but you Convenience</p>
                        </div>
                        <div className="revolution__item">
                            <h3><span className="icn icn-employers"/>Convenience</h3>
                            <p>No more learning of arcane terminology (EOB, Copay, Coinsurance, Deductible, Out of
                                network, out of pocket maximum). CareWallet makes it all human and usable
                                CareWallet owner easily grants permission for public or private data, for short periods
                                All that is needed to access Carewallet is email address of the wallet owner</p>
                        </div>
                    </div>
                </section>
                <section className="manage">
                    <div className="container">
                        <div className="section-description">
                            <h2>What is CareWallet</h2>
                        </div>
                        <div className="manage-wrapper">
                            <div className="manage__item">
                                <div className="manage__item--icn">
                                    <div className="icn icn-protect"></div>
                                </div>
                                <p className="manage__item--description">A decentralized healthcare and benefit platform
                                    that is efficient, cost
                                    effective and always verifiable</p>
                            </div>
                            <div className="manage__item">
                                <div className="manage__item--icn">
                                    <div className="icn icn-cards"></div>
                                </div>
                                <p className="manage__item--description">A protocol that securely connects and
                                    automatically syncs all parties</p>
                            </div>
                            <div className="manage__item">
                                <div className="manage__item--icn">
                                    <div className="icn icn-heart"></div>
                                </div>
                                <p className="manage__item--description">A intelligent currency that understand who is
                                    paying whom, for what</p>
                            </div>
                            <div className="manage__item">
                                <div className="manage__item--icn">
                                    <div className="icn icn-protect"></div>
                                </div>
                                <p className="manage__item--description">A smart application that empowers individuals
                                    with instant access to
                                    their records, benefits, options and obligations</p>
                            </div>
                            <div className="manage__item">
                                <div className="manage__item--icn">
                                    <div className="icn icn-cards"></div>
                                </div>
                                <p className="manage__item--description">An ever growing repository of human knowledge
                                    and best practices
                                    for care delivery, prevention and better health outcomes</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<section className="smart-cards">*/}
                    {/*<div className="icn icn-bg-1"/>*/}
                    {/*<div className="icn icn-bg-2"/>*/}
                    {/*<div className="container">*/}
                        {/*/!*<h1>CW Smart Cards - <br/> an innovation that will reduce cost for everyone</h1>*!/*/}
                        {/*<div className="card-list">*/}
                            {/*<ul className="card-list__side">*/}
                                {/*<li>- Insurance companies, doctors, labs, pharmacies, employers, benefit administrators*/}
                                    {/*and government agencies can use the CW protocol to publish smart application*/}
                                    {/*cards that contain relevant information and logic to process the transaction and are*/}
                                    {/*automatically processed by the right carewallet*/}
                                {/*</li>*/}
                                {/*<li>- All you need to access any carewallet is the email address of the wallet owner and*/}
                                    {/*their permission*/}
                                {/*</li>*/}
                                {/*<li>- All information and logic is secure and encrypted and compliant with appropriate*/}
                                    {/*reglations*/}
                                {/*</li>*/}
                                {/*<li>- All processing is decentralized and all logic is interpreted by the appropriate*/}
                                    {/*wallet*/}
                                {/*</li>*/}
                                {/*<li>- No more data, system or logic silos*/}
                                {/*</li>*/}
                                {/*<li>- All smart cards remain in sync*/}
                                {/*</li>*/}
                            {/*</ul>*/}
                            {/*/!*<ul className="card-list__side">*!/*/}
                            {/*/!*<li>- Smart cards is published by IC, hospital or a Lab or an employer.</li>*!/*/}
                            {/*/!*<li>- Example: your smart discount card will let you know during your pharmacy visit,*!/*/}
                            {/*/!*what discounts are available in this place and will help you to manage your*!/*/}
                            {/*/!*pharmacy, and therapeutic services expenses.*!/*/}
                            {/*/!*</li>*!/*/}
                            {/*/!*<li>- Other issued cards will assume the role of your smart coordinator for сare,*!/*/}
                            {/*/!*pharmacy, medical transportation, home care, social programs.*!/*/}
                            {/*/!*</li>*!/*/}
                            {/*/!*<li>- Smart cards is published by IC, hospital or a Lab or an employer.</li>*!/*/}
                            {/*/!*<li>- Example: your smart discount card will let you know during your pharmacy visit,*!/*/}
                            {/*/!*what discounts are available in this place and will help you to manage your*!/*/}
                            {/*/!*pharmacy, and therapeutic services expenses.*!/*/}
                            {/*/!*</li>*!/*/}
                            {/*/!*<li>- Other issued cards will assume the role of your smart coordinator for сare,*!/*/}
                            {/*/!*pharmacy, medical transportation, home care, social programs.*!/*/}
                            {/*/!*</li>*!/*/}
                            {/*/!*</ul>*!/*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</section>*/}
                <section className="useful edge">
                    <div className="section-description">
                        <h2>Imagine a world where healthcare and benefit administration is efficient, effective and easy
                            to use, for everyone</h2>
                    </div>
                    <div className="container">
                        <div className="useful__icn"></div>
                        <div className="useful__info">
                            <ul>
                                <li>No need to make phone calls before seeing the doctor
                                </li>
                                <li>No need to learn a strange new language to properly understand your benefits
                                </li>
                                <li>No need to guess what benefits are available, what you need to pay, when, to whom
                                </li>
                                <li>Everyone is always synchronized so you get the care you need
                                </li>
                                <li>No more stories about rampant waste, fraud, abuse and inefficiency of the healthcare
                                    system
                                </li>
                                <li>You are in charge of your decisions, instead of being thought of as a
                                    “beneficiary”
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <Video />
                <section className="services">
                    <div className="container">
                       <div className="section-description">
                           <h2>CareWallet will optimize and streamline healthcare and benefit
                               administration for all parties involved</h2>
                           <p>Insurance companies, doctors, labs, pharmacies, employers, benefit administrators and
                               government agencies can use the CW protocol to publish smart application cards that contain
                               relevant information and logic to process the transaction and are automatically processed by
                               the
                               right CareWallet</p>
                       </div>
                        <div className="services-wrapper">
                            <div className="services__item">
                                <div className="icn icn-insurers"/>
                                <h4 className="services__item--heading">insurers</h4>
                            </div>
                            <div className="services__item">
                                <div className="icn icn-providers"/>
                                <h4 className="services__item--heading">Doctors, hospitals, labs, pharmacies and care
                                    providers</h4>
                            </div>
                            <div className="services__item">
                                <div className="icn icn-employers"/>
                                <h4 className="services__item--heading">Employers, administrators and brokers</h4>
                            </div>
                            <div className="services__item">
                                <div className="icn icn-agencies"/>
                                <h4 className="services__item--heading">Government programs and community
                                    organizations</h4>
                            </div>
                            <div className="services__item">
                                <div className="icn icn-developers"/>
                                <h4 className="services__item--heading">Developers and subject matter experts</h4>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="manage">
                    <div className="container">
                        <div className="section-description">
                            <h2>Decentralized healthcare and benefit administration platform</h2>
                        </div>
                        <div className="manage-wrapper">
                            <div className="manage__item">
                                <div className="manage__item--icn">
                                    <div className="icn icn-protect"></div>
                                </div>
                                <p className="manage__item--description">Protocol</p>
                            </div>
                            <div className="manage__item">
                                <div className="manage__item--icn">
                                    <div className="icn icn-cards"></div>
                                </div>
                                <p className="manage__item--description">Coin</p>
                            </div>
                            <div className="manage__item">
                                <div className="manage__item--icn">
                                    <div className="icn icn-heart"></div>
                                </div>
                                <p className="manage__item--description">Smart cards</p>
                            </div>
                            <div className="manage__item">
                                <div className="manage__item--icn">
                                    <div className="icn icn-protect"></div>
                                </div>
                                <p className="manage__item--description">Community</p>
                            </div>
                            <div className="manage__item">
                                <div className="manage__item--icn">
                                    <div className="icn icn-cards"></div>
                                </div>
                                <p className="manage__item--description">Marketplace</p>
                            </div>
                            <div className="manage__item">
                                <div className="manage__item--icn">
                                    <div className="icn icn-cards"></div>
                                </div>
                                <p className="manage__item--description">Decentralized benefit platform</p>
                            </div>
                            <div className="manage__item">
                                <div className="manage__item--icn">
                                    <div className="icn icn-heart"></div>
                                </div>
                                <p className="manage__item--description">Distributed, immutable, <br/> verifiable ledger</p>
                            </div>
                            <div className="manage__item">
                                <div className="manage__item--icn">
                                    <div className="icn icn-protect"></div>
                                </div>
                                <p className="manage__item--description">Security, privacy and <br/> access model</p>
                            </div>
                            <div className="manage__item">
                                <div className="manage__item--icn">
                                    <div className="icn icn-cards"></div>
                                </div>
                                <p className="manage__item--description">Expansible data model</p>
                            </div>
                        </div>
                        <div className="btn-container">
                            <button className="btn btn-blue-inverse">Technical Whitepaper</button>
                            <button className="btn btn-blue-inverse">Join Community</button>
                        </div>
                    </div>
                </section>
                <section className="accordion">
                    <div className="container">
                        <Accordion>
                            <div className="accordion-heading" data-trigger="CareWallet Protocol">
                                <div className="accordion-description">
                                    <ul>
                                        <li>CareWallet Protocol is opensource</li>
                                        <li>Protocol does not need a central system of record</li>
                                        <li>Foundation on which smart cards and published and automatically
                                            synchronized
                                        </li>
                                        <li>Protocol is organized into protocol pairs that encapsulate type, structure,
                                            relationship and
                                            transactions between two parties
                                        </li>
                                        <li>Completely decentralized and is evaluated at end points</li>
                                        <li>Protocol supports various security and encryption standards</li>
                                        <li>Protocol can synchronize public &amp; private sides of smart card w/o
                                            content access
                                        </li>
                                        <li>Protocol can NOT read the private side content of the smart card</li>
                                        <li>Protocol is desgined to be accssed via simple end-points like email</li>
                                        <li>Protocol will be expanded to include new pairs, end-points and support
                                            different standards
                                        </li>
                                        <li>All protocol expansions are open to the community and are subject to peer
                                            review
                                        </li>
                                        <li>CareWallet has scheduled monthly hackathons to review and expand protocol
                                            pairs, end-
                                            points and standards
                                        </li>
                                        <li>Protocol pair submissions that pass peer review will be rewarded with
                                            bounties of upto 1000
                                            CW coins
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="accordion-heading" data-trigger="CareWallet Coin"
                                 data-trigger-when-open="CareWallet Coin">
                                <div className="accordion-description">
                                    <ul>
                                        <li>CareWallet Coin is a token based system for streamlining payments
                                            between stakeholders
                                        </li>
                                        <li>CareWallet Coin is based on blockchain technologies</li>
                                        <li>CareWallet Coin is designed to optimize billing, payments, adjustments,
                                            recovery,
                                            reconciliation, audit and review.
                                            <li>These are processes that are common in healthcare and are quite
                                                complex
                                            </li>
                                        </li>
                                        <li>CareWallet Coin reduces administrative costs associated with these
                                            processes
                                        </li>
                                        <li>CareWallet Coin synchronizes with SmartCards in the wallet</li>
                                        <li>CareWallet Coin applies the intellgence of SmartCards to ensure right
                                            payment to the right
                                            party at the right time
                                        </li>
                                        <li>CareWallet Coin sits on top of CareWallet Protocol where all
                                            transactions are governed by
                                            rules of the protocol pairs
                                        </li>
                                        <li>CareWallet Coin transactions are verifiable, immutable and auditable,
                                            leading to easier
                                            compliance
                                        </li>
                                        <li>CareWallet Coin can also be used to pay for CareWallet subscription,
                                            services, SmartCards
                                            and more
                                        </li>
                                        <li>CareWallet Coin does not change value with price of cryptocurrencies (it
                                            is pegged to US$)
                                            and has a guaranteed redemption value
                                        </li>
                                        <li>Every CareWallet Coin is backed by reserves, guaranteeing full
                                            liqudity
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="accordion-heading" data-trigger="CareWallet SmartCards">
                                <div className="accordion-description">
                                    <ul>
                                        <li>SmartCards are intelligent and highly portable applications published on
                                            the CW protocol and
                                            are completely understood by CareWallet
                                        </li>
                                        <li>SmartCards have the unique property of automatically synchrnozing with
                                            other smart cards
                                        </li>
                                        <li>SmartCards require no centralized logic processor and are automatically
                                            evaluated by each
                                            CareWallet in which the card exists
                                        </li>
                                        <li>Each smart card has two «sides» public side and private side
                                            <li>Public side can be read by public key</li>
                                            <li>Private side requires both public and private key</li>
                                        </li>
                                        <li>Smart card has four logical edges that control the behaviour of the
                                            card
                                            <li>Left Edge – Published, subscriber, purpose, duration and other control
                                                data
                                            </li>
                                            <li>Right Edge – Security, encryption, access control, privacy rules
                                                applicable to public
                                                and private side access
                                            </li>
                                            <li>Top Edge – Context, logic and rules</li>
                                            <li>Bottom Edge – Links for synchronization with other cards</li>
                                        </li>
                                        <li>SmartCards are published for a specific protocol pair and must follow
                                            the rules of the pair that
                                            are encapsulated in the protocol
                                        </li>
                                        <li>One of the greatest innovations of CW is that SmartCards can be linked
                                            with other
                                            SmartCards and both cards remain in sync always
                                        </li>
                                        <li>SmartCards can be published by organizations such as insurance
                                            companies, hospitals, labs,
                                            pharmacies and by the CW community
                                        </li>
                                        <li>SmartCards can be published as a single card or stack of cards</li>
                                        <li>SmartCards can be published as a single card or stack of cards</li>
                                    </ul>
                                    <p>CW has scheduled and will actively manage, monthly developer meets and hackathons
                                        to build new
                                        SmartCards, which are rewarded by bounties of upto 1000 CW coins</p>
                                </div>
                            </div>
                        </Accordion>
                    </div>
                </section>
                <section className="technologies">
                    <div className="container">
                        <h2>Technologies</h2>
                        <h4>CW has become possible because of confluence of recent technological breakthrough in
                            several areas</h4>
                        <div className="technologies__wrapper">
                            <h4>Blockchain</h4>
                            <h4>Smart contracts</h4>
                            <h4>Machine learning</h4>
                            <h4>Behavioral, clinical and transactional analytics</h4>
                            <h4>Big Data and MDM</h4>
                            <h4>Cloud</h4>
                        </div>
                        <h4>Plus decades of experience and domain expertise of insurance systems, government
                            programs, clinical management, care coordination and benefit administration, that our
                            management team has accumulated</h4>
                    </div>
                </section>
                <section className="community">
                    <div className="container">
                        <h2>Community</h2>
                        <div className="community__wrapper">
                            <div className="community__wrapper--icn icn icn-heart"/>
                            <div className="community__wrapper--item">
                                CareWallet community is actively managed, served and rewared by CareWallet
                                Growth, success and skill of CareWallet communty is a key goal of the company
                            </div>
                        </div>
                    </div>
                </section>
                <section className="media">
                    <div className="container">
                        <div className="section-description">
                            <h2>Partners and collaborators</h2>
                        </div>
                        <div className="media-wrapper">
                            <div className="media__item">
                                <div className="icn icn-emercoin"/>
                            </div>
                            <div className="media__item">
                                <div className="icn icn-emercoin"/>
                            </div>
                            <div className="media__item">
                                <div className="icn icn-ambisafe"/>
                            </div>
                            <div className="media__item">
                                <div className="icn icn-ambisafe"/>
                            </div>
                        </div>
                        <div className="media-wrapper">
                            <div className="media__item">
                                <div className="icn icn-emercoin"/>
                            </div>
                            <div className="media__item">
                                <div className="icn icn-emercoin"/>
                            </div>
                            <div className="media__item">
                                <div className="icn icn-ambisafe"/>
                            </div>
                            <div className="media__item">
                                <div className="icn icn-ambisafe"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="purchase">
                    <div className="container">
                        <div className="purchase-wrapper">
                            <div className="ceo-img">
                            </div>
                            <div className="quote">
                                <p><i>“It is time to rethink and revolutionize the biggest part of US economy by
                                    employing a
                                    smart contract
                                    model that replaces archaic systems and administrative processes with an intelligent
                                    benefit wallet that
                                    is highly efficient, is programmable and can be easily and quickly programmed for
                                    different benefit
                                    models (employer-employee and government-citizen)”
                                </i></p>
                                <h4> - Pradeep Goel, CEO of CareWallet</h4>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="docs">
                    <div className="container">
                        <h2>Security, privacy and access control</h2>
                        <p>Traffic roars through his neighborhood on Manhattan’s Upper East Side at all hours. The
                            whine of refrigerated grocery trucks by the curb makes things worse. And construction of
                            a new apartment tower across the street forces him to flee his own home. There is the
                            deafening rat-a-tat of jack hammers and the incessant banging and high-pitched wail of
                            construction equipment that echoes in his head.</p>
                        <button className="btn btn-sm btn-blue-inverse">PDF</button>
                    </div>
                </section>


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

                <Media/>
                <section className="join">
                    <div className="container">
                        <h2>Join the revolution of care, convenience and cost savings</h2>
                        <div className="join__wrapper">
                            <div className="join__wrapper--item">
                                <button className="btn btn-blue-inverse">Become an early adopter</button>
                                <a href="#">Explain subscriber bonus</a></div>
                            <div className="join__wrapper--item">
                                <button className="btn btn-blue-inverse">Join the community</button>
                                <a href="#">Explain developer bounties</a></div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

