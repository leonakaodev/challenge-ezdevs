const connection = require('../database/connection');

module.exports = {
  async create (request, response) {
    const { title, description } = request.body
    const [ id ] = await connection('posts').insert({
      title,
      description,
    })

    return response.json({ id })
  },

  
  async index(request, response) {
    const { page = 1, perPage = 5 } = request.query;
    
    const [ count ] = await connection('posts').count();

    const posts = await connection('posts') 
      .limit(perPage)
      .offset((page - 1) * perPage)
      .select(['*']);

    response.header('X-Total-Count', count['count(*)']);
    
    return response.json(posts);
  },
}