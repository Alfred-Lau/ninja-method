const create = (target)=>{
  function F(){}
  // wrong
  // F.__proto__ = target
  // right
  F.prototype = target
  return new F()
}


const origin = {
  name:'liujian'

}

const copy =  create(origin)

console.log(copy.name);

module.exports = create