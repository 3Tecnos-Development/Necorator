import { removeAllMask } from "./actions/removeAllMask";

export { defaultStorage } from "./storage/Storage";

export * from "./decorators/RemovedMask";

export class Necorator {
  static removeAllMask<T>(object: Object, data: any) {
    return removeAllMask<T>(object, data);
  }
}
