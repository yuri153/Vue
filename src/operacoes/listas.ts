export function itensDeLista1EstaoEmLista2(lista1: unknown[], lista2: unknown[]): boolean {
  return lista1.every(item => lista2.includes(item));
}