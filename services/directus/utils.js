import directus from "./directus";

// Items

/** @function */
export const getAll = async (item) => {
  return directus
    .items(item)
    .readByQuery({ limit: -1, fields: ["*.*"] })
    .then((response) => response.data)
    .catch((error) => error);
};

/** @function */
export const getAllBy = async (item, query) => {
  return directus
    .items(item)
    .readByQuery(query)
    .then((response) => response)
    .catch((error) => error);
};

/** @function */
export const find = async (item, id) => {
  return await directus
    .items(item)
    .readOne(id, {
      fields: ["*.*"],
    })
    .then((response) => response)
    .catch((error) => error);
};

/** @function */
export const createItem = async (item, object) => {
  return await directus.items(item).createOne(object);
};

/** @function */
export const deleteItem = async (item, id) => {
  return await directus.items(item).deleteOne(id);
};

/** @function */
export const update = async (item, id) => {
  return await directus.items(item).updateOne(id);
};
