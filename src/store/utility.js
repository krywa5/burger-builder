export const updateObject = (oldObject, updatedProperties) => {
  if (typeof oldObject !== "object" || typeof updatedProperties !== "object") {
    console.error(
      "Both oldObject and updatedProperties are expected to be objects."
    );
    return {};
  }
  return {
    ...oldObject,
    ...updatedProperties,
  };
};
