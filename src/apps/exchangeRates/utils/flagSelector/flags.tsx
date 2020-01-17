import React from 'react';
import { Currencies } from '../../constans/curriencesCodes';

import { ReactComponent as AUD } from '../../assets/round-country-flags/currencies/AUD.svg';
import { ReactComponent as THB } from '../../assets/round-country-flags/currencies/THB.svg';
import { ReactComponent as USD } from '../../assets/round-country-flags/currencies/USD.svg';
import { ReactComponent as HKD } from '../../assets/round-country-flags/currencies/HKD.svg';
import { ReactComponent as CAD } from '../../assets/round-country-flags/currencies/CAD.svg';
import { ReactComponent as NZD } from '../../assets/round-country-flags/currencies/NZD.svg';
import { ReactComponent as SGD } from '../../assets/round-country-flags/currencies/SGD.svg';
import { ReactComponent as EUR } from '../../assets/round-country-flags/currencies/EUR.svg';
import { ReactComponent as HUF } from '../../assets/round-country-flags/currencies/HUF.svg';
import { ReactComponent as CHF } from '../../assets/round-country-flags/currencies/CHF.svg';
import { ReactComponent as GBP } from '../../assets/round-country-flags/currencies/GBP.svg';
import { ReactComponent as UAH } from '../../assets/round-country-flags/currencies/UAH.svg';
import { ReactComponent as JPY } from '../../assets/round-country-flags/currencies/JPY.svg';
import { ReactComponent as CZK } from '../../assets/round-country-flags/currencies/CZK.svg';
import { ReactComponent as DKK } from '../../assets/round-country-flags/currencies/DKK.svg';
import { ReactComponent as ISK } from '../../assets/round-country-flags/currencies/ISK.svg';
import { ReactComponent as NOK } from '../../assets/round-country-flags/currencies/NOK.svg';
import { ReactComponent as SEK } from '../../assets/round-country-flags/currencies/SEK.svg';
import { ReactComponent as HRK } from '../../assets/round-country-flags/currencies/HRK.svg';
import { ReactComponent as RON } from '../../assets/round-country-flags/currencies/RON.svg';
import { ReactComponent as BGN } from '../../assets/round-country-flags/currencies/BGN.svg';
import { ReactComponent as TRY } from '../../assets/round-country-flags/currencies/TRY.svg';
import { ReactComponent as ILS } from '../../assets/round-country-flags/currencies/ILS.svg';
import { ReactComponent as CLP } from '../../assets/round-country-flags/currencies/CLP.svg';
import { ReactComponent as PHP } from '../../assets/round-country-flags/currencies/PHP.svg';
import { ReactComponent as MXN } from '../../assets/round-country-flags/currencies/MXN.svg';
import { ReactComponent as ZAR } from '../../assets/round-country-flags/currencies/ZAR.svg';
import { ReactComponent as BRL } from '../../assets/round-country-flags/currencies/BRL.svg';
import { ReactComponent as MYR } from '../../assets/round-country-flags/currencies/MYR.svg';
import { ReactComponent as RUB } from '../../assets/round-country-flags/currencies/RUB.svg';
import { ReactComponent as IDR } from '../../assets/round-country-flags/currencies/IDR.svg';
import { ReactComponent as INR } from '../../assets/round-country-flags/currencies/INR.svg';
import { ReactComponent as KRW } from '../../assets/round-country-flags/currencies/KRW.svg';
import { ReactComponent as CNY } from '../../assets/round-country-flags/currencies/CNY.svg';

type Flags = { [key in Currencies]: JSX.Element };

export const flags: Flags = {
  [Currencies.THB]: <THB />,
  [Currencies.USD]: <USD />,
  [Currencies.AUD]: <AUD />,
  [Currencies.HKD]: <HKD />,
  [Currencies.CAD]: <CAD />,
  [Currencies.NZD]: <NZD />,
  [Currencies.SGD]: <SGD />,
  [Currencies.EUR]: <EUR />,
  [Currencies.HUF]: <HUF />,
  [Currencies.CHF]: <CHF />,
  [Currencies.GBP]: <GBP />,
  [Currencies.UAH]: <UAH />,
  [Currencies.JPY]: <JPY />,
  [Currencies.CZK]: <CZK />,
  [Currencies.DKK]: <DKK />,
  [Currencies.ISK]: <ISK />,
  [Currencies.NOK]: <NOK />,
  [Currencies.SEK]: <SEK />,
  [Currencies.HRK]: <HRK />,
  [Currencies.RON]: <RON />,
  [Currencies.BGN]: <BGN />,
  [Currencies.TRY]: <TRY />,
  [Currencies.ILS]: <ILS />,
  [Currencies.CLP]: <CLP />,
  [Currencies.PHP]: <PHP />,
  [Currencies.MXN]: <MXN />,
  [Currencies.ZAR]: <ZAR />,
  [Currencies.BRL]: <BRL />,
  [Currencies.MYR]: <MYR />,
  [Currencies.RUB]: <RUB />,
  [Currencies.IDR]: <IDR />,
  [Currencies.INR]: <INR />,
  [Currencies.KRW]: <KRW />,
  [Currencies.CNY]: <CNY />,
  [Currencies.XDR]: <USD />,
};
