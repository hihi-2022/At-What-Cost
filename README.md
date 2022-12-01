# At What Cost

A personal finance tool to help breakdown the cost of our expenses so that we can make informed decisions about how to handle our spending. The app allows users to upload a comma separated file to the app which is then processed and displayed as a list. Users can then add category filters to the transaction list items to gain a better understanding of where they are spending their money (e.g Food & Drink, Bills, Transportation, etc).

---

## 1. MVP

As a user, I want to be able to upload a CSV file, have the transactions display as a list of items that I can then add categories to to get an idea of what I am spending my money on based on predefined categories.

---

## 2. Tech Stack

1. React w/ Redux
2. Express (Node.js)
3. Sqlite3 w/ Knex Query Builder

---

## 3. CSS Modules

1. Create a new css file within the styles folder, following the naming convention outlined below.
2. Import the newly created css file into the corresponding component and assign it to a style variable.
```JS
import style from '../styles/NameOfComponent.module.css'
```
3. Create style rules within the css file using class notation as required.
```CSS
.container {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

.title {
  color: white;
  background: red;
}
```
4. Assign the newly created rule to the component's JSX within it's className attribute. Note that you will have to use curly brackets to use the style variable instead of the usual strings.
```JS
return (
  <div className={style.container}>
    <h1 className={style.title}>My Title</h1>
  </div>
)
```

<div style='text-align:center'>
  Note that you can use both css or scss files. This is up to personal preference!
</div>

---
## 3. Roles

| Name                 | Role                          |
| -------------------- | ----------------------------- |
| Shaneel              | Product Owner & Frontend Lead |
| Aaron                | Scrum Lead                    |
| Moo                  | Backend Lead                  |
| Louis                | Integration Lead              |
| ***All**             | Vibe Checker                  |
| ***Rotating Roster** | Git Keeper                    |

---

## 4.1 Function Naming Conventions

| Fn                    | Convention      | Example                      |
| --------------------- | --------------- | ---------------------------- |
| Database queries      | Suffix "Query"  | getUserFilters**Query**      |
| Client API            | Suffix "API"    | getUserFilters**API**        |
| Redux Thunk           | Suffix "Thunk"  | getUserFilters**Thunk**      |
| Redux Action Creators | Suffix "Action" | receiveUserFilters**Action** |

---

## 4.2 File Naming Conventions

| File Type       | Convention                                                 | Example                  |
| --------------- | ---------------------------------------------------------- | ------------------------ |
| Express Routers | Suffix "Routes"                                            | category**Routes**       |
| Reducers        | Suffix "Reducer"                                           | category**Reducer**      |
| DB Queries      | Suffix "Queries"                                           | user**Queries**          |
| CSS modules     | Name of corresponding component, followed by ".module.css" | CostBreakdown.module.css |

---

## 5.1 Gitflow

Make a feature branch when working on a user story. When finished with feature, pull down the main branch in case there have been new merges and then push your feature branch to Github. Let the person in charge of pull requests that day that you require a review and merge of your PR.

---

## 5.2 Pull Request Review Checklist (for reviewer)

- Ask developer to remove console logs, unnecessary comments and redundant code.
- Check naming conventions have been followed.
- Highlight any obvious bugs that you see.
- Ensure that the work is within the scope that the developer said they are working in.

### Roster:
- Friday: Aaron
- Monday: Louis
- Tuesday: Moo
- Wednesday: Shaneel

---

