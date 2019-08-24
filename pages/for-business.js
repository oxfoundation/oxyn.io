import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import DefaultTemplate from "../templates/Default";
import PageWrapper from "../components/PageWrapper";
import Accordion from "../components/Accordion";
import { Row, Col } from "reactstrap";
import Feature from "../components/Feature";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);

    this.featureList = [
      {
        title: 'Convince "Generation Green"',
        description:
          "One of the main advantages of blockchain is transparency. Now brands can show how many items re-used and how much plastics eliminated, so you are never in any doubt about the real facts and statistics."
      },
      {
        title: "Protect your product",
        description:
          "Modern payment systems are extremely inefficient for microtransactions. Oxyn allows us to make transactions for each package in seconds, and it’s absolutely FREE."
      },
      {
        title: "Re-invent packaging",
        description:
          "Because customers now have a strong incentive to return product goods due to our money-back guarantee, you can reinvent your packaging and offer your customers glass, aluminium, or any other material to deliver the best experience.  It also enables you to reuse packaging rather than always having to recycle it.  Recycling goods uses a lot of energy as the goods must be dismantled and re-manufactured, whereas reusing saves this as well as saving money."
      },
      {
        title: "Track through blockchain",
        description:
          "Track your product supply chain through blockchain. You can attach any information to each package: how many times it has been reused, when the product was manufactured, the expiration date, and so much more!"
      },
      {
        title: "Empower sales",
        description:
          "You can use Oxyn cryptocurrency as a powerful marketing tool to reward your loyal customers. You'll have access to comprehensive marketing tools to deliver the best possible offers to our community of buyers.  Not only does Oxyn help you to incentivise buyers, it gives you access to a community of buyers who already exist!"
      },
      {
        title: "Support a Circular economy",
        description:
          "It's a great feeling to offer people a product that doesn’t pollute the environment. We collect, clean, and delivery product packages back to you for further re-use.  Everybody wins!"
      }
    ];
  }

  render() {
    return (
      <DefaultTemplate className="--white">
        <PageWrapper title="For Business">
          <p>
            Roughly 40 percent of the now more than 500 million tons of plastic
            produced every year is disposable, which means that most packaging
            we find on products is intended to be discarded within minutes after
            purchase. This is a huge factor in the global environmental crisis,
            and we are close to damaging our planet beyond repair.
          </p>
          <p>
            These facts, however, do mean that there is now great value in
            waste-free business. That is what Oxyn can help you with, we help
            you make your production line waste-free, which can help to attract
            people to your products and business.
          </p>
          <p>
            Oxyn is a unique solution to solve a single used plastic problem,
            but that's not the only benefit your company will receive:
          </p>

            {this.featureList.map((item, index) => (
              <div className="card mb-5" key={index}>
                <div className="card-body">
                  <h3 className="text-dark">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
        </PageWrapper>
      </DefaultTemplate>
    );
  }
}
