import { IPermissions } from "./interfaces";
export const getUser: string = "getUser";
export const setUser: string = "setUser";
export const HeadTrainer: string = "head-trainer";
export const Trainee: string = "trainee";
export const Trainer: string = "trainer";

export const permissions: IPermissions = {
  getUser: {
    all: [HeadTrainer],
    read: [Trainee, Trainer],
    write: [Trainer],
    delete: []
  },
  setUser: {
    all: [HeadTrainer],
    read: [Trainee, Trainer],
    write: [Trainer],
    delete: []
  }
};
