// УНИВЕРСАЛЬНЫЕ ТИПЫ
export type UNIVER_OBJECT<O> = { [Key in keyof O]: O[Key] };

export type UNIVER_OBJECT_KEYS<OBJ> = keyof OBJ;


// SCALES OBJECT

export type T_SCALES_OBJ= Record<T_SCALES_NAMES, T_SCALES_VAL>

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

// Объект клиента

export interface I_Client {
    name: string,
    surname: string,
    birthDate: string,
    email: string
}
