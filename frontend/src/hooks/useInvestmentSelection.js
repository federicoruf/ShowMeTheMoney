const useInvestmentSelection = (
  investments,
  selectedInvest,
  setSelectedInvest
) => {
  const handleClickInvestment = (id) => {
    const asset = investments.find(({ _id }) => _id === id);
    if (selectedInvest && selectedInvest.name === asset.name) {
      setSelectedInvest(null);
    } else {
      setSelectedInvest({ ...asset });
    }
  };

  const isSelected = (name) => {
    return selectedInvest && selectedInvest.name === name;
  };

  return [handleClickInvestment, isSelected];
};

export default useInvestmentSelection;
