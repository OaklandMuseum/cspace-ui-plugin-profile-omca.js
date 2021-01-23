const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="location" collapsible>
        <Row>
          <Field name="movementReferenceNumber" />
          <Col />
        </Row>

        <InputTable name="currentLocation">
          <Field name="currentLocation" />
          <Field name="currentLocationFitness" />
          <Field name="currentLocationNote" />
        </InputTable>

        <Row>
          <Field name="locationDate" />
          <Field name="reasonForMove" />
          <Field name="movementContact" />
        </Row>
      </Panel>

      <Panel name="inventory" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="inventoryDate" />

            <Field name="inventoryContactList">
              <Field name="inventoryContact" />
            </Field>
          </Col>

          <Col>
            <Field name="inventoryActionRequired" />
            <Field name="inventoryNote" />
          </Col>
        </Cols>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
