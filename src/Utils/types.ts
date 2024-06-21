export type RegisterProps = {
  email: string;
  firstName: string;
  lastName: string;
  pseudo: string;
  city: string;
  password: string;
  confirmPassword: string;
  promoCode?: string;
  age: number;
};

export type LoginProps = {
  email: string;
  password: string;
};

export type CryptoProps = {
  id: string;
  name: string;
  quantity: number;
  value: number;
  image: string;
  updated_at: string;
};

export type OffersProps = {
  id: string;
  User: {
    pseudo: string;
  };
  amount: number;
  created_at: string;
  id_user: string;
  Crypto: CryptoProps;
};

export type UserHasCrypto = {
  Crypto: CryptoProps;
  amount: number;
  id: string;
};

export type UserProps = {
  UserHasCrypto?: UserHasCrypto;
  dollarAvailables: number;
  pseudo: string;
};

export type TradeProps = {
  Crypto: CryptoProps;
  Giver: UserProps;
  Receiver: UserProps;
  id: string;
};

export type PromoCodeProps = {
  id: string;
  name: string;
  value: number;
};
