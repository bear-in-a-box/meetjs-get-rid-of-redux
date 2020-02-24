// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from 'react';
import { Observable } from 'rxjs';
import { distinctUntilChanged, tap } from 'rxjs/operators';

export type UseObservableHook = <T>(
  observable$: Observable<T>,
  name: string
) => T | undefined;

export const useObservable: UseObservableHook = <T>(
  observable$: Observable<T>,
  name: string
) => {
  const [value, setValue] = useState<T>();

  useEffect(() => {
    const sub = observable$
      .pipe(
        tap(() => console.log('RxJS hook for', name)),
        distinctUntilChanged()
      )
      .subscribe(setValue);
    return () => {
      sub && !sub.closed && sub.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
};
