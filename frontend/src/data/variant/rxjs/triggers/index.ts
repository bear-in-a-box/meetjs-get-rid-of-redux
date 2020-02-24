let triggersActive: boolean = true;

export const areRxjsTriggersActive = () => triggersActive;
export const setRxjsTriggersActive = (value: boolean) => {
  triggersActive = value;
};
