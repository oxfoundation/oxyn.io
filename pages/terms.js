
import React, { Component } from "react";
import DefaultTemplate from "../templates/Default";
import PageWrapper from "../components/PageWrapper";
import Accordion from "../components/Accordion";

export default class Privacy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DefaultTemplate className="--white">
        <PageWrapper title="Terms and conditions">

            <div class="page__content">
                <h2>Introduction</h2>
                <p>Hereby are regulated the conditions applied for purchases made by the user on www.treepex.com  the web platform owned by Treepex.</p>
                <p>The user who proceeds to buy a service on this platform agrees to have read and accepted the following terms and conditions.</p>
                <p>The user of the platform (whether it is an individual, a company, government, etc.) may request to plant one or more trees on its behalf or on behalf of third parties; in the first case, the service is generically referred to as "plant" one or more trees, while in the second case, it is referred to as "gift a tree", where a third party is the recipient of the tree. The user holder of a tree is also the holder of unique ID number tagged on a tree which stores the information about the sponsor of the tree. </p>
                <p>Treepex accounts for itself and for third parties to implement the planting requested by the user. The planting is carried out throughout the world, the planting sites which are approved by Treepex. Tree planting projects are executed by local communities. Often (but not necessarily) tree planters operate under the coordination of cooperatives, NGOs or other organizations working in the area of the project.</p>
                <h2>1. PROFESSIONAL IDENTITY</h2>
                <p>Treepex Inc. with registered office in Delaware, USA<br />EIN 38-4006695<br />2711 Centerville Rd Suite 400, Wilmington, DE 19808.<br />hello@treepex.com</p>
                
                <h2>2. ESSENTIAL CHARACTERISTICS OF THE SERVICE</h2>
                <p>The user purchases, upon payment, the planting service of one or more trees within the projects promoted by Treepex. Treepex shall, on its behalf or of third parties, organize the planting service requested by the user.</p>
                <p>Since the object of the transaction consists of a service, the user will not physically receive anything arboreal; in fact, the trees are exclusively planted within the land involved within the projects approved and supported by Treepex, but not in land(s) available to the user. As a result, the user cannot boast nor claim any ownership rights over neither the trees requested to plant.</p>
                <p>The user, through the execution of the purchase order, declares to have read and accepted the general terms and conditions set forth below and agrees to observe and respect them in its relations with Treepex or third parties as part of the service in question.</p>
                <p>The contract for the service offered shall be considered completed when Treepex receives, from the user, the request for planting. Treepex will promptly send to the user a notification for having received the planting order (by e-mail).</p>
                <p>In light of the nature of the service, by accepting this contract, the customer agrees to its immediate execution, meaning Treepex may proceed, even immediately, with the planting service delivery requested.</p>
                <h2>3. PRICE OF THE SERVICE AND METHODS OF PAYMENT</h2>
                <p>The fee for planting each individual tree is expressed on the platform in the US dollars ($).</p>
                <p>The price is determined based on the tree species, the country where it is planted, and may vary depending on the level of supply and demand, as well as specific promotional campaigns. Therefore, the price of each arboreal element will vary from species to species and the same species may have different prices in different periods. </p>
                <p>If the user, contextually, requests the planting of more arboreal elements, the total amount to be paid to Treepex will be indicated at the end of the shopping session, that is before proceeding to the payment.</p>
                <p>The payment is made in a lump sum at the time of the online purchase. The system is controlled by the electronic payment platform Stripe. This platform offers several methods of payment, such as international cards Visa, MasterCard, Discover, JCB, 3CD, American Express. As well as bank transfers.</p>
                <p>Stripe  also support Bitcoin, Apple Pay, Android Pay, 3D Secure, SOFORT, iDEAL, Giropay, Bancontact, SEPA direct debit, and China’s Alipay.</p>
                <h2>4. IMPLEMENTING RULES</h2>
                <p>Upon purchase, the user indicates the desired amount of trees to be planted, choosing from the available planting areas. Treepex shall, on its behalf or of third parties, provide the planting service requested by the user with the timeframes indicated below.</p>
                <ol>
                    <li>The planting service is usually carried out depending on the conditions and seasonal cycles of the areas where the planting projects are implemented. Treepex will replace any plants that have not taken root within one years since the implementation of the planting requested received from the user.</li>
                    <li>Treepex takes follow up care of each planted tree for the next five years. Based on the international practices a tree is considered as “grown” and given to the state or community for the further sustainable management.</li>
                    <li>In case of dieing a tree, Treepex takes responsibility to conduct post planting activities and dead trees will be replaced with new seeding. The users are informed about the replanting through e-mail. </li>
                </ol>
                <h2>5. FORCE MAJEURE</h2>
                <p>Treepex is exempt from all responsibility for the total or partial non-performance of any obligations set forth in these general sales conditions, if such failure is caused by unpredictable events and/or natural events outside of its control and its responsibility, including, but not limited to, natural (disasters) events, acts of terrorism, wars and riots.</p>
                <p>It should be noted that, for reasons of force majeure, the species selected by the user within the order process may not be available at the appropriate time when the transplant should be implemented. Similarly, it may not be possible to proceed to transplant in the country indicated on the platform at the moment of the order.</p>
                <p>This may occur in the case of:</p>
                <ol>
                    <li>impossibility to operate in the country indicated on the platform at the time of the order due to climatic, ecological, political, social adversities, that is operational difficulties to properly manage and maintain the project;</li>
                    <li>impossibility to operate, under safe conditions, in the countries in which it is possible to plant the requested species either from Treepex’s staff considerations and/or the agricultural and environmental conditions for the growth of the trees;</li>
                    <li>rooting failures of the species in the nursery or a high probability that the species, once transplanted, does not take root;</li>
                    <li>In the cases referred to in paragraphs 2 and 3 of this article (or in similar cases), the user agrees that the planting service requested may be carried out in different countries and/or with different tree species, being understood that the quantity of trees planted will not be less than the ones originally requested. </li>
                </ol>
                <h2>6. IT PROCEDURES</h2>
                <p>In order to request the planting service online (on its behalf or on behalf of third parties as part of the "gift a tree" service), the user has to register into the Treepex and have read and accepted the Information on the processing of Personal Data.</p>
                <p>After the registration, the user can avail the services and information available on the platform described in detail herein.</p>
                <p>Following the implementation of a planting order (carried out ​​by the user or any other part of the "gift a tree" service), the user becomes a "virtual owner" in the platform. The virtual owner owns the tree. ID Tag number and the corresponding kgs of CO2 that the tree will, supposedly, absorb over time.</p>
                
                <h2>7. INFORMATION AND COMPLAINTS</h2>
                <p>For information and clarifications about the terms and conditions of service, as well as any complaints, customers can contact Treepex by email writing to hello@treepex.com </p>
            </div>
       
        </PageWrapper>
      </DefaultTemplate>
    );
  }
}








