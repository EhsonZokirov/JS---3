# bind()
Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение. В метод также передаётся набор аргументов, которые будут установлены перед переданными в привязанную функцию аргументами при её вызове.
 Cинтаксис:

- bind() = функцияи объекти дигарира дигачода истифода мебарем!
> const person = {
> 
>     firstName: "Ehson",
> 
>     lastName: "Zokirov",
>
>     fullName: function () {
>
>         return this.firstName + ' ' + this.lastName
>
>     },
>
> }
>
> const member = {
>
>     firstName: 'John',
>
>     lastName: 'Doe',
>
>     age: 22
>
> }
>
>
>
> let Method = person.fullName.bind(member)
>
> console.log(Method()); 
////////////////////////////////////////////////////////

# apply()
Метод apply() вызывает функцию с указанным значением this и аргументами, предоставленными в виде массива (либо массивоподобного объекта)

- Примеры:
>
>Function.prototype.construct = function (aArgs) {
>
>  var oNew = Object.create(this.prototype);
>
>  this.apply(oNew, aArgs);
>
>  return oNew;
>};

- Метод apply очень похож на метод call(), за исключением поддерживаемого типа аргументов. Вы можете использовать массив аргументов вместо набора именованных параметров. Вместе с apply вы можете использовать литерал массива, например, fun.apply(this, ['есть', 'бананы']), либо объект Array, например, fun.apply(this, new Array('есть', 'бананы')).
  
# call()
Метод call() вызывает функцию с указанным значением this и индивидуально предоставленными аргументами.

- Примеры:
>var animals = [
>
>  { species: 'Лев', name: 'Король' },
>
>  { species: 'Кит', name: 'Фэйл' }
>];
>
>for (var i = 0; i < animals.length; i++) {
>
>  (function(i) {
>
>    this.print = function() {
>
>      console.log('#' + i + ' ' + this.species
>
>                  + ': ' + this.name);
>    }
>
>    this.print();
>
>  }).call(animals[i], i);
>
>}
# Object.entries(obj)
метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value]
>
>const obj = {
>
>    name: "Ehson",
>
>    age: 22
>
>}
>
>console.log(Object.entries(obj));//// [ [ 'name', 'Ehson' ], [ 'age', 22 ] ]

# Object.assign(obj)
Метод Object.assign() используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. После копирования он возвращает целевой объект.
>
>var obj = { a: 1 };
>
>
>var copy = Object.assign({}, obj);
>
>console.log(copy); // { a: 1 }
