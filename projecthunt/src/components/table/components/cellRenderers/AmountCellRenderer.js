import React from "react";
import PropTypes from "prop-types";
import TextRenderer from "./TextRenderer";

import { EMPTY_OBJECT } from "../../../../constants/app.general";

const CURRENCY_SYMBOL_MAP = {
  usd: "$",
  cad: "CA$",
  gbp: "£",
  eur: "€",
  aud: "AU$",
  chf: "SFr.",
  dkk: "kr.",
};

function AmountCellRenderer(props) {
  const { value = EMPTY_OBJECT } = props;
  const { amount, currency } = value;
  const currencySymbol = CURRENCY_SYMBOL_MAP[currency] || "$";
  const valueWithCurrency = `${amount} ${currencySymbol}`;
  return <TextRenderer value={valueWithCurrency} />;
}

AmountCellRenderer.propTypes = {
  value: PropTypes.string,
};

export default AmountCellRenderer;
