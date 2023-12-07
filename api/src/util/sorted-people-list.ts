import { IPeople } from "@/@types";

type sortedList = {
  id: string;
  match: number;
};

type eventItem = {
  grouped: boolean;
};

export const sortedPeopleList = (peopleList: IPeople[], eventItem: eventItem) => {
  let sortedList: sortedList[] = [];
  let sortable: string[] = [];

  let attempts = 0;
  const maxAttempts = peopleList.length;
  let keepTrying = true;

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
        keepTrying = true;
        // faz o proximo
      } else {
        // aqui realmente faz o sorteio
      }
    }
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
