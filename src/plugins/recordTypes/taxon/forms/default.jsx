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
        <Field name="taxonTermGroupList">
          <Field name="taxonTermGroup">
            <Panel>
              <Row>
                <Field name="termDisplayName" />
                <Field name="termFormattedDisplayName" />
              </Row>

              <Row>
                <Field name="termQualifier" />
                <Field name="termStatus" />
                <Field name="termType" />
                <Field name="termFlag" />
              </Row>

              <Row>
                <Field name="taxonomicStatus" />
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

        <Row>
          <Field name="taxonRank" />
          <Field name="taxonCurrency" />
        </Row>

        <Field name="taxonAuthorGroupList">
          <Field name="taxonAuthorGroup">
            <Field name="taxonAuthor" />
            <Field name="taxonAuthorType" />
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="taxonYear" />
            <Field name="taxonIsNamedHybrid" />
          </Col>

          <Col>
            <Field name="taxonCitationList">
              <Field name="taxonCitation" />
            </Field>
          </Col>
        </Cols>

        <Field name="taxonNote" />

        <Field name="commonNameGroupList">
          <Field name="commonNameGroup">
            <Field name="commonName" />
            <Field name="commonNameLanguage" />
            <Field name="commonNameSource" />
            <Field name="commonNameSourceDetail" />
          </Field>
        </Field>

        <Row>
          <Field name="legacyArgusNotes" subpath="ns2:taxon_omca" />

          <Col>
            <Field name="legacyParents" subpath="ns2:taxon_omca" />
            <Field name="legacySeeAlso" subpath="ns2:taxon_omca" />
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
