import { FunctionComponent } from "react";

import {
  StyledContainer,
  StyledHeader,
  StyledLI,
  StyledOrderedList,
  StyledPage,
  StyledParagraph,
  StyledTerm,
  StyledTitle,
  StyledUnderline
} from "./technologyServicesAgreement.styled";

const TechnologyServicesAgreement: FunctionComponent = () => {
  return (
    <StyledPage>
      <StyledTitle level="h5">Technology Service Agreement</StyledTitle>
      <StyledContainer>
        <StyledHeader>Effective starting: December 1, 2022</StyledHeader>
        <StyledParagraph>
          Welcome to Suki! We are excited you have chosen Suki to help lift the burden of medical documentation. You’ll
          see our products are continually updated with new features and capabilities, so give us your feedback along
          the way as we work hard to bring the joy back to medicine. This Technology Services Agreement (“Agreement” or
          “Terms”) describes your rights and responsibilities as a customer of our Suki Technology. If you are being
          invited or added to the Suki Technology by a Suki customer, the User Notice governs your access and use of the
          Suki Technology (and not these Terms). These Terms are between you and Suki AI, Inc. (“Suki”, “we”, “us”
          and/or “our”). “You” or “Customer” means the entity you represent in accepting these Terms or, if that does
          not apply, you individually.
        </StyledParagraph>
        <StyledParagraph>
          If you are accepting on behalf of your employer or another entity, you represent and warrant that: (i) you
          have full legal authority to bind your employer or such entity to these Terms; (ii) you have read and
          understand these Terms; and (iii) you agree to these Terms (including the Business Associate Agreement, the
          “BAA”) on behalf of the party that you represent. If you don’t have the legal authority to bind your employer
          or the applicable entity or you do not wish to accept the Terms, you must not click “I agree” (or similar
          button or checkbox) that is presented to you. Permission to access and use the Suki Technology is conditional
          upon you agreeing to these Terms.
        </StyledParagraph>
        <StyledParagraph>
          These Terms are effective as of the date you first click “I agree” (or similar button or checkbox) or use or
          access the Suki Technology, whichever is earlier (the “Effective Date”). These Terms do not have to be signed
          in order to be binding. You indicate your assent to these Terms by clicking “I agree” (or similar button or
          checkbox) at the time you register for the Suki Technology, create a Suki account, or place an Order.
        </StyledParagraph>

        <StyledOrderedList>
          <StyledLI>
            <StyledHeader>DEFINITIONS</StyledHeader>
            <StyledParagraph>
              <StyledTerm>“Documentation”</StyledTerm> means the printed and digital instructions, on-line help files,
              technical documentation and user manuals made available by Suki for the Suki Technology.
            </StyledParagraph>
            <StyledParagraph>
              <StyledTerm>“Fees”</StyledTerm> means the fees set forth on the Order, including any shipping or other
              delivery costs associated with the Suki Technology.
            </StyledParagraph>
            <StyledParagraph>
              <StyledTerm>“Order”</StyledTerm> means Suki’s applicable online order page(s), sign-up flows, in-product
              screens or other Suki-approved ordering document or process describing the products and services you are
              ordering from us and, as applicable, their permitted scope of use. As applicable, the Order will identify:
              (i) the Suki products and services, (ii) the number of Authorized Users, the Term and (iii) (for paid
              Orders) the amount or rate you will be charged, the billing and renewal terms, applicable currency, and
              form of payment.
            </StyledParagraph>
            <StyledParagraph>
              <StyledTerm>“Our Policies”</StyledTerm> means our Terms of Use, Privacy Policy, Acceptable Use Policy,
              Third Party Terms for certain third party code in the Suki Technology, and any other policies or terms
              referenced in these Terms.
            </StyledParagraph>
          </StyledLI>

          <StyledLI>
            <StyledHeader>ACCESS TO THE SUKI TECHNOLOGY</StyledHeader>
            <StyledOrderedList>
              <StyledLI>
                <StyledUnderline>Right to Access Suki Platform</StyledUnderline>. Subject to these Terms, Suki will make
                the Suki AI software-as-a-service platform (the <StyledTerm>“Suki Platform”</StyledTerm>) available to
                Customer via the Internet during the Term and hereby grants to Customer a non-exclusive,
                non-sublicensable and non-transferable right to access and use the Suki Platform during the Term solely
                for internal business purposes, all in accordance with these Terms, the applicable Order and the
                Documentation. The Suki Platform (including any software that is provided in connection with the Suki
                Platform) are referred to collectively in this Agreement as the{" "}
                <StyledTerm>“Suki Technology.”</StyledTerm> Suki Technology may include technology of third parties
                which Suki is authorized to include as part of the Suki Platform. Employees or contractors of Suki (
                <StyledTerm>“Suki Personnel”</StyledTerm>) may be present at the Site from time to time to assess the
                functionality and performance of the Suki Technology and facilitate Customer’s internal evaluation of
                the Suki Technology.
              </StyledLI>
              <StyledLI>
                <StyledUnderline>Beta Releases and Free Access Subscriptions</StyledUnderline>. Suki may provide
                Customer with the Suki Platform for free or on a trial basis (a{" "}
                <StyledTerm>“Free Access Subscriptions”</StyledTerm>) or with “alpha”, “beta”, or other early-stage
                features of the Suki Platform (“Beta Releases”), which are optional for Customer to use. Suki makes no
                promises that future versions of Beta Releases or Free Access Subscriptions will be released or will be
                made available under the same commercial or other terms. Suki may terminate Customer’s right to use any
                Free Access Subscriptions or Beta Releases at any time in Suki’s sole discretion, without liability.
                WITH RESPECT TO BETA RELEASES, CUSTOMER ACKNOWLEDGES AND AGREES THAT BETA RELEASES MAY NOT BE COMPLETE
                OR FULLY FUNCTIONAL AND MAY CONTAIN BUGS, ERRORS, OMISSIONS, AND OTHER PROBLEMS FOR WHICH SUKI WILL NOT
                BE RESPONSIBLE. ACCORDINGLY, ANY USE OF BETA RELEASES ARE AT CUSTOMER’S SOLE RISK NOTWITHSTANDING
                ANYTHING TO THE CONTRARY HEREIN.
              </StyledLI>
              <StyledLI>
                <StyledUnderline>Conditions of Use</StyledUnderline>. Suki may monitor Customer’s and Authorized Users’
                use of the Suki Technology and compile statistical and performance information related to the operation
                of and provision of access to the Suki Technology for Suki’s internal use and other purposes. Suki may
                temporarily suspend Customer’s or any Authorized User’s access to any portion of the Suki Technology if
                Suki reasonably determines that: (i) Customer or any Authorized User has breached this Agreement, or
                (ii) an event has occurred, or is likely to occur, that may create a risk to the Suki Technology,
                Customer or any other customer of Suki.
              </StyledLI>
              <StyledLI>
                <StyledUnderline>Third Party Integrations</StyledUnderline>. Customer understands and agrees that
                Customer’s access to and use of the Suki Technology is dependent, in part, on access to certain third
                party integrations, including data obtained from Customer’s electronic medical record (
                <StyledTerm>“EMR”</StyledTerm>) provider, and Company may, among other things, withdraw, suspend, or
                discontinue any functionality or feature of the Suki Technology based on the actions of Customer or its
                EMR. In addition, Customer understands and agrees that access to and use of the Suki Technology is
                dependent, in part, on access to the UMLS® Metathesaurus®. Customer is required to obtain a license to
                the UMLS® Metathesaurus® prior to use of the Suki Technology and any use of vocabulary sources
                accessible through the UMLS® Metathesaurus® is subject to and conditioned upon such license. Suki has no
                responsibility for assisting Customer in obtaining such license and shall have no liability for any
                failure by Customer to obtain (or retain) such license.
              </StyledLI>
              <StyledLI>
                <StyledUnderline>HIPAA</StyledUnderline>. For purposes of the Health Insurance Portability and
                Accountability Act of 1996 (<StyledTerm>“HIPAA”</StyledTerm>), Suki is a business associate to Customer,
                and, simultaneously with agreeing to these Terms, Customer and Suki are entering into a HIPAA-compliant
                BAA that, among other things, permits Customer to transmit certain protected health information (as
                defined under HIPAA, <StyledTerm>“Protected Health Information”</StyledTerm> or
                <StyledTerm>“PHI”</StyledTerm>) regarding Customer’s patients to Suki, and will permit Suki to use such
                information as set forth in this Agreement. The BAA (set forth below) is incorporated herein.
              </StyledLI>
              <StyledLI>
                <StyledUnderline>Modification to Terms</StyledUnderline>. Suki reserves the right make changes to these
                Terms at any time. Suki agrees to provide prompt written notice of such changes to Customer either
                directly or by posting notice of such change on the Suki website and Customer may terminate should you
                wish to discontinue the Suki Technology at that time. Your continued use of the Suki Technology
                constitutes your acceptance of the latest Terms.
              </StyledLI>
            </StyledOrderedList>
          </StyledLI>

          <StyledLI>
            <StyledHeader>RESTRICTIONS ON USE OF SUKI TECHNOLOGY</StyledHeader>
            <StyledOrderedList>
              <StyledLI>
                Customer’s use of the Suki Technology and the access rights granted in Section 2.1 are subject to the
                following restrictions: (a) the Suki Technology will be accessed or used only by employees or
                contractors of Customer authorized by Customer to access and use the Suki Technology and, in the case of
                the Suki Platform, solely using a user identifier and password provided or registered to Customer by
                Suki (such employees and contractors collectively, <StyledTerm>“Authorized Users”</StyledTerm>); (b)
                Customer will not provide a user identifier or password to access the Suki Technology to any party or
                person other than Authorized Users; (c) Customer will not reverse engineer, decompile, disassemble or
                otherwise create, attempt to create, or permit or assist any third party to create a source code version
                of the software underlying the Suki Technology; (d) Customer will not transfer, distribute, sell,
                resell, lease, sublease, license, sub-license or assign the Suki Technology or otherwise offer any of
                the Suki Technology for use on a service bureau, outsourced, or value added basis; (e) Customer will not
                use the Suki Technology to store or transmit material in violation of third-party intellectual property
                or privacy rights; (f) Customer will not interfere with or disrupt the integrity or performance of the
                Suki Technology or third-party data contained therein, (g) Customer shall not permit direct or indirect
                access to, or use of, the Suki Technology in a way that circumvents a contractual usage limit or access
                or use any of our intellectual property except as permitted under this Agreement, (h) Customer shall not
                frame or mirror any part of the Suki Technology, other than framing on Customer’s own intranets or
                otherwise for its internal business purposes (i) Customer shall not access the Suki Technology in order
                to build a competitive product or service or to benchmark with any product or service of a third party
                and (j) Customer will not use the Suki Technology to store or transmit viruses or other harmful or
                malicious code, files, scripts, agents or programs.
              </StyledLI>
            </StyledOrderedList>
          </StyledLI>

          <StyledLI>
            <StyledHeader>CUSTOMER RESPONSIBILITIES</StyledHeader>
            <StyledParagraph>
              Customer will (a) be responsible for each Authorized User’s compliance with this Agreement and use of the
              Suki Technology; (b) be solely responsible for the accuracy, quality, integrity and legality of any data
              and other information supplied to Suki by or on behalf of Customer in the course of using the Suki
              Technology, including any Protected Health Information (collectively,{" "}
              <StyledTerm>“Customer Data”</StyledTerm>) and Customer will be solely responsible for confirming and
              verifying the accuracy of all data, reports and documents (including clinical notes, orders, diagnoses and
              other clinical documentation and/or transcripts) produced by the Suki Technology; (c) use commercially
              reasonable efforts to prevent unauthorized access to or use of the Suki Technology and notify Suki
              promptly of any such unauthorized access or use; (d) use the Suki Technology solely in accordance with
              these Terms, the Documentation and instructions supplied by Suki, including any instructions provided by
              Suki Personnel, and all applicable laws, rules and regulations; and (e) cooperate with Suki as reasonably
              necessary to resolve errors and, if applicable, interruptions, related to the Suki Technology, including
              by providing access to same at the Site. Customer understands and agrees that access to the Suki
              Technology may require Customer’s EMR provider username and password.
            </StyledParagraph>
          </StyledLI>

          <StyledLI>
            <StyledHeader>SUKI RESPONSIBILITIES</StyledHeader>
            <StyledParagraph>
              Suki will (a) permit Customer to access all enhancements, updates, revisions, error corrections and
              upgrades pertaining to the Suki Technology that it generally makes available to its customers at no
              additional cost and (b) use commercially reasonable efforts to repair malfunctioning Suki Technology or,
              at Suki’s election and sole discretion, replace such malfunctioning Suki Technology with equivalent
              functioning Suki Technology. Suki Personnel will observe and comply with any security and safety policies
              generally applicable to Customer’s vendors and suppliers and provided to Suki Personnel in advance while
              at the Site. Customer may direct any support or update questions to their designated Suki representative.
            </StyledParagraph>
          </StyledLI>

          <StyledLI>
            <StyledHeader>CONFIDENTIALITY; FEEDBACK; PROPRIETARY RIGHTS</StyledHeader>
            <StyledOrderedList>
              <StyledLI>
                <StyledUnderline>Confidentiality</StyledUnderline>. In connection with Customer’s use of the Suki
                Technology as permitted under this Agreement and other activities of the parties contemplated by this
                Agreement, either Suki or Customer (the <StyledTerm>“Disclosing Party”</StyledTerm>) may disclose to the
                other party (the <StyledTerm>“Receiving Party”</StyledTerm>) information of a proprietary or
                confidential nature. Any such information that is identified in writing as confidential at the time of
                disclosure or within thirty (30) days thereafter is referred to as{" "}
                <StyledTerm>“Confidential Information”</StyledTerm> of the Disclosing Party, provided, however, that
                reports and/or information related to or regarding the Disclosing Party’s business plans, business
                methodologies, strategies, technology, specifications, development plans, customers, prospective
                customers, patients, partners and products or services will be deemed Confidential Information of the
                Disclosing Party even if not so identified. For the avoidance of doubt, the Suki Technology and
                Documentation are the Confidential Information of Suki, and Customer Data are the Confidential
                Information of Customer. Confidential Information will not include (a) any information that is generally
                known to the public or in the trade or becomes so generally known without breach of this Agreement by
                the Receiving Party, (b) any information that was known to the Receiving Party prior to its receipt from
                the Disclosing Party, (c) any information that is disclosed to the Receiving Party by a third party who
                is not in violation of an obligation of confidentiality to the Disclosing Party in making such
                disclosure, (d) any information that is independently developed by the Receiving Party without use of
                the Confidential Information of the Disclosing Party or (e) De-Identified Data. Each of Suki and
                Customer, as the Receiving Party, agrees to use the Confidential Information of the Disclosing Party
                solely for the purpose of exercising its rights or performing its obligations under this Agreement and
                not to use it or make it available to anyone for any other purpose. Each party, as the Receiving Party,
                further agrees to maintain the confidentiality of the Confidential Information of the Disclosing Party
                and not to disclose it to anyone without the consent of the Disclosing Party, except for disclosures to
                employees and contractors of the Receiving Party having a need to know such information in connection
                with the exercise of the Receiving Party’s rights or the performance of the Receiving Party’s
                obligations under this Agreement (it being understood that any such employees and contractors will be
                bound by written agreements containing confidentiality and non-use provisions as protective of the
                Disclosing Party’s Confidential Information as set forth in this Agreement), and disclosures which may
                be required by law. In the event that the Receiving Party is required by law to make any disclosure of
                any of the Confidential Information of the Disclosing Party, by subpoena, judicial or administrative
                order or otherwise, the Receiving Party will first give written notice of such requirement to the
                Disclosing Party, and will permit the Disclosing Party to intervene in any relevant proceedings to
                protect such Confidential Information, and provide cooperation and assistance to the Disclosing Party in
                seeking to obtain such protection.
              </StyledLI>
              <StyledLI>
                <StyledUnderline>Feedback</StyledUnderline>. Customer may provide suggestions, comments and other
                feedback (<StyledTerm>“Feedback”</StyledTerm>) to Suki with respect to the Suki Technology and complete
                surveys about Authorized Users’ experiences with the Suki Technology. Suki will be free to use,
                disclose, reproduce and otherwise exploit the Feedback it receives in its sole discretion, and may
                proceed with the development of improvements, enhancements, updates or modifications to the Suki
                Technology based on such Feedback in its sole discretion.
              </StyledLI>
              <StyledLI>
                <StyledUnderline>Suki Rights</StyledUnderline>. Suki exclusively owns all right, title and interest in
                and to the Suki Technology, and all improvements, enhancements, updates or modifications thereto,
                whether or not developed based on Customer’s Feedback, and all intellectual property rights related to
                any of the foregoing. Except for those rights expressly granted to Customer under this Agreement, Suki
                reserves all right, title and interest in and to the Suki Technology and other Suki Confidential
                Information.
              </StyledLI>
              <StyledLI>
                <StyledUnderline>Customer Rights</StyledUnderline>. Customer owns and retains all right, title and
                interest in and to Customer Data. Customer hereby grants to Suki a non-exclusive license to copy, store,
                process, modify, display and otherwise use Customer Data to facilitate Customer’s internal evaluation of
                the Suki Technology during the Term and for the purposes of improving and further developing the Suki
                Technology. Suki’s use of Customer Data shall be subject to the Suki Privacy Policy which may be
                accessed at www.suki.ai. In addition, (i) Suki may access Authorized User account(s), including without
                limitation Customer Data, to respond to service or technical problems and for the purpose of using the
                Customer Data for system tuning, grammar tuning, training of acoustic models and other models, tools and
                algorithms, and (ii) during and after the Term, Suki may copy, store, process, modify, disclose and
                otherwise use for any purpose data or other information provided to Suki under this Agreement that has
                been aggregated, de-identified and/or anonymized such that Customer, Authorized Users and Customer’s
                patients are not identified (any such data or information, <StyledTerm>“De-Identified Data”</StyledTerm>
                ). Except for those rights granted to Suki under this Agreement, Customer reserves all right, title and
                interest in and to Customer Data and other Customer Confidential Information. Suki may retain a copy of
                any Customer Data for such period of time as required by law or otherwise in accordance with Suki’s data
                retention policies.
              </StyledLI>
            </StyledOrderedList>
          </StyledLI>

          <StyledLI>
            <StyledHeader>PAYMENT OF FEES</StyledHeader>
            <StyledOrderedList>
              <StyledLI>
                <StyledUnderline>Fees</StyledUnderline>. To the extent the Suki Platform is made available for a fee,
                Customer will pay Suki for amounts as set forth in the Order. Except as otherwise specified herein or in
                any applicable Order, (a) fees are quoted and payable in United States dollars and (b) payment
                obligations are non-cancelable and non-pro-ratable for partial months, and fees paid are non-refundable.
              </StyledLI>
              <StyledLI>
                <StyledUnderline>Credit Card Payment Terms</StyledUnderline>. If Customer elects to pay via credit card,
                then Customer is responsible for either (a) enabling auto-recharge on Customer’s payment instrument or
                (b) ensuring that Customer’s payment instrument has a sufficient positive balance to cover all fees due.
                If, for any reason, Customer has a negative balance on its payment account, then Suki reserves the right
                to suspend access to the paid version until all fees are paid in full.
              </StyledLI>
              <StyledLI>
                <StyledUnderline>Invoicing Payment Terms</StyledUnderline>. If Customer elect to receive invoices and
                Suki approves Customer for the same, then invoices will be sent to via email in accordance with the
                Order. Except as otherwise set forth in an Order, Customer will make all of the undisputed fees
                hereunder within thirty (30) days of the date of the invoice.
              </StyledLI>
              <StyledLI>
                <StyledUnderline>Suspension; Late Payment</StyledUnderline>. Suki may suspend access to the Suki
                Platform immediately upon notice if Customer fails to pay any amounts hereunder at thirty (30) days past
                the applicable due date. If Suki has not received payment within thirty (30) days after the applicable
                due date, interest will accrue on past due amounts at the rate of one percent (1%) per month, but in no
                event greater than the highest rate of interest allowed by law, calculated from the date such amount was
                due until the date that payment is received by Suki.
              </StyledLI>
              <StyledLI>
                <StyledParagraph>
                  <StyledUnderline>Taxes</StyledUnderline>. All amounts payable hereunder are exclusive of any sales,
                  use and other taxes or duties, however designated (collectively <StyledTerm>“Taxes”</StyledTerm>).
                  Customer will be solely responsible for payment of all Taxes, except for those taxes based on the
                  income of Suki. Customer will not withhold any taxes from any amounts due to Suki.
                </StyledParagraph>
              </StyledLI>
            </StyledOrderedList>
          </StyledLI>

          <StyledLI>
            <StyledHeader>TERM</StyledHeader>
            <StyledOrderedList>
              <StyledLI>
                <StyledUnderline>Paid Subscriptions</StyledUnderline>. If Customer is accessing the Suki Platform via a
                paid subscription, this Agreement will be in effect for the subscription term set forth in the Order and
                automatically renew for additional, successive renewal terms of equal length unless either party
                provides the other party with written notice of non-renewal at least (30) days’ before the end of the
                then-current renewal term. In addition, each party may each terminate this Agreement if the other party
                fails to cure any material breach of this Agreement (including a failure to pay undisputed fees) within
                thirty (30) days after written notice detailing the breach.
              </StyledLI>
              <StyledLI>
                <StyledUnderline>Free Access Subscriptions</StyledUnderline>. If Customer is accessing the Suki Platform
                via a Free Access Subscription, each party may terminate this Agreement upon written notice to the other
                party.
              </StyledLI>
              <StyledLI>
                <StyledUnderline>Effect of Termination</StyledUnderline>. Upon termination or expiration of this
                Agreement, (a) each party (as the Receiving Party) will return to the Disclosing Party or destroy all
                written Confidential Information of the Disclosing Party in the possession of the Receiving Party and
                any other written material in the possession of the Receiving Party which embodies any Confidential
                Information of the Disclosing Party, and will not retain any copies, extracts or other reproductions in
                whole or in part of such written material; and (b) Suki will return or destroy Protected Health
                Information in its possession (unless such return or destruction is infeasible) in accordance with the
                terms of the BAA. Customer understands that once Suki Technology-processed Customer Data is submitted to
                Customer (including within its EMR system), Suki has no obligation to provide Customer any additional
                copies or files of such data. Sections 6, 7, 8, and 10 through 13 will survive the termination or
                expiration of this Agreement for any reason whatsoever. Suki may retain any De-Identified Data created
                by Suki.
              </StyledLI>
            </StyledOrderedList>
          </StyledLI>

          <StyledLI>
            <StyledHeader>REPRESENTATIONS AND WARRANTIES</StyledHeader>
            <StyledOrderedList>
              <StyledLI>
                <StyledUnderline>Mutual Warranties</StyledUnderline>. Each party represents and warrants to the other
                party as of the Effective Date that (a) it is incorporated or organized and existing under the laws of
                its jurisdiction of incorporation or organization with full power and authority to enter into and
                perform this Agreement; (b) this Agreement has been duly authorized by all necessary corporate action
                and constitutes the binding obligation of such party enforceable in accordance with its terms, except as
                such enforceability may be limited by bankruptcy laws or other laws affecting the rights of creditors
                generally; (c) the person executing this Agreement on its behalf has actual authority to bind it to this
                Agreement; and (d) such party’s execution and performance of this Agreement does not and will not
                violate or conflict with any provision of such party’s governing corporate instruments or of any
                commitment, agreement or understanding that such party has or will have to or with any person or entity.
              </StyledLI>
              <StyledLI>
                <StyledUnderline>Customer Warranties</StyledUnderline>. Customer represents, warrants and covenants that
                it has and will have all rights necessary and full legal authority to (a) submit Customer Data to the
                Suki Technology or otherwise provide Customer Data to Suki (including but not limited to all necessary
                patient consents (e.g., the patient notification that audio data may be recorded)), and (b) grant the
                rights in and to Customer Data as set forth in Section 6.4 of this Agreement.
              </StyledLI>
            </StyledOrderedList>
          </StyledLI>

          <StyledLI>
            <StyledHeader>INDEMNITY</StyledHeader>
            <StyledOrderedList>
              <StyledLI>
                <StyledUnderline>Suki Indemnification</StyledUnderline>. Suki will defend Customer against any claim,
                demand, suit or proceeding made or brought against Customer by a third party alleging that any of the
                Suki Technology infringes any United States patent, any copyright or constitutes a misappropriation of
                such third party’s trade secret rights (a <StyledTerm>“Claim Against You”</StyledTerm>). Suki will
                indemnify Customer from any damages, attorney fees and costs finally awarded as a result of, or for
                amounts paid by Customer under a settlement approved by Suki in writing of, a Claim Against You,
                provided Customer shall; (a) promptly give Suki written notice of the Claim Against You, (b) give Suki
                sole control of the defense and settlement of the Claim Against You (except that we may not settle any
                Claim Against you unless it unconditionally releases you of all liability), and (c) give Suki all
                reasonable assistance, at our expense. Suki, at its option, may (i) modify the Suki Technology so that
                it no longer infringes, (ii) obtain a license for your continued use of the Suki Technology in
                accordance with this Agreement, or (iii) terminate your access to the Suki Technology and refund you any
                prepaid Fees covering the remainder of the Term of the terminated subscriptions. The above defense and
                indemnification obligations do not apply to the extent a Claim Against You arises from Customer Data or
                use of the Suki Technology in violation of this Agreement or applicable Orders.
              </StyledLI>
              <StyledLI>
                <StyledUnderline>Customer Indemnification</StyledUnderline>. Customer will defend Suki against any
                claim, demand, suit or proceeding made or brought by a third party: (i) alleging that any Customer Data
                infringes or misappropriates third party’s rights, including intellectual property rights, (ii) arising
                from use of the Suki Technology in violation of these Terms, an Order or applicable law (each a{" "}
                <StyledTerm>“Claim Against Us”</StyledTerm>), or (iii) based on a claim that Customer improperly
                disclosed PHI to Suki. In addition, Customer will indemnify Suki from any damages, attorney fees and
                costs finally awarded against Suki as a result of, or for any amounts paid by Suki under a settlement
                approved by Customer in writing of, a Claim Against Us, provided we; (a) promptly give you written
                notice of the Claim Against Us, (b) give you sole control of the defense and settlement of the Claim
                Against Us (except that you may not settle any Claim Against Us unless it unconditionally releases us of
                all liability), and (c) give you all reasonable assistance, at Your expense.
              </StyledLI>
              <StyledLI>
                <StyledUnderline>Exclusive Remedy</StyledUnderline>. This Section 10 states the indemnifying party’s
                sole liability to, and the indemnified party’s exclusive remedy against, the other party for any type of
                claim described in this Section 10.
              </StyledLI>
            </StyledOrderedList>
          </StyledLI>

          <StyledLI>
            <StyledHeader>DISCLAIMER</StyledHeader>
            <StyledParagraph>
              CUSTOMER EXPRESSLY AGREES THAT ITS USE OF THE SUKI TECHNOLOGY IS AT ITS SOLE RISK AND THAT THE SUKI
              TECHNOLOGY IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTY OF ANY KIND FROM SUKI. SUKI, ON BEHALF
              OF ITSELF AND ANY THIRD PARTY LICENSORS, (I) HEREBY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
              INCLUDING BUT NOT LIMITED TO ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              NON-INFRINGEMENT AND TITLE (II) DOES NOT GUARANTEE THAT THE SUKI TECHNOLOGY WILL MEET ANY OR ALL OF
              CUSTOMER’S REQUIREMENTS OR OPERATE IN AN UNINTERRUPTED OR ERROR-FREE FASHION OR WITHOUT LOSS OF DATA, AND
              (III) DISCLAIMS ANY AND ALL LIABILITY RESULTING FROM OR RELATED TO ANY SUCH INTERRUPTION, LOSS OR ERROR.
            </StyledParagraph>
            <StyledParagraph>
              CUSTOMER FURTHER UNDERSTANDS AND AGREES THAT (A) CUSTOMER IS RESPONSIBLE FOR FINAL REVIEW OF SUKI
              TECHNOLOGY-PROCESSED CUSTOMER DATA INCLUDING ANY CLINICAL NOTES, ORDERS, DIAGNOSES AND OTHER CLINICAL
              DOCUMENTATION AND/OR TRANSCRIPTS GENERATED BY THE SUKI TECHNOLOGY PRIOR TO INPUTTING THE SAME IN
              CUSTOMER’S EMR AND/OR RELYING THEREON, (B) SUKI SHALL NOT HAVE ANY LIABILITY WHATSOEVER FOR THE ACCURACY
              OR COMPLETENESS OF SUKI TECHNOLOGY-PROCESSED CUSTOMER DATA OR FOR ANY DECISION MADE OR ACTION TAKEN BY
              CUSTOMER (OR ANY AUTHORIZED USER) IN RELIANCE UPON ANY SUKI TECHNOLOGY-PROCESSED CUSTOMER DATA AND (C)
              SUKI IS NOT AN EMR PROVIDER AND THE SUKI TECHNOLOGY AND SUKI PLATFORM ARE NOT EMR SYSTEMS.
            </StyledParagraph>
          </StyledLI>

          <StyledLI>
            <StyledHeader>LIMITATION OF LIABILITY </StyledHeader>
            <StyledParagraph>
              UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL THEORY (WHETHER BASED IN CONTRACT, TORT, STRICT LIABILITY OR
              OTHERWISE) WILL SUKI (INCLUDING ANY THIRD PARTY LICENSORS ) BE LIABLE FOR (A) ANY INDIRECT, PUNITIVE,
              INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES (INCLUDING LOST PROFITS) OR (B) ANY OTHER DAMAGES IN EXCESS
              OF THE AGGREGATE FEES PAID TO SUKI UNDER THIS AGREEMENT OR $100, WHICHEVER IS GREATER, EVEN IF SUKI HAS
              BEEN ADVISED OF THE POSSIBILITY OF DAMAGES.
            </StyledParagraph>
          </StyledLI>

          <StyledLI>
            <StyledHeader>MISCELLANEOUS</StyledHeader>
            <StyledOrderedList>
              <StyledLI>
                <StyledParagraph>
                  <StyledUnderline>Entire Agreement</StyledUnderline>. The terms and conditions of this Agreement
                  (including the Order, BAA included herein) supersede and replace all prior or contemporaneous
                  understandings or agreements, written or oral, regarding such subject matter between the parties and
                  apply to the exclusion of any other terms or conditions that either party seeks to impose or
                  incorporate or that are implied by course of dealing.
                </StyledParagraph>
              </StyledLI>
              <StyledLI>
                <StyledUnderline>Assignment</StyledUnderline>. Suki may assign or transfer this Agreement or its rights
                or obligations hereunder. Customer may not assign this Agreement or its rights or obligations hereunder
                without the prior written consent of Suki. Any attempted assignment, delegation or transfer of this
                Agreement in violation of the foregoing will be null and void. Subject to the foregoing, this Agreement
                will be binding on the parties and their permitted successors and assigns.
              </StyledLI>
              <StyledLI>
                <StyledUnderline>Severability</StyledUnderline>. If any provision of this Agreement is found to be
                unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary
                so that this Agreement will otherwise remain in full force and effect and enforceable. Failure by either
                party to enforce any provision of this Agreement will not be deemed a waiver of future enforcement of
                that or any other provision.
              </StyledLI>
              <StyledLI>
                <StyledUnderline>Dispute Resolution</StyledUnderline>. This Agreement and any dispute arising hereunder
                will be governed by the laws of the State of California, without regard to the conflicts of law
                provisions thereof. For all purposes under this Agreement each party will be and act as an independent
                contractor and will not bind nor attempt to bind the other to any contract. Any notices in connection
                with this Agreement will be in writing and sent to the address specified in this Agreement (with notices
                to Suki being sent to the attention of “Legal”) or such other address as may be properly specified by
                written notice hereunder. Publicity. Neither party will originate any publicity, issue any news release
                or make any other public announcement, written or oral, relating to this Agreement or the existence of
                an arrangement between the parties, without the prior written consent of the other party, except that
                (i) each party (after consultation with the other party and counsel) may make such announcements and
                disclosures as may be required by law and (ii) Suki may publicly refer to Customer by name and use
                Customer’s trademark and logo as part of Suki’s customer lists, provided, however, that customer may
                withdraw this consent at any time and in its sole discretion.
              </StyledLI>
              <StyledLI>
                <StyledUnderline>Third Party Terms</StyledUnderline>. Certain Third-Party Products (as identified in the
                Third-Party Terms) are subject to alternative terms and conditions that can be viewed at
                www.suki.ai/legal (“Third Party Terms”), which are incorporated by reference. Such Third-Party Terms
                apply only to those Third-Party Products with which they are expressly identified. EXCEPT AS OTHERWISE
                EXPRESSLY SET FORTH IN THE THIRD-PARTY TERMS, ALL THIRD-PARTY PRODUCTS ARE PROVIDED “AS IS” AND ANY
                EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT ARE DISCLAIMED.
              </StyledLI>
            </StyledOrderedList>
          </StyledLI>
        </StyledOrderedList>
      </StyledContainer>
    </StyledPage>
  );
};

export { TechnologyServicesAgreement };

export default TechnologyServicesAgreement;
