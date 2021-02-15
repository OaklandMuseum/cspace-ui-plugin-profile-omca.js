const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Row,
    Cols,
    Col,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="acquisitionReferenceNumber" />
            <Field name="accessionDescription" subpath="ns2:acquisitions_omca" />
            <Field name="accessionDateGroup" />
            <Field name="acquisitionMethod" />

            <Field name="acquisitionSources">
              <Field name="acquisitionSource" />
            </Field>

            <Field name="acquisitionContactGroupList" subpath="ns2:acquisitions_omca">
              <Field name="acquisitionContactGroup">
                <Field name="contact" />
                <Field name="contactRole" />
              </Field>
            </Field>

            <Field name="sourceContactNote" subpath="ns2:acquisitions_omca" />
          </Col>

          <Col>
            <Field name="acquisitionReason" />
            <Field name="acquisitionNote" />
            <Field name="acquisitionProvisos" />

            <InputTable name="acquisitionAuthorizer">
              <Field name="acquisitionAuthorizer" />
              <Field name="acquisitionAuthorizerDate" />
            </InputTable>
          </Col>
        </Cols>

        <Row>
          <Field name="acquisitionFundingList">
            <Field name="acquisitionFunding">
              <Field name="acquisitionFundingCurrency" />
              <Field name="acquisitionFundingValue" />
              <Field name="acquisitionFundingSource" />
              <Field name="acquisitionFundingSourceProvisos" />
            </Field>
          </Field>
        </Row>

        <Row>
          <Field name="creditLine" />
          <Field name="anonymous" subpath="ns2:acquisitions_omca" />
        </Row>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
