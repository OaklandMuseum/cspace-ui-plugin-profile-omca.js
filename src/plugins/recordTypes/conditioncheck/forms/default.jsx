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
      <Panel name="conditionCheckAndTechAssessmentInfo" collapsible>
        <Row>
          <Field name="conditionCheckRefNumber" />
          <Field name="conditionChecker" />
        </Row>

        <Field name="assessmentRequestGroupList" subpath="ns2:conditionchecks_omca">
          <Field name="assessmentRequestGroup">
            <Field name="assessmentRequestedBy" />
            <Field name="assessmentRequestRole" />
            <Field name="assessmentRequestDateRequested" />
            <Field name="assessmentRequestDateRequired" />
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="conditionCheckReason" />

            <Field name="omcaConditionCheckMethods" subpath="ns2:conditionchecks_omca">
              <Field name="omcaConditionCheckMethod" />
            </Field>
          </Col>

          <Col>
            <InputTable name="condition">
              <Field name="condition" subpath="ns2:conditionchecks_omca" />
              <Field name="conditionDate" subpath="ns2:conditionchecks_omca" />
              <Field name="conditionNote" subpath="ns2:conditionchecks_omca" />
            </InputTable>

            <Field name="envConditionNoteGroupList">
              <Field name="envConditionNoteGroup">
                <Field name="envConditionNote" />
                <Field name="envConditionNoteDate" />
              </Field>
            </Field>
          </Col>
        </Cols>

        <Field name="conditionCheckNote" />
      </Panel>

      <Panel name="objectRequirementInfo" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="okForExhibitLoanAccession" subpath="ns2:conditionchecks_omca" />
            <Field name="needsTreatment" subpath="ns2:conditionchecks_omca" />
            <Field name="displayRecommendations" />
            <Field name="handlingRecommendations" />
            <Field name="packingRecommendations" />
          </Col>

          <Col>
            <Field name="tempRequirement" subpath="ns2:conditionchecks_omca" />
            <Field name="humidityRequirement" subpath="ns2:conditionchecks_omca" />
            <Field name="lightRequirement" subpath="ns2:conditionchecks_omca" />
            <Field name="storageRequirements" />

            <Field name="hazardGroupList">
              <Field name="hazardGroup">
                <Field name="hazard" />
                <Field name="hazardDate" />
                <Field name="hazardNote" />
              </Field>
            </Field>
          </Col>
        </Cols>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
