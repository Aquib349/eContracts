export const toggleSelectAll = (Data, AllChecked) => {
  const newSelectAll = !AllChecked;

  const newCheckedItems = {};
  (Data.length > 0 ? Data : []).forEach((item) => {
    newCheckedItems[item["Legal Entity"]] = newSelectAll;
  });

  // If all checked, include all items, otherwise set to an empty array
  const updatedSelectedItems = newSelectAll
    ? (Data.length > 0 ? Data : []).map((item) => item)
    : [];
  return { newSelectAll, newCheckedItems, updatedSelectedItems };
};

// function to toggle checkbox
export const toggleCheckBox = (Data, itemName, checkedItems, selectedItems) => {
  const newCheckedItems = {
    ...checkedItems,
    [itemName]: !checkedItems[itemName],
  };

  const allChecked =
    Data.length === Object.keys(newCheckedItems).length
      ? Object.values(newCheckedItems).every((value) => value)
      : false;

  const updateSelectedItems = checkedItems[itemName]
    ? selectedItems.filter((project) => project.name !== itemName)
    : [...selectedItems, { "Legal Entity": itemName }];

  return { newCheckedItems, allChecked, updateSelectedItems };
};

// remove checked items from selected list
// function to remove the project from selected list
export function RemoveSelectedItems(Data, itemName, checkedItems) {
  const CurrentList = Data.filter(
    (project) => project["Legal Entity"] !== itemName
  );

  // remove the check mark from the project which has been removed from list
  const updatedCheckedItems = { ...checkedItems };
  delete updatedCheckedItems[itemName];

  const allChecked =
    Data.length === Object.keys(updatedCheckedItems).length
      ? Object.values(updatedCheckedItems).every((value) => value)
      : false;

  return { CurrentList, updatedCheckedItems, allChecked };
}
