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
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="exhibitionNumber" />
            <Field name="projectNumber" subpath="ns2:exhibitions_omca" />
          </Col>

          <Col>
            <Field name="title" />
            <Field name="type" />
          </Col>
        </Cols>

        <Row>
          <Field name="venueGroupList">
            <Field name="venueGroup">
              <Field name="venue" />
              <Field name="venueOpeningDate" />
              <Field name="venueClosingDate" />
            </Field>
          </Field>
        </Row>

        <Row>
          <Field name="planningNote" />
          <Field name="generalNote" />
        </Row>

        <Field name="exhibitionReferenceGroupList">
          <Field name="exhibitionReferenceGroup">
            <Field name="exhibitionReference" />
            <Field name="exhibitionReferenceType" />
            <Field name="exhibitionReferenceNote" />
          </Field>
        </Field>
      </Panel>

      <Panel name="planningInfo" collapsible collapsed>
        <Field name="exhibitionSectionOMCAGroupList" subpath="ns2:exhibitions_omca">
          <Field name="exhibitionSectionOMCAGroup">
            <Field name="exhibitionSectionNameOMCA" />
            <Field name="exhibitionSubsectionNameOMCA" />
            <Field name="exhibitionSectionLocationOMCA" />
            <Field name="exhibitionSectionObjectsOMCA" />
            <Field name="exhibitionSectionNoteOMCA" />
          </Field>
        </Field>

        <Field name="exhibitionStatusGroupList">
          <Field name="exhibitionStatusGroup">
            <Field name="exhibitionStatus" />
            <Field name="exhibitionStatusDate" />
            <Field name="exhibitionStatusNote" />
          </Field>
        </Field>
      </Panel>

      <Panel name="exhibitedObjectInformation" collapsible collapsed>
        <Field name="exhibitionObjectOMCAGroupList" subpath="ns2:exhibitions_omca">
          <Field name="exhibitionObjectOMCAGroup">
            <Field name="exhibitionObjectNumberOMCA" />
            <Field name="exhibitionObjectNameOMCA" />
            <Field name="exhibitionObjectConsCheckDateOMCA" />
            <Field name="exhibitionObjectConsTreatmentOMCA" />
            <Field name="exhibitionDisplayAsGraphicOMCA" />
            <Field name="exhibitionObjectMountOMCA" />
            <Field name="exhibitionObjectSectionOMCA" />
            <Field name="exhibitionObjectCaseOMCA" />
            <Field name="exhibitionObjectSeqNumOMCA" />
            <Field name="exhibitionObjectRotationOMCA" />
            <Field name="exhibitionObjectNoteOMCA" />
            <Field name="exhibitionCrateExistsOMCA" />
          </Field>
        </Field>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
