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

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="id" collapsible>
        <Row>
          <Field name="objectNumber" />
          <Col />
        </Row>

        <Field name="objectNameList">
          <Field name="objectNameGroup">
            <Field name="objectName" />
            <Field name="objectNameNote" />
          </Field>
        </Field>

        <Field name="titleGroupList">
          <Field name="titleGroup">
            <Panel>
              <Row>
                <Col>
                  <Field name="title" />
                  <Field name="titleLanguage" />
                </Col>

                <Col>
                  <Field name="titleType" />

                  <Field name="titleTranslationSubGroupList">
                    <Field name="titleTranslationSubGroup">
                      <Field name="titleTranslation" />
                      <Field name="titleTranslationLanguage" />
                    </Field>
                  </Field>
                </Col>
              </Row>
            </Panel>
          </Field>
        </Field>

        <Row>
          <Col>
            <Row>
              <Field name="numberOfObjects" />
              <Field name="argusCount" subpath="ns2:collectionobjects_omca" />
            </Row>

            <Field name="otherNumberList">
              <Field name="otherNumber">
                <Field name="numberValue" />
                <Field name="numberType" />
              </Field>
            </Field>

            <Row>
              <Field name="collection" />

              {/* <Col>
                <Field name="namedCollections">
                  <Field name="namedCollection" />
                </Field>
              </Col> */}
            </Row>

            <Row>
              <Field name="art" subpath="ns2:collectionobjects_omca" />
              <Field name="history" subpath="ns2:collectionobjects_omca" />
              <Field name="science" subpath="ns2:collectionobjects_omca" />
            </Row>

            <Field name="ipAudit" subpath="ns2:collectionobjects_omca" />
            <Field name="copyrightHolder" subpath="ns2:collectionobjects_omca" />
            <Field name="recordStatus" />

            {/* <Field name="publishToList">
              <Field name="publishTo" />
            </Field> */}

            {/* <Field name="inventoryStatusList">
              <Field name="inventoryStatus" />
            </Field> */}
          </Col>

          <Col>
            <Field name="briefDescriptions">
              <Field name="briefDescription" />
            </Field>

            <Field name="distinguishingFeatures" />

            <Field name="comments">
              <Field name="comment" />
            </Field>

            <Row>
              <Field name="photos" subpath="ns2:collectionobjects_omca">
                <Field name="photo" />
              </Field>

              <Field name="doNotPublishOnWeb" subpath="ns2:collectionobjects_omca" />
            </Row>
          </Col>
        </Row>

        <Field name="determinationHistoryGroupList" subpath="ns2:collectionobjects_omca">
          <Field name="determinationHistoryGroup">
            <Panel>
              <InputTable name="taxonName">
                <Field name="dhName" />
                <Field name="dhQualifier" />
              </InputTable>

              <InputTable name="taxonIdent">
                <Field name="identBy" />
                <Field name="identDate" />
                <Field name="institution" />
              </InputTable>

              <Cols>
                <Col>
                  <Field name="identKind" />

                  <InputTable name="taxonReference">
                    <Field name="dhReference" />
                    <Field name="dhPage" />
                  </InputTable>
                </Col>

                <Field name="dhNotes" />
              </Cols>
            </Panel>
          </Field>
        </Field>

        <Row>
          <Field name="responsibleDepartments">
            <Field name="responsibleDepartment" />
          </Field>

          <Field name="computedCurrentLocation" />
        </Row>
      </Panel>

      <Panel name="desc" collapsible collapsed>
        <Row>
          <Col>
            <Field name="editionNumber" />

            <Field name="styles">
              <Field name="style" />
            </Field>

            <Field name="colors">
              <Field name="color" />
            </Field>

            <Field name="argusDescription" subpath="ns2:collectionobjects_omca" />

            <Field name="materialGroupList">
              <Field name="materialGroup">
                <Field name="material" />
                <Field name="materialComponent" />
              </Field>
            </Field>

            {/* <Field name="copyNumber" /> */}

            {/* <Field name="objectStatusList">
              <Field name="objectStatus" />
            </Field> */}
          </Col>

          <Col>
            <Field name="sex" />
            <Field name="phase" />

            <Field name="forms">
              <Field name="form" />
            </Field>

            <Field name="accessory" subpath="ns2:collectionobjects_omca" />

            <Field name="objectComponentGroupList">
              <Field name="objectComponentGroup">
                <Field name="objectComponentName" />
                <Field name="objectComponentInformation" />
              </Field>
            </Field>

            {/* <InputTable name="age">
              <Field name="ageQualifier" />
              <Field name="age" />
              <Field name="ageUnit" />
            </InputTable> */}

            {/* <Field name="technicalAttributeGroupList">
              <Field name="technicalAttributeGroup">
                <Field name="technicalAttribute" />
                <Field name="technicalAttributeMeasurement" />
                <Field name="technicalAttributeMeasurementUnit" />
              </Field>
            </Field> */}
          </Col>
        </Row>

        <Field name="physicalDescription" />
        <Field name="argusRemarks" subpath="ns2:collectionobjects_omca" />

        {extensions.dimension.form}

        <Panel name="content" collapsible collapsed>
          <Field name="contentDescription" />

          <Row>
            <Col>
              <Field name="contentLanguages">
                <Field name="contentLanguage" />
              </Field>

              {/* <Field name="contentActivities">
                <Field name="contentActivity" />
              </Field> */}

              <Field name="contentConcepts">
                <Field name="contentConcept" />
              </Field>

              {/* <Field name="contentDateGroup" /> */}

              {/* <Field name="contentPositions">
                <Field name="contentPosition" />
              </Field> */}

              {/* <Field name="contentObjectGroupList">
                <Field name="contentObjectGroup">
                  <Field name="contentObject" />
                  <Field name="contentObjectType" />
                </Field>
              </Field> */}

              <Field name="contentPlaces">
                <Field name="contentPlace" />
              </Field>
            </Col>

            <Col>
              {/* <Field name="contentPeoples">
                <Field name="contentPeople" />
              </Field> */}

              <Field name="contentPersons">
                <Field name="contentPerson" />
              </Field>

              {/* <Field name="contentScripts">
                <Field name="contentScript" />
              </Field> */}

              <Field name="contentOrganizations">
                <Field name="contentOrganization" />
              </Field>

              <Field name="argusSubject" subpath="ns2:collectionobjects_omca" />

              {/* <Field name="contentEventNameGroupList">
                <Field name="contentEventNameGroup">
                  <Field name="contentEventName" />
                  <Field name="contentEventNameType" />
                </Field>
              </Field> */}

              {/* <Field name="contentOtherGroupList">
                <Field name="contentOtherGroup">
                  <Field name="contentOther" />
                  <Field name="contentOtherType" />
                </Field>
              </Field> */}
            </Col>
          </Row>

          <Field name="contentNote" />
          <Field name="signatureOMCA" subpath="ns2:collectionobjects_omca" />
          <Field name="inscriptionOMCA" subpath="ns2:collectionobjects_omca" />
        </Panel>
      </Panel>

      <Panel name="prod" collapsible collapsed>
        <Row>
          <Col>
            <Field name="objectProductionDateGroupList">
              <Field name="objectProductionDateGroup" />
            </Field>

            <Field name="techniqueGroupList">
              <Field name="techniqueGroup">
                <Field name="technique" />
                <Field name="techniqueType" />
              </Field>
            </Field>

            <Field name="objectProductionPlaceGroupList">
              <Field name="objectProductionPlaceGroup">
                <Field name="objectProductionPlace" />
                <Field name="objectProductionPlaceRole" />
              </Field>
            </Field>

            <Field name="argusMade" subpath="ns2:collectionobjects_omca" />

            {/* <Field name="objectProductionReasons">
              <Field name="objectProductionReason" />
            </Field> */}
          </Col>

          <Col>
            {/* <Field name="objectProductionPeopleGroupList">
              <Field name="objectProductionPeopleGroup">
                <Field name="objectProductionPeople" />
                <Field name="objectProductionPeopleRole" />
              </Field>
            </Field> */}

            <Field name="objectProductionPersonGroupList">
              <Field name="objectProductionPersonGroup">
                <Field name="objectProductionPerson" />
                <Field name="objectProductionPersonRole" />
              </Field>
            </Field>

            <Field name="objectProductionOrganizationGroupList">
              <Field name="objectProductionOrganizationGroup">
                <Field name="objectProductionOrganization" />
                <Field name="objectProductionOrganizationRole" />
              </Field>
            </Field>

            <Field name="objectProductionNote" />
          </Col>
        </Row>
      </Panel>

      <Panel name="hist" collapsible collapsed>
        <Panel name="assoc" collapsible collapsed>
          <Row>
            <Col>
              {/* <Field name="assocActivityGroupList">
                <Field name="assocActivityGroup">
                  <Field name="assocActivity" />
                  <Field name="assocActivityType" />
                  <Field name="assocActivityNote" />
                </Field>
              </Field> */}

              <Field name="assocObjectGroupList">
                <Field name="assocObjectGroup">
                  <Field name="assocObject" />
                  <Field name="assocObjectType" />
                  <Field name="assocObjectNote" />
                </Field>
              </Field>

              <Field name="assocConceptGroupList">
                <Field name="assocConceptGroup">
                  <Field name="assocConcept" />
                  <Field name="assocConceptType" />
                  <Field name="assocConceptNote" />
                </Field>
              </Field>

              <Field name="assocCulturalContextGroupList">
                <Field name="assocCulturalContextGroup">
                  <Field name="assocCulturalContext" />
                  <Field name="assocCulturalContextType" />
                  <Field name="assocCulturalContextNote" />
                </Field>
              </Field>

              <Field name="assocOrganizationGroupList">
                <Field name="assocOrganizationGroup">
                  <Field name="assocOrganization" />
                  <Field name="assocOrganizationType" />
                  <Field name="assocOrganizationNote" />
                </Field>
              </Field>

              {/* <Field name="assocPeopleGroupList">
                <Field name="assocPeopleGroup">
                  <Field name="assocPeople" />
                  <Field name="assocPeopleType" />
                  <Field name="assocPeopleNote" />
                </Field>
              </Field> */}
            </Col>

            <Col>
              <Field name="assocPersonGroupList">
                <Field name="assocPersonGroup">
                  <Field name="assocPerson" />
                  <Field name="assocPersonType" />
                  <Field name="assocPersonNote" />
                </Field>
              </Field>

              <Field name="assocPlaceGroupList">
                <Field name="assocPlaceGroup">
                  <Field name="assocPlace" />
                  <Field name="assocPlaceType" />
                  <Field name="assocPlaceNote" />
                </Field>
              </Field>

              {/* <InputTable name="assocEvent">
                <Field name="assocEventName" />
                <Field name="assocEventNameType" />
              </InputTable>

              <Field name="assocEventOrganizations">
                <Field name="assocEventOrganization" />
              </Field>

              <Field name="assocEventPeoples">
                <Field name="assocEventPeople" />
              </Field>

              <Field name="assocEventPersons">
                <Field name="assocEventPerson" />
              </Field>

              <Field name="assocEventPlaces">
                <Field name="assocEventPlace" />
              </Field>

              <Field name="assocEventNote" /> */}

              <Field name="assocDateGroupList">
                <Field name="assocDateGroup">
                  <Field name="assocStructuredDateGroup" />
                  <Field name="assocDateType" />
                  <Field name="assocDateNote" />
                </Field>
              </Field>
            </Col>
          </Row>
        </Panel>

        <Field name="argusFoundAndUsed" subpath="ns2:collectionobjects_omca" />
        <Field name="objectHistoryNote" />

        <Field name="exhibitionHistories" subpath="ns2:collectionobjects_omca">
          <Field name="exhibitionHistory" />
        </Field>

        {/* <Field name="usageGroupList">
          <Field name="usageGroup">
            <Field name="usage" />
            <Field name="usageNote" />
          </Field>
        </Field> */}

        {/* <Row>
          <Col>
            <Field name="owners">
              <Field name="owner" />
            </Field>

            <Field name="ownershipDateGroupList">
              <Field name="ownershipDateGroup" />
            </Field>
          </Col>

          <Col>
            <Row>
              <Field name="ownershipAccess" />
              <Field name="ownershipCategory" />
            </Row>

            <Field name="ownershipPlace" />
          </Col>
        </Row> */}

        {/* <InputTable name="ownershipExchange">
          <Field name="ownershipExchangeMethod" />
          <Field name="ownershipExchangeNote" />
          <Field name="ownershipExchangePriceCurrency" />
          <Field name="ownershipExchangePriceValue" />
        </InputTable> */}

        <Field name="previousOwnersGroupList" subpath="ns2:collectionobjects_omca">
          <Field name="previousOwnersGroup">
            <Field name="previousOwner" />
            <Field name="provenanceInformation" />
          </Field>
        </Field>
      </Panel>

      <Panel name="nagpraCompliance" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="nagpraInventoryNameList" subpath="ns2:collectionobjects_anthropology">
              <Field name="nagpraInventoryName" />
            </Field>

            <Field name="nagpraApplicabilityList" subpath="ns2:collectionobjects_anthropology">
              <Field name="nagpraApplicability" />
            </Field>

            <Field name="repatriationNoteList" subpath="ns2:collectionobjects_anthropology">
              <Field name="repatriationNote" />
            </Field>
          </Col>

          <Col>
            <Field name="nagpraCulturalDeterminationList" subpath="ns2:collectionobjects_anthropology">
              <Field name="nagpraCulturalDetermination" />
            </Field>
          </Col>
        </Cols>
      </Panel>

      <Panel name="culturalCare" collapsible collapsed>
        <Field name="culturalCareNoteList" subpath="ns2:collectionobjects_anthropology">
          <Field name="culturalCareNote" />
        </Field>

        <Field name="accessRestrictionGroupList" subpath="ns2:collectionobjects_anthropology">
          <Field name="accessRestrictionGroup">
            <Field name="accessRestrictionType" />
            <Field name="accessRestrictionLevel" />
            <Field name="accessRestrictionDetails" />
            <Field name="accessRestrictionRequestor" />
            <Field name="accessRestrictionOnBehalfOf" />
            <Field name="accessRestrictionDate" />
          </Field>
        </Field>
      </Panel>

      <Panel name="viewer" collapsible collapsed>
        <Field name="viewerContributionGroupList" subpath="ns2:collectionobjects_omca">
          <Field name="viewerContributionGroup">
            <Panel>
              <Row>
                <Field name="viewerName" />
                <Field name="viewerRole" />
              </Row>

              <Field name="viewerContribution" />

              <Row>
                <Field name="viewerContributionDate" />
                <Col />
              </Row>

              <Field name="viewerReferences">
                <Field name="viewerReference" />
              </Field>

              <Field name="viewerContributionNote" />
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="reference" collapsible collapsed>
        <Field name="referenceGroupList">
          <Field name="referenceGroup">
            <Field name="reference" />
            <Field name="referenceNote" />
          </Field>
        </Field>
      </Panel>

      <Panel name="collect" collapsible collapsed>
        <Row>
          <Col>
            <Field name="fieldCollectionDateGroup" />

            <Field name="fieldCollectionMethods">
              <Field name="fieldCollectionMethod" />
            </Field>

            <Field name="fieldCollectionNote" />
            <Field name="fieldCollectionNumber" />
          </Col>

          <Col>
            <Field name="fieldCollectionPlace" />

            <Field name="fieldCollectionSources">
              <Field name="fieldCollectionSource" />
            </Field>

            <Field name="fieldCollectors">
              <Field name="fieldCollector" />
            </Field>
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
