const summaryDimensions = {
  height: 'H',
  width: 'W',
  depth: 'D',
  diameter: 'Dia',
};

const summaryUnits = {
  inches: 'in',
  meters: 'm',
  centimeters: 'cm',
  'cubic centimeters': 'cm³',
  feet: 'ft',
  kilograms: 'kg',
  liters: 'l',
  millimeters: 'mm',
  minutes: 'mins',
  ounces: 'oz',
  pixels: 'px',
  'pixels per inch': 'ppi',
  pounds: 'lbs',
  'square feet': 'ft²',
  stories: 'stories',
  'troy ounces': 'oz t',
  yards: 'yd',
};

const formatUnit = (unit) => summaryUnits[unit] || unit;
const formatDimension = (dimension) => summaryDimensions[dimension] || dimension;

// eslint-disable-next-line import/prefer-default-export
export const computeDimensionSummary = ({ data }, formatHelpers) => {
  const dimensionSubGroups = data.getIn(['dimensionSubGroupList', 'dimensionSubGroup']);

  // Collect the necessary measurements for the summary. Measurements with empty values are
  // excluded. A dimension could be measured more than once. If this happens, the first (top-most)
  // measurement of that dimension is used. All others are excluded.

  const measurements = {};

  if (dimensionSubGroups) {
    dimensionSubGroups.forEach((dimensionSubGroup) => {
      const dimension = dimensionSubGroup.get('dimension');
      const value = dimensionSubGroup.get('value');
      const measurementUnit = dimensionSubGroup.get('measurementUnit') || 'inches';
      const unit = formatHelpers.formatRefName(measurementUnit) || measurementUnit;

      if (value && !(dimension in measurements)) {
        measurements[dimension] = {
          value,
          unit,
        };
      }
    });
  }

  // Order the collected measurements by dimension, and drop measurements of dimensions that are
  // not used in the summary.

  const orderedDimensions = ['height', 'width', 'depth', 'diameter'];
  const orderedMeasurementDescriptions = [];

  orderedDimensions.forEach((dimension) => {
    const measurement = measurements[dimension];

    if (measurement) {
      const { value, unit } = measurement;

      orderedMeasurementDescriptions.push(
        `${formatDimension(dimension)}: ${value} ${formatUnit(unit)}`,
      );
    }
  });

  return data.set('dimensionSummary', orderedMeasurementDescriptions.join(', '));
};
