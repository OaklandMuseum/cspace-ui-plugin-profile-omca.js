const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Row>
          <Field name="loanOutNumber" />
          <Field name="loanPurpose" />
        </Row>

        <Field name="loanStatusGroupList">
          <Field name="loanStatusGroup">
            {/* <Field name="loanGroup" /> */}
            {/* <Field name="loanIndividual" /> */}
            <Field name="loanStatus" />
            <Field name="loanStatusDate" />
            <Field name="loanStatusNote" />
          </Field>
        </Field>

        <InputTable name="borrower">
          <Field name="borrower" />
          <Field name="borrowersContact" />
          <Field name="borrowersAuthorizer" />
          <Field name="borrowersAuthorizationDate" />
        </InputTable>

        <Field name="loanoutExhibitionTitle" subpath="ns2:loansout_omca" />

        <Field name="loanoutVenuesGroupList" subpath="ns2:loansout_omca">
          <Field name="loanoutVenuesGroup">
            <Field name="loanoutVenue" />
            <Field name="loanoutVenueOpeningDate" />
            <Field name="loanoutVenueClosingDate" />
          </Field>
        </Field>

        <Row>
          <Field name="loanoutFeesGroupList" subpath="ns2:loansout_omca">
            <Field name="loanoutFeesGroup">
              <Field name="loanoutFeesCurrency" />
              <Field name="loanoutFeesAmount" />
              <Field name="loanoutFeesDatePaid" />
            </Field>
          </Field>

          <Field name="loanoutCourierInfo" subpath="ns2:loansout_omca" />
        </Row>

        <InputTable name="lender">
          <Field name="lendersAuthorizer" />
          <Field name="lendersContact" />
          <Field name="lendersAuthorizationDate" />
        </InputTable>

        <Row>
          <Field name="specialConditionsOfLoan" />
          <Field name="loanOutNote" />
        </Row>

        <Row>
          <Field name="loanOutDate" />
          <Field name="loanReturnDate" />
          <Field name="loanRenewalApplicationDate" />
        </Row>
      </Panel>

      <Panel name="insurance">
        <Row>
          <Col>
            <Field name="loanoutInsuranceInsurers" subpath="ns2:loansout_omca">
              <Field name="loanoutInsuranceInsurer" />
            </Field>

            <Field name="loanoutInsurancePolicyNumber" subpath="ns2:loansout_omca" />
            <Field name="loanoutInsuranceRenewalDate" subpath="ns2:loansout_omca" />
          </Col>

          <Col>
            <Field name="loanoutInsuranceReferenceNumber" subpath="ns2:loansout_omca" />
            <Field name="loanoutInsuranceNote" subpath="ns2:loansout_omca" />
          </Col>
        </Row>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
