import React from "react";

type detailedContextType = {
  toggleDetailsPanelVisibility: (visibility: boolean) => void;
};

const detailsContext = React.createContext<
  detailedContextType | Record<string, never>
>({});

export default detailsContext;
