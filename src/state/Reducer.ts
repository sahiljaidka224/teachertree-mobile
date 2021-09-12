import { BiometricType } from "../common/enums";

export type State = {
  biometricType: string | null;
};

type UpdateBiometricType = {
  type: string;
  payload: string;
};

export type Action = UpdateBiometricType;

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "updateBiometric":
      return {
        biometricType: action.payload,
      };
    default:
      return state;
  }
};
