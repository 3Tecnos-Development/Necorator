import { defaultStorage } from './../storage/Storage';

/**
 * 
 */
export function RemovedMask(childKeys?:string[]){
    return function(object:Object, propertyKey:string){
        if(childKeys){
            childKeys.forEach((key) => {
                defaultStorage.addRemovedMask({
                    objectName:object.constructor.name,
                    propertyKey:key
                });
            });
        }
        else{
            defaultStorage.addRemovedMask({
                objectName:object.constructor.name,
                propertyKey
            });
        }
    }
}