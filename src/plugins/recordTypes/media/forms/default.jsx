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
    Subrecord,
  } = configContext.recordComponents;

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="media" collapsible>
        <Cols>
          <Col>
            <Field name="identificationNumber" />
            <Field name="originalFileName" subpath="ns2:media_omca" />
          </Col>

          <Col>
            <Field name="title" />

            <Row>
              <Field name="isPrimary" subpath="ns2:media_omca" />
              <Field name="approveForPublic" subpath="ns2:media_omca" />
            </Row>

            {/* <Field name="publishToList">
              <Field name="publishTo" />
            </Field> */}
          </Col>
        </Cols>

        <Panel name="file" collapsible>
          <Subrecord name="blob" showDetachButton />
        </Panel>

        <Field name="externalUrl" />

        {extensions.dimension.form}

        <Cols>
          <Col>
            <Field name="contributor" />
            <Field name="creator" />
            <Field name="publisher" />

            <Field name="relationList">
              <Field name="relation" />
            </Field>

            <Field name="copyrightStatement" />
          </Col>

          <Col>
            <Field name="typeList">
              <Field name="type" />
            </Field>

            <Field name="dateGroupList">
              <Field name="dateGroup" />
            </Field>

            <Field name="source" />

            <Field name="subjectList">
              <Field name="subject" />
            </Field>

            <Field name="rightsHolder" />
          </Col>
        </Cols>

        <Field name="description" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  messages: defineMessages({
    name: {
      id: 'form.media.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(configContext),
});
