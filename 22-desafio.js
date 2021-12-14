const API_URL = "https://jsonplaceholder.typicode.com/comments"

// FILTRAR OS DADOS PARA MOSTRAR APENAS OS POSTS IGUAIS AO DA VARIÁVEL postId
/*
	Passo a passo:
  
	- 1: Fazer a função se tornar assíncrona
  - 2: Fazer a função aguardar tanto o fetch quanto o response.json()
  - 3: Criar um .filter no data para a variável filtered, 
  comparando o POST_ID com o postId do objeto
*/

async function getComments(postId) {
	const response = await fetch(API_URL)
  const data = await response.json()
  const filtered = data.filter ((obj) => {
  return obj.postId === postId
  })
  console.log(filtered)
}

getComments(1)