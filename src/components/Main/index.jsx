import React from 'react';
import Team from './Team';
import Head from "./Head/index";
import Video from "./Video/index";

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Head/>
                <section className="manage">
                    <div className="container">
                        <div className="section-description">
                            <h1>What is CareWallet</h1>
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
                            {/*<div className="manage__item">*/}
                            {/*<div className="manage__item--icn">*/}
                            {/*<div className="icn icn-heart"></div>*/}
                            {/*</div>*/}
                            {/*<p className="manage__item--description">*/}
                            {/*- clinical services, consolidating providers’ contacts, your medical history and lab*/}
                            {/*results;*/}
                            {/*</p>*/}
                            {/*</div>*/}
                            {/*<div className="manage__item">*/}
                            {/*<div className="manage__item--icn">*/}
                            {/*<div className="icn icn-protect"></div>*/}
                            {/*</div>*/}
                            {/*<p className="manage__item--description">*/}
                            {/*- insurance policies, choosing the best personalized terms and conditions for you*/}
                            {/*and your family;*/}
                            {/*</p>*/}
                            {/*</div>*/}
                            {/*<div className="manage__item">*/}
                            {/*<div className="manage__item--icn">*/}
                            {/*<div className="icn icn-cards"></div>*/}
                            {/*</div>*/}
                            {/*<p className="manage__item--description">*/}
                            {/*- proceed your payments, giving you an opportunity to aggregate funds, make smart*/}
                            {/*payments, linked to personal, employer and government funds*/}
                            {/*</p>*/}
                            {/*</div>*/}
                            {/*<div className="manage__item">*/}
                            {/*<div className="manage__item--icn">*/}
                            {/*<div className="icn icn-heart"></div>*/}
                            {/*</div>*/}
                            {/*<p className="manage__item--description">*/}
                            {/*- clinical services, consolidating providers’ contacts, your medical history and lab*/}
                            {/*results;*/}
                            {/*</p>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </section>
                <section className="services">
                    <div className="container">
                        <h1>Who can use CareWallet to optimize and streamline
                            healthcare and benefit administration</h1>
                        <div className="services-wrapper">
                            <div className="services__item">
                                <div className="icn icn-insurers"/>
                                <h4 className="services__item--heading">insurers</h4>
                                <button className="btn btn-sm btn-blue">more info</button>
                            </div>
                            <div className="services__item">
                                <div className="icn icn-providers"/>
                                <h4 className="services__item--heading">providers</h4>
                                <button className="btn btn-sm btn-blue">more info</button>
                            </div>
                            <div className="services__item">
                                <div className="icn icn-employers"/>
                                <h4 className="services__item--heading">employers</h4>
                                <button className="btn btn-sm btn-blue">more info</button>
                            </div>
                            <div className="services__item">
                                <div className="icn icn-agencies"/>
                                <h4 className="services__item--heading">agencies</h4>
                                <button className="btn btn-sm btn-blue">more info</button>
                            </div>
                            <div className="services__item">
                                <div className="icn icn-developers"/>
                                <h4 className="services__item--heading">developers</h4>
                                <button className="btn btn-sm btn-blue">more info</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="smart-cards">
                    <div className="icn icn-bg-1"/>
                    <div className="icn icn-bg-2"/>
                    <div className="container">
                        {/*<h1>CW Smart Cards - <br/> an innovation that will reduce cost for everyone</h1>*/}
                        <div className="card-list">
                            <ul className="card-list__side">
                                <li>- Insurance companies, doctors, labs, pharmacies, employers, benefit administrators
                                    and government agencies can use the CW protocol to publish smart application
                                    cards that contain relevant information and logic to process the transaction and are
                                    automatically processed by the right carewallet
                                </li>
                                <li>- All you need to access any carewallet is the email address of the wallet owner and
                                    their permission
                                </li>
                                <li>- All information and logic is secure and encrypted and compliant with appropriate
                                    reglations
                                </li>
                                <li>- All processing is decentralized and all logic is interpreted by the appropriate
                                    wallet
                                </li>
                                <li>- No more data, system or logic silos
                                </li>
                                <li>- All smart cards remain in sync
                                </li>
                            </ul>
                            {/*<ul className="card-list__side">*/}
                            {/*<li>- Smart cards is published by IC, hospital or a Lab or an employer.</li>*/}
                            {/*<li>- Example: your smart discount card will let you know during your pharmacy visit,*/}
                            {/*what discounts are available in this place and will help you to manage your*/}
                            {/*pharmacy, and therapeutic services expenses.*/}
                            {/*</li>*/}
                            {/*<li>- Other issued cards will assume the role of your smart coordinator for сare,*/}
                            {/*pharmacy, medical transportation, home care, social programs.*/}
                            {/*</li>*/}
                            {/*<li>- Smart cards is published by IC, hospital or a Lab or an employer.</li>*/}
                            {/*<li>- Example: your smart discount card will let you know during your pharmacy visit,*/}
                            {/*what discounts are available in this place and will help you to manage your*/}
                            {/*pharmacy, and therapeutic services expenses.*/}
                            {/*</li>*/}
                            {/*<li>- Other issued cards will assume the role of your smart coordinator for сare,*/}
                            {/*pharmacy, medical transportation, home care, social programs.*/}
                            {/*</li>*/}
                            {/*</ul>*/}
                        </div>
                    </div>
                </section>
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
                                <li>No need to learn a strange new language to properly understand your
                                    insurance benefits
                                </li>
                                <li>No need to guess how much you have used and how much is available,
                                    past and future costs and payments
                                </li>
                                <li>Automatic awareness of every action and piece of information that affects
                                    your healthcare decisions, options and cost
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <Video />
                <section className="technologies">
                    <div className="container">
                        <h2>CareWallet will create a new smart healthcare system build on innovative technologies
                            where: </h2>
                        <div className="technologies__wrapper">
                            <div className="technologies__wrapper--item first">
                                <p>You will forget about necessity to call insurance company to verify your insurance or
                                    covered benefits.</p>
                            </div>
                            <div className="technologies__wrapper--item second">
                                <p>Your doctor does not need to wait 901-20 days to find out how much the payment for
                                    his services will be.</p>
                            </div>
                            <div className="technologies__wrapper--item third">
                                <p>All your medical history is readily accessible and completely secure, so if anyone
                                    tries to access it without permission, you will immediately know and can stop
                                    it.</p>
                            </div>
                            <div className="technologies__wrapper--item fourth">
                                <p>All information is secured in accordance with privacy and data security laws and all
                                    your information is under your direct control and yet immediately accessible to
                                    anyone you want to give access to.</p>
                            </div>
                            <div className="technologies__wrapper--item fifth">
                                <p>You will have the power to manage all your information and under your direct control,
                                    at the same time immediately accessible to anyone you want to give access to
                                    CW is an intelligent tool for every individual.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="impact">
                    <div className="container">
                        <h3 className="impact__heading">Types of cards + examples</h3>
                        <div className="impact__item">
                            <h3><span className="icn icn-insurers"/>For providers</h3>
                            <p>Traffic roars through his neighborhood on Manhattan’s Upper East Side at all hours. The
                                whine of refrigerated grocery trucks by the curb makes things worse. And construction of
                                a new apartment tower across the street forces him to flee his own home. There is the
                                deafening rat-a-tat of jack hammers and the incessant banging and high-pitched wail of
                                construction equipment that echoes in his head.</p>
                        </div>
                        <div className="impact__item">
                            <h3><span className="icn icn-providers"/>For providers</h3>
                            <p>Traffic roars through his neighborhood on Manhattan’s Upper East Side at all hours. The
                                whine of refrigerated grocery trucks by the curb makes things worse. And construction of
                                a new apartment tower across the street forces him to flee his own home. There is the
                                deafening rat-a-tat of jack hammers and the incessant banging and high-pitched wail of
                                construction equipment that echoes in his head.</p>
                        </div>
                        <div className="impact__item">
                            <h3><span className="icn icn-employers"/>For providers</h3>
                            <p>Traffic roars through his neighborhood on Manhattan’s Upper East Side at all hours. The
                                whine of refrigerated grocery trucks by the curb makes things worse. And construction of
                                a new apartment tower across the street forces him to flee his own home. There is the
                                deafening rat-a-tat of jack hammers and the incessant banging and high-pitched wail of
                                construction equipment that echoes in his head.</p>
                        </div>
                        <div className="impact__item">
                            <h3><span className="icn icn-agencies"/>For providers</h3>
                            <p>Traffic roars through his neighborhood on Manhattan’s Upper East Side at all hours. The
                                whine of refrigerated grocery trucks by the curb makes things worse. And construction of
                                a new apartment tower across the street forces him to flee his own home. There is the
                                deafening rat-a-tat of jack hammers and the incessant banging and high-pitched wail of
                                construction equipment that echoes in his head.</p>
                        </div>
                        <div className="impact__item">
                            <h3><span className="icn icn-developers"/>For providers</h3>
                            <p>Traffic roars through his neighborhood on Manhattan’s Upper East Side at all hours. The
                                whine of refrigerated grocery trucks by the curb makes things worse. And construction of
                                a new apartment tower across the street forces him to flee his own home. There is the
                                deafening rat-a-tat of jack hammers and the incessant banging and high-pitched wail of
                                construction equipment that echoes in his head.</p>
                        </div>
                    </div>
                </section>
                <section className="edge">
                    <div className="container">
                        <h3>Interested in publishing smart cards on CWP?</h3>
                        <button className="btn ">Register</button>
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
                        <h1>Security, privacy and access control</h1>
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
                <section className="media">
                    <div className="container">
                        <div className="section-description">
                            <h3>Media About Us</h3>
                        </div>
                        <div className="media-wrapper">
                            <div className="media__item">
                                <div className="icn icn-emercoin"/>
                            </div>
                            <div className="media__item">
                                <div className="icn icn-hashcoins"/>
                            </div>
                            <div className="media__item">
                                <div className="icn icn-cryptopay"/>
                            </div>
                            <div className="media__item">
                                <div className="icn icn-ambisafe"/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

