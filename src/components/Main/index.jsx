import React from 'react';
import Team from './Team';
import photo from '../assets/img/photo.jpg'
import photo1 from '../assets/img/photo-1.png'
import photo2 from '../assets/img/photo-2.png'
import photo3 from '../assets/img/photo-3.png'
import photo4 from '../assets/img/photo-4.jpg'
import photo5 from '../assets/img/photo-5.png'

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <section className="head">
                    <div className="container">
                        <div className="head__info section-description">
                            <h1>CareWallet</h1>
                            <h2>Transparent, distributed benefit administration</h2>
                            <p>CareWallet - a new project of Aidditive.Inc, which is aimed to make a system of US
                                Benefit Administration
                                decentralized, personalized, simple in use for each
                                participant and to reduce costs of US medical programs for citizens, employers and
                                government
                            </p>
                            <button className="btn">Buy Now</button>
                        </div>
                    </div>
                </section>
                <section className="features">
                    <div className="container">
                        <div className="features__item">
                            <div className="features__item--picture">
                                <div className="icn icn-handler"/>
                            </div>
                            <div className="features__item--information">
                                <h4>CareWallet will handle:</h4>
                                <ul>
                                    <li> - enrollment</li>
                                    <li> - eligibility</li>
                                    <li> - pricing</li>
                                    <li> - payment</li>
                                    <li> - review of every healthcare and benefit transaction</li>
                                    <li> - auditing and compliance with state and federal law</li>
                                    <li> - possibility for employers and government agencies to implement the right
                                        program for their
                                        employees and citizens
                                    </li>
                                    <li> - more power and transparency to the employer, employee and citizen
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="purchase edge">
                    <div className="container">
                        <div>
                            <p><i>“It is time to rethink and revolutionize the biggest part of US economy by employing a
                                smart contract
                                model that replaces archaic systems and administrative processes with an intelligent
                                benefit wallet that
                                is highly efficient, is programmable and can be easily and quickly programmed for
                                different benefit
                                models (employer-employee and government-citizen)”
                            </i></p>
                            <h4>Pradeep Goel, CEO of Aidditive.Inc</h4>
                        </div>
                    </div>
                </section>
                <section className="services">
                    <div className="container">
                        <div className="section-description">
                            <h2>How does CareWallet look like?</h2>
                            <p>CareWallet contains smart cards that are programmable, automatically synced and
                                configured to meet
                                individual
                                needs, and will deliver better outcomes at lower cost while ensuring proper use of funds
                                and timely
                                payments
                                to care providers.</p>
                        </div>
                        <div className="services-wrapper">
                            <div className="services__item">
                                <div className="icn icn-pencil"/>
                                <h4 className="service__item--heading"> Insurance Card</h4>
                                <p className="service__item--description">(Enrollment, eligibility, benefits,
                                    exclusions)</p>
                                <hr/>
                            </div>
                            <div className="services__item">
                                <div className="icn icn-layers"/>
                                <h4 className="service__item--heading"> Clinical Card </h4>
                                <p className="service__item--description">Card (Provider contacts, medical history, labm
                                    pharmacies,
                                    clinical results)</p>
                                <hr/>
                            </div>
                            <div className="services__item">
                                <div className="icn icn-settings"/>
                                <h4 className="service__item--heading"> Payment Card </h4>
                                <p className="service__item--description">(Ability to aggregate funds and make smart
                                    payments, linked to
                                    personal, emlpyer and government funds)
                                </p>
                                <hr/>
                            </div>
                            <div className="services__item">
                                <div className="icn icn-marketing"/>
                                <h4 className="service__item--heading"> Discount Card </h4>
                                <p className="service__item--description">(smart discounts on out of pocket expenses
                                    such as pharmacy, and
                                    therapeutic services)</p>
                                <hr/>
                            </div>
                            <div className="services__item">
                                <div className="icn icn-marketing"/>
                                <h4 className="service__item--heading">Other Cards </h4>
                                <p className="service__item--description">(Care coordination, pharmacy, medical
                                    transportation, home care,
                                    social programs), all synced with your insurance, clinical and payment cards
                                </p>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="edge transparent">
                    <div className="container">
                        <div className="section-description">
                            <h2>
                                Easy way to access
                            </h2>
                            <p>Through care wallet you can always and instantly access every medical, lab, therapeutic
                                and financial
                                transaction and grant access for as little or as long as you need. This convergence of
                                data will reduce
                                duplication of services, avoid waste and unnecessary costs and eliminate delays in
                                care.</p>
                        </div>
                    </div>
                </section>
                <section className="video">

                </section>
                <section className="edge statistic">
                    <div className="container">
                        <div className="statistic__item">
                            <div className="icn icn-users"/>
                            <p className="statistic__item--count">3587</p>
                            <p className="statistic__item--descr">satisfied clients</p>
                            <hr/>
                        </div>
                        <div className="statistic__item">
                            <div className="icn icn-coffee"/>
                            <p className="statistic__item--count">207</p>
                            <p className="statistic__item--descr">cups of coffee</p>
                            <hr/>
                        </div>
                        <div className="statistic__item">
                            <div className="icn icn-comment"/>
                            <p className="statistic__item--count">2500</p>
                            <p className="statistic__item--descr">blog posts</p>
                            <hr/>
                        </div>
                        <div className="statistic__item">
                            <div className="icn icn-heart"/>
                            <p className="statistic__item--count">873</p>
                            <p className="statistic__item--descr">likes</p>
                            <hr/>
                        </div>
                        <div className="statistic__item">
                            <div className="icn icn-food"/>
                            <p className="statistic__item--count">900</p>
                            <p className="statistic__item--descr">we launched</p>
                            <hr/>
                        </div>
                    </div>
                </section>
                <section className="road-map">
                    <div className="container">
                        <div className="section-description">
                            <h3>CareWallet Road Map</h3>
                        </div>
                        <div className="rmap">
                            <div className="rmap__item">
                                <div className="rmap__item--phase"><span>1</span></div>
                                <ul className="rmap__item--descr">
                                    <li> - Decentralized benefit administration design</li>
                                    <li> - Care Wallet Launch</li>
                                    <li> - Data security and compliance contracts (HIPAA, HITECH …)</li>
                                </ul>
                            </div>
                            <div className="rmap__item">
                                <div className="rmap__item--phase"><span>2</span></div>
                                <ul className="rmap__item--descr">
                                    <li> - Smart access contracts</li>
                                    <li> - Eligibility contracts</li>
                                    <li> - Enrollment contracts</li>
                                </ul>
                            </div>
                            <div className="rmap__item">
                                <div className="rmap__item--phase"><span>3</span></div>
                                <ul className="rmap__item--descr">
                                    <li> - Credentialing contracts</li>
                                    <li> - Payment and cost sharing contract</li>
                                    <li> - Replay and Audit book</li>
                                </ul>
                            </div>
                            <div className="rmap__item">
                                <div className="rmap__item--phase"><span>4</span></div>
                                <ul className="rmap__item--descr">
                                    <li> - Pricing contract book</li>
                                    <li> - Optimal outcome contracts</li>
                                    <li> - Extensible benefit data models</li>
                                </ul>
                            </div>
                            <div className="rmap__item">
                                <div className="rmap__item--phase"><span>5</span></div>
                                <ul className="rmap__item--descr">
                                    <li> - Government programs (Medicaid, SNAP, TANF, CHIP …)</li>
                                    <li> - Military health systems, VA and other programs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="our-team">
                    <div className="container">
                        <div className="section-description">
                            <h3>Our Team</h3>
                        </div>
                        <Team/>
                        <button className="btn">load more</button>
                    </div>
                </section>
                <section className="services">
                    <div className="container">
                        <div className="section-description">
                            <h3>Technologies</h3>
                        </div>
                        <div className="services-wrapper">
                            <div className="services__item">
                                <div className="icn icn-blockchain"/>
                                <h4 className="service__item--heading">Blockchain</h4>
                                <hr/>
                            </div>
                            <div className="services__item">
                                <div className="icn icn-agreement"/>
                                <h4 className="service__item--heading">Smart Contracts</h4>
                                <hr/>
                            </div>
                            <div className="services__item">
                                <div className="icn icn-api"/>
                                <h4 className="service__item--heading">APIs</h4>
                                <hr/>
                            </div>
                            <div className="services__item">
                                <div className="icn icn-data"/>
                                <h4 className="service__item--heading">Data Models</h4>
                                <hr/>
                            </div>
                            <div className="services__item">
                                <div className="icn icn-big-data"/>
                                <h4 className="service__item--heading">Big Data</h4>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

