// Require the framework and instantiate it
// const fastify = require('fastify')({ logger: true })
import * as Fastify from 'fastify'
import mp from '@fastify/multipart'
import { listObjects, putObject } from './cortx'
const fastify = Fastify.fastify({logger: true})
fastify.register(mp)



// Run the server!
const start = async () => {
  try {
    await fastify.listen(3001)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.get('/object/:bucket/:objectId', async (request, reply) => {
  const {params} = request
  console.log('get object', params.bucket, params.objectId)
  return await getObject(params.bucket, params.objectId)
})

fastify.get('/objects/:bucket', async (request, reply) => {
  const {params} = request
  console.log('list objects', params.bucket);
  return await listObjects(params.bucket)
})

fastify.post('/object/:bucket', async (request, reply) => {
  const {params} = request
  console.log('put object', bucket)
  const data = await request.file()

  return await putObject(params.bucket, data.filename, await data.toBuffer())
})




start()