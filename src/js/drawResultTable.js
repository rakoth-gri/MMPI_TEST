function drawResultTable(container, scales, sex, client) {
  const table = `
            <p class='h4 text-uppercase m-3 text-center'> ${
              sex === "woman" ? "женщина" : "мужчина"
            } </p>
            ${
              client
                ? `<ul class="list-group">
                  <li class="list-group-item active" aria-current="true">Клиент: </li>
                  <li class="list-group-item"> <strong> имя: </strong> ${client.name} </li>
                  <li class="list-group-item"><strong> фамилия: </strong> ${client.surname}</li>
                  <li class="list-group-item"><strong> дата рождения: </strong> ${client.birthDate}</li>
                  <li class="list-group-item"><strong> дата рождения: </strong> ${client.email}</li>                  
                </ul>`
                : ""
            }
            <table class="table table-dark table-hover text-center w-auto rounded-2">
                <thead>
                    <tr>
                        <th> шкала </th>
                        <th> Ответов 'да': </th>
                        <th> Ответов 'нет':</th>
                        <th> X-баллы по шкале:</th>
                        <th> T-баллы по шкале:</th>
                        <th> Положительные ответы: </th>
                        <th> Отрицательные ответы: </th>                        
                    </tr>
                </thead>
                <tbody>
                    ${Object.keys(scales)
                      .map(
                        (key) => `
                            <tr class="">
                                <td > ${key}</td>
                                <td class='bg-success'> ${
                                  scales[key]["yes"].length
                                }</td>
                                <td class='bg-danger'> ${
                                  scales[key]["no"].length
                                }</td>
                                <td> ${scales[key].X}</td>
                                <td> ${scales[key].T}</td>
                                <td class='bg-success'> ${scales[key]["yes"]
                                  .map((yes) => `№${yes}`)
                                  .join(", ")}</td>
                                <td class='bg-danger'> ${scales[key]["no"]
                                  .map((no) => `№${no}`)
                                  .join(", ")}</td>
                            </tr>                            
                            `
                      )
                      .join("")}
                </tbody>
            </table>
        `;
  container.innerHTML = table;
}

export { drawResultTable };
