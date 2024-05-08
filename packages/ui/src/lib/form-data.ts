import { serialize } from 'object-to-formdata';

export function serializeToFormData(data: any) {
  return serialize(data, {
    noFilesWithArrayNotation: true,
    booleansAsIntegers: true,
    indices: true,
  });
}
