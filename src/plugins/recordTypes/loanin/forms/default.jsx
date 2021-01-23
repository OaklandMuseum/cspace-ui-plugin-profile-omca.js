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
          <Field name="loanInNumber" />
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

        <Field name="lenderGroupList">
          <Field name="lenderGroup">
            <Field name="lender" />
            <Field name="lendersContact" />
            <Field name="lendersAuthorizer" />
            <Field name="lendersAuthorizationDate" />
          </Field>
        </Field>

        <Row>
          <Col>
            <Field name="creditLine" subpath="ns2:loansin_omca" />

            <Field name="loaninFeesGroupList" subpath="ns2:loansin_omca">
              <Field name="loaninFeesGroup">
                <Field name="loaninFeesCurrency" />
                <Field name="loaninFeesAmount" />
                <Field name="loaninFeesDatePaid" />
              </Field>
            </Field>

            <Row>
              <Field name="anonymous" subpath="ns2:loansin_omca" />
              <Field name="loaninCourierInfo" subpath="ns2:loansin_omca" />
            </Row>
          </Col>

          <Field name="lenderNote" subpath="ns2:loansin_omca" />
        </Row>

        <InputTable name="borrower">
          <Field name="borrowersContact" />
          <Field name="borrowersAuthorizer" />
          <Field name="borrowersAuthorizationDate" />
        </InputTable>

        <Row>
          <Field name="loanInConditions" />
          <Field name="loanInNote" />
        </Row>

        <Row>
          <Field name="loanInDate" />
          <Field name="loanReturnDate" />
          <Field name="loanRenewalApplicationDate" />
        </Row>
      </Panel>

      <Panel name="insurance">
        <Row>
          <Col>
            <Field name="loaninInsuranceInsurers" subpath="ns2:loansin_omca">
              <Field name="loaninInsuranceInsurer" />
            </Field>

            <Field name="loaninInsurancePolicyNumber" subpath="ns2:loansin_omca" />
            <Field name="loaninInsuranceRenewalDate" subpath="ns2:loansin_omca" />
          </Col>

          <Col>
            <Field name="loaninInsuranceReferenceNumber" subpath="ns2:loansin_omca" />
            <Field name="loaninInsuranceNote" subpath="ns2:loansin_omca" />
          </Col>
        </Row>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
