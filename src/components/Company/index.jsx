import React, {Component, PropTypes} from 'react';
import Advisor from "./Advisors/Advisor/index";
import Advisors from "./Advisors/index";

export default class Company extends Component {
    render() {
        return (
            <div className="company-wrapper">
                <section className="company-head">
                    <div className="container">
                        <h1>About Us</h1>
                    </div>
                </section>
                <section className="history edge">
                    <div className="container">
                        <p>SmartCareWallet company was established in 2017 to revolutionize global healthcare and benefit
                            administration through intelligent automation and wide range of state of the art
                            technology including blockchain, smart contracts, machine learning, cloud and big
                            data.</p>
                        <p>Leadership team of the company includes seasoned professionals with decades
                            of experience in insurance systems, government programs, clinical management, care
                            coordination and benefit administration. With the support of expert advisory board,
                            SmartCareWallet aspires to build a platform that everyone can benefit from.</p>
                    </div>
                </section>
                <section className="launch">
                    <div className="container">
                        <div className="launch-wrapper">
                            <div className="side side-company">
                                <div className="side-company__heading">
                                    <div className="side-company__heading--logo">
                                        <div className="icn icn-providers"></div>
                                    </div>
                                    <h3 className="side-company__heading--name">Carewallet launch</h3>
                                </div>
                                <div className="side-company__description">
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                        in a
                                        piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                                        looked
                                    </p>
                                </div>
                            </div>
                            <div className="side"><p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
                            </p></div>
                            <div className="bottom-description"><p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
                                up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                                going through the cites of the word in classical literature, discovered the
                            </p></div>
                        </div>
                    </div>
                </section>
                <section className="company-movie">
                    <div className="container">
                        <div className="company-movie__video">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/P0GoYzq_KAY"
                                    frameBorder="0" allowFullScreen/>
                        </div>
                        <div className="company-movie__info">
                            <ul>
                                <li className="active">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aspernatur autem earum inventore veniam. Consectetur, voluptatibus.
                                </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem earum
                                    inventore veniam. Consectetur, voluptatibus.
                                </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem earum
                                    inventore veniam. Consectetur, voluptatibus.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <hr/>
                <section className="executive">
                    <div className="section-description">
                        <h2>Executives</h2>
                    </div>
                    <div className="container">
                        <div className="executive__item">
                            <div className="executive__item--photo ceo-img"></div>
                            <div className="executive__item--description">
                                <p className="name">Pradeep Goel</p>
                                <p className="position">CEO</p>
                                <ul className="bio">
                                    <li>1990 – Graduated with Bachelors in Systems Engineering
                                    </li>
                                    <li>1990-1992 – Graduate studies in United states focused on large scale database
                                        design and management
                                    </li>
                                    <li>1991 – Co-founded insurance software company in US
                                        <li>Served as COO, CTO, Chief Software Architect from 1991 - 2004
                                        </li>
                                        <li>Built workflow management and claims processing solutions for large
                                            insurance companies all over the US. Dominant player in the US healthcare
                                            administration sector
                                        </li>
                                        <li>Company was bought by a major healthcare administration company trading on
                                            NYSE in 2004
                                        </li>
                                        <li>Joined the executive team of WebMD in 2004 and served as chief strategist
                                            and chief technology officer till 2005
                                        </li>
                                    </li>
                                    <li>2006 – Founded consumer directed healthcare and insurance exchange software
                                        company serving employers, insurers and consumers
                                        <li>Rapidly grew the company to 150+ clients serving millions of consumers with
                                            health and benefit administration solutions
                                        </li>
                                        <li>2010 – Advised government executives on benefit administration models and
                                            systems design in a key and populous province in China
                                        </li>
                                        <li>2010 – Appointed Chief Information Officer and then Chief Innovation Officer
                                            of a major insurance company at the request of CEO and Board to modernize
                                            benefit administration systems and implement consumer engagement strategies
                                            and self-service solutions
                                        </li>
                                        <li>2011 – appointed by Governor of North Dakota to HITAC council to help direct
                                            state wide health records initiatives for insurers and consumers
                                        </li>
                                        <li>2012 - 2017 – Implemented several government projects related to healthcare
                                            reform solution including expansion of Medicaid, integrated eligibility and
                                            consumer engagement via healthcare exchanges
                                        </li>
                                        <li>Advised state governments, designed and built several public program
                                            solutions for Medicaid, Medicare and social services such as children’s
                                            health, mental health and many other programs
                                        </li>
                                    </li>
                                    <li>2017 – Started CareWallet as the first decentralize benefit administration
                                        platform, protocol and currency to revolutionize health and social benefit
                                        administration in US and world-wide
                                        <li>
                                            Purchased UkrSoft HHS division
                                        </li>
                                    </li>
                                </ul>
                                <p><a href="https://www.wsj.com/articles/no-headline-available-1380475094">The Wall
                                    Street Journal</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                <Advisors/>
                {/*<div className="advisors">*/}
                    {/*<div className="container">*/}
                        {/*<div className="section-description">*/}
                            {/*<h2>Advisors</h2>*/}
                        {/*</div>*/}
                        {/*<div className="advisors-wrapper">*/}
                            {/*<div className="advisors__item">*/}
                                {/*<div className="advisors__item--photo ceo-img"></div>*/}
                                {/*<div className="advisors__item--description">*/}
                                    {/*<p className="name">Pradeep Goel</p>*/}
                                    {/*<p className="position">CEO</p>*/}
                                    {/*<p className="bio">Lorem ipsum dolor sit amet,*/}
                                        {/*Consequuntur eaque earum harum in ipsa laudantium maiores molestiae quos,*/}
                                        {/*ratione*/}
                                        {/*unde!</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="advisors__item">*/}
                                {/*<div className="advisors__item--photo ceo-img"></div>*/}
                                {/*<div className="advisors__item--description">*/}
                                    {/*<p className="name">Pradeep Goel</p>*/}
                                    {/*<p className="position">CEO</p>*/}
                                    {/*<p className="bio">Lorem ipsum dolor sit ametlit.*/}
                                        {/*Consequuntur eaque earum harum in ipsa laudantium maiores molestiae quos,*/}
                                        {/*ratione*/}
                                        {/*unde!</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="advisors__item">*/}
                                {/*<div className="advisors__item--photo ceo-img"></div>*/}
                                {/*<div className="advisors__item--description">*/}
                                    {/*<p className="name">Pradeep Goel</p>*/}
                                    {/*<p className="position">CEO</p>*/}
                                    {/*<p className="bio">Lorem ipsum dolor sit ametlit.*/}
                                        {/*Consequuntur eaque earum harum in ipsa laudantium maiores molestiae quos,*/}
                                        {/*ratione*/}
                                        {/*unde!</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="advisors__item">*/}
                                {/*<div className="advisors__item--photo ceo-img"></div>*/}
                                {/*<div className="advisors__item--description">*/}
                                    {/*<p className="name">Pradeep Goel</p>*/}
                                    {/*<p className="position">CEO</p>*/}
                                    {/*<p className="bio">Lorem ipsum dolor sit ametlit.*/}
                                        {/*Consequuntur eaque earum harum in ipsa laudantium maiores molestiae quos,*/}
                                        {/*ratione*/}
                                        {/*unde!</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                <section className="media-about edge">
                    <div className="section-description">
                        <h2>Media about us</h2>
                    </div>
                    <div className="container">
                        <div className="media-about__item">
                            <div className="media-about__item--logo">
                                <div className="icn icn-cryptopay"></div>
                            </div>
                            <p className="media-about__item-description">
                                After blockbuster ICO, Bancor
                                takes first step to become
                                ‘YouTube for currency‘
                            </p>
                            <span>July 17, 2017</span>
                        </div>
                        <div className="media-about__item">
                            <div className="media-about__item--logo">
                                <div className="icn icn-hashcoins"></div>
                            </div>
                            <p className="media-about__item-description">
                                Israel's blockchain blockbuster
                            </p>
                            <span>July 17, 2017</span>
                        </div>
                        <div className="media-about__item">
                            <div className="media-about__item--logo">
                                <div className="icn icn-cryptopay"></div>
                            </div>
                            <p className="media-about__item-description">
                                Broken Record: Bancor Raises $144 Mln in Less Than Three Hours
                            </p>
                            <span>July 17, 2017</span>
                        </div>
                        <div className="media-about__item">
                            <div className="media-about__item--logo">
                                <div className="icn icn-cryptopay"></div>
                            </div>
                            <p className="media-about__item-description">
                                After blockbuster ICO, Bancor
                                takes first step to become
                                ‘YouTube for currency‘
                            </p>
                            <span>July 17, 2017</span>
                        </div>
                        <div className="media-about__item">
                            <div className="media-about__item--logo">
                                <div className="icn icn-hashcoins"></div>
                            </div>
                            <p className="media-about__item-description">
                                Israel's blockchain blockbuster
                            </p>
                            <span>July 17, 2017</span>
                        </div>
                        <div className="media-about__item">
                            <div className="media-about__item--logo">
                                <div className="icn icn-cryptopay"></div>
                            </div>
                            <p className="media-about__item-description">
                                Broken Record: Bancor Raises $144 Mln in Less Than Three Hours
                            </p>
                            <span>July 17, 2017</span>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}