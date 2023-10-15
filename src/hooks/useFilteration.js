const useFilteration = (entires, inputValue, selectedRegion) => {
  const filteredEntries = entires.filter(({ name }) =>
    name.trim().toLowerCase().includes(inputValue.trim().toLowerCase())
  );

  const regionBased =
    selectedRegion &&
    filteredEntries.filter((c) => c.region === selectedRegion);
  console.log(filteredEntries);

  return { filteredEntries: selectedRegion ? regionBased : filteredEntries };
};

export default useFilteration;
