export default (configContext) => {
  const {
    layoutComponents,
    lib,
    recordComponents,
  } = configContext;

  const {
    React,
  } = lib;

  const {
    Panel,
    Row,
  } = layoutComponents;

  const {
    Field,
  } = recordComponents;

  return (
    <Field name="measuredPartGroupList">
      <Field name="measuredPartGroup">
        <Panel>
          <Row>
            <Field name="measuredPart" />
            <Field name="dimensionSummary" />
          </Row>

          <Field name="dimensionSubGroupList">
            <Field name="dimensionSubGroup">
              <Field name="dimension" />
              <Field name="measurementMethod" />
              <Field name="value" />
              <Field name="measurementUnit" />
              <Field name="valueQualifier" />
              <Field name="valueDate" />
            </Field>
          </Field>
        </Panel>
      </Field>
    </Field>
  );
};
