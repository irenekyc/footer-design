const contentHeader = document.querySelector('.content-h1')
const menu = document.querySelector('.menu-bar')
const container = document.querySelector('.container')
const footer = document.querySelector('.footer')

console.log('Container height:' + container.scrollHeight)
console.log('Footer height:' + parseInt(getComputedStyle(footer).height))
console.log('ContentHeader scroll top:' +contentHeader.scrollTop)
