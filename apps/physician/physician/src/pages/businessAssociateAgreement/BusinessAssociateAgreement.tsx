import { FunctionComponent } from "react";

import {
  StyledContainer,
  StyledHeader,
  StyledLatinOrderedList,
  StyledOrderedList,
  StyledPage,
  StyledParagraph,
  StyledRomanOrderedList,
  StyledTerm,
  StyledTitle
} from "./businessAssociateAgreement.styled";

const BusinessAssociateAgreement: FunctionComponent = () => {
  return (
    <StyledPage>
      <StyledTitle level="h5">Business Associate Agreement</StyledTitle>
      <StyledContainer>
        <StyledParagraph>
          This Business Associate Agreement (this <StyledTerm>“BAA”</StyledTerm>) is entered into as of the Effective
          Date, by and between Customer (the <StyledTerm>“Covered Entity”</StyledTerm>) and Suki (
          <StyledTerm>“Business Associate”</StyledTerm>). Covered Entity and Business Associate are collectively
          referred to as, the <StyledTerm>“Parties”</StyledTerm> and individually, a <StyledTerm>“Party”</StyledTerm>).
        </StyledParagraph>
        <StyledParagraph>BACKGROUND</StyledParagraph>
        <StyledParagraph>
          <StyledTerm>WHEREAS</StyledTerm>, the Parties are entering into a Technology Services Agreement (the{" "}
          <StyledTerm>“Services Agreement”</StyledTerm>), pursuant to which Business Associate will provide certain
          services (<StyledTerm>“Services”</StyledTerm>) to Covered Entity;
        </StyledParagraph>
        <StyledParagraph>
          <StyledTerm>WHEREAS</StyledTerm>, as a result of providing the Services, Business Associate may have access to
          certain Protected Health Information and Business Associate may be considered a “business associate” of
          Covered Entity as defined in the HIPAA Rules (defined below); and
        </StyledParagraph>
        <StyledParagraph>
          <StyledTerm>WHEREAS</StyledTerm>, the Parties wish to address the requirements of the HIPAA Rules and ensure
          that Business Associate will establish appropriate safeguards, including without limitation certain
          administrative requirements, with respect to such Protected Health Information.
        </StyledParagraph>
        <StyledParagraph>
          <StyledTerm>NOW, THEREFORE</StyledTerm>, in consideration of the foregoing and the covenants and promises
          contained in this BAA and the Services Agreement, the Parties agree as follows.
        </StyledParagraph>

        <StyledOrderedList>
          <li>
            <StyledHeader>DEFINITIONS</StyledHeader>
            <StyledLatinOrderedList>
              <li>
                <StyledTerm>Terms Defined in the HIPAA Rules</StyledTerm>. The following terms used in this BAA shall
                have the same meaning as those terms in the HIPAA Rules: Breach, Data Aggregation, Designated Record
                Set, Disclosure, Health Care Operations, Individual, Notice of Privacy Practices, Protected Health
                Information, Required By Law, Secretary, Security Incident, Subcontractor, Unsecured Protected Health
                Information and Use.
              </li>
              <li>
                <StyledTerm>Business Associate</StyledTerm>. “Business Associate” shall generally have the same meaning
                as the term “business associate” at 45 CFR 160.103, and in reference to a Party to this BAA shall mean
                SUKI AI, Inc.
              </li>
              <li>
                <StyledTerm>Covered Entity</StyledTerm>. “Covered Entity” shall generally have the same meaning as the
                term “covered entity” at 45 CFR 160.103, and in reference to a Party to this BAA shall mean the entity
                identified above as “Covered Entity.”
              </li>
              <li>
                <StyledTerm>HIPAA Rules</StyledTerm>. “HIPAA Rules” shall mean the Privacy, Security, Breach
                Notification and Enforcement Rules at 45 CFR Part 160 and Part 164.
              </li>
              <li>
                <StyledTerm>Unsuccessful Security Incidents</StyledTerm>. “Unsuccessful Security Incidents” shall mean,
                without limitation, pings and other broadcast attacks on Business Associate’s firewall, port scans,
                unsuccessful log-on attempts, denial of service attacks, and any combination of the foregoing, as long
                as no such incident results in unauthorized access, acquisition, Use or Disclosure of Protected Health
                Information.
              </li>
            </StyledLatinOrderedList>
          </li>

          <li>
            <StyledHeader>OBLIGATIONS AND ACTIVITIES OF BUSINESS ASSOCIATE</StyledHeader>
            <StyledParagraph>Business Associate agrees to:</StyledParagraph>
            <StyledLatinOrderedList>
              <li>
                Not use or disclose Protected Health Information other than as permitted or required by this BAA or the
                Services Agreement or as Required By Law;
              </li>
              <li>
                Use appropriate safeguards, and comply with Subpart C of 45 CFR Part 164 with respect to electronic
                Protected Health Information, to prevent Use or Disclosure of Protected Health Information other than as
                provided for by this BAA;
              </li>
              <li>
                Report to Covered Entity any Use or Disclosure of Protected Health Information not provided for by this
                BAA of which it becomes aware, including Breaches of Unsecured Protected Health Information as required
                at 45 CFR 164.410, and any Security Incident of which it becomes aware, provided that notice is hereby
                deemed given for Unsuccessful Security Incidents and no further notice of such Unsuccessful Security
                Incidents shall be given;
              </li>
              <li>
                In accordance with 45 CFR 164.502(e)(1)(ii) and 164.308(b)(2), if applicable, ensure that any
                Subcontractors that create, receive, maintain or transmit Protected Health Information on behalf of
                Business Associate agree to the same restrictions, conditions and requirements that apply to Business
                Associate with respect to such information;
              </li>
              <li>
                Make available Protected Health Information in a Designated Record Set to Covered Entity as necessary to
                satisfy Covered Entity’s obligations under 45 CFR 164.524;
              </li>
              <li>
                Make any amendment(s) to Protected Health Information in a Designated Record Set as directed or agreed
                to by Covered Entity pursuant to 45 CFR 164.526, or take other measures as necessary to satisfy Covered
                Entity’s obligations under 45 CFR 164.526;
              </li>
              <li>
                Maintain and make available the information required to provide an accounting of Disclosures to Covered
                Entity as necessary to satisfy Covered Entity’s obligations under 45 CFR 164.528;
              </li>
              <li>
                To the extent Business Associate is to carry out one or more of Covered Entity's obligation(s) under
                Subpart E of 45 CFR Part 164, comply with the requirements of Subpart E that apply to Covered Entity in
                the performance of such obligation(s); and
              </li>
              <li>
                Make its internal practices, books and records available to the Secretary for purposes of determining
                compliance with the HIPAA Rules.
              </li>
            </StyledLatinOrderedList>
          </li>

          <li>
            <StyledHeader>OBLIGATIONS AND RESPONSIBILITIES OF COVERED ENTITY</StyledHeader>
            <StyledParagraph>Covered Entity agrees to:</StyledParagraph>
            <StyledLatinOrderedList>
              <li>Comply fully with all of its obligations under the HIPAA Rules;</li>
              <li>
                Notify Business Associate of any limitation(s) in Covered Entity’s Notice of Privacy Practices under 45
                CFR 164.520, to the extent that such limitation(s) may affect Business Associate’s Use or Disclosure of
                Protected Health Information;
              </li>
              <li>
                Notify Business Associate of any changes in, or revocation of, the permission by an Individual to use or
                disclose his or her Protected Health Information, to the extent that such changes may affect Business
                Associate’s Use or Disclosure of Protected Health Information;
              </li>
              <li>
                Notify Business Associate in writing of any restriction on the Use or Disclosure of Protected Health
                Information that Covered Entity has agreed to or is required to abide by under 45 CFR 164.522, to the
                extent that such restriction may affect Business Associate’s Use or Disclosure of Protected Health
                Information; and
              </li>
              <li>
                Not request Business Associate to use or disclose Protected Health Information in any manner that would
                not be permissible under Subpart E of 45 CFR Part 164 if done by Covered Entity, provided, however, that
                this provision shall not be interpreted to restrict Business Associate from using Protected Health
                Information for Data Aggregation or management and administration and legal responsibilities of Business
                Associate, as permitted by this BAA.
              </li>
            </StyledLatinOrderedList>
          </li>

          <li>
            <StyledHeader>PERMITTED USES AND DISCLOSURES BY BUSINESS ASSOCIATE</StyledHeader>
            <StyledLatinOrderedList>
              <li>
                <StyledParagraph>
                  Business Associate may only use or disclose Protected Health Information as necessary to perform the
                  Services pursuant to the Services Agreement.
                </StyledParagraph>
              </li>
              <li>
                Business Associate may use or disclose Protected Health Information as (1) Required By Law and/or (2) if
                Business Associate obtains reasonable assurances from the person to whom the information is disclosed
                that it will remain confidential and used or further disclosed only as Required by Law or for the
                purpose or which it was disclosed to the person, and the person notifies Business Associate of any
                instances of which it is aware in which the confidentiality of such information has been breached.
              </li>
              <li>
                Business Associate may not use or disclose Protected Health Information in a manner that would violate
                Subpart E of 45 CFR Part 164 if done by Covered Entity, except for the specific Uses and Disclosures set
                forth below in Sections 4 d, e and f.
              </li>
              <li>
                Business Associate may use Protected Health Information for the proper management and administration of
                Business Associate, as set forth in the Services Agreement, or to carry out the legal responsibilities
                of Business Associate.
              </li>
              <li>
                Business Associate may provide Data Aggregation services relating to the Health Care Operations of
                Covered Entity.
              </li>
              <li>
                Business Associate may de-identify the Protected Health Information in accordance with section
                164.502(d) of the HIPAA Rules and use, modify and disclose such de-identified data for any legal
                purpose.
              </li>
              <li>
                Business Associate may engage Subcontractors located outside the United States in connection with the
                Services.
              </li>
            </StyledLatinOrderedList>
          </li>
          <li>
            <StyledHeader>TERM AND TERMINATION</StyledHeader>
            <StyledLatinOrderedList>
              <li>
                <StyledTerm>Term</StyledTerm>. The term of this BAA shall be effective as of the Effective Date and
                shall terminate upon the earlier of (i) termination or expiration of the Service Agreement or (ii)
                termination of this BAA under Section 5 b or c below.
              </li>
              <li>
                <StyledTerm>Termination for Cause by Covered Entity</StyledTerm>. Notwithstanding any provision in the
                Service Agreement to the contrary, a breach by Business Associate of any provision of this BAA, as
                reasonably determined by Covered Entity, shall constitute a material breach of this BAA and the
                applicable Sections of any Service Agreement. Upon Covered Entity’s knowledge of a breach or violation
                of this BAA by Business Associate, Covered Entity shall provide notice to Business Associate thereof and
                require Business Associate to cure the breach or end the violation. If Business Associate does not cure
                the breach or end the violation within the reasonable period of time specified by Covered Entity in the
                notice, or if no cure or end of violation is possible, Covered Entity shall either (i) immediately
                terminate this BAA (and applicable Sections of any Service Agreement) upon written notice to Business
                Associate or (ii) if termination is not feasible, Covered Entity shall report the violation to the
                Secretary.
              </li>
              <li>
                <StyledTerm>Termination for Cause by Business Associate</StyledTerm>. Upon Business Associate’s
                knowledge of a pattern of activity or practice of Covered Entity that constitutes a material breach or
                violation of Covered Entity’s obligations under this BAA or other arrangement and provision of notice
                thereof to Covered Entity, Covered Entity must take reasonable steps to cure the breach or end the
                violation. If Covered Entity does not cure the breach or end the violation, Business Associate shall
                either (i) immediately terminate this BAA (and applicable Sections of any Service Agreement) upon
                written notice to Business Associate or (ii) if termination is not feasible, Business Associate shall
                report the violation to the Secretary.
              </li>
              <li>
                <StyledParagraph>Obligations Upon Termination.</StyledParagraph>
                <StyledRomanOrderedList>
                  <li>
                    Except as provided in subsection (ii) and (iii) below, upon termination of this BAA for any reason,
                    Business Associate shall return or destroy or cause to be returned or destroyed all Protected Health
                    Information in its possession or in the possession of Subcontractors or agents of Business
                    Associate. For clarity, Business Associate shall retain no copies of the Protected Health
                    Information subject to Section 5(d)(ii).
                  </li>
                  <li>
                    In the event that Business Associate determines that returning or destroying the Protected Health
                    Information is infeasible, Business Associate shall extend the protections of this BAA to such
                    Protected Health Information and limit further Uses and Disclosures of such Protected Health
                    Information to those purposes that make the return or destruction infeasible. The obligations of
                    this subsection (ii) only last as long as Business Associate maintains or retains any Protected
                    Health Information.
                  </li>
                  <li>
                    For the avoidance of doubt, Business Associate’s obligations to return and/or destroy the Protected
                    Health Information as set forth in Section a.i shall not apply to any Protected Health Information
                    which has been de-identified in accordance with the requirements of the HIPAA Rules, and Covered
                    Entity acknowledges and agrees that Business Associate shall be free to continue to use
                    de-identified data without restriction after the termination or expiration of this BAA.
                  </li>
                </StyledRomanOrderedList>
              </li>
              <li>
                <StyledTerm>Survival</StyledTerm>. Sections 5 and 6 of this BAA shall survive any termination of this
                BAA.
              </li>
            </StyledLatinOrderedList>
          </li>

          <li>
            <StyledHeader>MISCELLANEOUS</StyledHeader>
            <StyledLatinOrderedList>
              <li>
                <StyledTerm>Regulatory References</StyledTerm>A reference in this BAA to a section in the HIPAA Rules
                means the section in effect or as amended.
              </li>
              <li>
                <StyledTerm>Amendment</StyledTerm>. The Parties agree to take such action as is necessary to amend this
                BAA from time to time as is necessary for Covered Entity to comply with the requirements of the HIPAA
                Rules.
              </li>
              <li>
                <StyledTerm>Interpretation</StyledTerm>. Any ambiguity in this BAA shall be resolved in favor of a
                meaning that permits compliance with the HIPAA Rules.
              </li>
              <li>
                <StyledTerm>Complete Integration</StyledTerm>. This BAA, along with the applicable provisions in the
                Services Agreement, constitute the entire agreement between the Parties and supersedes all prior
                negotiations, discussions, representations or proposals, whether oral or written, unless expressly
                incorporated herein, related to the subject matter of this BAA. Unless expressly provided otherwise
                herein, this BAA may not be modified unless in writing signed by the duly authorized representatives of
                both Parties. If any provision or part thereof is found to be invalid, the remaining provisions shall
                remain in full force and effect.
              </li>
              <li>
                <StyledTerm>No Third Party Beneficiaries</StyledTerm>. Except as expressly provided for in the Privacy
                Rule, there are no third-party beneficiaries to this BAA. Business Associate’s obligations are to
                Covered Entity only.
              </li>
              <li>
                <StyledTerm>Successors and Assigns</StyledTerm>. Neither Party may assign, delegate or otherwise
                transfer, in whole or in part, by operation of law or otherwise, this BAA without the prior written
                consent of the non-assigning Party, which approval shall not be unreasonably withheld. Notwithstanding
                the preceding, Covered Entity or Business Associate may assign this BAA to a successor entity whether by
                merger, consolidation, sale of substantially all of its assets, license, operation of law or otherwise
                without the other Party’s consent. In the case of any permitted assignment or transfer, this BAA will
                inure to the benefit of and be binding upon the successors, executors, heirs, representatives,
                administrators and assigns of the Parties hereto. Any attempted assignment, delegation or transfer in
                violation of the foregoing will be null and void.
              </li>
              <li>
                <StyledParagraph>
                  <StyledTerm>Mediation</StyledTerm>. Any dispute, claim, or controversy between the Parties arising
                  under or related to this BAA or the breach, termination, enforcement, interpretation or validity
                  thereof, shall be resolved according to the laws of California and through the following procedures:
                </StyledParagraph>

                <StyledRomanOrderedList>
                  <li>
                    The Parties shall first attempt in good faith to resolve any dispute arising out of or relating to
                    this BAA promptly by negotiation between executives who have authority to settle the controversy and
                    who are at a higher level of management than the persons with direct responsibility for
                    administration of this BAA. Any Party may give the other Party written notice of any dispute not
                    resolved in the normal course of business. Within 15 days after delivery of such notice, the
                    receiving Party shall submit to the other Party a written response. The notice and response shall
                    include with reasonable particularity (A) a statement of each Party’s position and a summary of
                    arguments supporting that position, and (B) the name and title of the executive who will represent
                    that Party and of any other person who will accompany the executive. Within 30 days after delivery
                    of the notice, the executives of both Parties shall meet at a mutually acceptable time and place; if
                    no such place can be agreed upon, the Parties shall meet via video-conference.
                  </li>
                  <li>
                    The above-described negotiation shall end at the close of the second meeting of executives described
                    above. Such closure shall not preclude continuing or later negotiations, if desired.
                  </li>
                  <li>
                    All offers, promises, conduct and statements, whether oral or written, made in the course of the
                    negotiation by any of the Parties, their agents, employees, experts and attorneys are confidential,
                    privileged and inadmissible for any purpose, including impeachment, in arbitration or other
                    proceeding involving the Parties, provided that evidence that is otherwise admissible or
                    discoverable shall not be rendered inadmissible or non-discoverable as a result of its use in the
                    negotiation.
                  </li>
                  <li>
                    If the matter is not resolved by negotiation pursuant to the above paragraphs, only then will the
                    matter proceed to non-binding mediation as set forth in this subsection (ii).
                  </li>
                  <li>
                    The Parties agree that any and all disputes, claims or controversies arising out of or relating to
                    this BAA shall be submitted to JAMS or its successor for mediation. Either Party may commence
                    non-binding mediation by providing to JAMS and the other Party a written request for mediation,
                    setting forth the subject of the dispute and the relief requested.
                  </li>
                  <li>
                    The Parties will cooperate with JAMS and with one another in selecting a mediator from the JAMS
                    panel of neutrals and in scheduling the mediation proceedings. The Parties agree that they will
                    participate in the mediation in good faith and that they will share equally in its costs.
                  </li>
                  <li>
                    All offers, promises, conduct and statements, whether oral or written, made in the course of the
                    mediation by any of the Parties, their agents, employees, experts and attorneys, and by the mediator
                    or any JAMS employees, are confidential, privileged and inadmissible for any purpose, including
                    impeachment, in any arbitration or other proceeding involving the Parties, provided that evidence
                    that is otherwise admissible or discoverable shall not be rendered inadmissible or non-discoverable
                    as a result of its use in the mediation.
                  </li>
                  <li>
                    All applicable statutes of limitation and defenses based upon the passage of time shall be tolled
                    until 15 days after the earliest initiation date. The Parties will take such action, if any,
                    required to effectuate such tolling.
                  </li>
                  <li>
                    If the matter is not resolved by negotiation or non-binding mediation pursuant to the above
                    paragraphs, only then will the matter proceed to litigation.
                  </li>
                </StyledRomanOrderedList>
              </li>
            </StyledLatinOrderedList>
          </li>
        </StyledOrderedList>
        <StyledParagraph>
          <StyledTerm>Governing Law and Venue</StyledTerm>. This BAA and the rights of the Parties shall be governed by
          and construed in accordance with Federal law as it pertains to the subject matter and shall be governed by and
          construed in accordance with the laws of California as it pertains to contract formation and interpretation,
          without giving effect to its conflict of laws. The Parties agree that any appropriate state court sitting in
          San Mateo County, California or any Federal Court sitting in the United States District Court for the Northern
          District of California shall have exclusive jurisdiction of any case or controversy arising under or in
          connection with this BAA that is not subject to the procedures set forth in Section 6(g) above and shall be a
          proper forum in which to adjudicate such case or controversy. Each Party irrevocably consents to the
          jurisdiction of such courts, and irrevocably waives, to the fullest extent permitted by law, the defense of an
          inconvenient forum to the maintenance of such suit, action or proceeding in any such court and further waives
          the right to object, with respect to such suit, action or proceeding, that such court does not have
          jurisdiction over such Party.
        </StyledParagraph>
      </StyledContainer>
    </StyledPage>
  );
};

export { BusinessAssociateAgreement };

export default BusinessAssociateAgreement;
