/**
 * Model Base class to manage data
 * safe and private value to common manage data
 * we can improve our codes maintainability and expansibility some data.
 * @class ModelBase
 * author: xyh
 * Date： 2018/8/13 17:07
 */
import lodash from 'lodash';

class ModelBase {
  constructor (modelName) {
    this.modelName = modelName;
    this.properties = this.data();
  }

  data () {
    return {}
  }

  set (key, value) {
    if (lodash.isString(key)) {
      this.properties[key] = value;
    }
  }

  get (key) {
    if (lodash.has(this.properties, key)) {
      return this.properties[key];
    }
  }

  initFromArray (dataMap) {
    if (!lodash.isObject(dataMap)) return null;
    lodash.map(dataMap, (v, k) => {
      this.set(k, v);
    });

    return this;
  }
}

export default ModelBase;
