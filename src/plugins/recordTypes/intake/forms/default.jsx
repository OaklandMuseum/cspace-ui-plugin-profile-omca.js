const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="objectEntryInfo" collapsible>
        <Cols>
          <Col>
            <Field name="entryNumber" />
            <Field name="entryDate" />
            <Field name="entryReason" />

            <Field name="entryMethods">
              <Field name="entryMethod" />
            </Field>
          </Col>

          <Col>
            <Field name="returnDate" />

            <Field name="currentOwners">
              <Field name="currentOwner" />
            </Field>

            <Field name="depositorOMCAGroupList" subpath="ns2:intakes_omca">
              <Field name="depositorOMCAGroup">
                <Field name="depositorOMCA" />
                <Field name="depositorsRequirementsOMCA" />
              </Field>
            </Field>
          </Col>
        </Cols>

        <Field name="approvalGroupList">
          <Field name="approvalGroup">
            <Field name="approvalGroup" />
            <Field name="approvalIndividual" />
            <Field name="approvalStatus" />
            <Field name="approvalDate" />
            <Field name="approvalNote" />
          </Field>
        </Field>

        <Field name="entryNote" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
