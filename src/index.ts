import { defaultStorage } from './storage/Storage';
import { removeAllMask } from './actions/removeAllMask';

export class Necorator{
    static removeAllMask<T>(object: Object, data:any){
        return removeAllMask<T>(object, data);
    }
}