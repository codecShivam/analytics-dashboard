import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import walletIcon from "../../assets/wallet.png";
import dropDownIcon from "../../assets/dropIcon.png";

const MetaMaskConnect = () => {
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const initialState = { accounts: [] };
  const [wallet, setWallet] = useState(initialState);

  useEffect(() => {
    const refreshAccounts = (accounts: any) => {
      if (accounts.length > 0) {
        updateWallet(accounts);
      } else {
        setWallet(initialState);
      }
    };

    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      setHasProvider(Boolean(provider));

      if (provider) {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        refreshAccounts(accounts);
        window.ethereum.on("accountsChanged", refreshAccounts);
      }
    };

    getProvider();
    return () => {
      window.ethereum?.removeListener("accountsChanged", refreshAccounts);
    };
  }, []);

  const updateWallet = async (accounts: any) => {
    setWallet({ accounts });
  };

  const handleConnect = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    updateWallet(accounts);
  };

  return (
    <div>
      {/* <div>Injected Provider {hasProvider ? "DOES" : "DOES NOT"} Exist</div> */}

      {window.ethereum?.isMetaMask && wallet.accounts.length < 1 && (
        <button onClick={handleConnect}>
          <div className="flex gap-2.5 justify-between items-center px-3.5 py-2.5 text-base font-semibold leading-7 text-gray-900 whitespace-nowrap bg-white rounded-lg border border-gray-200 border-solid">
            <img
              loading="lazy"
              src={walletIcon}
              alt="wallet icon"
              className="shrink-0 self-stretch my-auto aspect-square w-[22px]"
            />
            <div className="self-stretch">Connect</div>
            <img
              loading="lazy"
              src={dropDownIcon}
              alt="Copy icon"
              className="shrink-0 self-stretch my-auto aspect-[0.95] w-[19px]"
            />
          </div>
        </button>
      )}

      {wallet.accounts.length > 0 && (
        <div>Wallet Address: {wallet.accounts[0]}</div>
      )}
    </div>
  );
};

export default MetaMaskConnect;
