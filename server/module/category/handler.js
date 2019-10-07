const Model = require('./model')

const create = async (data) => {
  const prepareData = async (data) => {
    data.ancestors = undefined
    if (data.parent) {
      const parent = await Model.findById(data.parent).select('name slug ancestors').lean()
      if(!parent) {
        throw new Error(`Unable to find parent with id ${data.parent}`)
      }
      data.ancestors = parent.ancestors.concat({
        _id: parent._id.toString(),
        name: parent.name,
        slug: parent.slug
      })
    }
    return data
  }

  const category = new Model(await prepareData(data))
  return await category.save()
}

const getToPost = async ()=>{
  return await Model.find({})
}
const list = async (type) => {
  
  const addChildren = async (node) => {
    let children=[]
    if(type){
      children = await Model.find({parent: node._id.toString(), type:type}).select('name slug content type image').lean()
    }else{
      children = await Model.find({parent: node._id.toString()}).select('name slug content type image').lean()
    }
    node.children = children
    // for(let i = 0; i < node.children.length; i++) {
    //   await addChildren(node.children[i])
    // }
  }
  let rootCategories=[]
  if(type){
    rootCategories = await Model.find({parent: null, type:type}).select('name slug content type image').lean()
  }else{
    rootCategories = await Model.find({parent: null}).select('name slug content type image').lean()

  }
  await Promise.all(rootCategories.map(async (root) => await addChildren(root)))
  return rootCategories
}

const get = async (id) => {
  const getCategory = () => Model.findById(id).lean()
  const getChildren = () => Model.find({parent: id}).select('name slug content').lean()
  const [category, children] = await Promise.all([getCategory(), getChildren()])
  category.children = children
  return category
}

const getChildrenLevel3 = async id=>{
  let child =   await Model.find({parent:id}).select('_id').lean()
  child = child.map(item =>item._id)
  return child
}

module.exports = {create, list, get,getToPost,getChildrenLevel3}