const DataAtual = new Date()
const dataFormatada = new Date().toLocaleDateString('pt-BR');
console.log(dataFormatada)



const proximoMes = new Date(DataAtual.setMonth(DataAtual.getMonth() +1))

const datadoproximomes = proximoMes.toLocaleDateString('pt-BR')

console.log(datadoproximomes)