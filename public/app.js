document.querySelectorAll('.price').forEach(node => {
    node.textContent = new Intl.NumberFormat('ru-RU',{
        currency: 'byn',
        style: 'currency'
    }).format(node.textContent)
})