import { useCallback, useMemo, useState } from 'react';

export type Option = { value: string; label: string };

export function useControllableSelect(
  options: Option[],
  value?: string | null,
  defaultValue: string | null = null,
  onChange?: (value: string, option: Option) => void
) {
  const isControlled = value !== undefined;
  const [inner, setInner] = useState<string | null>(defaultValue);

  // O(1) доступ к опции по value
  const map = useMemo(() => {
    const m = new Map<string, Option>();
    for (const o of options) m.set(o.value, o);
    return m;
  }, [options]);

  const currentValue = isControlled ? value! : inner;
  const currentOption = currentValue != null ? map.get(currentValue) ?? null : null;

  const pick = useCallback((opt: Option) => {
    if (!isControlled) setInner(opt.value);
    onChange?.(opt.value, opt);
  }, [isControlled, onChange]);

  return { isControlled, currentValue, currentOption, pick };
}
