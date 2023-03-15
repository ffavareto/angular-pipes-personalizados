const pattern = /(\d{3})(\d{3})(\d{3})(\d{2})/;

export const cpfPattern = (value: string) =>
    value.replace(/[^0-9]/g, '').replace(pattern, '$1.$2.$3-$4');
