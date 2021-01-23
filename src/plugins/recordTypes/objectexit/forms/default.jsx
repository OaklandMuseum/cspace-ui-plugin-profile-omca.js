const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Cols,
    Col,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="exitNumber" />
            <Field name="exitDateGroup" />
            <Field name="depositor" />
          </Col>

          <Col>
            <Field name="exitStatusGroupList" subpath="ns2:objectexit_omca">
              <Field name="exitStatusGroup">
                <Field name="exitStatus" />
                <Field name="exitStatusDate" />
              </Field>
            </Field>

            <Field name="exitMethods">
              <Field name="exitMethod" />
            </Field>

            <Field name="exitReason" />
          </Col>
        </Cols>

        <Field name="exitNote" />
      </Panel>

      {/* <Panel name="deaccessionDisposalInfo" collapsible collapsed>
        <Row>
          <Field name="displosalNewObjectNumber" />
          <Field name="deaccessionAuthorizer" />
          <Field name="authorizationDate" />
        </Row>

        <Field name="deacApprovalGroupList">
          <Field name="deacApprovalGroup">
            <Field name="deaccessionApprovalGroup" />
            <Field name="deaccessionApprovalIndividual" />
            <Field name="deaccessionApprovalStatus" />
            <Field name="deaccessionApprovalDate" />
            <Field name="deaccessionApprovalNote" />
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="deaccessionDate" />
            <Field name="disposalDate" />
            <Field name="disposalMethod" />
            <Field name="displosalReason" />
          </Col>

          <Col>
            <Field name="disposalProposedRecipient" />
            <Field name="disposalRecipient" />

            <InputTable name="disposal">
              <Field name="disposalCurrency" />
              <Field name="displosalValue" />
            </InputTable>

            <InputTable name="groupDisposal">
              <Field name="groupDisposalCurrency" />
              <Field name="groupDisplosalValue" />
            </InputTable>
          </Col>
        </Cols>

        <Field name="displosalProvisos" />
        <Field name="displosalNote" />
      </Panel> */}
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
