import { IRemovedMaskStorage } from "../interfaces/IRemovedMaskStorage";

class Storage {
    private removedMaskCollection: IRemovedMaskStorage[] = [];

    hasRemovedMask(item: IRemovedMaskStorage):boolean{
        return this.removedMaskCollection.filter((i) => i.objectName === item.objectName && i.propertyKey === item.propertyKey).length > 0;
    }

    addRemovedMask(newItem: IRemovedMaskStorage){
        if(!this.hasRemovedMask(newItem)){
            this.removedMaskCollection.push(newItem);
        }
    }
}

export const defaultStorage = new Storage();