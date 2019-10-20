const Tag = require('./model')

const findTagById = async (id) => {
  return await Tag.findById(id).lean()
}

const findTag = async (filter, page, perpage) => {
  filter = {...filter}
  return await Tag
    .find(filter)
    .sort({
      priority: -1
    })
    .skip(page * perpage)
    .limit(perpage)
}

const createTag = async (data) => {
  const oldTag = await Tag.findOne({name: data.name, type: data.type})
  if(oldTag) throw new Error('Tag already existed')
  const item = new Tag(data)
  return await item.save()
}

const update = async (id, data) => {
  return await Tag.findByIdAndUpdate(id, data, {new: true, runValidators: true})
}

module.exports = {findTagById,update,createTag,findTag}
