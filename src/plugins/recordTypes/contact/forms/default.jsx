const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible collapsed>
        <Row>
          <Col>
            <Field name="emailGroupList">
              <Field name="emailGroup">
                <Field name="email" />
                <Field name="emailType" />
              </Field>
            </Field>

            <Field name="telephoneNumberGroupList">
              <Field name="telephoneNumberGroup">
                <Field name="telephoneNumber" />
                <Field name="telephoneNumberType" />
              </Field>
            </Field>
          </Col>

          <Col>
            <Field name="faxNumberGroupList">
              <Field name="faxNumberGroup">
                <Field name="faxNumber" />
                <Field name="faxNumberType" />
              </Field>
            </Field>

            <Field name="webAddressGroupList">
              <Field name="webAddressGroup">
                <Field name="webAddress" />
                <Field name="webAddressType" />
              </Field>
            </Field>
          </Col>
        </Row>

        <Field name="addressGroupOMCAList" subpath="ns2:contacts_omca">
          <Field name="addressGroupOMCA">
            <Panel>
              <Row>
                <Col>
                  <Field name="addressPlace1OMCA" />
                  <Field name="addressPlace2OMCA" />
                  <Field name="addressMunicipalityOMCA" />
                </Col>

                <Col>
                  <Row>
                    <Field name="addressStateOrProvinceOMCA" />
                    <Field name="addressPostCodeOMCA" />
                  </Row>

                  <Field name="addressCountryOMCA" />

                  <Row>
                    <Col>
                      <Field name="addressTypeOMCA" />
                    </Col>

                    <Col />
                  </Row>
                </Col>
              </Row>

              <Field name="addressNoteOMCA" />
            </Panel>
          </Field>
        </Field>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
