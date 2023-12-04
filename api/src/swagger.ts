import swaggerAutogen from 'swagger-autogen'

///
;(async () => {
  const genericDocumentation = {
    info: {
      title: 'secret friend',
      description: 'rest api secret friend event',
      version: '1.0.0',
    },
    host: 'localhost:3333',
  }

  const outputFile = './src/routes/docs/swagger-output.json'
  const endpointsFiles = ['src/routes/index.ts']

  swaggerAutogen(outputFile, endpointsFiles, genericDocumentation)
})()
