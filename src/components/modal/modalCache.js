/**
 * Created by EX-pengzhiliang001 on 2017-05-27.
 */
class ModalCache {
  constructor() {
    this._modalVMArgs = {}
    this._count = 0
  }

  remove(index) {
    delete this._modalVMArgs[index]
    this._count = --this._count
  }
}
export default new ModalCache()
