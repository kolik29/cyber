import { useCallback, useMemo, useState } from 'react';
import type { Option } from './useControllableSelect';

export function useFilter(
  options: Option[],
  filterable: boolean,
  filterFn?: (opt: Option, q: string) => boolean
) {
  const [query, setQuery] = useState('');

  const defaultFilter = useCallback((opt: Option, q: string) =>
    opt.label.toLowerCase().includes(q.trim().toLowerCase()), []);

  const filtered = useMemo(() => {
    if (!filterable || !query.trim()) return options;
    const fn = filterFn ?? defaultFilter;
    return options.filter(o => fn(o, query));
  }, [options, filterable, query, filterFn, defaultFilter]);

  const reset = useCallback(() => setQuery(''), []);
  return { query, setQuery, filtered, reset };
}
