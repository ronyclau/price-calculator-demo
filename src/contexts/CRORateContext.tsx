import {
  createContext,
  useContext,
  useEffect,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";

export const FETCH_ERROR = Symbol("price fetch failed");

export interface CRORateContextProps {
  usdRate: number | typeof FETCH_ERROR | undefined;
}

export const CRORateContext = createContext<CRORateContextProps>({
  usdRate: undefined,
});

export const CRORateContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [usdRate, setUsdRate] = useState<CRORateContextProps["usdRate"]>();

  useEffect(() => {
    // Fetch price data from CoinGecko
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=crypto-com-chain&vs_currencies=usd"
    )
      .then((resp) => resp.json())
      .then((data) => data?.["crypto-com-chain"]?.usd)
      .then((rate) => (typeof rate === "number" ? 1 / rate : FETCH_ERROR))
      .catch((err): typeof FETCH_ERROR => {
        console.error("Failed to fetch price:", err);
        return FETCH_ERROR;
      })
      .then((rate) => {
        setUsdRate(rate);
      });
  }, []);

  return (
    <CRORateContext.Provider value={{ usdRate }}>
      {children}
    </CRORateContext.Provider>
  );
};

export const useCRORate = () => useContext(CRORateContext).usdRate;
