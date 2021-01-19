import { defaultStorage } from "../storage/Storage";

/**
 *
 */
export function RemovedMask(childKeys?: string[]) {
  return (object: Object, propertyKey: string) => {
    if (childKeys) {
      childKeys.forEach((key) => {
        defaultStorage.addRemovedMask({
          target: object.constructor,
          objectName: object.constructor.name,
          propertyKey: key,
        });
      });
    } else {
      defaultStorage.addRemovedMask({
        target: object.constructor,
        objectName: object.constructor.name,
        propertyKey,
      });
    }
  };
}
