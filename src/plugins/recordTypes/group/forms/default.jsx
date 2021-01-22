const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Field name="title" />

        <Row>
          <Field name="owner" />

          <Row>
            <Field name="groupEarliestSingleDate" />
            <Field name="groupLatestDate" />
          </Row>
        </Row>

        <Field name="scopeNote" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
