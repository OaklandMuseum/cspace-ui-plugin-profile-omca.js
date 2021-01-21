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
      <Panel name="info" collapsible>
        <Field name="conceptTermGroupList">
          <Field name="conceptTermGroup">
            <Panel>
              <Row>
                <Field name="termDisplayName" />
                <Field name="termName" />
                <Field name="termQualifier" />
                <Field name="termStatus" />
              </Row>

              <Row>
                <Field name="termType" />
                <Field name="termFlag" />
                <Field name="historicalStatus" />
                <Field name="termLanguage" />
                <Field name="termPrefForLang" />
              </Row>

              <InputTable name="termSource">
                <Field name="termSource" />
                <Field name="termSourceDetail" />
                <Field name="termSourceID" />
                <Field name="termSourceNote" />
              </InputTable>
            </Panel>
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="conceptRecordTypes">
              <Field name="conceptRecordType" />
            </Field>
          </Col>

          <Col />
        </Cols>

        <InputTable name="scopeNote">
          <Field name="scopeNote" />
          <Field name="scopeNoteSource" />
          <Field name="scopeNoteSourceDetail" />
        </InputTable>

        <Field name="citationGroupList">
          <Field name="citationGroup">
            <Field name="citationSource" />
            <Field name="citationSourceDetail" />
          </Field>
        </Field>

        <Row>
          <Field name="legacyArgusNotes" subpath="ns2:concepts_omca" />

          <Col>
            <Field name="legacyParents" subpath="ns2:concepts_omca" />
            <Field name="legacySeeAlso" subpath="ns2:concepts_omca" />
          </Col>
        </Row>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
