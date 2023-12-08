type People = {
  id: string;
  idEvent: string;
  idGroup: string;
  name: string;
  cpf: string;
  matched: string;
  createdAt: Date;
  updatedAt: Date | null;
};

type sortedList = {
  id: string;
  match: string;
};

type eventItem = {
  grouped: boolean;
};

export const sortedPeopleList = (peopleList: People[], eventItem: eventItem): sortedList[] | false => {
  let sortedList: sortedList[] = [];
  let sortable: string[] = [];

  let attempts = 0; // tentativa
  const maxAttempts = peopleList.length;
  let keepTrying = true; // tentenar de novo

  while (keepTrying && attempts < maxAttempts) {
    keepTrying = false;
    attempts++;
    sortedList = [];

    sortable = peopleList.map((people) => people.id);

    for (const i in peopleList) {
      let sortableFiltered: string[] = sortable;
      if (eventItem.grouped) {
        sortableFiltered = sortable.filter((sortableId) => {
          const sortablePerson = peopleList.find((person) => person.id === sortableId);
          return peopleList[i].idGroup !== sortablePerson?.idGroup; // tem que ser diferente
        });
      }

      if (sortableFiltered.length === 0 || (sortableFiltered.length === 1 && peopleList[i].id === sortableFiltered[0])) {
        // ou seja se nao tem mais ninguém ou e eu msm
        keepTrying = true; // faz o proximo
      } else {
        // aqui realmente faz o sorteio
        let sortedIndex = Math.floor(Math.random() * sortableFiltered.length);
        while (sortableFiltered[sortedIndex] === peopleList[i].id) {
          // se tirar eu mesmo faz o sorteio de novo
          sortedIndex = Math.floor(Math.random() * sortableFiltered.length);
        }
        sortedList.push({
          id: peopleList[i].id,
          match: sortableFiltered[sortedIndex],
        });

        sortable = sortable.filter((person) => person !== sortableFiltered[sortedIndex]);
        // filtre todos que for diferente do sorteado assim a lista de pessoas pode ser sorteadas diminui
      }
    }
  }

  if (attempts < maxAttempts) {
    return sortedList;
  }

  return false;
};
/**
 * A,B,C,D
 *
 * Condicional error
 * A->B
 * B->C
 * D-> ?
 *
 * Condicional success
 * A->C
 * B->D
 * C->A
 * D->B
 */
