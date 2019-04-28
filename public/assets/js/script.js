document.addEventListener('DOMContentLoaded', function () {

  const devourButtons = document.querySelectorAll('.devour');
  const selectElems = document.querySelector('select');
  const selectInstances = M.FormSelect.init(selectElems);

  devourButtons.forEach(element => {
    element.addEventListener('click', (e) => {
      e.preventDefault();

      M.toast({ html: 'Nom nom nom!' })
      const id = e.target.getAttribute('data-id')

      fetch(`/api/burger/${id}`, { method: 'PUT' })
        .then(location.reload());
    })
  })

  const addBurger = (event) => {
    event.preventDefault();

    const burgerName = document.getElementById('addburger').value;
    M.toast({ html: `${burgerName} added!` })

    const ingredients = selectInstances.getSelectedValues().map(e => parseInt(e));
    fetch('/api/burger', {
      method: 'POST',
      body: JSON.stringify({ 
        name: burgerName,
        ingredients: ingredients
      }),
      headers: { 'Content-Type': 'application/json' }
    }).then(location.reload());
  }


  document.getElementById('submit-burger').addEventListener('submit', addBurger);

  const elems = document.querySelectorAll('.tooltipped');
  const instances = M.Tooltip.init(elems, { enterDelay: 200 });

  const ingredientIcons = document.querySelectorAll('.ingredient-info');
  ingredientIcons.forEach(e => {
    const id = e.getAttribute('data-id');
    fetch(`/api/burger/${id}`)
      .then(response => response.json())
      .then(response => {
        const ingredients = response.map(e => e.ingredient_name).join(', ');
        e.setAttribute('data-tooltip', ingredients);
      });
  })
})





