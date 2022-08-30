# bind()
Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение. В метод также передаётся набор аргументов, которые будут установлены перед переданными в привязанную функцию аргументами при её вызове.
 Cинтаксис:

- bind() = функцияи объекти дигарира дигачода истифода мебарем!
> const person = {
>     firstName: "Ehson",
>     lastName: "Zokirov",
>     fullName: function () {
>         return this.firstName + ' ' + this.lastName
>     },
> }
> const member = {
>     firstName: 'John',
>     lastName: 'Doe',
>     age: 22
> }
>
> let Method = person.fullName.bind(member)
> console.log(Method()); 
