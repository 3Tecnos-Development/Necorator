import { IRemovedMaskStorage } from "../interfaces/IRemovedMaskStorage";
import { defaultStorage } from "../storage/Storage";

export function removeAllMask<T>(object: Object, data: any): T {
  Object.keys(data).forEach((key) => {
    if (typeof data[key] === "object") {
      // eslint-disable-next-line no-param-reassign
      data[key] = removeAllMask(object, data[key]);
    } else {
      const item: IRemovedMaskStorage = {
        target: object.constructor,
        objectName: object.constructor.name,
        propertyKey: key,
      };

      if (defaultStorage.hasRemovedMask(item)) {
        // eslint-disable-next-line no-param-reassign
        data[key] = data[key].replace(/[^\d]+/g, "");
      }
    }
  });
  return data;
}
