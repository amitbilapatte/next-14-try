import React from "react";
type pageProps = {
  param: {
    productId: number;
  };
};
export default function Page({ param }: pageProps) {
  return (
    <div>
      <h1> `${param.productId}`</h1>
    </div>
  );
}
