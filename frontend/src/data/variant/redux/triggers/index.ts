let triggersActive: boolean = true;

export const areReduxTriggersActive = () => triggersActive;
export const setReduxTriggersActive = (value: boolean) => {
  triggersActive = value;
};
