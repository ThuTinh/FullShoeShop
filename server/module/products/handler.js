const Product = require('./model')
const findProductById = async (id) => {
  return await Product.findById(id)
    .populate({
      path: 'ingredients'
    })
}

const searchProduct = async (text, page, perpage) => {
  return await Product.find(
    { $text: { $search: text } },
    { score: { $meta: "textScore" } }
  )
    .sort({ score: { $meta: "textScore" } })
    .select({_id: 1, images: 1, rate: 1, name: 1})
    .skip(page * perpage)
    .limit(perpage)
}

const createProduct = async (data) => {
  const reg = new RegExp("^" + data.name.toLowerCase() + '$', "i")
  const old_product = await Product.find({name: reg}, {_id: 1}).limit(1).lean()
  if(old_product.length > 0) throw new Error('Product name already existed')
  const item = new Product(data)
  return await item.save()
}



const update = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, {new: true, runValidators: true})
}




const validateBody = (body) => {
  const validFields = ['barcode','qualityCertification','tags','sideEffects','ingredients','warning','specificTarget','userManual','description','categories','images','brand','name', 'productDetail', 'url_sources']
  if (!body || Object.keys(body).length === 0) {
    throw new Error('Body is empty')
  }
  Object.keys(body).forEach(e => {
    if(!validFields.includes(e)) throw new Error('Body contains invalid field: ' + e)
  })
}
module.exports = {findProductById, createProduct,update,searchProduct,validateBody}
 