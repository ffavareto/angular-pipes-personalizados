const pattern = /(\d{2})(\d{1})(\d{4})(\d)/;

export const cellPhonePattern = (value: string) =>
    value.replace(/[^0-9]/g, '').replace(pattern, '($1) $2 $3-$4');
