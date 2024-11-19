// УНИВЕРСАЛЬНЫЕ ТИПЫ
export type UNIVER_OBJECT<O> = { [Key in keyof O]: O[Key] };

export type UNIVER_OBJECT_KEYS<OBJ> = keyof OBJ;

// SCALES NAMES

export type T_SCALES_NAMES =
  | "L"
  | "F"
  | "K"
  | "S0"
  | "S1"
  | "S2"
  | "S3"
  | "S4"
  | "S5"
  | "S6"
  | "S7"
  | "S8"
  | "S9";

// SCALES VALUES

export type T_SCALES_VAL = {
  yes: number[];
  no: number[];
  X: number;
  T: number;
};

// SCALES OBJECT

export type T_SCALES_OBJ = Record<T_SCALES_NAMES, T_SCALES_VAL>;

// MMPI_INDEXES TYPES:

export type MMPI_INDEXES_VAL = {
  woman: {
    S: number;
    M: number;
  };
  man: {
    S: number;
    M: number;
  };
};

// Объект клиента ----

export interface I_CLIENT {
  name: string;
  surname: string;
  birthDate: string;
  email: string;
}

// CLIENT_FORM_ELEMS ---------

export type I_CLIENT_FORM_ITEM = {
  type: string;
  placeholder: string | null;
  label: string;
  ariaLabel: string;
  name: string;
};
