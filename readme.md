#### В исходниках bootstrap исключаем классы:

- .breadcrump-\*
- .badge-\*
- .list-group-\*
- .dropdown-\*
- .popover-\*
- .toast-\*
- .modal-\*
- .dropstart-\*
- .dropend-\*
- .dropup-\*
- .dropdown-\*
- .tooltip-\*
- .btn-close-

#### Для очистки тега canvas можно использовать метод clearRect(). 15 Он позволяет очистить прямоугольную область холста, передав координаты верхнего левого угла, а также его ширину и высоту. 5 Пример кода для очистки всего холста, начиная с координат (0, 0):

```javascript
let myCanvas = document.getElementById("myCanvas");
let ctx = myCanvas.getContext("2d");
ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
```

Ещё один способ — установить для свойств **canvas.width** и **canvas.height** их текущие значения. Это создаёт новый элемент canvas с теми же размерами, что и у старого, эффективно очищая его содержимое.
