import { defineMessages } from 'react-intl';

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
        <Row>
          <Field name="claimNumber" />
          <Col />
        </Row>

        <Field name="claimClaimantOMCAGroupList" subpath="ns2:claims_omca">
          <Field name="claimClaimantOMCAGroup">
            <Field name="filedByOMCA" />
            <Field name="filedOnBehalfOfOMCA" />
            <Field name="federallyRecognizedOMCA" />
            <Field name="claimantNoteOMCA" />
          </Field>
        </Field>

        <Row>
          <Field name="transactionType" subpath="ns2:claims_omca" />
          <Col />
        </Row>

        <Field name="requestsGroupList" subpath="ns2:claims_omca">
          <Field name="requestsGroup">
            <Field name="detailsOfRequest" />
            <Field name="dateOfRequest" />
            <Field name="dateFulfilled" />
          </Field>
        </Field>

        <Field name="notesOnRequest" subpath="ns2:claims_omca">
          <Field name="noteOnRequest" />
        </Field>

        <Cols>
          <Col>
            <Field name="claimNumberOMCA" subpath="ns2:claims_omca" />

            <Field name="altClaimNamesGroupList">
              <Field name="altClaimNamesGroup">
                <Field name="altClaimName" />
                <Field name="altClaimNote" />
              </Field>
            </Field>

            <Field name="claimTypes">
              <Field name="claimType" />
            </Field>
          </Col>

          <Col>
            <Field name="claimName" />

            <Field name="claimFiledDatesGroupList">
              <Field name="claimFiledDatesGroup">
                <Field name="claimFiledDate" />
                <Field name="claimFiledNote" />
              </Field>
            </Field>
          </Col>
        </Cols>

        <Field name="claimNotes">
          <Field name="claimNote" />
        </Field>
      </Panel>

      <Panel name="context" collapsible collapsed>
        <Row>
          <Col>
            <Field name="sitesInvolvedGroupList">
              <Field name="sitesInvolvedGroup">
                <Field name="siteOrPlaceName" />
                <Field name="siteOrPlaceNote" />
              </Field>
            </Field>
          </Col>

          <Col>
            <Field name="culturalGroupsInvolvedGroupList">
              <Field name="culturalGroupsInvolvedGroup">
                <Field name="culturalGroupName" />
                <Field name="culturalGroupNote" />
              </Field>
            </Field>
          </Col>
        </Row>
      </Panel>

      <Panel name="processing" collapsible collapsed>
        <Row>
          <Col>
            <Field name="initialResponseDatesGroupList">
              <Field name="initialResponseDatesGroup">
                <Field name="initialResponseDate" />
                <Field name="initialResponseDateNote" />
              </Field>
            </Field>

            <Field name="sentNAGPRACommitteeDatesGroupList">
              <Field name="sentNAGPRACommitteeDatesGroup">
                <Field name="sentNAGPRACommitteeDate" />
                <Field name="sentNAGPRACommitteeNote" />
              </Field>
            </Field>

            <Field name="recommendationsNAGPRACommitteeGroupList">
              <Field name="recommendationsNAGPRACommitteeGroup">
                <Field name="recommendationNAGPRACommitteeDate" />
                <Field name="recommendationNAGPRACommitteeNote" />
              </Field>
            </Field>

            <Field name="deaccessionResearchCompleteGroupList" subpath="ns2:claims_omca">
              <Field name="deaccessionResearchCompleteGroup">
                <Field name="deaccessionResearchCompleteDate" />
                <Field name="deaccessionResearchCompleteNote" />
              </Field>
            </Field>

            <Field name="sentCollectionsCommitteeGroupList" subpath="ns2:claims_omca">
              <Field name="sentCollectionsCommitteeGroup">
                <Field name="sentCollectionsCommitteeDate" />
                <Field name="sentCollectionsCommitteeNote" />
              </Field>
            </Field>

            <Field name="recommendationCollectionsCommitteeGroupList" subpath="ns2:claims_omca">
              <Field name="recommendationCollectionsCommitteeGroup">
                <Field name="recommendationCollectionsCommitteeDate" />
                <Field name="recommendationCollectionsCommitteeRecommendation" />
              </Field>
            </Field>

            <Field name="sentExecutiveTeamGroupList" subpath="ns2:claims_omca">
              <Field name="sentExecutiveTeamGroup">
                <Field name="sentExecutiveTeamDate" />
                <Field name="sentExecutiveTeamNote" />
              </Field>
            </Field>

            <Field name="recommendationExecutiveTeamGroupList" subpath="ns2:claims_omca">
              <Field name="recommendationExecutiveTeamGroup">
                <Field name="recommendationExecutiveTeamDate" />
                <Field name="recommendationExecutiveTeamRecommendation" />
              </Field>
            </Field>
          </Col>

          <Col>
            <Field name="sentOMCABoardGroupList" subpath="ns2:claims_omca">
              <Field name="sentOMCABoardGroup">
                <Field name="sentOMCABoardDate" />
                <Field name="sentOMCABoardNote" />
              </Field>
            </Field>

            <Field name="recommendationOMCABoardGroupList" subpath="ns2:claims_omca">
              <Field name="recommendationOMCABoardGroup">
                <Field name="recommendationOMCABoardDate" />
                <Field name="recommendationOMCABoardRecommendation" />
              </Field>
            </Field>

            <Field name="sentNationalNAGPRADatesGroupList">
              <Field name="sentNationalNAGPRADatesGroup">
                <Field name="sentNationalNAGPRADate" />
                <Field name="sentNationalNAGPRANote" />
              </Field>
            </Field>

            <Field name="responsesNationalNAGPRAGroupList">
              <Field name="responsesNationalNAGPRAGroup">
                <Field name="responseNationalNAGPRADate" />
                <Field name="responseNationalNAGPRANote" />
              </Field>
            </Field>

            <Field name="publicationsNationalNAGPRAGroupList">
              <Field name="publicationsNationalNAGPRAGroup">
                <Field name="publicationNationalNAGPRADate" />
                <Field name="publicationNationalNAGPRANote" />
              </Field>
            </Field>

            <Field name="nationalNAGPRA30DayNoticesGroupList">
              <Field name="nationalNAGPRA30DayNoticesGroup">
                <Field name="nationalNAGPRA30DayNoticeDate" />
                <Field name="nationalNAGPRA30DayNoticeType" />
                <Field name="nationalNAGPRA30DayNoticeNote" />
              </Field>
            </Field>

            <Field name="claimantNotifiedClaimStatusGroupList" subpath="ns2:claims_omca">
              <Field name="claimantNotifiedClaimStatusGroup">
                <Field name="claimantNotifiedClaimStatusDate" />
                <Field name="claimantNotifiedClaimStatusNote" />
              </Field>
            </Field>

            <Field name="transferDatesGroupList">
              <Field name="transferDatesGroup">
                <Field name="transferDate" />
                <Field name="transferNote" />
              </Field>
            </Field>
          </Col>
        </Row>

        <Field name="claimProcessNotes" subpath="ns2:claims_omca">
          <Field name="claimProcessNote" />
        </Field>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  messages: defineMessages({
    name: {
      id: 'form.claim.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(configContext),
});
