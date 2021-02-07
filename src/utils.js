const initialNumberPattern = /^(\d+)(.*)$/;
const initialLetterPattern = /^(\D+)(.*)$/;

export const computeSortableIDNumber = (referenceNumber = '') => (
  referenceNumber
    .split('.')
    .map((part) => {
      if (part.match(initialNumberPattern)) {
        const number = RegExp.$1;
        const suffix = RegExp.$2;

        const normalizedNumber = number.padStart(10, '0');

        return `${normalizedNumber}${suffix}`;
      }

      if (part.match(initialLetterPattern)) {
        const prefix = RegExp.$1;
        const number = RegExp.$2;

        const normalizedNumber = number.padStart(10, '0');

        return `${prefix}${normalizedNumber}`;
      }

      return part;
    })
    .join('.')
    .toUpperCase()
);

export const joinValues = (values, formatHelpers) => (
  values
    .filter((value) => !!value)
    .map((value) => (formatHelpers.formatRefName(value) || value))
    .join(' - ')
);

export const transformSortableIDNumberSearch = ({ data }) => computeSortableIDNumber(data);
