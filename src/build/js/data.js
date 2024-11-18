var questions = [
    {
        id: "1",
        q: "Я люблю научно популярные журналы по технике.",
    },
    {
        id: "2",
        q: "Аппетит у меня хороший.",
    },
    {
        id: "3",
        q: "Обычно по утрам я просыпаюсь свежей и отдохнувшей.",
    },
    {
        id: "4",
        q: "Думаю что работа библиотекаря мне понравилась.",
    },
    {
        id: "5",
        q: "Я легко просыпаюсь от шума.",
    },
];
var clientFormElems = [
    {
        type: 'text',
        placeholder: 'Имя:',
        label: "<i class=\"bi bi-person-square text-indigo\"></i>",
        ariaLabel: 'name',
        name: 'name'
    },
    {
        type: 'text',
        placeholder: 'Фамилия:',
        label: "<i class=\"bi bi-person-square text-indigo\"></i>",
        ariaLabel: 'surname',
        name: 'surname'
    },
    {
        type: 'text',
        placeholder: 'Дата рождения:',
        label: "<i class=\"bi bi-info\"></i>",
        ariaLabel: 'birthDate',
        name: 'birthDate'
    },
    {
        type: 'email',
        placeholder: 'Эл. почта:',
        label: "<i class=\"bi bi-envelope-at-fill\"></i>",
        ariaLabel: 'email',
        name: 'email'
    },
    {
        type: 'submit',
        placeholder: null,
        label: "<i class=\"bi bi-send\"></i>",
        ariaLabel: 'submit',
        name: 'submit'
    }
];
export { questions, clientFormElems };
