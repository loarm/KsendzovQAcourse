const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ],
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ],
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ],
  },
];

/*Задания:
1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
**Пример:**
Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)`;
*/

function companyStructure(obj) {
  for (let i = 0; i < obj.length; i++) {
    let counter = 0;
    console.log(obj[i].name);
    for (let j = 0; j < obj[i].departments.length; j++) {
      console.log(
        `- ${obj[i].departments[j].name} (${obj[i].departments[j].employees_count} сотрудников)`
      );
      counter += obj[i].departments[j].employees_count;
    }
    console.log(`Всего в предприятии ${counter} сотрудников.\n`);
  }
}

// companyStructure(enterprises);

/*2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
Пример:
getEnterpriseName(4) // Предприятие 1
getEnterpriseName("Отдел маркетинга") // Предприятие 2`;
*/

function getCompany(dept_name, obj) {
  for (let i = 0; i < obj.length; i++) {
    for (let j = 0; j < obj[i].departments.length; j++) {
      if (obj[i].departments[j].name == dept_name) {
        console.log(obj[i].name);
      }
    }
  }
}

// getCompany("Отдел охраны труда", enterprises);

/*3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
Пример:
addEnterprise("Название нового предприятия")`;
*/

function addEnterprise(new_name, obj) {
  let companies = new Array(obj);
  let newObj = { id: companies[0].length + 1, name: new_name, departments: [] };
  companies[0].push(newObj);
  return companies;
}

// addEnterprise("Предприятие 4", enterprises);

/*4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
Пример:
addDepartment(1, "Название нового отдела")`;
*/

function addDepartment(dept_id, new_dept, list) {
  let obj = new Array(list);
  for (let i = 0; i < obj.length; i++) {
    for (let j = 0; j < obj[i].length; j++) {
      if (obj[i][j].id == dept_id) {
        let newObj = {
          id: obj[i][j].departments.length + 1,
          name: new_dept,
          employees_count: 12,
        };
        obj[i][j].departments.push(newObj);

        return obj[i][j].departments;
      }
    }
  }
}

// console.log(addDepartment(5, "Финансовый отдел", enterprises))

/*5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
Пример:
editEnterprise(1, "Новое название предприятия")`;
*/

function editEnterprise(id, new_name, list) {
  let obj = new Array(list);
  for (let i = 0; i < obj.length; i++) {
    for (let j = 0; j < obj[i].length; j++) {
      if (obj[i][j].id == id) {
        obj[i][j].name = new_name;
        return obj[i][j];
      }
    }
  }
}

// console.log(editEnterprise(1, "Предприятие Ласточка", enterprises));

/*6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
Пример:
editDepartment(7, "Новое название отдела")`;
*/

function editDepartment(id, new_dept_name, list) {
  let obj = new Array(list);
  for (let i = 0; i < obj.length; i++) {
    for (let j = 0; j < obj[i].length; j++) {
      for (let k = 0; k < obj[i][j].departments.length; k++) {
        if (obj[i][j].departments[k]["id"] == id) {
          obj[i][j].departments[k]["name"] = new_dept_name;
          return obj[i][j].departments;
        }
      }
    }
  }
}

// console.log(editDepartment(2, "Отдел QA инженерии", enterprises));

/*7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
Пример:
deleteEnterprise(1)`;
*/

function deleteEnterprise(id_enter, list) {
  let obj = new Array(list);
  for (let i = 0; i < obj.length; i++) {
    for (let j = 0; j < obj[i].length; j++) {
      if (obj[i][j].id == id_enter) {
        delete obj[i][j];
        return obj[i];
      }
    }
  }
}

// console.log(deleteEnterprise(1, enterprises));

/*8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
Пример:
deleteDepartment(3)`;
*/

function deleteDepartment(id_depts, list) {
  let obj = new Array(list);
  for (let i = 0; i < obj.length; i++) {
    for (let j = 0; j < obj[i].length; j++) {
      for (let k = 0; k < obj[i][j].departments.length; k++) {
        if (
          obj[i][j].departments[k].id == id_depts &&
          obj[i][j].departments[k].employees_count == 0
        ) {
          delete obj[i][j].departments[k];
          return obj[i][j];
        }
      }
    }
  }
}

// console.log(deleteDepartment(10, enterprises));

/*9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
Пример:
moveEmployees(2, 3)`;
*/

function moveEmployees(dept_to_give, dept_to_take, list) {
  let tempEmpl = 0;
  let obj = new Array(list);
  for (let i = 0; i < obj.length; i++) {
    for (let j = 0; j < obj[i].length; j++) {
      for (let k = 0; k < obj[i][j].departments.length; k++) {
        if (obj[i][j].departments[k].id == dept_to_give) {
          tempEmpl = obj[i][j].departments[k].employees_count;
          console.log(tempEmpl);
          obj[i][j].departments[k].employees_count = 0;
        }
        if (obj[i][j].departments[k].id == dept_to_take) {
          obj[i][j].departments[k].employees_count += tempEmpl;
        }
        return obj[i][j];
      }
    }
  }
}

console.log(moveEmployees(3, 4, enterprises));
